(ns bibliotheca.components.table
  (:require [re-frame.core :as rf]))

(defn sortable-header [field label]
  (let [sort @(rf/subscribe [:sort])
        current-field (:field sort)
        current-direction (:direction sort)
        is-current? (= field current-field)
        class (cond
                (and is-current? (= current-direction :asc)) "sortable sorted-asc"
                (and is-current? (= current-direction :desc)) "sortable sorted-desc"
                :else "sortable")]
    [:th {:class class
          :on-click #(rf/dispatch [:set-sort field])}
     label]))

(defn tags-cell [tags]
  [:div.tags
   (for [tag tags]
     ^{:key tag}
     [:span.tag tag])])

(defn title-cell [item]
  (let [title (:title item)
        url (:url item)]
    (if (and url (not (empty? url)))
      [:a.title-link {:href url :target "_blank" :rel "noopener noreferrer"} title]
      [:span title])))

(defn truncate-text [text max-length]
  (if (and text (> (count text) max-length))
    (str (subs text 0 max-length) "...")
    text))

(defn media-table []
  (let [filtered-data @(rf/subscribe [:filtered-data])]
    [:div.media-table
     [:table
      [:thead
       [:tr
        [sortable-header :title "Title"]
        [sortable-header :author "Author"]
        [sortable-header :year "Year"]
        [sortable-header :mediaType "Type"]
        [:th "Summary"]
        [:th "Why Recommended"]
        [:th "Tags"]
        [sortable-header :stars "Stars"]]]
      [:tbody
       (for [item filtered-data]
         ^{:key (str (:title item) (:author item))}
         [:tr
          [:td [title-cell item]]
          [:td (:author item)]
          [:td (:year item)]
          [:td (:mediaType item)]
          [:td.summary-cell (truncate-text (:summary item) 150)]
          [:td.why-recommended-cell (truncate-text (:whyRecommended item) 150)]
          [:td [tags-cell (:tags item)]]
          [:td (:stars item)]])]]]))