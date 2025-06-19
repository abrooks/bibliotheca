goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5728__auto__ = [];
var len__5722__auto___35184 = arguments.length;
var i__5723__auto___35185 = (0);
while(true){
if((i__5723__auto___35185 < len__5722__auto___35184)){
args__5728__auto__.push((arguments[i__5723__auto___35185]));

var G__35186 = (i__5723__auto___35185 + (1));
i__5723__auto___35185 = G__35186;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((1) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5729__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq34418){
var G__34419 = cljs.core.first(seq34418);
var seq34418__$1 = cljs.core.next(seq34418);
var self__5707__auto__ = this;
return self__5707__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34419,seq34418__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__34423 = cljs.core.seq(sources);
var chunk__34424 = null;
var count__34425 = (0);
var i__34426 = (0);
while(true){
if((i__34426 < count__34425)){
var map__34436 = chunk__34424.cljs$core$IIndexed$_nth$arity$2(null,i__34426);
var map__34436__$1 = cljs.core.__destructure_map(map__34436);
var src = map__34436__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34436__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34436__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34436__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34436__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e34437){var e_35198 = e34437;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35198);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35198.message)].join('')));
}

var G__35202 = seq__34423;
var G__35203 = chunk__34424;
var G__35204 = count__34425;
var G__35205 = (i__34426 + (1));
seq__34423 = G__35202;
chunk__34424 = G__35203;
count__34425 = G__35204;
i__34426 = G__35205;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__34423);
if(temp__5804__auto__){
var seq__34423__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34423__$1)){
var c__5521__auto__ = cljs.core.chunk_first(seq__34423__$1);
var G__35211 = cljs.core.chunk_rest(seq__34423__$1);
var G__35212 = c__5521__auto__;
var G__35213 = cljs.core.count(c__5521__auto__);
var G__35214 = (0);
seq__34423 = G__35211;
chunk__34424 = G__35212;
count__34425 = G__35213;
i__34426 = G__35214;
continue;
} else {
var map__34438 = cljs.core.first(seq__34423__$1);
var map__34438__$1 = cljs.core.__destructure_map(map__34438);
var src = map__34438__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34438__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34438__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34438__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34438__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e34439){var e_35225 = e34439;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35225);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35225.message)].join('')));
}

var G__35227 = cljs.core.next(seq__34423__$1);
var G__35228 = null;
var G__35229 = (0);
var G__35230 = (0);
seq__34423 = G__35227;
chunk__34424 = G__35228;
count__34425 = G__35229;
i__34426 = G__35230;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__34440 = cljs.core.seq(js_requires);
var chunk__34441 = null;
var count__34442 = (0);
var i__34443 = (0);
while(true){
if((i__34443 < count__34442)){
var js_ns = chunk__34441.cljs$core$IIndexed$_nth$arity$2(null,i__34443);
var require_str_35256 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35256);


var G__35257 = seq__34440;
var G__35258 = chunk__34441;
var G__35259 = count__34442;
var G__35260 = (i__34443 + (1));
seq__34440 = G__35257;
chunk__34441 = G__35258;
count__34442 = G__35259;
i__34443 = G__35260;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__34440);
if(temp__5804__auto__){
var seq__34440__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34440__$1)){
var c__5521__auto__ = cljs.core.chunk_first(seq__34440__$1);
var G__35262 = cljs.core.chunk_rest(seq__34440__$1);
var G__35263 = c__5521__auto__;
var G__35264 = cljs.core.count(c__5521__auto__);
var G__35265 = (0);
seq__34440 = G__35262;
chunk__34441 = G__35263;
count__34442 = G__35264;
i__34443 = G__35265;
continue;
} else {
var js_ns = cljs.core.first(seq__34440__$1);
var require_str_35272 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35272);


