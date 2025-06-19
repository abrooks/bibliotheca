(ns bibliotheca.views
  (:require [re-frame.core :as rf]
            [bibliotheca.components.table :as table]
            [bibliotheca.components.filters :as filters]))

(defn loading-view []
  [:div.loading
   [:h1 "Loading Bibliotheca..."]
   [:p "Preparing your media library..."]])

(defn error-view [error]
  [:div.app-container
   [:div.header
    [:h1 "Error Loading Bibliotheca"]
    [:p (str "Sorry, we encountered an error: " error)]]])

(defn header []
  [:div.header
   [:h1 "Bibliotheca"]
   [:p "A curated collection of books, articles, videos and other media resources"]])

(defn results-info []
  (let [results-count @(rf/subscribe [:results-count])
        total-count @(rf/subscribe [:total-count])
        view-mode @(rf/subscribe [:view-mode])]
    [:div.results-info
     [:div.results-count
      (str "Showing " results-count " of " total-count " items")]
     [:div.view-controls
      [:button.view-button
       {:class (when (= view-mode :table) "active")
        :on-click #(rf/dispatch [:set-view-mode :table])}
       "Table"]
      [:button.view-button
       {:class (when (= view-mode :cards) "active")
        :on-click #(rf/dispatch [:set-view-mode :cards])}
       "Cards"]]]))

(defn content-view []
  (let [view-mode @(rf/subscribe [:view-mode])]
    [:div
     [results-info]
     (case view-mode
       :table [table/media-table]
       :cards [:div "Cards view - coming soon"]
       [table/media-table])]))

(defn main-panel []
  (let [loading? @(rf/subscribe [:loading?])
        error @(rf/subscribe [:error])]
    (cond
      loading? [loading-view]
      error [error-view error]
      :else [:div.app-container
             [header]
             [filters/filter-panel]
             [content-view]])))

;; Add js-yaml to global scope for YAML parsing
(defn ^:export init-yaml []
  (when-not (exists? js/jsyaml)
    (let [script (.createElement js/document "script")]
      (set! (.-src script) "https://cdnjs.cloudflare.com/ajax/libs/js-yaml/4.1.0/js-yaml.min.js")
      (.appendChild (.-head js/document) script))))