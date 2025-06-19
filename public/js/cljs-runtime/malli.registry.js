goog.provide('malli.registry');
/**
 * @define {string}
 */
malli.registry.mode = goog.define("malli.registry.mode","default");
/**
 * @define {string}
 */
malli.registry.type = goog.define("malli.registry.type","default");

/**
 * @interface
 */
malli.registry.Registry = function(){};

var malli$registry$Registry$_schema$dyn_25104 = (function (this$,type){
var x__5346__auto__ = (((this$ == null))?null:this$);
var m__5347__auto__ = (malli.registry._schema[goog.typeOf(x__5346__auto__)]);
if((!((m__5347__auto__ == null)))){
return (m__5347__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5347__auto__.cljs$core$IFn$_invoke$arity$2(this$,type) : m__5347__auto__.call(null,this$,type));
} else {
var m__5345__auto__ = (malli.registry._schema["_"]);
if((!((m__5345__auto__ == null)))){
return (m__5345__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5345__auto__.cljs$core$IFn$_invoke$arity$2(this$,type) : m__5345__auto__.call(null,this$,type));
} else {
throw cljs.core.missing_protocol("Registry.-schema",this$);
}
}
});
/**
 * returns the schema from a registry
 */
malli.registry._schema = (function malli$registry$_schema(this$,type){
if((((!((this$ == null)))) && ((!((this$.malli$registry$Registry$_schema$arity$2 == null)))))){
return this$.malli$registry$Registry$_schema$arity$2(this$,type);
} else {
return malli$registry$Registry$_schema$dyn_25104(this$,type);
}
});

var malli$registry$Registry$_schemas$dyn_25105 = (function (this$){
var x__5346__auto__ = (((this$ == null))?null:this$);
var m__5347__auto__ = (malli.registry._schemas[goog.typeOf(x__5346__auto__)]);
if((!((m__5347__auto__ == null)))){
return (m__5347__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5347__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5347__auto__.call(null,this$));
} else {
var m__5345__auto__ = (malli.registry._schemas["_"]);
if((!((m__5345__auto__ == null)))){
return (m__5345__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5345__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5345__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Registry.-schemas",this$);
}
}
});
/**
 * returns all schemas from a registry
 */
malli.registry._schemas = (function malli$registry$_schemas(this$){
if((((!((this$ == null)))) && ((!((this$.malli$registry$Registry$_schemas$arity$1 == null)))))){
return this$.malli$registry$Registry$_schemas$arity$1(this$);
} else {
return malli$registry$Registry$_schemas$dyn_25105(this$);
}
});

malli.registry.registry_QMARK_ = (function malli$registry$registry_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.malli$registry$Registry$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry24890 = (function (m,fm,meta24891){
this.m = m;
this.fm = fm;
this.meta24891 = meta24891;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry24890.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24892,meta24891__$1){
var self__ = this;
var _24892__$1 = this;
return (new malli.registry.t_malli$registry24890(self__.m,self__.fm,meta24891__$1));
}));

(malli.registry.t_malli$registry24890.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24892){
var self__ = this;
var _24892__$1 = this;
return self__.meta24891;
}));

(malli.registry.t_malli$registry24890.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry24890.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return self__.fm.get(type);
}));

(malli.registry.t_malli$registry24890.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry24890.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"fm","fm",-1190690268,null),new cljs.core.Symbol(null,"meta24891","meta24891",-1780511101,null)], null);
}));

(malli.registry.t_malli$registry24890.cljs$lang$type = true);

(malli.registry.t_malli$registry24890.cljs$lang$ctorStr = "malli.registry/t_malli$registry24890");

(malli.registry.t_malli$registry24890.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"malli.registry/t_malli$registry24890");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry24890.
 */
malli.registry.__GT_t_malli$registry24890 = (function malli$registry$__GT_t_malli$registry24890(m,fm,meta24891){
return (new malli.registry.t_malli$registry24890(m,fm,meta24891));
});