var G__35276 = cljs.core.next(seq__34440__$1);
var G__35278 = null;
var G__35280 = (0);
var G__35281 = (0);
seq__34440 = G__35276;
chunk__34441 = G__35278;
count__34442 = G__35280;
i__34443 = G__35281;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__34447){
var map__34448 = p__34447;
var map__34448__$1 = cljs.core.__destructure_map(map__34448);
var msg = map__34448__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34448__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34448__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5476__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34449(s__34450){
return (new cljs.core.LazySeq(null,(function (){
var s__34450__$1 = s__34450;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__34450__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__34455 = cljs.core.first(xs__6360__auto__);
var map__34455__$1 = cljs.core.__destructure_map(map__34455);
var src = map__34455__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34455__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34455__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5472__auto__ = ((function (s__34450__$1,map__34455,map__34455__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__34448,map__34448__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34449_$_iter__34451(s__34452){
return (new cljs.core.LazySeq(null,((function (s__34450__$1,map__34455,map__34455__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__34448,map__34448__$1,msg,info,reload_info){
return (function (){
var s__34452__$1 = s__34452;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__34452__$1);
if(temp__5804__auto____$1){
var s__34452__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__34452__$2)){
var c__5474__auto__ = cljs.core.chunk_first(s__34452__$2);
var size__5475__auto__ = cljs.core.count(c__5474__auto__);
var b__34454 = cljs.core.chunk_buffer(size__5475__auto__);
if((function (){var i__34453 = (0);
while(true){
if((i__34453 < size__5475__auto__)){
var warning = cljs.core._nth(c__5474__auto__,i__34453);
cljs.core.chunk_append(b__34454,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__35324 = (i__34453 + (1));
i__34453 = G__35324;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34454),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34449_$_iter__34451(cljs.core.chunk_rest(s__34452__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34454),null);
}
} else {
var warning = cljs.core.first(s__34452__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34449_$_iter__34451(cljs.core.rest(s__34452__$2)));
}
} else {
return null;
}
break;
}
});})(s__34450__$1,map__34455,map__34455__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__34448,map__34448__$1,msg,info,reload_info))
,null,null));
});})(s__34450__$1,map__34455,map__34455__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__34448,map__34448__$1,msg,info,reload_info))
;
var fs__5473__auto__ = cljs.core.seq(iterys__5472__auto__(warnings));
if(fs__5473__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5473__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34449(cljs.core.rest(s__34450__$1)));
} else {
var G__35326 = cljs.core.rest(s__34450__$1);
s__34450__$1 = G__35326;
continue;
}
} else {
var G__35327 = cljs.core.rest(s__34450__$1);
s__34450__$1 = G__35327;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5476__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__34456_35328 = cljs.core.seq(warnings);
var chunk__34457_35329 = null;
var count__34458_35330 = (0);
var i__34459_35331 = (0);
while(true){
if((i__34459_35331 < count__34458_35330)){
var map__34462_35341 = chunk__34457_35329.cljs$core$IIndexed$_nth$arity$2(null,i__34459_35331);
var map__34462_35342__$1 = cljs.core.__destructure_map(map__34462_35341);
var w_35343 = map__34462_35342__$1;
var msg_35344__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34462_35342__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35345 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34462_35342__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35346 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34462_35342__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35347 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34462_35342__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35347)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35345),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35346),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35344__$1)].join(''));


var G__35360 = seq__34456_35328;
var G__35361 = chunk__34457_35329;
var G__35362 = count__34458_35330;
var G__35363 = (i__34459_35331 + (1));
seq__34456_35328 = G__35360;
chunk__34457_35329 = G__35361;
count__34458_35330 = G__35362;
i__34459_35331 = G__35363;
continue;
} else {
var temp__5804__auto___35364 = cljs.core.seq(seq__34456_35328);
if(temp__5804__auto___35364){
var seq__34456_35366__$1 = temp__5804__auto___35364;
if(cljs.core.chunked_seq_QMARK_(seq__34456_35366__$1)){
var c__5521__auto___35367 = cljs.core.chunk_first(seq__34456_35366__$1);
var G__35368 = cljs.core.chunk_rest(seq__34456_35366__$1);
var G__35369 = c__5521__auto___35367;
var G__35370 = cljs.core.count(c__5521__auto___35367);
var G__35371 = (0);
seq__34456_35328 = G__35368;
chunk__34457_35329 = G__35369;
count__34458_35330 = G__35370;
i__34459_35331 = G__35371;
continue;
} else {
var map__34463_35372 = cljs.core.first(seq__34456_35366__$1);
var map__34463_35373__$1 = cljs.core.__destructure_map(map__34463_35372);
var w_35374 = map__34463_35373__$1;
var msg_35375__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34463_35373__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35376 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34463_35373__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35377 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34463_35373__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35378 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34463_35373__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35378)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35376),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35377),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35375__$1)].join(''));


