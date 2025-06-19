(ns bibliotheca.subs
  (:require [re-frame.core :as rf]))

(rf/reg-sub
 :media-data
 (fn [db]
   (:media-data db)))

(rf/reg-sub
 :filtered-data
 (fn [db]
   (:filtered-data db)))

(rf/reg-sub
 :loading?
 (fn [db]
   (:loading? db)))

(rf/reg-sub
 :error
 (fn [db]
   (:error db)))

(rf/reg-sub
 :filters
 (fn [db]
   (:filters db)))

(rf/reg-sub
 :search-filter
 (fn [db]
   (get-in db [:filters :search])))

(rf/reg-sub
 :media-type-filter
 (fn [db]
   (get-in db [:filters :media-type])))

(rf/reg-sub
 :author-filter
 (fn [db]
   (get-in db [:filters :author])))

(rf/reg-sub
 :tag-filters
 (fn [db]
   (get-in db [:filters :tags])))

(rf/reg-sub
 :sort
 (fn [db]
   (:sort db)))

(rf/reg-sub
 :view-mode
 (fn [db]
   (:view-mode db)))

(rf/reg-sub
 :available-media-types
 :<- [:media-data]
 (fn [media-data]
   (->> media-data
        (map :mediaType)
        (remove empty?)
        distinct
        sort)))

(rf/reg-sub
 :available-authors
 :<- [:media-data]
 (fn [media-data]
   (->> media-data
        (map :author)
        (remove empty?)
        distinct
        sort)))

(rf/reg-sub
 :available-tags
 :<- [:media-data]
 (fn [media-data]
   (->> media-data
        (mapcat :tags)
        distinct
        sort)))

(rf/reg-sub
 :results-count
 :<- [:filtered-data]
 (fn [filtered-data]
   (count filtered-data)))

(rf/reg-sub
 :total-count
 :<- [:media-data]
 (fn [media-data]
   (count media-data)))