goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__31182){
var map__31189 = p__31182;
var map__31189__$1 = cljs.core.__destructure_map(map__31189);
var m = map__31189__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31189__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31189__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4998__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31203_31560 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31204_31561 = null;
var count__31205_31562 = (0);
var i__31206_31563 = (0);
while(true){
if((i__31206_31563 < count__31205_31562)){
var f_31565 = chunk__31204_31561.cljs$core$IIndexed$_nth$arity$2(null,i__31206_31563);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_31565], 0));


var G__31566 = seq__31203_31560;
var G__31567 = chunk__31204_31561;
var G__31568 = count__31205_31562;
var G__31569 = (i__31206_31563 + (1));
seq__31203_31560 = G__31566;
chunk__31204_31561 = G__31567;
count__31205_31562 = G__31568;
i__31206_31563 = G__31569;
continue;
} else {
var temp__5804__auto___31570 = cljs.core.seq(seq__31203_31560);
if(temp__5804__auto___31570){
var seq__31203_31575__$1 = temp__5804__auto___31570;
if(cljs.core.chunked_seq_QMARK_(seq__31203_31575__$1)){
var c__5521__auto___31576 = cljs.core.chunk_first(seq__31203_31575__$1);
var G__31577 = cljs.core.chunk_rest(seq__31203_31575__$1);
var G__31578 = c__5521__auto___31576;
var G__31579 = cljs.core.count(c__5521__auto___31576);
var G__31580 = (0);
seq__31203_31560 = G__31577;
chunk__31204_31561 = G__31578;
count__31205_31562 = G__31579;
i__31206_31563 = G__31580;
continue;
} else {
var f_31581 = cljs.core.first(seq__31203_31575__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_31581], 0));


var G__31582 = cljs.core.next(seq__31203_31575__$1);
var G__31583 = null;
var G__31584 = (0);
var G__31585 = (0);
seq__31203_31560 = G__31582;
chunk__31204_31561 = G__31583;
count__31205_31562 = G__31584;
i__31206_31563 = G__31585;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_31587 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4998__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_31587], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_31587)))?cljs.core.second(arglists_31587):arglists_31587)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31214_31598 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31215_31599 = null;
var count__31216_31600 = (0);
var i__31217_31601 = (0);
while(true){
if((i__31217_31601 < count__31216_31600)){
var vec__31230_31602 = chunk__31215_31599.cljs$core$IIndexed$_nth$arity$2(null,i__31217_31601);
var name_31603 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31230_31602,(0),null);
var map__31233_31604 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31230_31602,(1),null);
var map__31233_31605__$1 = cljs.core.__destructure_map(map__31233_31604);
var doc_31606 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31233_31605__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31607 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31233_31605__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_31603], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_31607], 0));

if(cljs.core.truth_(doc_31606)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_31606], 0));
} else {
}


var G__31608 = seq__31214_31598;
var G__31609 = chunk__31215_31599;
var G__31610 = count__31216_31600;
var G__31611 = (i__31217_31601 + (1));
seq__31214_31598 = G__31608;
chunk__31215_31599 = G__31609;
count__31216_31600 = G__31610;
i__31217_31601 = G__31611;
continue;
} else {
var temp__5804__auto___31612 = cljs.core.seq(seq__31214_31598);
if(temp__5804__auto___31612){
var seq__31214_31613__$1 = temp__5804__auto___31612;
if(cljs.core.chunked_seq_QMARK_(seq__31214_31613__$1)){
var c__5521__auto___31614 = cljs.core.chunk_first(seq__31214_31613__$1);
var G__31615 = cljs.core.chunk_rest(seq__31214_31613__$1);
var G__31616 = c__5521__auto___31614;
var G__31617 = cljs.core.count(c__5521__auto___31614);
var G__31618 = (0);
seq__31214_31598 = G__31615;
chunk__31215_31599 = G__31616;
count__31216_31600 = G__31617;
i__31217_31601 = G__31618;
continue;
} else {
var vec__31236_31619 = cljs.core.first(seq__31214_31613__$1);
var name_31620 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31236_31619,(0),null);
var map__31239_31621 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31236_31619,(1),null);
var map__31239_31622__$1 = cljs.core.__destructure_map(map__31239_31621);
var doc_31623 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31239_31622__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31624 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31239_31622__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_31620], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_31624], 0));

