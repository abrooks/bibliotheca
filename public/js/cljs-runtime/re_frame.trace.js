goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__23368){
var map__23369 = p__23368;
var map__23369__$1 = cljs.core.__destructure_map(map__23369);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23369__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23369__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23369__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23369__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4998__auto__ = child_of;
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__23377_23421 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__23378_23422 = null;
var count__23379_23423 = (0);
var i__23380_23424 = (0);
while(true){
if((i__23380_23424 < count__23379_23423)){
var vec__23395_23426 = chunk__23378_23422.cljs$core$IIndexed$_nth$arity$2(null,i__23380_23424);
var k_23427 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23395_23426,(0),null);
var cb_23428 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23395_23426,(1),null);
try{var G__23400_23429 = cljs.core.deref(re_frame.trace.traces);
(cb_23428.cljs$core$IFn$_invoke$arity$1 ? cb_23428.cljs$core$IFn$_invoke$arity$1(G__23400_23429) : cb_23428.call(null,G__23400_23429));
}catch (e23398){var e_23430 = e23398;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_23427,"while storing",cljs.core.deref(re_frame.trace.traces),e_23430], 0));
}

var G__23432 = seq__23377_23421;
var G__23433 = chunk__23378_23422;
var G__23434 = count__23379_23423;
var G__23435 = (i__23380_23424 + (1));
seq__23377_23421 = G__23432;
chunk__23378_23422 = G__23433;
count__23379_23423 = G__23434;
i__23380_23424 = G__23435;
continue;
} else {
var temp__5804__auto___23436 = cljs.core.seq(seq__23377_23421);
if(temp__5804__auto___23436){
var seq__23377_23437__$1 = temp__5804__auto___23436;
if(cljs.core.chunked_seq_QMARK_(seq__23377_23437__$1)){
var c__5521__auto___23438 = cljs.core.chunk_first(seq__23377_23437__$1);
var G__23439 = cljs.core.chunk_rest(seq__23377_23437__$1);
var G__23440 = c__5521__auto___23438;
var G__23441 = cljs.core.count(c__5521__auto___23438);
var G__23442 = (0);
seq__23377_23421 = G__23439;
chunk__23378_23422 = G__23440;
count__23379_23423 = G__23441;
i__23380_23424 = G__23442;
continue;
} else {
var vec__23402_23443 = cljs.core.first(seq__23377_23437__$1);
var k_23444 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23402_23443,(0),null);
var cb_23445 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23402_23443,(1),null);
try{var G__23406_23446 = cljs.core.deref(re_frame.trace.traces);
(cb_23445.cljs$core$IFn$_invoke$arity$1 ? cb_23445.cljs$core$IFn$_invoke$arity$1(G__23406_23446) : cb_23445.call(null,G__23406_23446));
}catch (e23405){var e_23447 = e23405;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_23444,"while storing",cljs.core.deref(re_frame.trace.traces),e_23447], 0));
}

var G__23448 = cljs.core.next(seq__23377_23437__$1);
var G__23449 = null;
var G__23450 = (0);
var G__23451 = (0);
seq__23377_23421 = G__23448;
chunk__23378_23422 = G__23449;
count__23379_23423 = G__23450;
i__23380_23424 = G__23451;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