var G__35389 = cljs.core.next(seq__34456_35366__$1);
var G__35390 = null;
var G__35391 = (0);
var G__35392 = (0);
seq__34456_35328 = G__35389;
chunk__34457_35329 = G__35390;
count__34458_35330 = G__35391;
i__34459_35331 = G__35392;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__34446_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__34446_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4996__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4996__auto__){
var and__4996__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4996__auto____$1){
return new$;
} else {
return and__4996__auto____$1;
}
} else {
return and__4996__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__34464){
var map__34465 = p__34464;
var map__34465__$1 = cljs.core.__destructure_map(map__34465);
var msg = map__34465__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34465__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34465__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__34466 = cljs.core.seq(updates);
var chunk__34468 = null;
var count__34469 = (0);
var i__34470 = (0);
while(true){
if((i__34470 < count__34469)){
var path = chunk__34468.cljs$core$IIndexed$_nth$arity$2(null,i__34470);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__34651_35432 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__34655_35433 = null;
var count__34656_35434 = (0);
var i__34657_35435 = (0);
while(true){
if((i__34657_35435 < count__34656_35434)){
var node_35437 = chunk__34655_35433.cljs$core$IIndexed$_nth$arity$2(null,i__34657_35435);
if(cljs.core.not(node_35437.shadow$old)){
var path_match_35438 = shadow.cljs.devtools.client.browser.match_paths(node_35437.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35438)){
var new_link_35439 = (function (){var G__34685 = node_35437.cloneNode(true);
G__34685.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35438),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__34685;
})();
(node_35437.shadow$old = true);

(new_link_35439.onload = ((function (seq__34651_35432,chunk__34655_35433,count__34656_35434,i__34657_35435,seq__34466,chunk__34468,count__34469,i__34470,new_link_35439,path_match_35438,node_35437,path,map__34465,map__34465__$1,msg,updates,reload_info){
return (function (e){
var seq__34689_35441 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__34692_35442 = null;
var count__34693_35443 = (0);
var i__34694_35444 = (0);
while(true){
if((i__34694_35444 < count__34693_35443)){
var map__34714_35471 = chunk__34692_35442.cljs$core$IIndexed$_nth$arity$2(null,i__34694_35444);
var map__34714_35472__$1 = cljs.core.__destructure_map(map__34714_35471);
var task_35473 = map__34714_35472__$1;
var fn_str_35474 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34714_35472__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_35475 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34714_35472__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_35476 = goog.getObjectByName(fn_str_35474,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_35475)].join(''));

(fn_obj_35476.cljs$core$IFn$_invoke$arity$2 ? fn_obj_35476.cljs$core$IFn$_invoke$arity$2(path,new_link_35439) : fn_obj_35476.call(null,path,new_link_35439));


var G__35477 = seq__34689_35441;
var G__35478 = chunk__34692_35442;
var G__35479 = count__34693_35443;
var G__35480 = (i__34694_35444 + (1));
seq__34689_35441 = G__35477;
chunk__34692_35442 = G__35478;
count__34693_35443 = G__35479;
i__34694_35444 = G__35480;
continue;
} else {
var temp__5804__auto___35481 = cljs.core.seq(seq__34689_35441);
if(temp__5804__auto___35481){
var seq__34689_35483__$1 = temp__5804__auto___35481;
if(cljs.core.chunked_seq_QMARK_(seq__34689_35483__$1)){
var c__5521__auto___35484 = cljs.core.chunk_first(seq__34689_35483__$1);
var G__35485 = cljs.core.chunk_rest(seq__34689_35483__$1);
var G__35486 = c__5521__auto___35484;
var G__35487 = cljs.core.count(c__5521__auto___35484);
var G__35488 = (0);
seq__34689_35441 = G__35485;
chunk__34692_35442 = G__35486;
count__34693_35443 = G__35487;
i__34694_35444 = G__35488;
continue;
} else {
var map__34715_35489 = cljs.core.first(seq__34689_35483__$1);
var map__34715_35490__$1 = cljs.core.__destructure_map(map__34715_35489);
var task_35491 = map__34715_35490__$1;
var fn_str_35492 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34715_35490__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_35493 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34715_35490__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_35494 = goog.getObjectByName(fn_str_35492,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_35493)].join(''));

(fn_obj_35494.cljs$core$IFn$_invoke$arity$2 ? fn_obj_35494.cljs$core$IFn$_invoke$arity$2(path,new_link_35439) : fn_obj_35494.call(null,path,new_link_35439));


var G__35495 = cljs.core.next(seq__34689_35483__$1);
var G__35496 = null;
var G__35497 = (0);
var G__35498 = (0);
seq__34689_35441 = G__35495;
chunk__34692_35442 = G__35496;
count__34693_35443 = G__35497;
i__34694_35444 = G__35498;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_35437);
});})(seq__34651_35432,chunk__34655_35433,count__34656_35434,i__34657_35435,seq__34466,chunk__34468,count__34469,i__34470,new_link_35439,path_match_35438,node_35437,path,map__34465,map__34465__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35438], 0));

goog.dom.insertSiblingAfter(new_link_35439,node_35437);


var G__35512 = seq__34651_35432;
var G__35513 = chunk__34655_35433;
var G__35514 = count__34656_35434;
var G__35515 = (i__34657_35435 + (1));
seq__34651_35432 = G__35512;
chunk__34655_35433 = G__35513;
count__34656_35434 = G__35514;
i__34657_35435 = G__35515;
continue;
} else {
var G__35516 = seq__34651_35432;
var G__35517 = chunk__34655_35433;
var G__35518 = count__34656_35434;
var G__35519 = (i__34657_35435 + (1));
seq__34651_35432 = G__35516;
chunk__34655_35433 = G__35517;
count__34656_35434 = G__35518;
i__34657_35435 = G__35519;
continue;
}
} else {
var G__35530 = seq__34651_35432;
var G__35532 = chunk__34655_35433;
var G__35534 = count__34656_35434;
var G__35536 = (i__34657_35435 + (1));
seq__34651_35432 = G__35530;
chunk__34655_35433 = G__35532;
count__34656_35434 = G__35534;
i__34657_35435 = G__35536;
continue;
}
} else {
var temp__5804__auto___35540 = cljs.core.seq(seq__34651_35432);
if(temp__5804__auto___35540){
var seq__34651_35541__$1 = temp__5804__auto___35540;
if(cljs.core.chunked_seq_QMARK_(seq__34651_35541__$1)){
var c__5521__auto___35542 = cljs.core.chunk_first(seq__34651_35541__$1);
var G__35543 = cljs.core.chunk_rest(seq__34651_35541__$1);
var G__35544 = c__5521__auto___35542;
var G__35545 = cljs.core.count(c__5521__auto___35542);
var G__35546 = (0);
seq__34651_35432 = G__35543;
chunk__34655_35433 = G__35544;
count__34656_35434 = G__35545;
i__34657_35435 = G__35546;
continue;
} else {
var node_35547 = cljs.core.first(seq__34651_35541__$1);
if(cljs.core.not(node_35547.shadow$old)){
var path_match_35548 = shadow.cljs.devtools.client.browser.match_paths(node_35547.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35548)){
var new_link_35549 = (function (){var G__34716 = node_35547.cloneNode(true);
G__34716.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35548),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__34716;
})();
(node_35547.shadow$old = true);

(new_link_35549.onload = ((function (seq__34651_35432,chunk__34655_35433,count__34656_35434,i__34657_35435,seq__34466,chunk__34468,count__34469,i__34470,new_link_35549,path_match_35548,node_35547,seq__34651_35541__$1,temp__5804__auto___35540,path,map__34465,map__34465__$1,msg,updates,reload_info){
return (function (e){
var seq__34717_35551 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__34719_35552 = null;
var count__34720_35553 = (0);
var i__34721_35554 = (0);
while(true){
if((i__34721_35554 < count__34720_35553)){
var map__34731_35555 = chunk__34719_35552.cljs$core$IIndexed$_nth$arity$2(null,i__34721_35554);
var map__34731_35556__$1 = cljs.core.__destructure_map(map__34731_35555);
var task_35557 = map__34731_35556__$1;
var fn_str_35558 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34731_35556__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_35559 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34731_35556__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_35560 = goog.getObjectByName(fn_str_35558,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_35559)].join(''));

(fn_obj_35560.cljs$core$IFn$_invoke$arity$2 ? fn_obj_35560.cljs$core$IFn$_invoke$arity$2(path,new_link_35549) : fn_obj_35560.call(null,path,new_link_35549));


var G__35562 = seq__34717_35551;
var G__35563 = chunk__34719_35552;
var G__35564 = count__34720_35553;
var G__35565 = (i__34721_35554 + (1));
seq__34717_35551 = G__35562;
chunk__34719_35552 = G__35563;
count__34720_35553 = G__35564;
i__34721_35554 = G__35565;
continue;
} else {
var temp__5804__auto___35579__$1 = cljs.core.seq(seq__34717_35551);
if(temp__5804__auto___35579__$1){
var seq__34717_35580__$1 = temp__5804__auto___35579__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34717_35580__$1)){
var c__5521__auto___35584 = cljs.core.chunk_first(seq__34717_35580__$1);
var G__35599 = cljs.core.chunk_rest(seq__34717_35580__$1);
var G__35600 = c__5521__auto___35584;
var G__35601 = cljs.core.count(c__5521__auto___35584);
var G__35602 = (0);
seq__34717_35551 = G__35599;
chunk__34719_35552 = G__35600;
count__34720_35553 = G__35601;
i__34721_35554 = G__35602;
continue;
} else {
var map__34732_35603 = cljs.core.first(seq__34717_35580__$1);
var map__34732_35604__$1 = cljs.core.__destructure_map(map__34732_35603);
var task_35605 = map__34732_35604__$1;
var fn_str_35606 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34732_35604__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_35607 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34732_35604__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_35608 = goog.getObjectByName(fn_str_35606,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_35607)].join(''));

(fn_obj_35608.cljs$core$IFn$_invoke$arity$2 ? fn_obj_35608.cljs$core$IFn$_invoke$arity$2(path,new_link_35549) : fn_obj_35608.call(null,path,new_link_35549));


var G__35609 = cljs.core.next(seq__34717_35580__$1);
var G__35610 = null;
var G__35611 = (0);
var G__35612 = (0);
seq__34717_35551 = G__35609;
chunk__34719_35552 = G__35610;
count__34720_35553 = G__35611;
i__34721_35554 = G__35612;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_35547);
});})(seq__34651_35432,chunk__34655_35433,count__34656_35434,i__34657_35435,seq__34466,chunk__34468,count__34469,i__34470,new_link_35549,path_match_35548,node_35547,seq__34651_35541__$1,temp__5804__auto___35540,path,map__34465,map__34465__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35548], 0));

goog.dom.insertSiblingAfter(new_link_35549,node_35547);


var G__35614 = cljs.core.next(seq__34651_35541__$1);
var G__35615 = null;
var G__35616 = (0);
var G__35617 = (0);
seq__34651_35432 = G__35614;
chunk__34655_35433 = G__35615;
count__34656_35434 = G__35616;
i__34657_35435 = G__35617;
continue;
} else {
var G__35618 = cljs.core.next(seq__34651_35541__$1);
var G__35619 = null;
var G__35620 = (0);
var G__35621 = (0);
seq__34651_35432 = G__35618;
chunk__34655_35433 = G__35619;
count__34656_35434 = G__35620;
i__34657_35435 = G__35621;
continue;
}
} else {
var G__35622 = cljs.core.next(seq__34651_35541__$1);
var G__35623 = null;
var G__35624 = (0);
var G__35625 = (0);
seq__34651_35432 = G__35622;
chunk__34655_35433 = G__35623;
count__34656_35434 = G__35624;
i__34657_35435 = G__35625;
continue;
}
}
} else {
}
}
break;
}