malli.registry.fast_registry = (function malli$registry$fast_registry(m){
var fm = m;
return (new malli.registry.t_malli$registry24890(m,fm,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry24899 = (function (m,meta24900){
this.m = m;
this.meta24900 = meta24900;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry24899.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24901,meta24900__$1){
var self__ = this;
var _24901__$1 = this;
return (new malli.registry.t_malli$registry24899(self__.m,meta24900__$1));
}));

(malli.registry.t_malli$registry24899.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24901){
var self__ = this;
var _24901__$1 = this;
return self__.meta24900;
}));

(malli.registry.t_malli$registry24899.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry24899.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return (self__.m.cljs$core$IFn$_invoke$arity$1 ? self__.m.cljs$core$IFn$_invoke$arity$1(type) : self__.m.call(null,type));
}));

(malli.registry.t_malli$registry24899.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry24899.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"meta24900","meta24900",1213911702,null)], null);
}));

(malli.registry.t_malli$registry24899.cljs$lang$type = true);

(malli.registry.t_malli$registry24899.cljs$lang$ctorStr = "malli.registry/t_malli$registry24899");

(malli.registry.t_malli$registry24899.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"malli.registry/t_malli$registry24899");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry24899.
 */
malli.registry.__GT_t_malli$registry24899 = (function malli$registry$__GT_t_malli$registry24899(m,meta24900){
return (new malli.registry.t_malli$registry24899(m,meta24900));
});


malli.registry.simple_registry = (function malli$registry$simple_registry(m){
return (new malli.registry.t_malli$registry24899(m,cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry.registry = (function malli$registry$registry(_QMARK_registry){
if((_QMARK_registry == null)){
return null;
} else {
if(malli.registry.registry_QMARK_(_QMARK_registry)){
return _QMARK_registry;
} else {
if(cljs.core.map_QMARK_(_QMARK_registry)){
return malli.registry.simple_registry(_QMARK_registry);
} else {
if((((!((_QMARK_registry == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === _QMARK_registry.malli$registry$Registry$))))?true:(((!_QMARK_registry.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(malli.registry.Registry,_QMARK_registry):false)):cljs.core.native_satisfies_QMARK_(malli.registry.Registry,_QMARK_registry))){
return _QMARK_registry;
} else {
return null;
}
}
}
}
});
malli.registry.registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(malli.registry.simple_registry(cljs.core.PersistentArrayMap.EMPTY));
malli.registry.set_default_registry_BANG_ = (function malli$registry$set_default_registry_BANG_(_QMARK_registry){
if((!((malli.registry.mode === "strict")))){
return cljs.core.reset_BANG_(malli.registry.registry_STAR_,malli.registry.registry(_QMARK_registry));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("can't set default registry, invalid mode",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mode","mode",654403691),malli.registry.mode,new cljs.core.Keyword(null,"type","type",1174270348),malli.registry.type], null));
}
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry24910 = (function (meta24911){
this.meta24911 = meta24911;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry24910.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24912,meta24911__$1){
var self__ = this;
var _24912__$1 = this;
return (new malli.registry.t_malli$registry24910(meta24911__$1));
}));

(malli.registry.t_malli$registry24910.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24912){
var self__ = this;
var _24912__$1 = this;
return self__.meta24911;
}));

(malli.registry.t_malli$registry24910.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry24910.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(cljs.core.deref(malli.registry.registry_STAR_),type);
}));

(malli.registry.t_malli$registry24910.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(cljs.core.deref(malli.registry.registry_STAR_));
}));

(malli.registry.t_malli$registry24910.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta24911","meta24911",-1233813597,null)], null);
}));

(malli.registry.t_malli$registry24910.cljs$lang$type = true);

(malli.registry.t_malli$registry24910.cljs$lang$ctorStr = "malli.registry/t_malli$registry24910");

(malli.registry.t_malli$registry24910.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"malli.registry/t_malli$registry24910");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry24910.
 */
malli.registry.__GT_t_malli$registry24910 = (function malli$registry$__GT_t_malli$registry24910(meta24911){
return (new malli.registry.t_malli$registry24910(meta24911));
});


malli.registry.custom_default_registry = (function malli$registry$custom_default_registry(){
return (new malli.registry.t_malli$registry24910(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry24919 = (function (_QMARK_registries,registries,meta24920){
this._QMARK_registries = _QMARK_registries;
this.registries = registries;
this.meta24920 = meta24920;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry24919.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24921,meta24920__$1){
var self__ = this;
var _24921__$1 = this;
return (new malli.registry.t_malli$registry24919(self__._QMARK_registries,self__.registries,meta24920__$1));
}));

(malli.registry.t_malli$registry24919.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24921){
var self__ = this;
var _24921__$1 = this;
return self__.meta24920;
}));

(malli.registry.t_malli$registry24919.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry24919.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return cljs.core.some((function (p1__24917_SHARP_){
return malli.registry._schema(p1__24917_SHARP_,type);
}),self__.registries);
}));