if(cljs.core.truth_(doc_31623)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_31623], 0));
} else {
}


var G__31626 = cljs.core.next(seq__31214_31613__$1);
var G__31627 = null;
var G__31628 = (0);
var G__31629 = (0);
seq__31214_31598 = G__31626;
chunk__31215_31599 = G__31627;
count__31216_31600 = G__31628;
i__31217_31601 = G__31629;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__31242 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__31243 = null;
var count__31244 = (0);
var i__31245 = (0);
while(true){
if((i__31245 < count__31244)){
var role = chunk__31243.cljs$core$IIndexed$_nth$arity$2(null,i__31245);
var temp__5804__auto___31637__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___31637__$1)){
var spec_31638 = temp__5804__auto___31637__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_31638)], 0));
} else {
}


var G__31639 = seq__31242;
var G__31640 = chunk__31243;
var G__31641 = count__31244;
var G__31642 = (i__31245 + (1));
seq__31242 = G__31639;
chunk__31243 = G__31640;
count__31244 = G__31641;
i__31245 = G__31642;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__31242);
if(temp__5804__auto____$1){
var seq__31242__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__31242__$1)){
var c__5521__auto__ = cljs.core.chunk_first(seq__31242__$1);
var G__31643 = cljs.core.chunk_rest(seq__31242__$1);
var G__31644 = c__5521__auto__;
var G__31645 = cljs.core.count(c__5521__auto__);
var G__31646 = (0);
seq__31242 = G__31643;
chunk__31243 = G__31644;
count__31244 = G__31645;
i__31245 = G__31646;
continue;
} else {
var role = cljs.core.first(seq__31242__$1);
var temp__5804__auto___31648__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___31648__$2)){
var spec_31650 = temp__5804__auto___31648__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_31650)], 0));
} else {
}