var G__35626 = seq__34466;
var G__35627 = chunk__34468;
var G__35628 = count__34469;
var G__35629 = (i__34470 + (1));
seq__34466 = G__35626;
chunk__34468 = G__35627;
count__34469 = G__35628;
i__34470 = G__35629;
continue;
} else {
var G__35630 = seq__34466;
var G__35631 = chunk__34468;
var G__35632 = count__34469;
var G__35633 = (i__34470 + (1));
seq__34466 = G__35630;
chunk__34468 = G__35631;
count__34469 = G__35632;
i__34470 = G__35633;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__34466);
if(temp__5804__auto__){
var seq__34466__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34466__$1)){
var c__5521__auto__ = cljs.core.chunk_first(seq__34466__$1);
var G__35634 = cljs.core.chunk_rest(seq__34466__$1);
var G__35635 = c__5521__auto__;
var G__35636 = cljs.core.count(c__5521__auto__);
var G__35637 = (0);
seq__34466 = G__35634;
chunk__34468 = G__35635;
count__34469 = G__35636;
i__34470 = G__35637;
continue;
} else {
var path = cljs.core.first(seq__34466__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__34733_35638 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__34737_35639 = null;
var count__34738_35640 = (0);
var i__34739_35641 = (0);
while(true){
if((i__34739_35641 < count__34738_35640)){
var node_35643 = chunk__34737_35639.cljs$core$IIndexed$_nth$arity$2(null,i__34739_35641);
if(cljs.core.not(node_35643.shadow$old)){
var path_match_35658 = shadow.cljs.devtools.client.browser.match_paths(node_35643.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35658)){
var new_link_35662 = (function (){var G__34784 = node_35643.cloneNode(true);
G__34784.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35658),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__34784;
})();
(node_35643.shadow$old = true);

(new_link_35662.onload = ((function (seq__34733_35638,chunk__34737_35639,count__34738_35640,i__34739_35641,seq__34466,chunk__34468,count__34469,i__34470,new_link_35662,path_match_35658,node_35643,path,seq__34466__$1,temp__5804__auto__,map__34465,map__34465__$1,msg,updates,reload_info){
return (function (e){
var seq__34786_35678 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__34788_35679 = null;
var count__34789_35680 = (0);
var i__34790_35681 = (0);
while(true){
if((i__34790_35681 < count__34789_35680)){
var map__34801_35682 = chunk__34788_35679.cljs$core$IIndexed$_nth$arity$2(null,i__34790_35681);
var map__34801_35683__$1 = cljs.core.__destructure_map(map__34801_35682);
var task_35684 = map__34801_35683__$1;
var fn_str_35685 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34801_35683__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_35686 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34801_35683__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_35688 = goog.getObjectByName(fn_str_35685,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_35686)].join(''));

(fn_obj_35688.cljs$core$IFn$_invoke$arity$2 ? fn_obj_35688.cljs$core$IFn$_invoke$arity$2(path,new_link_35662) : fn_obj_35688.call(null,path,new_link_35662));


var G__35689 = seq__34786_35678;
var G__35690 = chunk__34788_35679;
var G__35691 = count__34789_35680;
var G__35692 = (i__34790_35681 + (1));
seq__34786_35678 = G__35689;
chunk__34788_35679 = G__35690;
count__34789_35680 = G__35691;
i__34790_35681 = G__35692;
continue;
} else {
var temp__5804__auto___35693__$1 = cljs.core.seq(seq__34786_35678);
if(temp__5804__auto___35693__$1){
var seq__34786_35694__$1 = temp__5804__auto___35693__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34786_35694__$1)){
var c__5521__auto___35695 = cljs.core.chunk_first(seq__34786_35694__$1);
var G__35696 = cljs.core.chunk_rest(seq__34786_35694__$1);
var G__35697 = c__5521__auto___35695;
var G__35698 = cljs.core.count(c__5521__auto___35695);
var G__35699 = (0);
seq__34786_35678 = G__35696;
chunk__34788_35679 = G__35697;
count__34789_35680 = G__35698;
i__34790_35681 = G__35699;
continue;
} else {
var map__34806_35700 = cljs.core.first(seq__34786_35694__$1);
var map__34806_35701__$1 = cljs.core.__destructure_map(map__34806_35700);
var task_35702 = map__34806_35701__$1;
var fn_str_35703 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34806_35701__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_35704 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34806_35701__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_35705 = goog.getObjectByName(fn_str_35703,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_35704)].join(''));

(fn_obj_35705.cljs$core$IFn$_invoke$arity$2 ? fn_obj_35705.cljs$core$IFn$_invoke$arity$2(path,new_link_35662) : fn_obj_35705.call(null,path,new_link_35662));


var G__35706 = cljs.core.next(seq__34786_35694__$1);
var G__35707 = null;
var G__35708 = (0);
var G__35709 = (0);
seq__34786_35678 = G__35706;
chunk__34788_35679 = G__35707;
count__34789_35680 = G__35708;
i__34790_35681 = G__35709;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_35643);
});})(seq__34733_35638,chunk__34737_35639,count__34738_35640,i__34739_35641,seq__34466,chunk__34468,count__34469,i__34470,new_link_35662,path_match_35658,node_35643,path,seq__34466__$1,temp__5804__auto__,map__34465,map__34465__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35658], 0));

goog.dom.insertSiblingAfter(new_link_35662,node_35643);


var G__35726 = seq__34733_35638;
var G__35727 = chunk__34737_35639;
var G__35728 = count__34738_35640;
var G__35729 = (i__34739_35641 + (1));
seq__34733_35638 = G__35726;
chunk__34737_35639 = G__35727;
count__34738_35640 = G__35728;
i__34739_35641 = G__35729;
continue;
} else {
var G__35730 = seq__34733_35638;
var G__35731 = chunk__34737_35639;
var G__35732 = count__34738_35640;
var G__35733 = (i__34739_35641 + (1));
seq__34733_35638 = G__35730;
chunk__34737_35639 = G__35731;
count__34738_35640 = G__35732;
i__34739_35641 = G__35733;
continue;
}
} else {
var G__35734 = seq__34733_35638;
var G__35735 = chunk__34737_35639;
var G__35736 = count__34738_35640;
var G__35737 = (i__34739_35641 + (1));
seq__34733_35638 = G__35734;
chunk__34737_35639 = G__35735;
count__34738_35640 = G__35736;
i__34739_35641 = G__35737;
continue;
}
} else {
var temp__5804__auto___35738__$1 = cljs.core.seq(seq__34733_35638);
if(temp__5804__auto___35738__$1){
var seq__34733_35740__$1 = temp__5804__auto___35738__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34733_35740__$1)){
var c__5521__auto___35742 = cljs.core.chunk_first(seq__34733_35740__$1);
var G__35744 = cljs.core.chunk_rest(seq__34733_35740__$1);
var G__35745 = c__5521__auto___35742;
var G__35746 = cljs.core.count(c__5521__auto___35742);
var G__35747 = (0);
seq__34733_35638 = G__35744;
chunk__34737_35639 = G__35745;
count__34738_35640 = G__35746;
i__34739_35641 = G__35747;
continue;
} else {
var node_35749 = cljs.core.first(seq__34733_35740__$1);
if(cljs.core.not(node_35749.shadow$old)){
var path_match_35750 = shadow.cljs.devtools.client.browser.match_paths(node_35749.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35750)){
var new_link_35751 = (function (){var G__34809 = node_35749.cloneNode(true);
G__34809.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35750),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__34809;
})();
(node_35749.shadow$old = true);

(new_link_35751.onload = ((function (seq__34733_35638,chunk__34737_35639,count__34738_35640,i__34739_35641,seq__34466,chunk__34468,count__34469,i__34470,new_link_35751,path_match_35750,node_35749,seq__34733_35740__$1,temp__5804__auto___35738__$1,path,seq__34466__$1,temp__5804__auto__,map__34465,map__34465__$1,msg,updates,reload_info){
return (function (e){
var seq__34810_35752 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__34812_35753 = null;
var count__34813_35754 = (0);
var i__34814_35755 = (0);
while(true){
if((i__34814_35755 < count__34813_35754)){
var map__34821_35756 = chunk__34812_35753.cljs$core$IIndexed$_nth$arity$2(null,i__34814_35755);
var map__34821_35757__$1 = cljs.core.__destructure_map(map__34821_35756);
var task_35758 = map__34821_35757__$1;
var fn_str_35759 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34821_35757__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_35760 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34821_35757__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_35761 = goog.getObjectByName(fn_str_35759,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_35760)].join(''));

(fn_obj_35761.cljs$core$IFn$_invoke$arity$2 ? fn_obj_35761.cljs$core$IFn$_invoke$arity$2(path,new_link_35751) : fn_obj_35761.call(null,path,new_link_35751));


var G__35764 = seq__34810_35752;
var G__35765 = chunk__34812_35753;
var G__35766 = count__34813_35754;
var G__35767 = (i__34814_35755 + (1));
seq__34810_35752 = G__35764;
chunk__34812_35753 = G__35765;
count__34813_35754 = G__35766;
i__34814_35755 = G__35767;
continue;
} else {
var temp__5804__auto___35768__$2 = cljs.core.seq(seq__34810_35752);
if(temp__5804__auto___35768__$2){
var seq__34810_35769__$1 = temp__5804__auto___35768__$2;
if(cljs.core.chunked_seq_QMARK_(seq__34810_35769__$1)){
var c__5521__auto___35770 = cljs.core.chunk_first(seq__34810_35769__$1);
var G__35771 = cljs.core.chunk_rest(seq__34810_35769__$1);
var G__35772 = c__5521__auto___35770;
var G__35773 = cljs.core.count(c__5521__auto___35770);
var G__35774 = (0);
seq__34810_35752 = G__35771;
chunk__34812_35753 = G__35772;
count__34813_35754 = G__35773;
i__34814_35755 = G__35774;
continue;
} else {
var map__34826_35775 = cljs.core.first(seq__34810_35769__$1);
var map__34826_35776__$1 = cljs.core.__destructure_map(map__34826_35775);
var task_35777 = map__34826_35776__$1;
var fn_str_35778 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34826_35776__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_35779 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34826_35776__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_35780 = goog.getObjectByName(fn_str_35778,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_35779)].join(''));

(fn_obj_35780.cljs$core$IFn$_invoke$arity$2 ? fn_obj_35780.cljs$core$IFn$_invoke$arity$2(path,new_link_35751) : fn_obj_35780.call(null,path,new_link_35751));


var G__35781 = cljs.core.next(seq__34810_35769__$1);
var G__35782 = null;
var G__35783 = (0);
var G__35784 = (0);
seq__34810_35752 = G__35781;
chunk__34812_35753 = G__35782;
count__34813_35754 = G__35783;
i__34814_35755 = G__35784;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_35749);
});})(seq__34733_35638,chunk__34737_35639,count__34738_35640,i__34739_35641,seq__34466,chunk__34468,count__34469,i__34470,new_link_35751,path_match_35750,node_35749,seq__34733_35740__$1,temp__5804__auto___35738__$1,path,seq__34466__$1,temp__5804__auto__,map__34465,map__34465__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35750], 0));

