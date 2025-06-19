goog.provide('bibliotheca.events');
bibliotheca.events.default_db = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"media-data","media-data",-1917680636),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"filtered-data","filtered-data",732030032),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"loading?","loading?",1905707049),true,new cljs.core.Keyword(null,"error","error",-978969032),null,new cljs.core.Keyword(null,"filters","filters",974726919),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"search","search",1564939822),"",new cljs.core.Keyword(null,"media-type","media-type",-764436129),"",new cljs.core.Keyword(null,"author","author",2111686192),"",new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"year-min","year-min",-469679079),null,new cljs.core.Keyword(null,"year-max","year-max",359462666),null], null),new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"asc","asc",356854569)], null),new cljs.core.Keyword(null,"view-mode","view-mode",2138348427),new cljs.core.Keyword(null,"table","table",-564943036)], null);
bibliotheca.events.text_contains_QMARK_ = (function bibliotheca$events$text_contains_QMARK_(text,search){
if(cljs.core.truth_((function (){var and__4996__auto__ = text;
if(cljs.core.truth_(and__4996__auto__)){
return search;
} else {
return and__4996__auto__;
}
})())){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(text).toLowerCase().includes(search.toLowerCase());
} else {
return null;
}
});
bibliotheca.events.matches_search_QMARK_ = (function bibliotheca$events$matches_search_QMARK_(item,search_term){
if(cljs.core.empty_QMARK_(search_term)){
return null;
} else {
var or__4998__auto__ = bibliotheca.events.text_contains_QMARK_(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(item),search_term);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
var or__4998__auto____$1 = bibliotheca.events.text_contains_QMARK_(new cljs.core.Keyword(null,"author","author",2111686192).cljs$core$IFn$_invoke$arity$1(item),search_term);
if(cljs.core.truth_(or__4998__auto____$1)){
return or__4998__auto____$1;
} else {
var or__4998__auto____$2 = bibliotheca.events.text_contains_QMARK_(new cljs.core.Keyword(null,"summary","summary",380847952).cljs$core$IFn$_invoke$arity$1(item),search_term);
if(cljs.core.truth_(or__4998__auto____$2)){
return or__4998__auto____$2;
} else {
return bibliotheca.events.text_contains_QMARK_(new cljs.core.Keyword(null,"whyRecommended","whyRecommended",-1570966252).cljs$core$IFn$_invoke$arity$1(item),search_term);
}
}
}
}
});
bibliotheca.events.matches_filters_QMARK_ = (function bibliotheca$events$matches_filters_QMARK_(item,filters){
var map__39089 = filters;
var map__39089__$1 = cljs.core.__destructure_map(map__39089);
var search = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39089__$1,new cljs.core.Keyword(null,"search","search",1564939822));
var media_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39089__$1,new cljs.core.Keyword(null,"media-type","media-type",-764436129));
var author = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39089__$1,new cljs.core.Keyword(null,"author","author",2111686192));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39089__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var item_tags = (function (){var or__4998__auto__ = new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var and__4996__auto__ = (function (){var or__4998__auto__ = cljs.core.empty_QMARK_(search);
if(or__4998__auto__){
return or__4998__auto__;
} else {
return bibliotheca.events.matches_search_QMARK_(item,search);
}
})();
if(cljs.core.truth_(and__4996__auto__)){
var and__4996__auto____$1 = ((cljs.core.empty_QMARK_(media_type)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mediaType","mediaType",272273903).cljs$core$IFn$_invoke$arity$1(item),media_type)));
if(and__4996__auto____$1){
var and__4996__auto____$2 = (function (){var or__4998__auto__ = cljs.core.empty_QMARK_(author);
if(or__4998__auto__){
return or__4998__auto__;
} else {
return bibliotheca.events.text_contains_QMARK_(new cljs.core.Keyword(null,"author","author",2111686192).cljs$core$IFn$_invoke$arity$1(item),author);
}
})();
if(cljs.core.truth_(and__4996__auto____$2)){
var or__4998__auto__ = cljs.core.empty_QMARK_(tags);
if(or__4998__auto__){
return or__4998__auto__;
} else {
return cljs.core.some((function (p1__39088_SHARP_){
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([p1__39088_SHARP_]),item_tags);
}),tags);
}
} else {
return and__4996__auto____$2;
}
} else {
return and__4996__auto____$1;
}
} else {
return and__4996__auto__;
}
});
bibliotheca.events.apply_filters = (function bibliotheca$events$apply_filters(db){
var media_data = new cljs.core.Keyword(null,"media-data","media-data",-1917680636).cljs$core$IFn$_invoke$arity$1(db);
var filters = new cljs.core.Keyword(null,"filters","filters",974726919).cljs$core$IFn$_invoke$arity$1(db);
var filtered_data = ((cljs.core.every_QMARK_(cljs.core.empty_QMARK_,cljs.core.vals(filters)))?media_data:cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__39090_SHARP_){
return bibliotheca.events.matches_filters_QMARK_(p1__39090_SHARP_,filters);
}),media_data));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"filtered-data","filtered-data",732030032),filtered_data);
});
bibliotheca.events.apply_sort = (function bibliotheca$events$apply_sort(db){
var filtered_data = new cljs.core.Keyword(null,"filtered-data","filtered-data",732030032).cljs$core$IFn$_invoke$arity$1(db);
var sort_field = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.Keyword(null,"field","field",-1302436500)], null));
var sort_direction = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.Keyword(null,"direction","direction",-633359395)], null));
var sort_fn = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_direction,new cljs.core.Keyword(null,"asc","asc",356854569)))?cljs.core.identity:cljs.core.reverse);
var sorted_data = (function (){var G__39091 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(sort_field,filtered_data);
return (sort_fn.cljs$core$IFn$_invoke$arity$1 ? sort_fn.cljs$core$IFn$_invoke$arity$1(G__39091) : sort_fn.call(null,G__39091));
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"filtered-data","filtered-data",732030032),sorted_data);
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return bibliotheca.events.default_db;
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"load-media-data","load-media-data",478089540),(function (p__39092,_){
var map__39093 = p__39092;
var map__39093__$1 = cljs.core.__destructure_map(map__39093);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39093__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),"out2.yaml",new cljs.core.Keyword(null,"response-format","response-format",1664465322),(ajax.core.text_response_format.cljs$core$IFn$_invoke$arity$0 ? ajax.core.text_response_format.cljs$core$IFn$_invoke$arity$0() : ajax.core.text_response_format.call(null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-media-data-success","load-media-data-success",-1714342397)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-media-data-failure","load-media-data-failure",-757960814)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"load-media-data-success","load-media-data-success",-1714342397),(function (db,p__39094){
var vec__39095 = p__39094;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39095,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39095,(1),null);
try{if((typeof jsyaml !== 'undefined')){
var parsed_data = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(jsyaml.load(response),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
if(cljs.core.truth_(bibliotheca.schema.validate_media_library(parsed_data))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"media-data","media-data",-1917680636),parsed_data),new cljs.core.Keyword(null,"filtered-data","filtered-data",732030032),parsed_data),new cljs.core.Keyword(null,"loading?","loading?",1905707049),false),new cljs.core.Keyword(null,"error","error",-978969032));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"error","error",-978969032),"Invalid data format",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"loading?","loading?",1905707049),false], 0));
}
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"error","error",-978969032),"YAML parser not available",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"loading?","loading?",1905707049),false], 0));
}
}catch (e39098){if((e39098 instanceof Error)){
var e = e39098;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"error","error",-978969032),["Failed to parse YAML: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e.message)].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"loading?","loading?",1905707049),false], 0));
} else {
throw e39098;

}
}}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"load-media-data-failure","load-media-data-failure",-757960814),(function (db,p__39099){
var vec__39100 = p__39099;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39100,(0),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39100,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"error","error",-978969032),"Failed to load media data"),new cljs.core.Keyword(null,"loading?","loading?",1905707049),false);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-search-filter","set-search-filter",1986039084),(function (db,p__39103){
var vec__39104 = p__39103;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39104,(0),null);
var search_term = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39104,(1),null);
var new_db = cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filters","filters",974726919),new cljs.core.Keyword(null,"search","search",1564939822)], null),search_term);
return bibliotheca.events.apply_filters(new_db);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-media-type-filter","set-media-type-filter",-1593021295),(function (db,p__39107){
var vec__39108 = p__39107;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39108,(0),null);
var media_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39108,(1),null);
var new_db = cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filters","filters",974726919),new cljs.core.Keyword(null,"media-type","media-type",-764436129)], null),media_type);
return bibliotheca.events.apply_filters(new_db);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-author-filter","set-author-filter",-1551436863),(function (db,p__39111){
var vec__39112 = p__39111;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39112,(0),null);
var author = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39112,(1),null);
var new_db = cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filters","filters",974726919),new cljs.core.Keyword(null,"author","author",2111686192)], null),author);
return bibliotheca.events.apply_filters(new_db);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toggle-tag-filter","toggle-tag-filter",378901425),(function (db,p__39117){
var vec__39118 = p__39117;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39118,(0),null);
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39118,(1),null);
var current_tags = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filters","filters",974726919),new cljs.core.Keyword(null,"tags","tags",1771418977)], null));
var new_tags = (cljs.core.truth_(cljs.core.some((function (p1__39115_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__39115_SHARP_,tag);
}),current_tags))?cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__39116_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__39116_SHARP_,tag);
}),current_tags):cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_tags,tag));
var new_db = cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filters","filters",974726919),new cljs.core.Keyword(null,"tags","tags",1771418977)], null),new_tags);
return bibliotheca.events.apply_filters(new_db);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clear-filters","clear-filters",2087394421),(function (db,_){
var new_db = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"filters","filters",974726919),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"search","search",1564939822),"",new cljs.core.Keyword(null,"media-type","media-type",-764436129),"",new cljs.core.Keyword(null,"author","author",2111686192),"",new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"year-min","year-min",-469679079),null,new cljs.core.Keyword(null,"year-max","year-max",359462666),null], null));
return bibliotheca.events.apply_filters(new_db);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-sort","set-sort",423192545),(function (db,p__39121){
var vec__39122 = p__39121;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39122,(0),null);
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39122,(1),null);
var current_field = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.Keyword(null,"field","field",-1302436500)], null));
var current_direction = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.Keyword(null,"direction","direction",-633359395)], null));
var new_direction = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(field,current_field))?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_direction,new cljs.core.Keyword(null,"asc","asc",356854569)))?new cljs.core.Keyword(null,"desc","desc",2093485764):new cljs.core.Keyword(null,"asc","asc",356854569)):new cljs.core.Keyword(null,"asc","asc",356854569));
var new_db = cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.Keyword(null,"field","field",-1302436500)], null),field),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.Keyword(null,"direction","direction",-633359395)], null),new_direction);
return bibliotheca.events.apply_sort(new_db);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-view-mode","set-view-mode",979228078),(function (db,p__39125){
var vec__39126 = p__39125;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39126,(0),null);
var mode = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39126,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"view-mode","view-mode",2138348427),mode);
}));

//# sourceMappingURL=bibliotheca.events.js.map