(malli.registry.t_malli$registry24919.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(malli.registry._schemas,cljs.core.reverse(self__.registries)));
}));

(malli.registry.t_malli$registry24919.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?registries","?registries",2135368100,null),new cljs.core.Symbol(null,"registries","registries",-1366064418,null),new cljs.core.Symbol(null,"meta24920","meta24920",1545885574,null)], null);
}));

(malli.registry.t_malli$registry24919.cljs$lang$type = true);

(malli.registry.t_malli$registry24919.cljs$lang$ctorStr = "malli.registry/t_malli$registry24919");

(malli.registry.t_malli$registry24919.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"malli.registry/t_malli$registry24919");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry24919.
 */
malli.registry.__GT_t_malli$registry24919 = (function malli$registry$__GT_t_malli$registry24919(_QMARK_registries,registries,meta24920){
return (new malli.registry.t_malli$registry24919(_QMARK_registries,registries,meta24920));
});


malli.registry.composite_registry = (function malli$registry$composite_registry(var_args){
var args__5728__auto__ = [];
var len__5722__auto___25115 = arguments.length;
var i__5723__auto___25116 = (0);
while(true){
if((i__5723__auto___25116 < len__5722__auto___25115)){
args__5728__auto__.push((arguments[i__5723__auto___25116]));

var G__25117 = (i__5723__auto___25116 + (1));
i__5723__auto___25116 = G__25117;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic = (function (_QMARK_registries){
var registries = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(malli.registry.registry,_QMARK_registries);
return (new malli.registry.t_malli$registry24919(_QMARK_registries,registries,cljs.core.PersistentArrayMap.EMPTY));
}));

(malli.registry.composite_registry.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(malli.registry.composite_registry.cljs$lang$applyTo = (function (seq24918){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24918));
}));


/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry24944 = (function (db,meta24945){
this.db = db;
this.meta24945 = meta24945;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry24944.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24946,meta24945__$1){
var self__ = this;
var _24946__$1 = this;
return (new malli.registry.t_malli$registry24944(self__.db,meta24945__$1));
}));

(malli.registry.t_malli$registry24944.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24946){
var self__ = this;
var _24946__$1 = this;
return self__.meta24945;
}));

(malli.registry.t_malli$registry24944.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry24944.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(cljs.core.deref(self__.db)),type);
}));

(malli.registry.t_malli$registry24944.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(cljs.core.deref(self__.db)));
}));

(malli.registry.t_malli$registry24944.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"meta24945","meta24945",1604471613,null)], null);
}));

(malli.registry.t_malli$registry24944.cljs$lang$type = true);

(malli.registry.t_malli$registry24944.cljs$lang$ctorStr = "malli.registry/t_malli$registry24944");

(malli.registry.t_malli$registry24944.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"malli.registry/t_malli$registry24944");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry24944.
 */
malli.registry.__GT_t_malli$registry24944 = (function malli$registry$__GT_t_malli$registry24944(db,meta24945){
return (new malli.registry.t_malli$registry24944(db,meta24945));
});


malli.registry.mutable_registry = (function malli$registry$mutable_registry(db){
return (new malli.registry.t_malli$registry24944(db,cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry._STAR_registry_STAR_ = cljs.core.PersistentArrayMap.EMPTY;

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry24991 = (function (meta24992){
this.meta24992 = meta24992;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry24991.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24993,meta24992__$1){
var self__ = this;
var _24993__$1 = this;
return (new malli.registry.t_malli$registry24991(meta24992__$1));
}));

(malli.registry.t_malli$registry24991.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24993){
var self__ = this;
var _24993__$1 = this;
return self__.meta24992;
}));

(malli.registry.t_malli$registry24991.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry24991.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(malli.registry._STAR_registry_STAR_),type);
}));

(malli.registry.t_malli$registry24991.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(malli.registry._STAR_registry_STAR_));
}));

