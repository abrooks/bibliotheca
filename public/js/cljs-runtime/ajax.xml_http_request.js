goog.provide('ajax.xml_http_request');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__24546 = e.target.readyState;
var fexpr__24544 = new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null);
return (fexpr__24544.cljs$core$IFn$_invoke$arity$1 ? fexpr__24544.cljs$core$IFn$_invoke$arity$1(G__24546) : fexpr__24544.call(null,G__24546));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = (((typeof goog !== 'undefined') && (typeof goog.global !== 'undefined') && (typeof goog.global.XMLHttpRequest !== 'undefined'))?goog.global.XMLHttpRequest:(((typeof require !== 'undefined'))?(function (){var req = require;
return (req.cljs$core$IFn$_invoke$arity$1 ? req.cljs$core$IFn$_invoke$arity$1("xmlhttprequest") : req.call(null,"xmlhttprequest")).XMLHttpRequest;
})():null));
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__24556,handler){
var map__24557 = p__24556;
var map__24557__$1 = cljs.core.__destructure_map(map__24557);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24557__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24557__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24557__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24557__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24557__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24557__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24557__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__24553_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__24553_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5804__auto___24584 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5804__auto___24584)){
var response_type_24585 = temp__5804__auto___24584;
(this$__$1.responseType = cljs.core.name(response_type_24585));
} else {
}

var seq__24558_24590 = cljs.core.seq(headers);
var chunk__24559_24591 = null;
var count__24560_24592 = (0);
var i__24561_24593 = (0);
while(true){
if((i__24561_24593 < count__24560_24592)){
var vec__24570_24595 = chunk__24559_24591.cljs$core$IIndexed$_nth$arity$2(null,i__24561_24593);
var k_24596 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24570_24595,(0),null);
var v_24597 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24570_24595,(1),null);
this$__$1.setRequestHeader(k_24596,v_24597);


var G__24598 = seq__24558_24590;
var G__24599 = chunk__24559_24591;
var G__24600 = count__24560_24592;
var G__24601 = (i__24561_24593 + (1));
seq__24558_24590 = G__24598;
chunk__24559_24591 = G__24599;
count__24560_24592 = G__24600;
i__24561_24593 = G__24601;
continue;
} else {
var temp__5804__auto___24602 = cljs.core.seq(seq__24558_24590);
if(temp__5804__auto___24602){
var seq__24558_24603__$1 = temp__5804__auto___24602;
if(cljs.core.chunked_seq_QMARK_(seq__24558_24603__$1)){
var c__5521__auto___24604 = cljs.core.chunk_first(seq__24558_24603__$1);
var G__24605 = cljs.core.chunk_rest(seq__24558_24603__$1);
var G__24606 = c__5521__auto___24604;
var G__24607 = cljs.core.count(c__5521__auto___24604);
var G__24608 = (0);
seq__24558_24590 = G__24605;
chunk__24559_24591 = G__24606;
count__24560_24592 = G__24607;
i__24561_24593 = G__24608;
continue;
} else {
var vec__24573_24609 = cljs.core.first(seq__24558_24603__$1);
var k_24610 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24573_24609,(0),null);
var v_24611 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24573_24609,(1),null);
this$__$1.setRequestHeader(k_24610,v_24611);


var G__24612 = cljs.core.next(seq__24558_24603__$1);
var G__24613 = null;
var G__24614 = (0);
var G__24615 = (0);
seq__24558_24590 = G__24612;
chunk__24559_24591 = G__24613;
count__24560_24592 = G__24614;
i__24561_24593 = G__24615;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__4998__auto__ = body;
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return "";
}
})());

return this$__$1;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
}));

//# sourceMappingURL=ajax.xml_http_request.js.map