goog.dom.insertSiblingAfter(new_link_35751,node_35749);


var G__35786 = cljs.core.next(seq__34733_35740__$1);
var G__35787 = null;
var G__35788 = (0);
var G__35789 = (0);
seq__34733_35638 = G__35786;
chunk__34737_35639 = G__35787;
count__34738_35640 = G__35788;
i__34739_35641 = G__35789;
continue;
} else {
var G__35790 = cljs.core.next(seq__34733_35740__$1);
var G__35791 = null;
var G__35792 = (0);
var G__35793 = (0);
seq__34733_35638 = G__35790;
chunk__34737_35639 = G__35791;
count__34738_35640 = G__35792;
i__34739_35641 = G__35793;
continue;
}
} else {
var G__35795 = cljs.core.next(seq__34733_35740__$1);
var G__35796 = null;
var G__35797 = (0);
var G__35798 = (0);
seq__34733_35638 = G__35795;
chunk__34737_35639 = G__35796;
count__34738_35640 = G__35797;
i__34739_35641 = G__35798;
continue;
}
}
} else {
}
}
break;
}


var G__35800 = cljs.core.next(seq__34466__$1);
var G__35801 = null;
var G__35802 = (0);
var G__35803 = (0);
seq__34466 = G__35800;
chunk__34468 = G__35801;
count__34469 = G__35802;
i__34470 = G__35803;
continue;
} else {
var G__35804 = cljs.core.next(seq__34466__$1);
var G__35805 = null;
var G__35806 = (0);
var G__35807 = (0);
seq__34466 = G__35804;
chunk__34468 = G__35805;
count__34469 = G__35806;
i__34470 = G__35807;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__34930){
var map__34931 = p__34930;
var map__34931__$1 = cljs.core.__destructure_map(map__34931);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34931__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__34952,done,error){
var map__34953 = p__34952;
var map__34953__$1 = cljs.core.__destructure_map(map__34953);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34953__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__34975,done,error){
var map__34977 = p__34975;
var map__34977__$1 = cljs.core.__destructure_map(map__34977);
var msg = map__34977__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34977__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34977__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34977__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__34988){
var map__35002 = p__34988;
var map__35002__$1 = cljs.core.__destructure_map(map__35002);
var src = map__35002__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35002__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4996__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4996__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4996__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__35004 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__35004) : done.call(null,G__35004));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__35030){
var map__35031 = p__35030;
var map__35031__$1 = cljs.core.__destructure_map(map__35031);
var msg__$1 = map__35031__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35031__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e35033){var ex = e35033;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__35035){
var map__35047 = p__35035;
var map__35047__$1 = cljs.core.__destructure_map(map__35047);
var env = map__35047__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35047__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__35125){
var map__35126 = p__35125;
var map__35126__$1 = cljs.core.__destructure_map(map__35126);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35126__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35126__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__35128){
var map__35129 = p__35128;
var map__35129__$1 = cljs.core.__destructure_map(map__35129);
var svc = map__35129__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35129__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
