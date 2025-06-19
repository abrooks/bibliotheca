(ns csv-to-yaml.core
  (:require [clojure.data.csv :as csv]
            [clojure.java.io :as io]
            [clj-yaml.core :as yaml]))

(defn csv-to-maps [file]
  (with-open [reader (io/reader file)]
    (let [rows (csv/read-csv reader)
          headers (map keyword (first rows))
          data (map #(zipmap headers %) (rest rows))]
      data)))

(defn write-yaml [data file]
  (with-open [writer (io/writer file)]
    (yaml/generate-stream data writer)))

(defn -main [& args]
  (let [csv-file (first args)
        yaml-file (second args)
        data (csv-to-maps csv-file)]
    (write-yaml data yaml-file)
    (println "YAML file written successfully.")))

;; To run the main function with command-line arguments
;; (apply -main *command-line-args*)
