goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__27656){
var map__27657 = p__27656;
var map__27657__$1 = cljs.core.__destructure_map(map__27657);
var runtime = map__27657__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27657__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4998__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_27850 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_27850)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__27663 = runtime;
var G__27664 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_27850);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__27663,G__27664) : shadow.remote.runtime.shared.process.call(null,G__27663,G__27664));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__27665,res){
var map__27666 = p__27665;
var map__27666__$1 = cljs.core.__destructure_map(map__27666);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27666__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27666__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__27668 = res;
var G__27668__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27668,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__27668);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27668__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__27668__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__27675 = arguments.length;
switch (G__27675) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__27676,msg,handlers,timeout_after_ms){
var map__27677 = p__27676;
var map__27677__$1 = cljs.core.__destructure_map(map__27677);
var runtime = map__27677__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27677__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5728__auto__ = [];
var len__5722__auto___27872 = arguments.length;
var i__5723__auto___27873 = (0);
while(true){
if((i__5723__auto___27873 < len__5722__auto___27872)){
args__5728__auto__.push((arguments[i__5723__auto___27873]));

var G__27874 = (i__5723__auto___27873 + (1));
i__5723__auto___27873 = G__27874;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((2) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5729__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__27683,ev,args){
var map__27684 = p__27683;
var map__27684__$1 = cljs.core.__destructure_map(map__27684);
var runtime = map__27684__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27684__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__27685 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__27688 = null;
var count__27689 = (0);
var i__27690 = (0);
while(true){
if((i__27690 < count__27689)){
var ext = chunk__27688.cljs$core$IIndexed$_nth$arity$2(null,i__27690);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__27885 = seq__27685;
var G__27886 = chunk__27688;
var G__27887 = count__27689;
var G__27888 = (i__27690 + (1));
seq__27685 = G__27885;
chunk__27688 = G__27886;
count__27689 = G__27887;
i__27690 = G__27888;
continue;
} else {
var G__27889 = seq__27685;
var G__27890 = chunk__27688;
var G__27891 = count__27689;
var G__27892 = (i__27690 + (1));
seq__27685 = G__27889;
chunk__27688 = G__27890;
count__27689 = G__27891;
i__27690 = G__27892;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__27685);
if(temp__5804__auto__){
var seq__27685__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27685__$1)){
var c__5521__auto__ = cljs.core.chunk_first(seq__27685__$1);
var G__27894 = cljs.core.chunk_rest(seq__27685__$1);
var G__27895 = c__5521__auto__;
var G__27896 = cljs.core.count(c__5521__auto__);
var G__27897 = (0);
seq__27685 = G__27894;
chunk__27688 = G__27895;
count__27689 = G__27896;
i__27690 = G__27897;
continue;
} else {
var ext = cljs.core.first(seq__27685__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__27902 = cljs.core.next(seq__27685__$1);
var G__27903 = null;
var G__27904 = (0);
var G__27905 = (0);
seq__27685 = G__27902;
chunk__27688 = G__27903;
count__27689 = G__27904;
i__27690 = G__27905;
continue;
} else {
var G__27913 = cljs.core.next(seq__27685__$1);
var G__27915 = null;
var G__27916 = (0);
var G__27917 = (0);
seq__27685 = G__27913;
chunk__27688 = G__27915;
count__27689 = G__27916;
i__27690 = G__27917;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq27680){
var G__27681 = cljs.core.first(seq27680);
var seq27680__$1 = cljs.core.next(seq27680);
var G__27682 = cljs.core.first(seq27680__$1);
var seq27680__$2 = cljs.core.next(seq27680__$1);
var self__5707__auto__ = this;
return self__5707__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27681,G__27682,seq27680__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__27706,p__27707){
var map__27708 = p__27706;
var map__27708__$1 = cljs.core.__destructure_map(map__27708);
var runtime = map__27708__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27708__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__27709 = p__27707;
var map__27709__$1 = cljs.core.__destructure_map(map__27709);
var msg = map__27709__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27709__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__27711 = cljs.core.deref(state_ref);
var map__27711__$1 = cljs.core.__destructure_map(map__27711);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27711__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27711__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__27716,msg){
var map__27717 = p__27716;
var map__27717__$1 = cljs.core.__destructure_map(map__27717);
var runtime = map__27717__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27717__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__27721,key,p__27722){
var map__27723 = p__27721;
var map__27723__$1 = cljs.core.__destructure_map(map__27723);
var state = map__27723__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27723__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__27725 = p__27722;
var map__27725__$1 = cljs.core.__destructure_map(map__27725);
var spec = map__27725__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27725__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__27747,key,spec){
var map__27748 = p__27747;
var map__27748__$1 = cljs.core.__destructure_map(map__27748);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27748__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__27760_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__27760_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__27766_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__27766_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__27768_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__27768_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__27769_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__27769_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__27771_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__27771_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__27789,key){
var map__27790 = p__27789;
var map__27790__$1 = cljs.core.__destructure_map(map__27790);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27790__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__27794,msg){
var map__27796 = p__27794;
var map__27796__$1 = cljs.core.__destructure_map(map__27796);
var runtime = map__27796__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27796__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__27805,p__27806){
var map__27807 = p__27805;
var map__27807__$1 = cljs.core.__destructure_map(map__27807);
var runtime = map__27807__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27807__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__27808 = p__27806;
var map__27808__$1 = cljs.core.__destructure_map(map__27808);
var msg = map__27808__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27808__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27808__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__27814 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__27816 = null;
var count__27817 = (0);
var i__27818 = (0);
while(true){
if((i__27818 < count__27817)){
var map__27828 = chunk__27816.cljs$core$IIndexed$_nth$arity$2(null,i__27818);
var map__27828__$1 = cljs.core.__destructure_map(map__27828);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27828__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__27969 = seq__27814;
var G__27970 = chunk__27816;
var G__27971 = count__27817;
var G__27972 = (i__27818 + (1));
seq__27814 = G__27969;
chunk__27816 = G__27970;
count__27817 = G__27971;
i__27818 = G__27972;
continue;
} else {
var G__27973 = seq__27814;
var G__27974 = chunk__27816;
var G__27975 = count__27817;
var G__27976 = (i__27818 + (1));
seq__27814 = G__27973;
chunk__27816 = G__27974;
count__27817 = G__27975;
i__27818 = G__27976;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__27814);
if(temp__5804__auto__){
var seq__27814__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27814__$1)){
var c__5521__auto__ = cljs.core.chunk_first(seq__27814__$1);
var G__27979 = cljs.core.chunk_rest(seq__27814__$1);
var G__27980 = c__5521__auto__;
var G__27981 = cljs.core.count(c__5521__auto__);
var G__27982 = (0);
seq__27814 = G__27979;
chunk__27816 = G__27980;
count__27817 = G__27981;
i__27818 = G__27982;
continue;
} else {
var map__27839 = cljs.core.first(seq__27814__$1);
var map__27839__$1 = cljs.core.__destructure_map(map__27839);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27839__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__27987 = cljs.core.next(seq__27814__$1);
var G__27988 = null;
var G__27989 = (0);
var G__27990 = (0);
seq__27814 = G__27987;
chunk__27816 = G__27988;
count__27817 = G__27989;
i__27818 = G__27990;
continue;
} else {
var G__27999 = cljs.core.next(seq__27814__$1);
var G__28000 = null;
var G__28001 = (0);
var G__28002 = (0);
seq__27814 = G__27999;
chunk__27816 = G__28000;
count__27817 = G__28001;
i__27818 = G__28002;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
