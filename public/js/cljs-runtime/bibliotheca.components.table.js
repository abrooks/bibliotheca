goog.provide('bibliotheca.components.table');
bibliotheca.components.table.sortable_header = (function bibliotheca$components$table$sortable_header(field,label){
var sort = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sort","sort",953465918)], null)));
var current_field = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(sort);
var current_direction = new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(sort);
var is_current_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(field,current_field);
var class$ = ((((is_current_QMARK_) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_direction,new cljs.core.Keyword(null,"asc","asc",356854569)))))?"sortable sorted-asc":((((is_current_QMARK_) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_direction,new cljs.core.Keyword(null,"desc","desc",2093485764)))))?"sortable sorted-desc":"sortable"
));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-sort","set-sort",423192545),field], null));
})], null),label], null);
});
bibliotheca.components.table.tags_cell = (function bibliotheca$components$table$tags_cell(tags){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tags","div.tags",-1073137818),(function (){var iter__5476__auto__ = (function bibliotheca$components$table$tags_cell_$_iter__25477(s__25478){
return (new cljs.core.LazySeq(null,(function (){
var s__25478__$1 = s__25478;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__25478__$1);
if(temp__5804__auto__){
var s__25478__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25478__$2)){
var c__5474__auto__ = cljs.core.chunk_first(s__25478__$2);
var size__5475__auto__ = cljs.core.count(c__5474__auto__);
var b__25480 = cljs.core.chunk_buffer(size__5475__auto__);
if((function (){var i__25479 = (0);
while(true){
if((i__25479 < size__5475__auto__)){
var tag = cljs.core._nth(c__5474__auto__,i__25479);
cljs.core.chunk_append(b__25480,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.tag","span.tag",-825095461),tag], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),tag], null)));

var G__25542 = (i__25479 + (1));
i__25479 = G__25542;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25480),bibliotheca$components$table$tags_cell_$_iter__25477(cljs.core.chunk_rest(s__25478__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25480),null);
}
} else {
var tag = cljs.core.first(s__25478__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.tag","span.tag",-825095461),tag], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),tag], null)),bibliotheca$components$table$tags_cell_$_iter__25477(cljs.core.rest(s__25478__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5476__auto__(tags);
})()], null);
});
bibliotheca.components.table.title_cell = (function bibliotheca$components$table$title_cell(item){
var title = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(item);
var url = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_((function (){var and__4996__auto__ = url;
if(cljs.core.truth_(and__4996__auto__)){
return (!(cljs.core.empty_QMARK_(url)));
} else {
return and__4996__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.title-link","a.title-link",-937509195),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),url,new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"rel","rel",1378823488),"noopener noreferrer"], null),title], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),title], null);
}
});
bibliotheca.components.table.truncate_text = (function bibliotheca$components$table$truncate_text(text,max_length){
if(cljs.core.truth_((function (){var and__4996__auto__ = text;
if(cljs.core.truth_(and__4996__auto__)){
return (cljs.core.count(text) > max_length);
} else {
return and__4996__auto__;
}
})())){
return [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(text,(0),max_length),"..."].join('');
} else {
return text;
}
});
bibliotheca.components.table.media_table = (function bibliotheca$components$table$media_table(){
var filtered_data = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filtered-data","filtered-data",732030032)], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.media-table","div.media-table",-1348817831),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bibliotheca.components.table.sortable_header,new cljs.core.Keyword(null,"title","title",636505583),"Title"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bibliotheca.components.table.sortable_header,new cljs.core.Keyword(null,"author","author",2111686192),"Author"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bibliotheca.components.table.sortable_header,new cljs.core.Keyword(null,"year","year",335913393),"Year"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bibliotheca.components.table.sortable_header,new cljs.core.Keyword(null,"mediaType","mediaType",272273903),"Type"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Summary"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Why Recommended"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Tags"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bibliotheca.components.table.sortable_header,new cljs.core.Keyword(null,"stars","stars",-556837771),"Stars"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__5476__auto__ = (function bibliotheca$components$table$media_table_$_iter__25506(s__25507){
return (new cljs.core.LazySeq(null,(function (){
var s__25507__$1 = s__25507;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__25507__$1);
if(temp__5804__auto__){
var s__25507__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25507__$2)){
var c__5474__auto__ = cljs.core.chunk_first(s__25507__$2);
var size__5475__auto__ = cljs.core.count(c__5474__auto__);
var b__25509 = cljs.core.chunk_buffer(size__5475__auto__);
if((function (){var i__25508 = (0);
while(true){
if((i__25508 < size__5475__auto__)){
var item = cljs.core._nth(c__5474__auto__,i__25508);
cljs.core.chunk_append(b__25509,cljs.core.with_meta(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bibliotheca.components.table.title_cell,item], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"author","author",2111686192).cljs$core$IFn$_invoke$arity$1(item)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(item)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"mediaType","mediaType",272273903).cljs$core$IFn$_invoke$arity$1(item)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.summary-cell","td.summary-cell",80300140),bibliotheca.components.table.truncate_text(new cljs.core.Keyword(null,"summary","summary",380847952).cljs$core$IFn$_invoke$arity$1(item),(150))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.why-recommended-cell","td.why-recommended-cell",581281262),bibliotheca.components.table.truncate_text(new cljs.core.Keyword(null,"whyRecommended","whyRecommended",-1570966252).cljs$core$IFn$_invoke$arity$1(item),(150))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bibliotheca.components.table.tags_cell,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(item)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"stars","stars",-556837771).cljs$core$IFn$_invoke$arity$1(item)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(item)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"author","author",2111686192).cljs$core$IFn$_invoke$arity$1(item))].join('')], null)));

var G__25548 = (i__25508 + (1));
i__25508 = G__25548;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25509),bibliotheca$components$table$media_table_$_iter__25506(cljs.core.chunk_rest(s__25507__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25509),null);
}
} else {
var item = cljs.core.first(s__25507__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bibliotheca.components.table.title_cell,item], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"author","author",2111686192).cljs$core$IFn$_invoke$arity$1(item)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(item)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"mediaType","mediaType",272273903).cljs$core$IFn$_invoke$arity$1(item)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.summary-cell","td.summary-cell",80300140),bibliotheca.components.table.truncate_text(new cljs.core.Keyword(null,"summary","summary",380847952).cljs$core$IFn$_invoke$arity$1(item),(150))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.why-recommended-cell","td.why-recommended-cell",581281262),bibliotheca.components.table.truncate_text(new cljs.core.Keyword(null,"whyRecommended","whyRecommended",-1570966252).cljs$core$IFn$_invoke$arity$1(item),(150))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bibliotheca.components.table.tags_cell,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(item)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"stars","stars",-556837771).cljs$core$IFn$_invoke$arity$1(item)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(item)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"author","author",2111686192).cljs$core$IFn$_invoke$arity$1(item))].join('')], null)),bibliotheca$components$table$media_table_$_iter__25506(cljs.core.rest(s__25507__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5476__auto__(filtered_data);
})()], null)], null)], null);
});

//# sourceMappingURL=bibliotheca.components.table.js.map
