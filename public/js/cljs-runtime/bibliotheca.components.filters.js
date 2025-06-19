goog.provide('bibliotheca.components.filters');
bibliotheca.components.filters.search_input = (function bibliotheca$components$filters$search_input(){
var search_term = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search-filter","search-filter",274098807)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-group","div.filter-group",719657227),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Search"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Search titles, authors, summaries...",new cljs.core.Keyword(null,"value","value",305978217),search_term,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__25502_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-search-filter","set-search-filter",1986039084),p1__25502_SHARP_.target.value], null));
})], null)], null)], null);
});
bibliotheca.components.filters.media_type_select = (function bibliotheca$components$filters$media_type_select(){
var media_type = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"media-type-filter","media-type-filter",573480373)], null)));
var available_types = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"available-media-types","available-media-types",-584680050)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-group","div.filter-group",719657227),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Media Type"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),media_type,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__25510_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-media-type-filter","set-media-type-filter",-1593021295),p1__25510_SHARP_.target.value], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),""], null),"All Types"], null),(function (){var iter__5476__auto__ = (function bibliotheca$components$filters$media_type_select_$_iter__25521(s__25522){
return (new cljs.core.LazySeq(null,(function (){
var s__25522__$1 = s__25522;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__25522__$1);
if(temp__5804__auto__){
var s__25522__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25522__$2)){
var c__5474__auto__ = cljs.core.chunk_first(s__25522__$2);
var size__5475__auto__ = cljs.core.count(c__5474__auto__);
var b__25524 = cljs.core.chunk_buffer(size__5475__auto__);
if((function (){var i__25523 = (0);
while(true){
if((i__25523 < size__5475__auto__)){
var type = cljs.core._nth(c__5474__auto__,i__25523);
cljs.core.chunk_append(b__25524,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),type], null),type], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),type], null)));

var G__25579 = (i__25523 + (1));
i__25523 = G__25579;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25524),bibliotheca$components$filters$media_type_select_$_iter__25521(cljs.core.chunk_rest(s__25522__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25524),null);
}
} else {
var type = cljs.core.first(s__25522__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),type], null),type], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),type], null)),bibliotheca$components$filters$media_type_select_$_iter__25521(cljs.core.rest(s__25522__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5476__auto__(available_types);
})()], null)], null);
});
bibliotheca.components.filters.author_input = (function bibliotheca$components$filters$author_input(){
var author = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"author-filter","author-filter",-1995678495)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-group","div.filter-group",719657227),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Author"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Filter by author...",new cljs.core.Keyword(null,"value","value",305978217),author,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__25534_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-author-filter","set-author-filter",-1551436863),p1__25534_SHARP_.target.value], null));
})], null)], null)], null);
});
bibliotheca.components.filters.tag_filters = (function bibliotheca$components$filters$tag_filters(){
var selected_tags = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tag-filters","tag-filters",-703161187)], null)));
var available_tags = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"available-tags","available-tags",-530714086)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-group","div.filter-group",719657227),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Tags"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tags","div.tags",-1073137818),(function (){var iter__5476__auto__ = (function bibliotheca$components$filters$tag_filters_$_iter__25538(s__25539){
return (new cljs.core.LazySeq(null,(function (){
var s__25539__$1 = s__25539;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__25539__$1);
if(temp__5804__auto__){
var s__25539__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25539__$2)){
var c__5474__auto__ = cljs.core.chunk_first(s__25539__$2);
var size__5475__auto__ = cljs.core.count(c__5474__auto__);
var b__25541 = cljs.core.chunk_buffer(size__5475__auto__);
if((function (){var i__25540 = (0);
while(true){
if((i__25540 < size__5475__auto__)){
var tag = cljs.core._nth(c__5474__auto__,i__25540);
cljs.core.chunk_append(b__25541,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.tag","span.tag",-825095461),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(cljs.core.some(((function (i__25540,tag,c__5474__auto__,size__5475__auto__,b__25541,s__25539__$2,temp__5804__auto__,selected_tags,available_tags){
return (function (p1__25535_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__25535_SHARP_,tag);
});})(i__25540,tag,c__5474__auto__,size__5475__auto__,b__25541,s__25539__$2,temp__5804__auto__,selected_tags,available_tags))
,selected_tags))?"selected":null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"background-color","background-color",570434026),(cljs.core.truth_(cljs.core.some(((function (i__25540,tag,c__5474__auto__,size__5475__auto__,b__25541,s__25539__$2,temp__5804__auto__,selected_tags,available_tags){
return (function (p1__25536_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__25536_SHARP_,tag);
});})(i__25540,tag,c__5474__auto__,size__5475__auto__,b__25541,s__25539__$2,temp__5804__auto__,selected_tags,available_tags))
,selected_tags))?"#3498db":"#e3f2fd"),new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(cljs.core.some(((function (i__25540,tag,c__5474__auto__,size__5475__auto__,b__25541,s__25539__$2,temp__5804__auto__,selected_tags,available_tags){
return (function (p1__25537_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__25537_SHARP_,tag);
});})(i__25540,tag,c__5474__auto__,size__5475__auto__,b__25541,s__25539__$2,temp__5804__auto__,selected_tags,available_tags))
,selected_tags))?"white":"#1976d2")], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__25540,tag,c__5474__auto__,size__5475__auto__,b__25541,s__25539__$2,temp__5804__auto__,selected_tags,available_tags){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-tag-filter","toggle-tag-filter",378901425),tag], null));
});})(i__25540,tag,c__5474__auto__,size__5475__auto__,b__25541,s__25539__$2,temp__5804__auto__,selected_tags,available_tags))
], null),tag], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),tag], null)));

