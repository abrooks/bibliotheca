goog.provide('borkdude.dynaload');

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
borkdude.dynaload.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(borkdude.dynaload.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
if((!((self__.cached == null)))){
return self__.cached;
} else {
var x = (self__.f.cljs$core$IFn$_invoke$arity$0 ? self__.f.cljs$core$IFn$_invoke$arity$0() : self__.f.call(null));
if((x == null)){
} else {
(self__.cached = x);
}

return x;
}
}));

(borkdude.dynaload.LazyVar.prototype.call = (function (unused__11798__auto__){
var self__ = this;
var self__ = this;
var G__25114 = (arguments.length - (1));
switch (G__25114) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
case (2):
return self__.cljs$core$IFn$_invoke$arity$2((arguments[(1)]),(arguments[(2)]));

break;
case (3):
return self__.cljs$core$IFn$_invoke$arity$3((arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case (4):
return self__.cljs$core$IFn$_invoke$arity$4((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case (5):
return self__.cljs$core$IFn$_invoke$arity$5((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case (6):
return self__.cljs$core$IFn$_invoke$arity$6((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
case (7):
return self__.cljs$core$IFn$_invoke$arity$7((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]));

break;
case (8):
return self__.cljs$core$IFn$_invoke$arity$8((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]));

break;
case (9):
return self__.cljs$core$IFn$_invoke$arity$9((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]));

break;
case (10):
return self__.cljs$core$IFn$_invoke$arity$10((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]));

break;
case (11):
return self__.cljs$core$IFn$_invoke$arity$11((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]));

break;
case (12):
return self__.cljs$core$IFn$_invoke$arity$12((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]));

break;
case (13):
return self__.cljs$core$IFn$_invoke$arity$13((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]));

break;
case (14):
return self__.cljs$core$IFn$_invoke$arity$14((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]));

break;
case (15):
return self__.cljs$core$IFn$_invoke$arity$15((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]));

break;
case (16):
return self__.cljs$core$IFn$_invoke$arity$16((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]));

break;
case (17):
return self__.cljs$core$IFn$_invoke$arity$17((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]),(arguments[(17)]));

break;
case (18):
return self__.cljs$core$IFn$_invoke$arity$18((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]),(arguments[(17)]),(arguments[(18)]));

break;
case (19):
return self__.cljs$core$IFn$_invoke$arity$19((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]),(arguments[(17)]),(arguments[(18)]),(arguments[(19)]));

break;
case (20):
return self__.cljs$core$IFn$_invoke$arity$20((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]),(arguments[(17)]),(arguments[(18)]),(arguments[(19)]),(arguments[(20)]));