(malli.registry.t_malli$registry24991.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta24992","meta24992",-369702300,null)], null);
}));

(malli.registry.t_malli$registry24991.cljs$lang$type = true);

(malli.registry.t_malli$registry24991.cljs$lang$ctorStr = "malli.registry/t_malli$registry24991");

(malli.registry.t_malli$registry24991.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"malli.registry/t_malli$registry24991");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry24991.
 */
malli.registry.__GT_t_malli$registry24991 = (function malli$registry$__GT_t_malli$registry24991(meta24992){
return (new malli.registry.t_malli$registry24991(meta24992));
});


malli.registry.dynamic_registry = (function malli$registry$dynamic_registry(){
return (new malli.registry.t_malli$registry24991(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry25055 = (function (default_registry,provider,cache_STAR_,registry_STAR_,meta25056){
this.default_registry = default_registry;
this.provider = provider;
this.cache_STAR_ = cache_STAR_;
this.registry_STAR_ = registry_STAR_;
this.meta25056 = meta25056;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry25055.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25057,meta25056__$1){
var self__ = this;
var _25057__$1 = this;
return (new malli.registry.t_malli$registry25055(self__.default_registry,self__.provider,self__.cache_STAR_,self__.registry_STAR_,meta25056__$1));
}));

(malli.registry.t_malli$registry25055.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25057){
var self__ = this;
var _25057__$1 = this;
return self__.meta25056;
}));

(malli.registry.t_malli$registry25055.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry25055.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var or__4998__auto__ = (function (){var fexpr__25070 = cljs.core.deref(self__.cache_STAR_);
return (fexpr__25070.cljs$core$IFn$_invoke$arity$1 ? fexpr__25070.cljs$core$IFn$_invoke$arity$1(name) : fexpr__25070.call(null,name));
})();
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
var temp__5804__auto__ = (function (){var G__25074 = name;
var G__25075 = cljs.core.deref(self__.registry_STAR_);
return (self__.provider.cljs$core$IFn$_invoke$arity$2 ? self__.provider.cljs$core$IFn$_invoke$arity$2(G__25074,G__25075) : self__.provider.call(null,G__25074,G__25075));
})();
if(cljs.core.truth_(temp__5804__auto__)){
var schema = temp__5804__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cache_STAR_,cljs.core.assoc,name,schema);

return schema;
} else {
return null;
}
}
}));

(malli.registry.t_malli$registry25055.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.cache_STAR_);
}));

(malli.registry.t_malli$registry25055.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"default-registry","default-registry",732204441,null),new cljs.core.Symbol(null,"provider","provider",1338474627,null),new cljs.core.Symbol(null,"cache*","cache*",-548597526,null),new cljs.core.Symbol(null,"registry*","registry*",-268031273,null),new cljs.core.Symbol(null,"meta25056","meta25056",1318552678,null)], null);
}));

(malli.registry.t_malli$registry25055.cljs$lang$type = true);

(malli.registry.t_malli$registry25055.cljs$lang$ctorStr = "malli.registry/t_malli$registry25055");

(malli.registry.t_malli$registry25055.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"malli.registry/t_malli$registry25055");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry25055.
 */
malli.registry.__GT_t_malli$registry25055 = (function malli$registry$__GT_t_malli$registry25055(default_registry,provider,cache_STAR_,registry_STAR_,meta25056){
return (new malli.registry.t_malli$registry25055(default_registry,provider,cache_STAR_,registry_STAR_,meta25056));
});


malli.registry.lazy_registry = (function malli$registry$lazy_registry(default_registry,provider){
var cache_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(default_registry);
return cljs.core.reset_BANG_(registry_STAR_,malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default_registry,(new malli.registry.t_malli$registry25055(default_registry,provider,cache_STAR_,registry_STAR_,cljs.core.PersistentArrayMap.EMPTY))], 0)));
});
/**
 * finds a schema from a registry
 */
malli.registry.schema = (function malli$registry$schema(registry,type){
return malli.registry._schema(registry,type);
});
/**
 * finds all schemas from a registry
 */
malli.registry.schemas = (function malli$registry$schemas(registry){
return malli.registry._schemas(registry);
});

//# sourceMappingURL=malli.registry.js.map
