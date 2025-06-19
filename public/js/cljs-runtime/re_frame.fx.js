goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__23767 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__23768 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__23768);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___23930 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___23930)){
var new_db_23932 = temp__5804__auto___23930;
var fexpr__23770_23933 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__23770_23933.cljs$core$IFn$_invoke$arity$1 ? fexpr__23770_23933.cljs$core$IFn$_invoke$arity$1(new_db_23932) : fexpr__23770_23933.call(null,new_db_23932));
} else {
}

var seq__23794 = cljs.core.seq(effects_without_db);
var chunk__23795 = null;
var count__23796 = (0);
var i__23797 = (0);
while(true){
if((i__23797 < count__23796)){
var vec__23808 = chunk__23795.cljs$core$IIndexed$_nth$arity$2(null,i__23797);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23808,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23808,(1),null);
var temp__5802__auto___23936 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___23936)){
var effect_fn_23937 = temp__5802__auto___23936;
(effect_fn_23937.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23937.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23937.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23939 = seq__23794;
var G__23940 = chunk__23795;
var G__23941 = count__23796;
var G__23942 = (i__23797 + (1));
seq__23794 = G__23939;
chunk__23795 = G__23940;
count__23796 = G__23941;
i__23797 = G__23942;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23794);
if(temp__5804__auto__){
var seq__23794__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23794__$1)){
var c__5521__auto__ = cljs.core.chunk_first(seq__23794__$1);
var G__23943 = cljs.core.chunk_rest(seq__23794__$1);
var G__23944 = c__5521__auto__;
var G__23945 = cljs.core.count(c__5521__auto__);
var G__23946 = (0);
seq__23794 = G__23943;
chunk__23795 = G__23944;
count__23796 = G__23945;
i__23797 = G__23946;
continue;
} else {
var vec__23811 = cljs.core.first(seq__23794__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23811,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23811,(1),null);
var temp__5802__auto___23949 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___23949)){
var effect_fn_23951 = temp__5802__auto___23949;
(effect_fn_23951.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23951.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23951.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23957 = cljs.core.next(seq__23794__$1);
var G__23958 = null;
var G__23959 = (0);
var G__23960 = (0);
seq__23794 = G__23957;
chunk__23795 = G__23958;
count__23796 = G__23959;
i__23797 = G__23960;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__23319__auto___23961 = re_frame.interop.now();
var duration__23320__auto___23962 = (end__23319__auto___23961 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__23320__auto___23962,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__23319__auto___23961);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__23767);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___23971 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___23971)){
var new_db_23973 = temp__5804__auto___23971;
var fexpr__23824_23975 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__23824_23975.cljs$core$IFn$_invoke$arity$1 ? fexpr__23824_23975.cljs$core$IFn$_invoke$arity$1(new_db_23973) : fexpr__23824_23975.call(null,new_db_23973));
} else {
}