var G__25602 = (i__25540 + (1));
i__25540 = G__25602;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25541),bibliotheca$components$filters$tag_filters_$_iter__25538(cljs.core.chunk_rest(s__25539__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25541),null);
}
} else {
var tag = cljs.core.first(s__25539__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.tag","span.tag",-825095461),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(cljs.core.some(((function (tag,s__25539__$2,temp__5804__auto__,selected_tags,available_tags){
return (function (p1__25535_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__25535_SHARP_,tag);
});})(tag,s__25539__$2,temp__5804__auto__,selected_tags,available_tags))
,selected_tags))?"selected":null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"background-color","background-color",570434026),(cljs.core.truth_(cljs.core.some(((function (tag,s__25539__$2,temp__5804__auto__,selected_tags,available_tags){
return (function (p1__25536_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__25536_SHARP_,tag);
});})(tag,s__25539__$2,temp__5804__auto__,selected_tags,available_tags))
,selected_tags))?"#3498db":"#e3f2fd"),new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(cljs.core.some(((function (tag,s__25539__$2,temp__5804__auto__,selected_tags,available_tags){
return (function (p1__25537_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__25537_SHARP_,tag);
});})(tag,s__25539__$2,temp__5804__auto__,selected_tags,available_tags))
,selected_tags))?"white":"#1976d2")], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (tag,s__25539__$2,temp__5804__auto__,selected_tags,available_tags){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-tag-filter","toggle-tag-filter",378901425),tag], null));
});})(tag,s__25539__$2,temp__5804__auto__,selected_tags,available_tags))
], null),tag], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),tag], null)),bibliotheca$components$filters$tag_filters_$_iter__25538(cljs.core.rest(s__25539__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5476__auto__(available_tags);
})()], null)], null);
});
bibliotheca.components.filters.clear_filters_button = (function bibliotheca$components$filters$clear_filters_button(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clear-filters","clear-filters",2087394421)], null));
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0.5rem 1rem",new cljs.core.Keyword(null,"background","background",-863952629),"#e74c3c",new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"border","border",1444987323),"none",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null)], null),"Clear All Filters"], null);
});
bibliotheca.components.filters.filter_panel = (function bibliotheca$components$filters$filter_panel(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filters","div.filters",797693886),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Filters"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-row","div.filter-row",2105862285),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bibliotheca.components.filters.search_input], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bibliotheca.components.filters.media_type_select], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bibliotheca.components.filters.author_input], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-row","div.filter-row",2105862285),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bibliotheca.components.filters.tag_filters], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-row","div.filter-row",2105862285),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bibliotheca.components.filters.clear_filters_button], null)], null)], null);
});

//# sourceMappingURL=bibliotheca.components.filters.js.map
