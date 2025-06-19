(ns bibliotheca.components.filters
  (:require [re-frame.core :as rf]))

(defn search-input []
  (let [search-term @(rf/subscribe [:search-filter])]
    [:div.filter-group
     [:label "Search"]
     [:input {:type "text"
              :placeholder "Search titles, authors, summaries..."
              :value search-term
              :on-change #(rf/dispatch [:set-search-filter (.. % -target -value)])}]]))

(defn media-type-select []
  (let [media-type @(rf/subscribe [:media-type-filter])
        available-types @(rf/subscribe [:available-media-types])]
    [:div.filter-group
     [:label "Media Type"]
     [:select {:value media-type
               :on-change #(rf/dispatch [:set-media-type-filter (.. % -target -value)])}
      [:option {:value ""} "All Types"]
      (for [type available-types]
        ^{:key type}
        [:option {:value type} type])]]))

(defn author-input []
  (let [author @(rf/subscribe [:author-filter])]
    [:div.filter-group
     [:label "Author"]
     [:input {:type "text"
              :placeholder "Filter by author..."
              :value author
              :on-change #(rf/dispatch [:set-author-filter (.. % -target -value)])}]]))

(defn tag-filters []
  (let [selected-tags @(rf/subscribe [:tag-filters])
        available-tags @(rf/subscribe [:available-tags])]
    [:div.filter-group
     [:label "Tags"]
     [:div.tags
      (for [tag available-tags]
        ^{:key tag}
        [:span.tag
         {:class (when (some #(= % tag) selected-tags) "selected")
          :style {:cursor "pointer"
                  :background-color (if (some #(= % tag) selected-tags) "#3498db" "#e3f2fd")
                  :color (if (some #(= % tag) selected-tags) "white" "#1976d2")}
          :on-click #(rf/dispatch [:toggle-tag-filter tag])}
         tag])]]))

(defn clear-filters-button []
  [:button {:on-click #(rf/dispatch [:clear-filters])
            :style {:padding "0.5rem 1rem"
                    :background "#e74c3c"
                    :color "white"
                    :border "none"
                    :border-radius "4px"
                    :cursor "pointer"}}
   "Clear All Filters"])

(defn filter-panel []
  [:div.filters
   [:h2 "Filters"]
   [:div.filter-row
    [search-input]
    [media-type-select]
    [author-input]]
   [:div.filter-row
    [tag-filters]]
   [:div.filter-row
    [clear-filters-button]]])