var seq__23827 = cljs.core.seq(effects_without_db);
var chunk__23828 = null;
var count__23829 = (0);
var i__23830 = (0);
while(true){
if((i__23830 < count__23829)){
var vec__23851 = chunk__23828.cljs$core$IIndexed$_nth$arity$2(null,i__23830);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23851,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23851,(1),null);
var temp__5802__auto___23980 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___23980)){
var effect_fn_23981 = temp__5802__auto___23980;
(effect_fn_23981.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23981.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23981.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23983 = seq__23827;
var G__23984 = chunk__23828;
var G__23985 = count__23829;
var G__23986 = (i__23830 + (1));
seq__23827 = G__23983;
chunk__23828 = G__23984;
count__23829 = G__23985;
i__23830 = G__23986;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23827);
if(temp__5804__auto__){
var seq__23827__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23827__$1)){
var c__5521__auto__ = cljs.core.chunk_first(seq__23827__$1);
var G__23987 = cljs.core.chunk_rest(seq__23827__$1);
var G__23988 = c__5521__auto__;
var G__23989 = cljs.core.count(c__5521__auto__);
var G__23990 = (0);
seq__23827 = G__23987;
chunk__23828 = G__23988;
count__23829 = G__23989;
i__23830 = G__23990;
continue;
} else {
var vec__23859 = cljs.core.first(seq__23827__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23859,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23859,(1),null);
var temp__5802__auto___23995 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___23995)){
var effect_fn_23996 = temp__5802__auto___23995;
(effect_fn_23996.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23996.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23996.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23997 = cljs.core.next(seq__23827__$1);
var G__23998 = null;
var G__23999 = (0);
var G__24000 = (0);
seq__23827 = G__23997;
chunk__23828 = G__23998;
count__23829 = G__23999;
i__23830 = G__24000;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__23862){
var map__23863 = p__23862;
var map__23863__$1 = cljs.core.__destructure_map(map__23863);
var effect = map__23863__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23863__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23863__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__23865 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__23866 = null;
var count__23867 = (0);
var i__23868 = (0);
while(true){
if((i__23868 < count__23867)){
var effect = chunk__23866.cljs$core$IIndexed$_nth$arity$2(null,i__23868);
re_frame.fx.dispatch_later(effect);


var G__24001 = seq__23865;
var G__24002 = chunk__23866;
var G__24003 = count__23867;
var G__24004 = (i__23868 + (1));
seq__23865 = G__24001;
chunk__23866 = G__24002;
count__23867 = G__24003;
i__23868 = G__24004;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23865);
if(temp__5804__auto__){
var seq__23865__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23865__$1)){
var c__5521__auto__ = cljs.core.chunk_first(seq__23865__$1);
var G__24005 = cljs.core.chunk_rest(seq__23865__$1);
var G__24006 = c__5521__auto__;
var G__24007 = cljs.core.count(c__5521__auto__);
var G__24008 = (0);
seq__23865 = G__24005;
chunk__23866 = G__24006;
count__23867 = G__24007;
i__23868 = G__24008;
continue;
} else {
var effect = cljs.core.first(seq__23865__$1);
re_frame.fx.dispatch_later(effect);


var G__24010 = cljs.core.next(seq__23865__$1);
var G__24011 = null;
var G__24012 = (0);
var G__24013 = (0);
seq__23865 = G__24010;
chunk__23866 = G__24011;
count__23867 = G__24012;
i__23868 = G__24013;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__23871 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__23872 = null;
var count__23873 = (0);
var i__23874 = (0);
while(true){
if((i__23874 < count__23873)){
var vec__23881 = chunk__23872.cljs$core$IIndexed$_nth$arity$2(null,i__23874);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23881,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23881,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___24014 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___24014)){
var effect_fn_24015 = temp__5802__auto___24014;
(effect_fn_24015.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24015.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24015.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__24016 = seq__23871;
var G__24017 = chunk__23872;
var G__24018 = count__23873;
var G__24019 = (i__23874 + (1));
seq__23871 = G__24016;
chunk__23872 = G__24017;
count__23873 = G__24018;
i__23874 = G__24019;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23871);
if(temp__5804__auto__){
var seq__23871__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23871__$1)){
var c__5521__auto__ = cljs.core.chunk_first(seq__23871__$1);
var G__24020 = cljs.core.chunk_rest(seq__23871__$1);
var G__24021 = c__5521__auto__;
var G__24022 = cljs.core.count(c__5521__auto__);
var G__24023 = (0);
seq__23871 = G__24020;
chunk__23872 = G__24021;
count__23873 = G__24022;
i__23874 = G__24023;
continue;
} else {
var vec__23884 = cljs.core.first(seq__23871__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23884,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23884,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___24025 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___24025)){
var effect_fn_24030 = temp__5802__auto___24025;
(effect_fn_24030.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24030.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24030.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__24031 = cljs.core.next(seq__23871__$1);
var G__24032 = null;
var G__24033 = (0);
var G__24034 = (0);
seq__23871 = G__24031;
chunk__23872 = G__24032;
count__23873 = G__24033;
i__23874 = G__24034;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__23888 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__23889 = null;
var count__23890 = (0);
var i__23891 = (0);
while(true){
if((i__23891 < count__23890)){
var event = chunk__23889.cljs$core$IIndexed$_nth$arity$2(null,i__23891);
re_frame.router.dispatch(event);


var G__24035 = seq__23888;
var G__24036 = chunk__23889;
var G__24037 = count__23890;
var G__24038 = (i__23891 + (1));
seq__23888 = G__24035;
chunk__23889 = G__24036;
count__23890 = G__24037;
i__23891 = G__24038;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23888);
if(temp__5804__auto__){
var seq__23888__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23888__$1)){
var c__5521__auto__ = cljs.core.chunk_first(seq__23888__$1);
var G__24039 = cljs.core.chunk_rest(seq__23888__$1);
var G__24040 = c__5521__auto__;
var G__24041 = cljs.core.count(c__5521__auto__);
var G__24042 = (0);
seq__23888 = G__24039;
chunk__23889 = G__24040;
count__23890 = G__24041;
i__23891 = G__24042;
continue;
} else {
var event = cljs.core.first(seq__23888__$1);
re_frame.router.dispatch(event);


var G__24043 = cljs.core.next(seq__23888__$1);
var G__24044 = null;
var G__24045 = (0);
var G__24046 = (0);
seq__23888 = G__24043;
chunk__23889 = G__24044;
count__23890 = G__24045;
i__23891 = G__24046;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__23898 = cljs.core.seq(value);
var chunk__23899 = null;
var count__23900 = (0);
var i__23901 = (0);
while(true){
if((i__23901 < count__23900)){
var event = chunk__23899.cljs$core$IIndexed$_nth$arity$2(null,i__23901);
clear_event(event);


var G__24047 = seq__23898;
var G__24048 = chunk__23899;
var G__24049 = count__23900;
var G__24050 = (i__23901 + (1));
seq__23898 = G__24047;
chunk__23899 = G__24048;
count__23900 = G__24049;
i__23901 = G__24050;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23898);
if(temp__5804__auto__){
var seq__23898__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23898__$1)){
var c__5521__auto__ = cljs.core.chunk_first(seq__23898__$1);
var G__24051 = cljs.core.chunk_rest(seq__23898__$1);
var G__24052 = c__5521__auto__;
var G__24053 = cljs.core.count(c__5521__auto__);
var G__24054 = (0);
seq__23898 = G__24051;
chunk__23899 = G__24052;
count__23900 = G__24053;
i__23901 = G__24054;
continue;
} else {
var event = cljs.core.first(seq__23898__$1);
clear_event(event);


var G__24055 = cljs.core.next(seq__23898__$1);
var G__24056 = null;
var G__24057 = (0);
var G__24058 = (0);
seq__23898 = G__24055;
chunk__23899 = G__24056;
count__23900 = G__24057;
i__23901 = G__24058;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