var G__31652 = cljs.core.next(seq__31242__$1);
var G__31653 = null;
var G__31654 = (0);
var G__31655 = (0);
seq__31242 = G__31652;
chunk__31243 = G__31653;
count__31244 = G__31654;
i__31245 = G__31655;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__31265 = datafied_throwable;
var map__31265__$1 = cljs.core.__destructure_map(map__31265);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31265__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31265__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31265__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__31266 = cljs.core.last(via);
var map__31266__$1 = cljs.core.__destructure_map(map__31266);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31266__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31266__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31266__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__31267 = data;
var map__31267__$1 = cljs.core.__destructure_map(map__31267);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31267__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31267__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31267__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__31268 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__31268__$1 = cljs.core.__destructure_map(map__31268);
var top_data = map__31268__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31268__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__31292 = phase;
var G__31292__$1 = (((G__31292 instanceof cljs.core.Keyword))?G__31292.fqn:null);
switch (G__31292__$1) {
case "read-source":
var map__31294 = data;
var map__31294__$1 = cljs.core.__destructure_map(map__31294);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31294__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31294__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__31295 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__31295__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31295,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__31295);
var G__31295__$2 = (cljs.core.truth_((function (){var fexpr__31300 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__31300.cljs$core$IFn$_invoke$arity$1 ? fexpr__31300.cljs$core$IFn$_invoke$arity$1(source) : fexpr__31300.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__31295__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__31295__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31295__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__31295__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__31301 = top_data;
var G__31301__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31301,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__31301);
var G__31301__$2 = (cljs.core.truth_((function (){var fexpr__31303 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__31303.cljs$core$IFn$_invoke$arity$1 ? fexpr__31303.cljs$core$IFn$_invoke$arity$1(source) : fexpr__31303.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__31301__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__31301__$1);
var G__31301__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31301__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__31301__$2);
var G__31301__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31301__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__31301__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31301__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__31301__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__31305 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31305,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31305,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31305,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31305,(3),null);
var G__31317 = top_data;
var G__31317__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31317,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__31317);
var G__31317__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31317__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__31317__$1);
var G__31317__$3 = (cljs.core.truth_((function (){var and__4996__auto__ = source__$1;
if(cljs.core.truth_(and__4996__auto__)){
return method;
} else {
return and__4996__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31317__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__31317__$2);
var G__31317__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31317__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__31317__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31317__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__31317__$4;
}

break;
case "execution":
var vec__31342 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31342,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31342,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31342,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31342,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__31260_SHARP_){
var or__4998__auto__ = (p1__31260_SHARP_ == null);
if(or__4998__auto__){
return or__4998__auto__;
} else {
var fexpr__31353 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__31353.cljs$core$IFn$_invoke$arity$1 ? fexpr__31353.cljs$core$IFn$_invoke$arity$1(p1__31260_SHARP_) : fexpr__31353.call(null,p1__31260_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4998__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return line;
}
})();
var G__31354 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__31354__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31354,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__31354);
var G__31354__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31354__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__31354__$1);
var G__31354__$3 = (cljs.core.truth_((function (){var or__4998__auto__ = fn;
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
var and__4996__auto__ = source__$1;
if(cljs.core.truth_(and__4996__auto__)){
return method;
} else {
return and__4996__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31354__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4998__auto__ = fn;
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__31354__$2);
var G__31354__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31354__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__31354__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31354__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__31354__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31292__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__31401){
var map__31407 = p__31401;
var map__31407__$1 = cljs.core.__destructure_map(map__31407);
var triage_data = map__31407__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31407__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31407__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31407__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31407__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31407__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31407__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31407__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31407__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4998__auto__ = source;
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4998__auto__ = line;
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4998__auto__ = class$;
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__31460 = phase;
var G__31460__$1 = (((G__31460 instanceof cljs.core.Keyword))?G__31460.fqn:null);
switch (G__31460__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__31468 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__31469 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31470 = loc;
var G__31471 = (cljs.core.truth_(spec)?(function (){var sb__5643__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31477_31712 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31478_31713 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31479_31714 = true;
var _STAR_print_fn_STAR__temp_val__31480_31715 = (function (x__5644__auto__){
return sb__5643__auto__.append(x__5644__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31479_31714);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31480_31715);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__31383_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__31383_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31478_31713);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31477_31712);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5643__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__31468,G__31469,G__31470,G__31471) : format.call(null,G__31468,G__31469,G__31470,G__31471));

break;
case "macroexpansion":
var G__31504 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__31505 = cause_type;
var G__31506 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31507 = loc;
var G__31508 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__31504,G__31505,G__31506,G__31507,G__31508) : format.call(null,G__31504,G__31505,G__31506,G__31507,G__31508));

break;
case "compile-syntax-check":
var G__31509 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__31510 = cause_type;
var G__31511 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31512 = loc;
var G__31513 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__31509,G__31510,G__31511,G__31512,G__31513) : format.call(null,G__31509,G__31510,G__31511,G__31512,G__31513));

break;
case "compilation":
var G__31516 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__31517 = cause_type;
var G__31518 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31519 = loc;
var G__31520 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__31516,G__31517,G__31518,G__31519,G__31520) : format.call(null,G__31516,G__31517,G__31518,G__31519,G__31520));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__31527 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__31528 = symbol;
var G__31529 = loc;
var G__31530 = (function (){var sb__5643__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31532_31728 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31533_31729 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31534_31730 = true;
var _STAR_print_fn_STAR__temp_val__31535_31731 = (function (x__5644__auto__){
return sb__5643__auto__.append(x__5644__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31534_31730);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31535_31731);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__31396_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__31396_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31533_31729);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31532_31728);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5643__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__31527,G__31528,G__31529,G__31530) : format.call(null,G__31527,G__31528,G__31529,G__31530));
} else {
var G__31542 = "Execution error%s at %s(%s).\n%s\n";
var G__31543 = cause_type;
var G__31544 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31545 = loc;
var G__31546 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__31542,G__31543,G__31544,G__31545,G__31546) : format.call(null,G__31542,G__31543,G__31544,G__31545,G__31546));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31460__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
