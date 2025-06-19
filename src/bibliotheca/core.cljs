(ns bibliotheca.core
  (:require [reagent.core :as r]
            [reagent.dom.client :as rdom]
            [re-frame.core :as rf]
            [day8.re-frame.http-fx]
            [bibliotheca.events :as events]
            [bibliotheca.subs :as subs]
            [bibliotheca.views :as views]))

(defonce root (atom nil))

(defn ^:dev/after-load mount-root
  "Mount the root component"
  []
  (rf/clear-subscription-cache!)
  (let [root-el (.getElementById js/document "app")]
    (when-not @root
      (reset! root (rdom/create-root root-el)))
    (.render @root (r/as-element [views/main-panel]))))

(defn init
  "Initialize the application"
  []
  (rf/dispatch-sync [:initialize-db])
  (rf/dispatch [:load-media-data])
  (mount-root))