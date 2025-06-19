(ns bibliotheca.events
  (:require [re-frame.core :as rf]
            [ajax.core :as ajax]
            [cljs.reader :as reader]
            [bibliotheca.schema :as schema]))

;; Initial database state
(def default-db
  {:media-data []
   :filtered-data []
   :loading? true
   :error nil
   :filters {:search ""
             :media-type ""
             :author ""
             :tags []
             :year-min nil
             :year-max nil}
   :sort {:field :title
          :direction :asc}
   :view-mode :table})

;; Helper functions
(defn- text-contains? [text search]
  (when (and text search)
    (.includes (.toLowerCase (str text)) (.toLowerCase search))))

(defn- matches-search? [item search-term]
  (when-not (empty? search-term)
    (or (text-contains? (:title item) search-term)
        (text-contains? (:author item) search-term)
        (text-contains? (:summary item) search-term)
        (text-contains? (:whyRecommended item) search-term))))

(defn- matches-filters? [item filters]
  (let [{:keys [search media-type author tags]} filters
        item-tags (or (:tags item) [])]
    (and (or (empty? search) (matches-search? item search))
         (or (empty? media-type) (= (:mediaType item) media-type))
         (or (empty? author) (text-contains? (:author item) author))
         (or (empty? tags) (some #(some #{%} item-tags) tags)))))

(defn- apply-filters [db]
  (let [media-data (:media-data db)
        filters (:filters db)
        filtered-data (if (every? empty? (vals filters))
                        media-data
                        (filter #(matches-filters? % filters) media-data))]
    (assoc db :filtered-data filtered-data)))

(defn- apply-sort [db]
  (let [filtered-data (:filtered-data db)
        sort-field (get-in db [:sort :field])
        sort-direction (get-in db [:sort :direction])
        sort-fn (if (= sort-direction :asc) identity reverse)
        sorted-data (sort-fn (sort-by sort-field filtered-data))]
    (assoc db :filtered-data sorted-data)))

;; Events
(rf/reg-event-db
 :initialize-db
 (fn [_ _]
   default-db))

(rf/reg-event-fx
 :load-media-data
 (fn [{:keys [db]} _]
   {:http-xhrio {:method :get
                 :uri "out2.yaml"
                 :response-format (ajax/text-response-format)
                 :on-success [:load-media-data-success]
                 :on-failure [:load-media-data-failure]}}))

(rf/reg-event-db
 :load-media-data-success
 (fn [db [_ response]]
   (try
     (if (exists? js/jsyaml)
       (let [parsed-data (js->clj (js/jsyaml.load response) :keywordize-keys true)]
         (if (schema/validate-media-library parsed-data)
           (-> db
               (assoc :media-data parsed-data)
               (assoc :filtered-data parsed-data)
               (assoc :loading? false)
               (dissoc :error))
           (assoc db 
                  :error "Invalid data format"
                  :loading? false)))
       (assoc db 
              :error "YAML parser not available"
              :loading? false))
     (catch js/Error e
       (assoc db 
              :error (str "Failed to parse YAML: " (.-message e))
              :loading? false)))))

(rf/reg-event-db
 :load-media-data-failure
 (fn [db [_ error]]
   (-> db
       (assoc :error "Failed to load media data")
       (assoc :loading? false))))

(rf/reg-event-db
 :set-search-filter
 (fn [db [_ search-term]]
   (let [new-db (assoc-in db [:filters :search] search-term)]
     (apply-filters new-db))))

(rf/reg-event-db
 :set-media-type-filter
 (fn [db [_ media-type]]
   (let [new-db (assoc-in db [:filters :media-type] media-type)]
     (apply-filters new-db))))

(rf/reg-event-db
 :set-author-filter
 (fn [db [_ author]]
   (let [new-db (assoc-in db [:filters :author] author)]
     (apply-filters new-db))))

(rf/reg-event-db
 :toggle-tag-filter
 (fn [db [_ tag]]
   (let [current-tags (get-in db [:filters :tags])
         new-tags (if (some #(= % tag) current-tags)
                    (remove #(= % tag) current-tags)
                    (conj current-tags tag))
         new-db (assoc-in db [:filters :tags] new-tags)]
     (apply-filters new-db))))

(rf/reg-event-db
 :clear-filters
 (fn [db _]
   (let [new-db (assoc db :filters {:search ""
                                    :media-type ""
                                    :author ""
                                    :tags []
                                    :year-min nil
                                    :year-max nil})]
     (apply-filters new-db))))

(rf/reg-event-db
 :set-sort
 (fn [db [_ field]]
   (let [current-field (get-in db [:sort :field])
         current-direction (get-in db [:sort :direction])
         new-direction (if (= field current-field)
                         (if (= current-direction :asc) :desc :asc)
                         :asc)
         new-db (-> db
                    (assoc-in [:sort :field] field)
                    (assoc-in [:sort :direction] new-direction))]
     (apply-sort new-db))))

(rf/reg-event-db
 :set-view-mode
 (fn [db [_ mode]]
   (assoc db :view-mode mode)))