break;
case (21):
return self__.cljs$core$IFn$_invoke$arity$21((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]),(arguments[(17)]),(arguments[(18)]),(arguments[(19)]),(arguments[(20)]),(arguments[(21)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(borkdude.dynaload.LazyVar.prototype.apply = (function (self__,args25113){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args25113)));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var this$ = this;
var fexpr__25161 = cljs.core.deref(this$);
return (fexpr__25161.cljs$core$IFn$_invoke$arity$0 ? fexpr__25161.cljs$core$IFn$_invoke$arity$0() : fexpr__25161.call(null));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var self__ = this;
var this$ = this;
var fexpr__25162 = cljs.core.deref(this$);
return (fexpr__25162.cljs$core$IFn$_invoke$arity$1 ? fexpr__25162.cljs$core$IFn$_invoke$arity$1(a) : fexpr__25162.call(null,a));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var self__ = this;
var this$ = this;
var fexpr__25167 = cljs.core.deref(this$);
return (fexpr__25167.cljs$core$IFn$_invoke$arity$2 ? fexpr__25167.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__25167.call(null,a,b));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var self__ = this;
var this$ = this;
var fexpr__25169 = cljs.core.deref(this$);
return (fexpr__25169.cljs$core$IFn$_invoke$arity$3 ? fexpr__25169.cljs$core$IFn$_invoke$arity$3(a,b,c) : fexpr__25169.call(null,a,b,c));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var self__ = this;
var this$ = this;
var fexpr__25176 = cljs.core.deref(this$);
return (fexpr__25176.cljs$core$IFn$_invoke$arity$4 ? fexpr__25176.cljs$core$IFn$_invoke$arity$4(a,b,c,d) : fexpr__25176.call(null,a,b,c,d));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
var self__ = this;
var this$ = this;
var fexpr__25178 = cljs.core.deref(this$);
return (fexpr__25178.cljs$core$IFn$_invoke$arity$5 ? fexpr__25178.cljs$core$IFn$_invoke$arity$5(a,b,c,d,e) : fexpr__25178.call(null,a,b,c,d,e));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f__$1){
var self__ = this;
var this$ = this;
var fexpr__25182 = cljs.core.deref(this$);
return (fexpr__25182.cljs$core$IFn$_invoke$arity$6 ? fexpr__25182.cljs$core$IFn$_invoke$arity$6(a,b,c,d,e,f__$1) : fexpr__25182.call(null,a,b,c,d,e,f__$1));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f__$1,g){
var self__ = this;
var this$ = this;
var fexpr__25186 = cljs.core.deref(this$);
return (fexpr__25186.cljs$core$IFn$_invoke$arity$7 ? fexpr__25186.cljs$core$IFn$_invoke$arity$7(a,b,c,d,e,f__$1,g) : fexpr__25186.call(null,a,b,c,d,e,f__$1,g));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f__$1,g,h){
var self__ = this;
var this$ = this;
var fexpr__25188 = cljs.core.deref(this$);
return (fexpr__25188.cljs$core$IFn$_invoke$arity$8 ? fexpr__25188.cljs$core$IFn$_invoke$arity$8(a,b,c,d,e,f__$1,g,h) : fexpr__25188.call(null,a,b,c,d,e,f__$1,g,h));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f__$1,g,h,i){
var self__ = this;
var this$ = this;
var fexpr__25194 = cljs.core.deref(this$);
return (fexpr__25194.cljs$core$IFn$_invoke$arity$9 ? fexpr__25194.cljs$core$IFn$_invoke$arity$9(a,b,c,d,e,f__$1,g,h,i) : fexpr__25194.call(null,a,b,c,d,e,f__$1,g,h,i));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f__$1,g,h,i,j){
var self__ = this;
var this$ = this;
var fexpr__25195 = cljs.core.deref(this$);
return (fexpr__25195.cljs$core$IFn$_invoke$arity$10 ? fexpr__25195.cljs$core$IFn$_invoke$arity$10(a,b,c,d,e,f__$1,g,h,i,j) : fexpr__25195.call(null,a,b,c,d,e,f__$1,g,h,i,j));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f__$1,g,h,i,j,k){
var self__ = this;
var this$ = this;
var fexpr__25202 = cljs.core.deref(this$);
return (fexpr__25202.cljs$core$IFn$_invoke$arity$11 ? fexpr__25202.cljs$core$IFn$_invoke$arity$11(a,b,c,d,e,f__$1,g,h,i,j,k) : fexpr__25202.call(null,a,b,c,d,e,f__$1,g,h,i,j,k));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l){
var self__ = this;
var this$ = this;
var fexpr__25210 = cljs.core.deref(this$);
return (fexpr__25210.cljs$core$IFn$_invoke$arity$12 ? fexpr__25210.cljs$core$IFn$_invoke$arity$12(a,b,c,d,e,f__$1,g,h,i,j,k,l) : fexpr__25210.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m){
var self__ = this;
var this$ = this;
var fexpr__25214 = cljs.core.deref(this$);
return (fexpr__25214.cljs$core$IFn$_invoke$arity$13 ? fexpr__25214.cljs$core$IFn$_invoke$arity$13(a,b,c,d,e,f__$1,g,h,i,j,k,l,m) : fexpr__25214.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n){
var self__ = this;
var this$ = this;
var fexpr__25218 = cljs.core.deref(this$);
return (fexpr__25218.cljs$core$IFn$_invoke$arity$14 ? fexpr__25218.cljs$core$IFn$_invoke$arity$14(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n) : fexpr__25218.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o){
var self__ = this;
var this$ = this;
var fexpr__25224 = cljs.core.deref(this$);
return (fexpr__25224.cljs$core$IFn$_invoke$arity$15 ? fexpr__25224.cljs$core$IFn$_invoke$arity$15(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o) : fexpr__25224.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var this$ = this;
var fexpr__25225 = cljs.core.deref(this$);
return (fexpr__25225.cljs$core$IFn$_invoke$arity$16 ? fexpr__25225.cljs$core$IFn$_invoke$arity$16(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p) : fexpr__25225.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var this$ = this;
var fexpr__25226 = cljs.core.deref(this$);
return (fexpr__25226.cljs$core$IFn$_invoke$arity$17 ? fexpr__25226.cljs$core$IFn$_invoke$arity$17(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q) : fexpr__25226.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var this$ = this;
var fexpr__25227 = cljs.core.deref(this$);
return (fexpr__25227.cljs$core$IFn$_invoke$arity$18 ? fexpr__25227.cljs$core$IFn$_invoke$arity$18(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r) : fexpr__25227.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var this$ = this;
var fexpr__25228 = cljs.core.deref(this$);
return (fexpr__25228.cljs$core$IFn$_invoke$arity$19 ? fexpr__25228.cljs$core$IFn$_invoke$arity$19(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s) : fexpr__25228.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var this$ = this;
var fexpr__25229 = cljs.core.deref(this$);
return (fexpr__25229.cljs$core$IFn$_invoke$arity$20 ? fexpr__25229.cljs$core$IFn$_invoke$arity$20(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t) : fexpr__25229.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self__ = this;
var this$ = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.deref(this$),a,b,c,d,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
}));

(borkdude.dynaload.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(borkdude.dynaload.LazyVar.cljs$lang$type = true);

(borkdude.dynaload.LazyVar.cljs$lang$ctorStr = "borkdude.dynaload/LazyVar");

(borkdude.dynaload.LazyVar.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"borkdude.dynaload/LazyVar");
}));

/**
 * Positional factory function for borkdude.dynaload/LazyVar.
 */
borkdude.dynaload.__GT_LazyVar = (function borkdude$dynaload$__GT_LazyVar(f,cached){
return (new borkdude.dynaload.LazyVar(f,cached));
});


//# sourceMappingURL=borkdude.dynaload.js.map
