(ns bibliotheca.schema
  (:require [malli.core :as m]))

(def MediaItem
  "Schema for a single media item"
  [:map
   [:title :string]
   [:author :string]
   [:year :string]
   [:stars [:or :string :int]]
   [:summary :string]
   [:whyRecommended :string]
   [:recommendedToWhom :string]
   [:mediaType :string]
   [:prerequisites :string]
   [:length :string]
   [:url :string]
   [:tags [:vector :string]]])

(def MediaLibrary
  "Schema for the complete media library"
  [:vector MediaItem])

(defn validate-media-item
  "Validate a single media item against the schema"
  [item]
  (m/validate MediaItem item))

(defn validate-media-library
  "Validate the entire media library against the schema"
  [library]
  (m/validate MediaLibrary library))

(defn explain-media-item
  "Explain validation errors for a media item"
  [item]
  (m/explain MediaItem item))

(defn explain-media-library
  "Explain validation errors for the media library"
  [library]
  (m/explain MediaLibrary library))