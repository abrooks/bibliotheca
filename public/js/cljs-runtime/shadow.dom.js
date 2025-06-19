goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_32101 = (function (this$){
var x__5346__auto__ = (((this$ == null))?null:this$);
var m__5347__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5346__auto__)]);
if((!((m__5347__auto__ == null)))){
return (m__5347__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5347__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5347__auto__.call(null,this$));
} else {
var m__5345__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5345__auto__ == null)))){
return (m__5345__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5345__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5345__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_32101(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_32104 = (function (this$){
var x__5346__auto__ = (((this$ == null))?null:this$);
var m__5347__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5346__auto__)]);
if((!((m__5347__auto__ == null)))){
return (m__5347__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5347__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5347__auto__.call(null,this$));
} else {
var m__5345__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5345__auto__ == null)))){
return (m__5345__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5345__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5345__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_32104(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__30662 = coll;
var G__30663 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__30662,G__30663) : shadow.dom.lazy_native_coll_seq.call(null,G__30662,G__30663));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4998__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__30749 = arguments.length;
switch (G__30749) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__30756 = arguments.length;
switch (G__30756) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__30774 = arguments.length;
switch (G__30774) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__30784 = arguments.length;
switch (G__30784) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__30829 = arguments.length;
switch (G__30829) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__30854 = arguments.length;
switch (G__30854) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4998__auto__ = (!((typeof document !== 'undefined')));
if(or__4998__auto__){
return or__4998__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e30866){if((e30866 instanceof Object)){
var e = e30866;
return console.log("didnt support attachEvent",el,e);
} else {
throw e30866;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4998__auto__ = (!((typeof document !== 'undefined')));
if(or__4998__auto__){
return or__4998__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__30877 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__30878 = null;
var count__30879 = (0);
var i__30880 = (0);
while(true){
if((i__30880 < count__30879)){
var el = chunk__30878.cljs$core$IIndexed$_nth$arity$2(null,i__30880);
var handler_32123__$1 = ((function (seq__30877,chunk__30878,count__30879,i__30880,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__30877,chunk__30878,count__30879,i__30880,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_32123__$1);


var G__32124 = seq__30877;
var G__32125 = chunk__30878;
var G__32126 = count__30879;
var G__32127 = (i__30880 + (1));
seq__30877 = G__32124;
chunk__30878 = G__32125;
count__30879 = G__32126;
i__30880 = G__32127;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__30877);
if(temp__5804__auto__){
var seq__30877__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30877__$1)){
var c__5521__auto__ = cljs.core.chunk_first(seq__30877__$1);
var G__32128 = cljs.core.chunk_rest(seq__30877__$1);
var G__32129 = c__5521__auto__;
var G__32130 = cljs.core.count(c__5521__auto__);
var G__32131 = (0);
seq__30877 = G__32128;
chunk__30878 = G__32129;
count__30879 = G__32130;
i__30880 = G__32131;
continue;
} else {
var el = cljs.core.first(seq__30877__$1);
var handler_32133__$1 = ((function (seq__30877,chunk__30878,count__30879,i__30880,el,seq__30877__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__30877,chunk__30878,count__30879,i__30880,el,seq__30877__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_32133__$1);


var G__32134 = cljs.core.next(seq__30877__$1);
var G__32135 = null;
var G__32136 = (0);
var G__32137 = (0);
seq__30877 = G__32134;
chunk__30878 = G__32135;
count__30879 = G__32136;
i__30880 = G__32137;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__30889 = arguments.length;
switch (G__30889) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__30897 = cljs.core.seq(events);
var chunk__30898 = null;
var count__30899 = (0);
var i__30900 = (0);
while(true){
if((i__30900 < count__30899)){
var vec__30922 = chunk__30898.cljs$core$IIndexed$_nth$arity$2(null,i__30900);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30922,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30922,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__32155 = seq__30897;
var G__32156 = chunk__30898;
var G__32157 = count__30899;
var G__32158 = (i__30900 + (1));
seq__30897 = G__32155;
chunk__30898 = G__32156;
count__30899 = G__32157;
i__30900 = G__32158;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__30897);
if(temp__5804__auto__){
var seq__30897__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30897__$1)){
var c__5521__auto__ = cljs.core.chunk_first(seq__30897__$1);
var G__32160 = cljs.core.chunk_rest(seq__30897__$1);
var G__32161 = c__5521__auto__;
var G__32162 = cljs.core.count(c__5521__auto__);
var G__32163 = (0);
seq__30897 = G__32160;
chunk__30898 = G__32161;
count__30899 = G__32162;
i__30900 = G__32163;
continue;
} else {
var vec__30926 = cljs.core.first(seq__30897__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30926,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30926,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__32169 = cljs.core.next(seq__30897__$1);
var G__32170 = null;
var G__32171 = (0);
var G__32172 = (0);
seq__30897 = G__32169;
chunk__30898 = G__32170;
count__30899 = G__32171;
i__30900 = G__32172;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__30933 = cljs.core.seq(styles);
var chunk__30934 = null;
var count__30935 = (0);
var i__30936 = (0);
while(true){
if((i__30936 < count__30935)){
var vec__30954 = chunk__30934.cljs$core$IIndexed$_nth$arity$2(null,i__30936);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30954,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30954,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__32174 = seq__30933;
var G__32175 = chunk__30934;
var G__32176 = count__30935;
var G__32177 = (i__30936 + (1));
seq__30933 = G__32174;
chunk__30934 = G__32175;
count__30935 = G__32176;
i__30936 = G__32177;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__30933);
if(temp__5804__auto__){
var seq__30933__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30933__$1)){
var c__5521__auto__ = cljs.core.chunk_first(seq__30933__$1);
var G__32178 = cljs.core.chunk_rest(seq__30933__$1);
var G__32179 = c__5521__auto__;
var G__32180 = cljs.core.count(c__5521__auto__);
var G__32181 = (0);
seq__30933 = G__32178;
chunk__30934 = G__32179;
count__30935 = G__32180;
i__30936 = G__32181;
continue;
} else {
var vec__30966 = cljs.core.first(seq__30933__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30966,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30966,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__32182 = cljs.core.next(seq__30933__$1);
var G__32183 = null;
var G__32184 = (0);
var G__32185 = (0);
seq__30933 = G__32182;
chunk__30934 = G__32183;
count__30935 = G__32184;
i__30936 = G__32185;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__30987_32187 = key;
var G__30987_32188__$1 = (((G__30987_32187 instanceof cljs.core.Keyword))?G__30987_32187.fqn:null);
switch (G__30987_32188__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_32193 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4998__auto__ = goog.string.startsWith(ks_32193,"data-");
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return goog.string.startsWith(ks_32193,"aria-");
}
})())){
el.setAttribute(ks_32193,value);
} else {
(el[ks_32193] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__31016){
var map__31017 = p__31016;
var map__31017__$1 = cljs.core.__destructure_map(map__31017);
var props = map__31017__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31017__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__31018 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31018,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31018,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31018,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__31022 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__31022,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__31022;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__31025 = arguments.length;
switch (G__31025) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__31040){
var vec__31041 = p__31040;
var seq__31042 = cljs.core.seq(vec__31041);
var first__31043 = cljs.core.first(seq__31042);
var seq__31042__$1 = cljs.core.next(seq__31042);
var nn = first__31043;
var first__31043__$1 = cljs.core.first(seq__31042__$1);
var seq__31042__$2 = cljs.core.next(seq__31042__$1);
var np = first__31043__$1;
var nc = seq__31042__$2;
var node = vec__31041;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__31044 = nn;
var G__31045 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__31044,G__31045) : create_fn.call(null,G__31044,G__31045));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__31046 = nn;
var G__31047 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__31046,G__31047) : create_fn.call(null,G__31046,G__31047));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__31049 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31049,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31049,(1),null);
var seq__31053_32236 = cljs.core.seq(node_children);
var chunk__31054_32237 = null;
var count__31055_32238 = (0);
var i__31056_32239 = (0);
while(true){
if((i__31056_32239 < count__31055_32238)){
var child_struct_32241 = chunk__31054_32237.cljs$core$IIndexed$_nth$arity$2(null,i__31056_32239);
var children_32242 = shadow.dom.dom_node(child_struct_32241);
if(cljs.core.seq_QMARK_(children_32242)){
var seq__31106_32244 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_32242));
var chunk__31108_32245 = null;
var count__31109_32246 = (0);
var i__31110_32247 = (0);
while(true){
if((i__31110_32247 < count__31109_32246)){
var child_32248 = chunk__31108_32245.cljs$core$IIndexed$_nth$arity$2(null,i__31110_32247);
if(cljs.core.truth_(child_32248)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_32248);


var G__32249 = seq__31106_32244;
var G__32250 = chunk__31108_32245;
var G__32251 = count__31109_32246;
var G__32252 = (i__31110_32247 + (1));
seq__31106_32244 = G__32249;
chunk__31108_32245 = G__32250;
count__31109_32246 = G__32251;
i__31110_32247 = G__32252;
continue;
} else {
var G__32253 = seq__31106_32244;
var G__32254 = chunk__31108_32245;
var G__32255 = count__31109_32246;
var G__32256 = (i__31110_32247 + (1));
seq__31106_32244 = G__32253;
chunk__31108_32245 = G__32254;
count__31109_32246 = G__32255;
i__31110_32247 = G__32256;
continue;
}
} else {
var temp__5804__auto___32257 = cljs.core.seq(seq__31106_32244);
if(temp__5804__auto___32257){
var seq__31106_32258__$1 = temp__5804__auto___32257;
if(cljs.core.chunked_seq_QMARK_(seq__31106_32258__$1)){
var c__5521__auto___32259 = cljs.core.chunk_first(seq__31106_32258__$1);
var G__32260 = cljs.core.chunk_rest(seq__31106_32258__$1);
var G__32261 = c__5521__auto___32259;
var G__32262 = cljs.core.count(c__5521__auto___32259);
var G__32263 = (0);
seq__31106_32244 = G__32260;
chunk__31108_32245 = G__32261;
count__31109_32246 = G__32262;
i__31110_32247 = G__32263;
continue;
} else {
var child_32264 = cljs.core.first(seq__31106_32258__$1);
if(cljs.core.truth_(child_32264)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_32264);


var G__32265 = cljs.core.next(seq__31106_32258__$1);
var G__32266 = null;
var G__32267 = (0);
var G__32268 = (0);
seq__31106_32244 = G__32265;
chunk__31108_32245 = G__32266;
count__31109_32246 = G__32267;
i__31110_32247 = G__32268;
continue;
} else {
var G__32269 = cljs.core.next(seq__31106_32258__$1);
var G__32270 = null;
var G__32271 = (0);
var G__32272 = (0);
seq__31106_32244 = G__32269;
chunk__31108_32245 = G__32270;
count__31109_32246 = G__32271;
i__31110_32247 = G__32272;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_32242);
}


var G__32274 = seq__31053_32236;
var G__32275 = chunk__31054_32237;
var G__32276 = count__31055_32238;
var G__32277 = (i__31056_32239 + (1));
seq__31053_32236 = G__32274;
chunk__31054_32237 = G__32275;
count__31055_32238 = G__32276;
i__31056_32239 = G__32277;
continue;
} else {
var temp__5804__auto___32278 = cljs.core.seq(seq__31053_32236);
if(temp__5804__auto___32278){
var seq__31053_32279__$1 = temp__5804__auto___32278;
if(cljs.core.chunked_seq_QMARK_(seq__31053_32279__$1)){
var c__5521__auto___32280 = cljs.core.chunk_first(seq__31053_32279__$1);
var G__32281 = cljs.core.chunk_rest(seq__31053_32279__$1);
var G__32282 = c__5521__auto___32280;
var G__32283 = cljs.core.count(c__5521__auto___32280);
var G__32284 = (0);
seq__31053_32236 = G__32281;
chunk__31054_32237 = G__32282;
count__31055_32238 = G__32283;
i__31056_32239 = G__32284;
continue;
} else {
var child_struct_32289 = cljs.core.first(seq__31053_32279__$1);
var children_32290 = shadow.dom.dom_node(child_struct_32289);
if(cljs.core.seq_QMARK_(children_32290)){
var seq__31126_32291 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_32290));
var chunk__31128_32292 = null;
var count__31129_32293 = (0);
var i__31130_32294 = (0);
while(true){
if((i__31130_32294 < count__31129_32293)){
var child_32295 = chunk__31128_32292.cljs$core$IIndexed$_nth$arity$2(null,i__31130_32294);
if(cljs.core.truth_(child_32295)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_32295);


var G__32297 = seq__31126_32291;
var G__32298 = chunk__31128_32292;
var G__32299 = count__31129_32293;
var G__32300 = (i__31130_32294 + (1));
seq__31126_32291 = G__32297;
chunk__31128_32292 = G__32298;
count__31129_32293 = G__32299;
i__31130_32294 = G__32300;
continue;
} else {
var G__32301 = seq__31126_32291;
var G__32302 = chunk__31128_32292;
var G__32303 = count__31129_32293;
var G__32304 = (i__31130_32294 + (1));
seq__31126_32291 = G__32301;
chunk__31128_32292 = G__32302;
count__31129_32293 = G__32303;
i__31130_32294 = G__32304;
continue;
}
} else {
var temp__5804__auto___32305__$1 = cljs.core.seq(seq__31126_32291);
if(temp__5804__auto___32305__$1){
var seq__31126_32306__$1 = temp__5804__auto___32305__$1;
if(cljs.core.chunked_seq_QMARK_(seq__31126_32306__$1)){
var c__5521__auto___32307 = cljs.core.chunk_first(seq__31126_32306__$1);
var G__32308 = cljs.core.chunk_rest(seq__31126_32306__$1);
var G__32309 = c__5521__auto___32307;
var G__32310 = cljs.core.count(c__5521__auto___32307);
var G__32311 = (0);
seq__31126_32291 = G__32308;
chunk__31128_32292 = G__32309;
count__31129_32293 = G__32310;
i__31130_32294 = G__32311;
continue;
} else {
var child_32312 = cljs.core.first(seq__31126_32306__$1);
if(cljs.core.truth_(child_32312)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_32312);


var G__32313 = cljs.core.next(seq__31126_32306__$1);
var G__32314 = null;
var G__32315 = (0);
var G__32316 = (0);
seq__31126_32291 = G__32313;
chunk__31128_32292 = G__32314;
count__31129_32293 = G__32315;
i__31130_32294 = G__32316;
continue;
} else {
var G__32317 = cljs.core.next(seq__31126_32306__$1);
var G__32318 = null;
var G__32319 = (0);
var G__32320 = (0);
seq__31126_32291 = G__32317;
chunk__31128_32292 = G__32318;
count__31129_32293 = G__32319;
i__31130_32294 = G__32320;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_32290);
}


var G__32321 = cljs.core.next(seq__31053_32279__$1);
var G__32322 = null;
var G__32323 = (0);
var G__32324 = (0);
seq__31053_32236 = G__32321;
chunk__31054_32237 = G__32322;
count__31055_32238 = G__32323;
i__31056_32239 = G__32324;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__31198 = cljs.core.seq(node);
var chunk__31199 = null;
var count__31200 = (0);
var i__31201 = (0);
while(true){
if((i__31201 < count__31200)){
var n = chunk__31199.cljs$core$IIndexed$_nth$arity$2(null,i__31201);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__32329 = seq__31198;
var G__32330 = chunk__31199;
var G__32331 = count__31200;
var G__32332 = (i__31201 + (1));
seq__31198 = G__32329;
chunk__31199 = G__32330;
count__31200 = G__32331;
i__31201 = G__32332;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__31198);
if(temp__5804__auto__){
var seq__31198__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31198__$1)){
var c__5521__auto__ = cljs.core.chunk_first(seq__31198__$1);
var G__32334 = cljs.core.chunk_rest(seq__31198__$1);
var G__32335 = c__5521__auto__;
var G__32336 = cljs.core.count(c__5521__auto__);
var G__32337 = (0);
seq__31198 = G__32334;
chunk__31199 = G__32335;
count__31200 = G__32336;
i__31201 = G__32337;
continue;
} else {
var n = cljs.core.first(seq__31198__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__32338 = cljs.core.next(seq__31198__$1);
var G__32339 = null;
var G__32340 = (0);
var G__32341 = (0);
seq__31198 = G__32338;
chunk__31199 = G__32339;
count__31200 = G__32340;
i__31201 = G__32341;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__31235 = arguments.length;
switch (G__31235) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__31241 = arguments.length;
switch (G__31241) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__31252 = arguments.length;
switch (G__31252) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4998__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5728__auto__ = [];
var len__5722__auto___32355 = arguments.length;
var i__5723__auto___32356 = (0);
while(true){
if((i__5723__auto___32356 < len__5722__auto___32355)){
args__5728__auto__.push((arguments[i__5723__auto___32356]));

var G__32357 = (i__5723__auto___32356 + (1));
i__5723__auto___32356 = G__32357;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__31261_32361 = cljs.core.seq(nodes);
var chunk__31262_32362 = null;
var count__31263_32363 = (0);
var i__31264_32364 = (0);
while(true){
if((i__31264_32364 < count__31263_32363)){
var node_32366 = chunk__31262_32362.cljs$core$IIndexed$_nth$arity$2(null,i__31264_32364);
fragment.appendChild(shadow.dom._to_dom(node_32366));


var G__32368 = seq__31261_32361;
var G__32369 = chunk__31262_32362;
var G__32370 = count__31263_32363;
var G__32371 = (i__31264_32364 + (1));
seq__31261_32361 = G__32368;
chunk__31262_32362 = G__32369;
count__31263_32363 = G__32370;
i__31264_32364 = G__32371;
continue;
} else {
var temp__5804__auto___32372 = cljs.core.seq(seq__31261_32361);
if(temp__5804__auto___32372){
var seq__31261_32373__$1 = temp__5804__auto___32372;
if(cljs.core.chunked_seq_QMARK_(seq__31261_32373__$1)){
var c__5521__auto___32374 = cljs.core.chunk_first(seq__31261_32373__$1);
var G__32375 = cljs.core.chunk_rest(seq__31261_32373__$1);
var G__32376 = c__5521__auto___32374;
var G__32377 = cljs.core.count(c__5521__auto___32374);
var G__32378 = (0);
seq__31261_32361 = G__32375;
chunk__31262_32362 = G__32376;
count__31263_32363 = G__32377;
i__31264_32364 = G__32378;
continue;
} else {
var node_32379 = cljs.core.first(seq__31261_32373__$1);
fragment.appendChild(shadow.dom._to_dom(node_32379));


var G__32382 = cljs.core.next(seq__31261_32373__$1);
var G__32383 = null;
var G__32384 = (0);
var G__32385 = (0);
seq__31261_32361 = G__32382;
chunk__31262_32362 = G__32383;
count__31263_32363 = G__32384;
i__31264_32364 = G__32385;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq31255){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31255));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__31308_32387 = cljs.core.seq(scripts);
var chunk__31309_32388 = null;
var count__31310_32389 = (0);
var i__31311_32390 = (0);
while(true){
if((i__31311_32390 < count__31310_32389)){
var vec__31323_32391 = chunk__31309_32388.cljs$core$IIndexed$_nth$arity$2(null,i__31311_32390);
var script_tag_32392 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31323_32391,(0),null);
var script_body_32393 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31323_32391,(1),null);
eval(script_body_32393);


var G__32396 = seq__31308_32387;
var G__32397 = chunk__31309_32388;
var G__32398 = count__31310_32389;
var G__32399 = (i__31311_32390 + (1));
seq__31308_32387 = G__32396;
chunk__31309_32388 = G__32397;
count__31310_32389 = G__32398;
i__31311_32390 = G__32399;
continue;
} else {
var temp__5804__auto___32400 = cljs.core.seq(seq__31308_32387);
if(temp__5804__auto___32400){
var seq__31308_32401__$1 = temp__5804__auto___32400;
if(cljs.core.chunked_seq_QMARK_(seq__31308_32401__$1)){
var c__5521__auto___32402 = cljs.core.chunk_first(seq__31308_32401__$1);
var G__32403 = cljs.core.chunk_rest(seq__31308_32401__$1);
var G__32404 = c__5521__auto___32402;
var G__32405 = cljs.core.count(c__5521__auto___32402);
var G__32406 = (0);
seq__31308_32387 = G__32403;
chunk__31309_32388 = G__32404;
count__31310_32389 = G__32405;
i__31311_32390 = G__32406;
continue;
} else {
var vec__31327_32407 = cljs.core.first(seq__31308_32401__$1);
var script_tag_32408 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31327_32407,(0),null);
var script_body_32409 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31327_32407,(1),null);
eval(script_body_32409);


var G__32412 = cljs.core.next(seq__31308_32401__$1);
var G__32413 = null;
var G__32414 = (0);
var G__32415 = (0);
seq__31308_32387 = G__32412;
chunk__31309_32388 = G__32413;
count__31310_32389 = G__32414;
i__31311_32390 = G__32415;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__31333){
var vec__31334 = p__31333;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31334,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31334,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__31369 = arguments.length;
switch (G__31369) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__31402 = cljs.core.seq(style_keys);
var chunk__31403 = null;
var count__31404 = (0);
var i__31405 = (0);
while(true){
if((i__31405 < count__31404)){
var it = chunk__31403.cljs$core$IIndexed$_nth$arity$2(null,i__31405);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__32425 = seq__31402;
var G__32426 = chunk__31403;
var G__32427 = count__31404;
var G__32428 = (i__31405 + (1));
seq__31402 = G__32425;
chunk__31403 = G__32426;
count__31404 = G__32427;
i__31405 = G__32428;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__31402);
if(temp__5804__auto__){
var seq__31402__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31402__$1)){
var c__5521__auto__ = cljs.core.chunk_first(seq__31402__$1);
var G__32429 = cljs.core.chunk_rest(seq__31402__$1);
var G__32430 = c__5521__auto__;
var G__32431 = cljs.core.count(c__5521__auto__);
var G__32432 = (0);
seq__31402 = G__32429;
chunk__31403 = G__32430;
count__31404 = G__32431;
i__31405 = G__32432;
continue;
} else {
var it = cljs.core.first(seq__31402__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__32433 = cljs.core.next(seq__31402__$1);
var G__32434 = null;
var G__32435 = (0);
var G__32436 = (0);
seq__31402 = G__32433;
chunk__31403 = G__32434;
count__31404 = G__32435;
i__31405 = G__32436;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5296__auto__,k__5297__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
return this__5296__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5297__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5298__auto__,k31420,else__5299__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
var G__31442 = k31420;
var G__31442__$1 = (((G__31442 instanceof cljs.core.Keyword))?G__31442.fqn:null);
switch (G__31442__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k31420,else__5299__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5316__auto__,f__5317__auto__,init__5318__auto__){
var self__ = this;
var this__5316__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5319__auto__,p__31456){
var vec__31457 = p__31456;
var k__5320__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31457,(0),null);
var v__5321__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31457,(1),null);
return (f__5317__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5317__auto__.cljs$core$IFn$_invoke$arity$3(ret__5319__auto__,k__5320__auto__,v__5321__auto__) : f__5317__auto__.call(null,ret__5319__auto__,k__5320__auto__,v__5321__auto__));
}),init__5318__auto__,this__5316__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5311__auto__,writer__5312__auto__,opts__5313__auto__){
var self__ = this;
var this__5311__auto____$1 = this;
var pr_pair__5314__auto__ = (function (keyval__5315__auto__){
return cljs.core.pr_sequential_writer(writer__5312__auto__,cljs.core.pr_writer,""," ","",opts__5313__auto__,keyval__5315__auto__);
});
return cljs.core.pr_sequential_writer(writer__5312__auto__,pr_pair__5314__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5313__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31419){
var self__ = this;
var G__31419__$1 = this;
return (new cljs.core.RecordIter((0),G__31419__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5294__auto__){
var self__ = this;
var this__5294__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5291__auto__){
var self__ = this;
var this__5291__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5300__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5292__auto__){
var self__ = this;
var this__5292__auto____$1 = this;
var h__5107__auto__ = self__.__hash;
if((!((h__5107__auto__ == null)))){
return h__5107__auto__;
} else {
var h__5107__auto____$1 = (function (coll__5293__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5293__auto__));
})(this__5292__auto____$1);
(self__.__hash = h__5107__auto____$1);

return h__5107__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this31421,other31422){
var self__ = this;
var this31421__$1 = this;
return (((!((other31422 == null)))) && ((((this31421__$1.constructor === other31422.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31421__$1.x,other31422.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31421__$1.y,other31422.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31421__$1.__extmap,other31422.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5306__auto__,k__5307__auto__){
var self__ = this;
var this__5306__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5307__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5306__auto____$1),self__.__meta),k__5307__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5307__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5303__auto__,k31420){
var self__ = this;
var this__5303__auto____$1 = this;
var G__31559 = k31420;
var G__31559__$1 = (((G__31559 instanceof cljs.core.Keyword))?G__31559.fqn:null);
switch (G__31559__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k31420);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5304__auto__,k__5305__auto__,G__31419){
var self__ = this;
var this__5304__auto____$1 = this;
var pred__31589 = cljs.core.keyword_identical_QMARK_;
var expr__31590 = k__5305__auto__;
if(cljs.core.truth_((pred__31589.cljs$core$IFn$_invoke$arity$2 ? pred__31589.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__31590) : pred__31589.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__31590)))){
return (new shadow.dom.Coordinate(G__31419,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__31589.cljs$core$IFn$_invoke$arity$2 ? pred__31589.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__31590) : pred__31589.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__31590)))){
return (new shadow.dom.Coordinate(self__.x,G__31419,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5305__auto__,G__31419),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5309__auto__){
var self__ = this;
var this__5309__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5295__auto__,G__31419){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__31419,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5301__auto__,entry__5302__auto__){
var self__ = this;
var this__5301__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5302__auto__)){
return this__5301__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5302__auto__,(0)),cljs.core._nth(entry__5302__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5301__auto____$1,entry__5302__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5342__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5342__auto__,writer__5343__auto__){
return cljs.core._write(writer__5343__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__31427){
var extmap__5338__auto__ = (function (){var G__31597 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__31427,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__31427)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__31597);
} else {
return G__31597;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__31427),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__31427),null,cljs.core.not_empty(extmap__5338__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5296__auto__,k__5297__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
return this__5296__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5297__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5298__auto__,k31658,else__5299__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
var G__31672 = k31658;
var G__31672__$1 = (((G__31672 instanceof cljs.core.Keyword))?G__31672.fqn:null);
switch (G__31672__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k31658,else__5299__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5316__auto__,f__5317__auto__,init__5318__auto__){
var self__ = this;
var this__5316__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5319__auto__,p__31674){
var vec__31675 = p__31674;
var k__5320__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31675,(0),null);
var v__5321__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31675,(1),null);
return (f__5317__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5317__auto__.cljs$core$IFn$_invoke$arity$3(ret__5319__auto__,k__5320__auto__,v__5321__auto__) : f__5317__auto__.call(null,ret__5319__auto__,k__5320__auto__,v__5321__auto__));
}),init__5318__auto__,this__5316__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5311__auto__,writer__5312__auto__,opts__5313__auto__){
var self__ = this;
var this__5311__auto____$1 = this;
var pr_pair__5314__auto__ = (function (keyval__5315__auto__){
return cljs.core.pr_sequential_writer(writer__5312__auto__,cljs.core.pr_writer,""," ","",opts__5313__auto__,keyval__5315__auto__);
});
return cljs.core.pr_sequential_writer(writer__5312__auto__,pr_pair__5314__auto__,"#shadow.dom.Size{",", ","}",opts__5313__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31657){
var self__ = this;
var G__31657__$1 = this;
return (new cljs.core.RecordIter((0),G__31657__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5294__auto__){
var self__ = this;
var this__5294__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5291__auto__){
var self__ = this;
var this__5291__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5300__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5292__auto__){
var self__ = this;
var this__5292__auto____$1 = this;
var h__5107__auto__ = self__.__hash;
if((!((h__5107__auto__ == null)))){
return h__5107__auto__;
} else {
var h__5107__auto____$1 = (function (coll__5293__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5293__auto__));
})(this__5292__auto____$1);
(self__.__hash = h__5107__auto____$1);

return h__5107__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this31659,other31660){
var self__ = this;
var this31659__$1 = this;
return (((!((other31660 == null)))) && ((((this31659__$1.constructor === other31660.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31659__$1.w,other31660.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31659__$1.h,other31660.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31659__$1.__extmap,other31660.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5306__auto__,k__5307__auto__){
var self__ = this;
var this__5306__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5307__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5306__auto____$1),self__.__meta),k__5307__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5307__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5303__auto__,k31658){
var self__ = this;
var this__5303__auto____$1 = this;
var G__31722 = k31658;
var G__31722__$1 = (((G__31722 instanceof cljs.core.Keyword))?G__31722.fqn:null);
switch (G__31722__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k31658);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5304__auto__,k__5305__auto__,G__31657){
var self__ = this;
var this__5304__auto____$1 = this;
var pred__31725 = cljs.core.keyword_identical_QMARK_;
var expr__31726 = k__5305__auto__;
if(cljs.core.truth_((pred__31725.cljs$core$IFn$_invoke$arity$2 ? pred__31725.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__31726) : pred__31725.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__31726)))){
return (new shadow.dom.Size(G__31657,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__31725.cljs$core$IFn$_invoke$arity$2 ? pred__31725.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__31726) : pred__31725.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__31726)))){
return (new shadow.dom.Size(self__.w,G__31657,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5305__auto__,G__31657),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5309__auto__){
var self__ = this;
var this__5309__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5295__auto__,G__31657){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__31657,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5301__auto__,entry__5302__auto__){
var self__ = this;
var this__5301__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5302__auto__)){
return this__5301__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5302__auto__,(0)),cljs.core._nth(entry__5302__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5301__auto____$1,entry__5302__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5342__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5342__auto__,writer__5343__auto__){
return cljs.core._write(writer__5343__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__31668){
var extmap__5338__auto__ = (function (){var G__31758 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__31668,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__31668)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__31758);
} else {
return G__31758;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__31668),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__31668),null,cljs.core.not_empty(extmap__5338__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5586__auto__ = opts;
var l__5587__auto__ = a__5586__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5587__auto__)){
var G__32537 = (i + (1));
var G__32538 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__32537;
ret = G__32538;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__31776){
var vec__31778 = p__31776;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31778,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31778,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__31784 = arguments.length;
switch (G__31784) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__32541 = ps;
var G__32542 = (i + (1));
el__$1 = G__32541;
i = G__32542;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__31803 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31803,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31803,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31803,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__31809_32556 = cljs.core.seq(props);
var chunk__31810_32557 = null;
var count__31811_32558 = (0);
var i__31812_32559 = (0);
while(true){
if((i__31812_32559 < count__31811_32558)){
var vec__31832_32560 = chunk__31810_32557.cljs$core$IIndexed$_nth$arity$2(null,i__31812_32559);
var k_32561 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31832_32560,(0),null);
var v_32562 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31832_32560,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_32561);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_32561),v_32562);


var G__32563 = seq__31809_32556;
var G__32564 = chunk__31810_32557;
var G__32565 = count__31811_32558;
var G__32566 = (i__31812_32559 + (1));
seq__31809_32556 = G__32563;
chunk__31810_32557 = G__32564;
count__31811_32558 = G__32565;
i__31812_32559 = G__32566;
continue;
} else {
var temp__5804__auto___32567 = cljs.core.seq(seq__31809_32556);
if(temp__5804__auto___32567){
var seq__31809_32568__$1 = temp__5804__auto___32567;
if(cljs.core.chunked_seq_QMARK_(seq__31809_32568__$1)){
var c__5521__auto___32570 = cljs.core.chunk_first(seq__31809_32568__$1);
var G__32571 = cljs.core.chunk_rest(seq__31809_32568__$1);
var G__32572 = c__5521__auto___32570;
var G__32573 = cljs.core.count(c__5521__auto___32570);
var G__32574 = (0);
seq__31809_32556 = G__32571;
chunk__31810_32557 = G__32572;
count__31811_32558 = G__32573;
i__31812_32559 = G__32574;
continue;
} else {
var vec__31840_32575 = cljs.core.first(seq__31809_32568__$1);
var k_32576 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31840_32575,(0),null);
var v_32577 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31840_32575,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_32576);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_32576),v_32577);


var G__32578 = cljs.core.next(seq__31809_32568__$1);
var G__32579 = null;
var G__32580 = (0);
var G__32581 = (0);
seq__31809_32556 = G__32578;
chunk__31810_32557 = G__32579;
count__31811_32558 = G__32580;
i__31812_32559 = G__32581;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__31863 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31863,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31863,(1),null);
var seq__31869_32583 = cljs.core.seq(node_children);
var chunk__31871_32584 = null;
var count__31872_32585 = (0);
var i__31873_32586 = (0);
while(true){
if((i__31873_32586 < count__31872_32585)){
var child_struct_32587 = chunk__31871_32584.cljs$core$IIndexed$_nth$arity$2(null,i__31873_32586);
if((!((child_struct_32587 == null)))){
if(typeof child_struct_32587 === 'string'){
var text_32588 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_32588),child_struct_32587].join(''));
} else {
var children_32589 = shadow.dom.svg_node(child_struct_32587);
if(cljs.core.seq_QMARK_(children_32589)){
var seq__31907_32590 = cljs.core.seq(children_32589);
var chunk__31909_32591 = null;
var count__31910_32592 = (0);
var i__31911_32593 = (0);
while(true){
if((i__31911_32593 < count__31910_32592)){
var child_32595 = chunk__31909_32591.cljs$core$IIndexed$_nth$arity$2(null,i__31911_32593);
if(cljs.core.truth_(child_32595)){
node.appendChild(child_32595);


var G__32596 = seq__31907_32590;
var G__32597 = chunk__31909_32591;
var G__32598 = count__31910_32592;
var G__32599 = (i__31911_32593 + (1));
seq__31907_32590 = G__32596;
chunk__31909_32591 = G__32597;
count__31910_32592 = G__32598;
i__31911_32593 = G__32599;
continue;
} else {
var G__32601 = seq__31907_32590;
var G__32602 = chunk__31909_32591;
var G__32603 = count__31910_32592;
var G__32604 = (i__31911_32593 + (1));
seq__31907_32590 = G__32601;
chunk__31909_32591 = G__32602;
count__31910_32592 = G__32603;
i__31911_32593 = G__32604;
continue;
}
} else {
var temp__5804__auto___32605 = cljs.core.seq(seq__31907_32590);
if(temp__5804__auto___32605){
var seq__31907_32606__$1 = temp__5804__auto___32605;
if(cljs.core.chunked_seq_QMARK_(seq__31907_32606__$1)){
var c__5521__auto___32607 = cljs.core.chunk_first(seq__31907_32606__$1);
var G__32608 = cljs.core.chunk_rest(seq__31907_32606__$1);
var G__32609 = c__5521__auto___32607;
var G__32610 = cljs.core.count(c__5521__auto___32607);
var G__32611 = (0);
seq__31907_32590 = G__32608;
chunk__31909_32591 = G__32609;
count__31910_32592 = G__32610;
i__31911_32593 = G__32611;
continue;
} else {
var child_32612 = cljs.core.first(seq__31907_32606__$1);
if(cljs.core.truth_(child_32612)){
node.appendChild(child_32612);


var G__32613 = cljs.core.next(seq__31907_32606__$1);
var G__32614 = null;
var G__32615 = (0);
var G__32616 = (0);
seq__31907_32590 = G__32613;
chunk__31909_32591 = G__32614;
count__31910_32592 = G__32615;
i__31911_32593 = G__32616;
continue;
} else {
var G__32617 = cljs.core.next(seq__31907_32606__$1);
var G__32618 = null;
var G__32619 = (0);
var G__32620 = (0);
seq__31907_32590 = G__32617;
chunk__31909_32591 = G__32618;
count__31910_32592 = G__32619;
i__31911_32593 = G__32620;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_32589);
}
}


var G__32621 = seq__31869_32583;
var G__32622 = chunk__31871_32584;
var G__32623 = count__31872_32585;
var G__32624 = (i__31873_32586 + (1));
seq__31869_32583 = G__32621;
chunk__31871_32584 = G__32622;
count__31872_32585 = G__32623;
i__31873_32586 = G__32624;
continue;
} else {
var G__32625 = seq__31869_32583;
var G__32626 = chunk__31871_32584;
var G__32627 = count__31872_32585;
var G__32628 = (i__31873_32586 + (1));
seq__31869_32583 = G__32625;
chunk__31871_32584 = G__32626;
count__31872_32585 = G__32627;
i__31873_32586 = G__32628;
continue;
}
} else {
var temp__5804__auto___32629 = cljs.core.seq(seq__31869_32583);
if(temp__5804__auto___32629){
var seq__31869_32630__$1 = temp__5804__auto___32629;
if(cljs.core.chunked_seq_QMARK_(seq__31869_32630__$1)){
var c__5521__auto___32631 = cljs.core.chunk_first(seq__31869_32630__$1);
var G__32632 = cljs.core.chunk_rest(seq__31869_32630__$1);
var G__32633 = c__5521__auto___32631;
var G__32634 = cljs.core.count(c__5521__auto___32631);
var G__32635 = (0);
seq__31869_32583 = G__32632;
chunk__31871_32584 = G__32633;
count__31872_32585 = G__32634;
i__31873_32586 = G__32635;
continue;
} else {
var child_struct_32636 = cljs.core.first(seq__31869_32630__$1);
if((!((child_struct_32636 == null)))){
if(typeof child_struct_32636 === 'string'){
var text_32637 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_32637),child_struct_32636].join(''));
} else {
var children_32638 = shadow.dom.svg_node(child_struct_32636);
if(cljs.core.seq_QMARK_(children_32638)){
var seq__31936_32640 = cljs.core.seq(children_32638);
var chunk__31938_32641 = null;
var count__31939_32642 = (0);
var i__31940_32643 = (0);
while(true){
if((i__31940_32643 < count__31939_32642)){
var child_32645 = chunk__31938_32641.cljs$core$IIndexed$_nth$arity$2(null,i__31940_32643);
if(cljs.core.truth_(child_32645)){
node.appendChild(child_32645);


var G__32647 = seq__31936_32640;
var G__32648 = chunk__31938_32641;
var G__32649 = count__31939_32642;
var G__32650 = (i__31940_32643 + (1));
seq__31936_32640 = G__32647;
chunk__31938_32641 = G__32648;
count__31939_32642 = G__32649;
i__31940_32643 = G__32650;
continue;
} else {
var G__32651 = seq__31936_32640;
var G__32652 = chunk__31938_32641;
var G__32653 = count__31939_32642;
var G__32654 = (i__31940_32643 + (1));
seq__31936_32640 = G__32651;
chunk__31938_32641 = G__32652;
count__31939_32642 = G__32653;
i__31940_32643 = G__32654;
continue;
}
} else {
var temp__5804__auto___32655__$1 = cljs.core.seq(seq__31936_32640);
if(temp__5804__auto___32655__$1){
var seq__31936_32656__$1 = temp__5804__auto___32655__$1;
if(cljs.core.chunked_seq_QMARK_(seq__31936_32656__$1)){
var c__5521__auto___32657 = cljs.core.chunk_first(seq__31936_32656__$1);
var G__32658 = cljs.core.chunk_rest(seq__31936_32656__$1);
var G__32659 = c__5521__auto___32657;
var G__32660 = cljs.core.count(c__5521__auto___32657);
var G__32661 = (0);
seq__31936_32640 = G__32658;
chunk__31938_32641 = G__32659;
count__31939_32642 = G__32660;
i__31940_32643 = G__32661;
continue;
} else {
var child_32662 = cljs.core.first(seq__31936_32656__$1);
if(cljs.core.truth_(child_32662)){
node.appendChild(child_32662);


var G__32663 = cljs.core.next(seq__31936_32656__$1);
var G__32664 = null;
var G__32665 = (0);
var G__32666 = (0);
seq__31936_32640 = G__32663;
chunk__31938_32641 = G__32664;
count__31939_32642 = G__32665;
i__31940_32643 = G__32666;
continue;
} else {
var G__32667 = cljs.core.next(seq__31936_32656__$1);
var G__32668 = null;
var G__32669 = (0);
var G__32670 = (0);
seq__31936_32640 = G__32667;
chunk__31938_32641 = G__32668;
count__31939_32642 = G__32669;
i__31940_32643 = G__32670;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_32638);
}
}


var G__32671 = cljs.core.next(seq__31869_32630__$1);
var G__32672 = null;
var G__32673 = (0);
var G__32674 = (0);
seq__31869_32583 = G__32671;
chunk__31871_32584 = G__32672;
count__31872_32585 = G__32673;
i__31873_32586 = G__32674;
continue;
} else {
var G__32675 = cljs.core.next(seq__31869_32630__$1);
var G__32676 = null;
var G__32677 = (0);
var G__32678 = (0);
seq__31869_32583 = G__32675;
chunk__31871_32584 = G__32676;
count__31872_32585 = G__32677;
i__31873_32586 = G__32678;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5728__auto__ = [];
var len__5722__auto___32679 = arguments.length;
var i__5723__auto___32680 = (0);
while(true){
if((i__5723__auto___32680 < len__5722__auto___32679)){
args__5728__auto__.push((arguments[i__5723__auto___32680]));

var G__32681 = (i__5723__auto___32680 + (1));
i__5723__auto___32680 = G__32681;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((1) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5729__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq31985){
var G__31986 = cljs.core.first(seq31985);
var seq31985__$1 = cljs.core.next(seq31985);
var self__5707__auto__ = this;
return self__5707__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31986,seq31985__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__32010 = arguments.length;
switch (G__32010) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4996__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4996__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4996__auto__;
}
})())){
var c__27961__auto___32714 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27962__auto__ = (function (){var switch__27550__auto__ = (function (state_32032){
var state_val_32033 = (state_32032[(1)]);
if((state_val_32033 === (1))){
var state_32032__$1 = state_32032;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32032__$1,(2),once_or_cleanup);
} else {
if((state_val_32033 === (2))){
var inst_32029 = (state_32032[(2)]);
var inst_32030 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_32032__$1 = (function (){var statearr_32040 = state_32032;
(statearr_32040[(7)] = inst_32029);

return statearr_32040;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32032__$1,inst_32030);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__27551__auto__ = null;
var shadow$dom$state_machine__27551__auto____0 = (function (){
var statearr_32042 = [null,null,null,null,null,null,null,null];
(statearr_32042[(0)] = shadow$dom$state_machine__27551__auto__);

(statearr_32042[(1)] = (1));

return statearr_32042;
});
var shadow$dom$state_machine__27551__auto____1 = (function (state_32032){
while(true){
var ret_value__27552__auto__ = (function (){try{while(true){
var result__27553__auto__ = switch__27550__auto__(state_32032);
if(cljs.core.keyword_identical_QMARK_(result__27553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27553__auto__;
}
break;
}
}catch (e32047){var ex__27554__auto__ = e32047;
var statearr_32048_32721 = state_32032;
(statearr_32048_32721[(2)] = ex__27554__auto__);


if(cljs.core.seq((state_32032[(4)]))){
var statearr_32050_32724 = state_32032;
(statearr_32050_32724[(1)] = cljs.core.first((state_32032[(4)])));

} else {
throw ex__27554__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32725 = state_32032;
state_32032 = G__32725;
continue;
} else {
return ret_value__27552__auto__;
}
break;
}
});
shadow$dom$state_machine__27551__auto__ = function(state_32032){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__27551__auto____0.call(this);
case 1:
return shadow$dom$state_machine__27551__auto____1.call(this,state_32032);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__27551__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__27551__auto____0;
shadow$dom$state_machine__27551__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__27551__auto____1;
return shadow$dom$state_machine__27551__auto__;
})()
})();
var state__27963__auto__ = (function (){var statearr_32051 = f__27962__auto__();
(statearr_32051[(6)] = c__27961__auto___32714);

return statearr_32051;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27963__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
