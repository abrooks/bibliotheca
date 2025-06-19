goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28078 = (function (f,blockable,meta28079){
this.f = f;
this.blockable = blockable;
this.meta28079 = meta28079;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28078.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28080,meta28079__$1){
var self__ = this;
var _28080__$1 = this;
return (new cljs.core.async.t_cljs$core$async28078(self__.f,self__.blockable,meta28079__$1));
}));

(cljs.core.async.t_cljs$core$async28078.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28080){
var self__ = this;
var _28080__$1 = this;
return self__.meta28079;
}));

(cljs.core.async.t_cljs$core$async28078.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28078.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28078.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async28078.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async28078.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta28079","meta28079",2124363541,null)], null);
}));

(cljs.core.async.t_cljs$core$async28078.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28078.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28078");

(cljs.core.async.t_cljs$core$async28078.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"cljs.core.async/t_cljs$core$async28078");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28078.
 */
cljs.core.async.__GT_t_cljs$core$async28078 = (function cljs$core$async$__GT_t_cljs$core$async28078(f,blockable,meta28079){
return (new cljs.core.async.t_cljs$core$async28078(f,blockable,meta28079));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__28073 = arguments.length;
switch (G__28073) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async28078(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__28111 = arguments.length;
switch (G__28111) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__28126 = arguments.length;
switch (G__28126) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__28136 = arguments.length;
switch (G__28136) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_30661 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_30661) : fn1.call(null,val_30661));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_30661) : fn1.call(null,val_30661));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__28143 = arguments.length;
switch (G__28143) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5589__auto___30685 = n;
var x_30686 = (0);
while(true){
if((x_30686 < n__5589__auto___30685)){
(a[x_30686] = x_30686);

var G__30690 = (x_30686 + (1));
x_30686 = G__30690;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28145 = (function (flag,meta28146){
this.flag = flag;
this.meta28146 = meta28146;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28145.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28147,meta28146__$1){
var self__ = this;
var _28147__$1 = this;
return (new cljs.core.async.t_cljs$core$async28145(self__.flag,meta28146__$1));
}));

(cljs.core.async.t_cljs$core$async28145.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28147){
var self__ = this;
var _28147__$1 = this;
return self__.meta28146;
}));

(cljs.core.async.t_cljs$core$async28145.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28145.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async28145.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28145.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async28145.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28146","meta28146",-443329124,null)], null);
}));

(cljs.core.async.t_cljs$core$async28145.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28145.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28145");

(cljs.core.async.t_cljs$core$async28145.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"cljs.core.async/t_cljs$core$async28145");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28145.
 */
cljs.core.async.__GT_t_cljs$core$async28145 = (function cljs$core$async$__GT_t_cljs$core$async28145(flag,meta28146){
return (new cljs.core.async.t_cljs$core$async28145(flag,meta28146));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async28145(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28162 = (function (flag,cb,meta28163){
this.flag = flag;
this.cb = cb;
this.meta28163 = meta28163;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28162.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28164,meta28163__$1){
var self__ = this;
var _28164__$1 = this;
return (new cljs.core.async.t_cljs$core$async28162(self__.flag,self__.cb,meta28163__$1));
}));

(cljs.core.async.t_cljs$core$async28162.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28164){
var self__ = this;
var _28164__$1 = this;
return self__.meta28163;
}));

(cljs.core.async.t_cljs$core$async28162.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28162.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async28162.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28162.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async28162.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28163","meta28163",1055034454,null)], null);
}));

(cljs.core.async.t_cljs$core$async28162.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28162.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28162");

(cljs.core.async.t_cljs$core$async28162.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"cljs.core.async/t_cljs$core$async28162");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28162.
 */
cljs.core.async.__GT_t_cljs$core$async28162 = (function cljs$core$async$__GT_t_cljs$core$async28162(flag,cb,meta28163){
return (new cljs.core.async.t_cljs$core$async28162(flag,cb,meta28163));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async28162(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28167_SHARP_){
var G__28169 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28167_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__28169) : fret.call(null,G__28169));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28168_SHARP_){
var G__28170 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28168_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__28170) : fret.call(null,G__28170));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4998__auto__ = wport;
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return port;
}
})()], null));
} else {
var G__30716 = (i + (1));
i = G__30716;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4998__auto__ = ret;
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__4996__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4996__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4996__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5728__auto__ = [];
var len__5722__auto___30726 = arguments.length;
var i__5723__auto___30727 = (0);
while(true){
if((i__5723__auto___30727 < len__5722__auto___30726)){
args__5728__auto__.push((arguments[i__5723__auto___30727]));

var G__30728 = (i__5723__auto___30727 + (1));
i__5723__auto___30727 = G__30728;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((1) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5729__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28174){
var map__28175 = p__28174;
var map__28175__$1 = cljs.core.__destructure_map(map__28175);
var opts = map__28175__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28171){
var G__28172 = cljs.core.first(seq28171);
var seq28171__$1 = cljs.core.next(seq28171);
var self__5707__auto__ = this;
return self__5707__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28172,seq28171__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__28183 = arguments.length;
switch (G__28183) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__27961__auto___30733 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27962__auto__ = (function (){var switch__27550__auto__ = (function (state_28213){
var state_val_28214 = (state_28213[(1)]);
if((state_val_28214 === (7))){
var inst_28208 = (state_28213[(2)]);
var state_28213__$1 = state_28213;
var statearr_28216_30734 = state_28213__$1;
(statearr_28216_30734[(2)] = inst_28208);

(statearr_28216_30734[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28214 === (1))){
var state_28213__$1 = state_28213;
var statearr_28217_30735 = state_28213__$1;
(statearr_28217_30735[(2)] = null);

(statearr_28217_30735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28214 === (4))){
var inst_28191 = (state_28213[(7)]);
var inst_28191__$1 = (state_28213[(2)]);
var inst_28192 = (inst_28191__$1 == null);
var state_28213__$1 = (function (){var statearr_28218 = state_28213;
(statearr_28218[(7)] = inst_28191__$1);

return statearr_28218;
})();
if(cljs.core.truth_(inst_28192)){
var statearr_28219_30736 = state_28213__$1;
(statearr_28219_30736[(1)] = (5));

} else {
var statearr_28220_30737 = state_28213__$1;
(statearr_28220_30737[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28214 === (13))){
var state_28213__$1 = state_28213;
var statearr_28221_30738 = state_28213__$1;
(statearr_28221_30738[(2)] = null);

(statearr_28221_30738[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28214 === (6))){
var inst_28191 = (state_28213[(7)]);
var state_28213__$1 = state_28213;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28213__$1,(11),to,inst_28191);
} else {
if((state_val_28214 === (3))){
var inst_28210 = (state_28213[(2)]);
var state_28213__$1 = state_28213;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28213__$1,inst_28210);
} else {
if((state_val_28214 === (12))){
var state_28213__$1 = state_28213;
var statearr_28223_30739 = state_28213__$1;
(statearr_28223_30739[(2)] = null);

(statearr_28223_30739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28214 === (2))){
var state_28213__$1 = state_28213;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28213__$1,(4),from);
} else {
if((state_val_28214 === (11))){
var inst_28201 = (state_28213[(2)]);
var state_28213__$1 = state_28213;
if(cljs.core.truth_(inst_28201)){
var statearr_28225_30740 = state_28213__$1;
(statearr_28225_30740[(1)] = (12));

} else {
var statearr_28226_30741 = state_28213__$1;
(statearr_28226_30741[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28214 === (9))){
var state_28213__$1 = state_28213;
var statearr_28230_30742 = state_28213__$1;
(statearr_28230_30742[(2)] = null);

(statearr_28230_30742[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28214 === (5))){
var state_28213__$1 = state_28213;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28232_30743 = state_28213__$1;
(statearr_28232_30743[(1)] = (8));

} else {
var statearr_28233_30744 = state_28213__$1;
(statearr_28233_30744[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28214 === (14))){
var inst_28206 = (state_28213[(2)]);
var state_28213__$1 = state_28213;
var statearr_28234_30745 = state_28213__$1;
(statearr_28234_30745[(2)] = inst_28206);

(statearr_28234_30745[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28214 === (10))){
var inst_28198 = (state_28213[(2)]);
var state_28213__$1 = state_28213;
var statearr_28235_30746 = state_28213__$1;
(statearr_28235_30746[(2)] = inst_28198);

(statearr_28235_30746[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28214 === (8))){
var inst_28195 = cljs.core.async.close_BANG_(to);
var state_28213__$1 = state_28213;
var statearr_28236_30748 = state_28213__$1;
(statearr_28236_30748[(2)] = inst_28195);

(statearr_28236_30748[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27551__auto__ = null;
var cljs$core$async$state_machine__27551__auto____0 = (function (){
var statearr_28237 = [null,null,null,null,null,null,null,null];
(statearr_28237[(0)] = cljs$core$async$state_machine__27551__auto__);

(statearr_28237[(1)] = (1));

return statearr_28237;
});
var cljs$core$async$state_machine__27551__auto____1 = (function (state_28213){
while(true){
var ret_value__27552__auto__ = (function (){try{while(true){
var result__27553__auto__ = switch__27550__auto__(state_28213);
if(cljs.core.keyword_identical_QMARK_(result__27553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27553__auto__;
}
break;
}
}catch (e28238){var ex__27554__auto__ = e28238;
var statearr_28239_30750 = state_28213;
(statearr_28239_30750[(2)] = ex__27554__auto__);


if(cljs.core.seq((state_28213[(4)]))){
var statearr_28240_30751 = state_28213;
(statearr_28240_30751[(1)] = cljs.core.first((state_28213[(4)])));

} else {
throw ex__27554__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30752 = state_28213;
state_28213 = G__30752;
continue;
} else {
return ret_value__27552__auto__;
}
break;
}
});
cljs$core$async$state_machine__27551__auto__ = function(state_28213){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27551__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27551__auto____1.call(this,state_28213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27551__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27551__auto____0;
cljs$core$async$state_machine__27551__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27551__auto____1;
return cljs$core$async$state_machine__27551__auto__;
})()
})();
var state__27963__auto__ = (function (){var statearr_28241 = f__27962__auto__();
(statearr_28241[(6)] = c__27961__auto___30733);

return statearr_28241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27963__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__28245){
var vec__28246 = p__28245;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28246,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28246,(1),null);
var job = vec__28246;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__27961__auto___30755 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27962__auto__ = (function (){var switch__27550__auto__ = (function (state_28257){
var state_val_28258 = (state_28257[(1)]);
if((state_val_28258 === (1))){
var state_28257__$1 = state_28257;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28257__$1,(2),res,v);
} else {
if((state_val_28258 === (2))){
var inst_28254 = (state_28257[(2)]);
var inst_28255 = cljs.core.async.close_BANG_(res);
var state_28257__$1 = (function (){var statearr_28260 = state_28257;
(statearr_28260[(7)] = inst_28254);

return statearr_28260;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_28257__$1,inst_28255);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27551__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27551__auto____0 = (function (){
var statearr_28261 = [null,null,null,null,null,null,null,null];
(statearr_28261[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27551__auto__);

(statearr_28261[(1)] = (1));

return statearr_28261;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27551__auto____1 = (function (state_28257){
while(true){
var ret_value__27552__auto__ = (function (){try{while(true){
var result__27553__auto__ = switch__27550__auto__(state_28257);
if(cljs.core.keyword_identical_QMARK_(result__27553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27553__auto__;
}
break;
}
}catch (e28262){var ex__27554__auto__ = e28262;
var statearr_28263_30760 = state_28257;
(statearr_28263_30760[(2)] = ex__27554__auto__);


if(cljs.core.seq((state_28257[(4)]))){
var statearr_28264_30761 = state_28257;
(statearr_28264_30761[(1)] = cljs.core.first((state_28257[(4)])));

} else {
throw ex__27554__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30762 = state_28257;
state_28257 = G__30762;
continue;
} else {
return ret_value__27552__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27551__auto__ = function(state_28257){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27551__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27551__auto____1.call(this,state_28257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27551__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27551__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27551__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27551__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27551__auto__;
})()
})();
var state__27963__auto__ = (function (){var statearr_28265 = f__27962__auto__();
(statearr_28265[(6)] = c__27961__auto___30755);

return statearr_28265;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27963__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__28266){
var vec__28267 = p__28266;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28267,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28267,(1),null);
var job = vec__28267;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5589__auto___30763 = n;
var __30765 = (0);
while(true){
if((__30765 < n__5589__auto___30763)){
var G__28270_30766 = type;
var G__28270_30767__$1 = (((G__28270_30766 instanceof cljs.core.Keyword))?G__28270_30766.fqn:null);
switch (G__28270_30767__$1) {
case "compute":
var c__27961__auto___30772 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__30765,c__27961__auto___30772,G__28270_30766,G__28270_30767__$1,n__5589__auto___30763,jobs,results,process__$1,async){
return (function (){
var f__27962__auto__ = (function (){var switch__27550__auto__ = ((function (__30765,c__27961__auto___30772,G__28270_30766,G__28270_30767__$1,n__5589__auto___30763,jobs,results,process__$1,async){
return (function (state_28285){
var state_val_28286 = (state_28285[(1)]);
if((state_val_28286 === (1))){
var state_28285__$1 = state_28285;
var statearr_28287_30773 = state_28285__$1;
(statearr_28287_30773[(2)] = null);

(statearr_28287_30773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28286 === (2))){
var state_28285__$1 = state_28285;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28285__$1,(4),jobs);
} else {
if((state_val_28286 === (3))){
var inst_28283 = (state_28285[(2)]);
var state_28285__$1 = state_28285;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28285__$1,inst_28283);
} else {
if((state_val_28286 === (4))){
var inst_28274 = (state_28285[(2)]);
var inst_28276 = process__$1(inst_28274);
var state_28285__$1 = state_28285;
if(cljs.core.truth_(inst_28276)){
var statearr_28292_30775 = state_28285__$1;
(statearr_28292_30775[(1)] = (5));

} else {
var statearr_28293_30776 = state_28285__$1;
(statearr_28293_30776[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28286 === (5))){
var state_28285__$1 = state_28285;
var statearr_28294_30777 = state_28285__$1;
(statearr_28294_30777[(2)] = null);

(statearr_28294_30777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28286 === (6))){
var state_28285__$1 = state_28285;
var statearr_28296_30781 = state_28285__$1;
(statearr_28296_30781[(2)] = null);

(statearr_28296_30781[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28286 === (7))){
var inst_28281 = (state_28285[(2)]);
var state_28285__$1 = state_28285;
var statearr_28297_30782 = state_28285__$1;
(statearr_28297_30782[(2)] = inst_28281);

(statearr_28297_30782[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__30765,c__27961__auto___30772,G__28270_30766,G__28270_30767__$1,n__5589__auto___30763,jobs,results,process__$1,async))
;
return ((function (__30765,switch__27550__auto__,c__27961__auto___30772,G__28270_30766,G__28270_30767__$1,n__5589__auto___30763,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27551__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27551__auto____0 = (function (){
var statearr_28298 = [null,null,null,null,null,null,null];
(statearr_28298[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27551__auto__);

(statearr_28298[(1)] = (1));

return statearr_28298;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27551__auto____1 = (function (state_28285){
while(true){
var ret_value__27552__auto__ = (function (){try{while(true){
var result__27553__auto__ = switch__27550__auto__(state_28285);
if(cljs.core.keyword_identical_QMARK_(result__27553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27553__auto__;
}
break;
}
}catch (e28299){var ex__27554__auto__ = e28299;
var statearr_28300_30785 = state_28285;
(statearr_28300_30785[(2)] = ex__27554__auto__);


if(cljs.core.seq((state_28285[(4)]))){
var statearr_28301_30786 = state_28285;
(statearr_28301_30786[(1)] = cljs.core.first((state_28285[(4)])));

} else {
throw ex__27554__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30787 = state_28285;
state_28285 = G__30787;
continue;
} else {
return ret_value__27552__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27551__auto__ = function(state_28285){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27551__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27551__auto____1.call(this,state_28285);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27551__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27551__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27551__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27551__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27551__auto__;
})()
;})(__30765,switch__27550__auto__,c__27961__auto___30772,G__28270_30766,G__28270_30767__$1,n__5589__auto___30763,jobs,results,process__$1,async))
})();
var state__27963__auto__ = (function (){var statearr_28303 = f__27962__auto__();
(statearr_28303[(6)] = c__27961__auto___30772);

return statearr_28303;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27963__auto__);
});})(__30765,c__27961__auto___30772,G__28270_30766,G__28270_30767__$1,n__5589__auto___30763,jobs,results,process__$1,async))
);


break;
case "async":
var c__27961__auto___30788 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__30765,c__27961__auto___30788,G__28270_30766,G__28270_30767__$1,n__5589__auto___30763,jobs,results,process__$1,async){
return (function (){
var f__27962__auto__ = (function (){var switch__27550__auto__ = ((function (__30765,c__27961__auto___30788,G__28270_30766,G__28270_30767__$1,n__5589__auto___30763,jobs,results,process__$1,async){
return (function (state_28316){
var state_val_28317 = (state_28316[(1)]);
if((state_val_28317 === (1))){
var state_28316__$1 = state_28316;
var statearr_28318_30789 = state_28316__$1;
(statearr_28318_30789[(2)] = null);

(statearr_28318_30789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28317 === (2))){
var state_28316__$1 = state_28316;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28316__$1,(4),jobs);
} else {
if((state_val_28317 === (3))){
var inst_28314 = (state_28316[(2)]);
var state_28316__$1 = state_28316;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28316__$1,inst_28314);
} else {
if((state_val_28317 === (4))){
var inst_28306 = (state_28316[(2)]);
var inst_28307 = async(inst_28306);
var state_28316__$1 = state_28316;
if(cljs.core.truth_(inst_28307)){
var statearr_28320_30791 = state_28316__$1;
(statearr_28320_30791[(1)] = (5));

} else {
var statearr_28321_30792 = state_28316__$1;
(statearr_28321_30792[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28317 === (5))){
var state_28316__$1 = state_28316;
var statearr_28323_30793 = state_28316__$1;
(statearr_28323_30793[(2)] = null);

(statearr_28323_30793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28317 === (6))){
var state_28316__$1 = state_28316;
var statearr_28328_30794 = state_28316__$1;
(statearr_28328_30794[(2)] = null);

(statearr_28328_30794[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28317 === (7))){
var inst_28312 = (state_28316[(2)]);
var state_28316__$1 = state_28316;
var statearr_28329_30795 = state_28316__$1;
(statearr_28329_30795[(2)] = inst_28312);

(statearr_28329_30795[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__30765,c__27961__auto___30788,G__28270_30766,G__28270_30767__$1,n__5589__auto___30763,jobs,results,process__$1,async))
;
return ((function (__30765,switch__27550__auto__,c__27961__auto___30788,G__28270_30766,G__28270_30767__$1,n__5589__auto___30763,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27551__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27551__auto____0 = (function (){
var statearr_28330 = [null,null,null,null,null,null,null];
(statearr_28330[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27551__auto__);

(statearr_28330[(1)] = (1));

return statearr_28330;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27551__auto____1 = (function (state_28316){
while(true){
var ret_value__27552__auto__ = (function (){try{while(true){
var result__27553__auto__ = switch__27550__auto__(state_28316);
if(cljs.core.keyword_identical_QMARK_(result__27553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27553__auto__;
}
break;
}
}catch (e28332){var ex__27554__auto__ = e28332;
var statearr_28333_30796 = state_28316;
(statearr_28333_30796[(2)] = ex__27554__auto__);


if(cljs.core.seq((state_28316[(4)]))){
var statearr_28334_30797 = state_28316;
(statearr_28334_30797[(1)] = cljs.core.first((state_28316[(4)])));

} else {
throw ex__27554__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30798 = state_28316;
state_28316 = G__30798;
continue;
} else {
return ret_value__27552__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27551__auto__ = function(state_28316){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27551__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27551__auto____1.call(this,state_28316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27551__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27551__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27551__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27551__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27551__auto__;
})()
;})(__30765,switch__27550__auto__,c__27961__auto___30788,G__28270_30766,G__28270_30767__$1,n__5589__auto___30763,jobs,results,process__$1,async))
})();
var state__27963__auto__ = (function (){var statearr_28335 = f__27962__auto__();
(statearr_28335[(6)] = c__27961__auto___30788);

return statearr_28335;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27963__auto__);
});})(__30765,c__27961__auto___30788,G__28270_30766,G__28270_30767__$1,n__5589__auto___30763,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28270_30767__$1)].join('')));

}

var G__30808 = (__30765 + (1));
__30765 = G__30808;
continue;
} else {
}
break;
}

var c__27961__auto___30809 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27962__auto__ = (function (){var switch__27550__auto__ = (function (state_28357){
var state_val_28358 = (state_28357[(1)]);
if((state_val_28358 === (7))){
var inst_28353 = (state_28357[(2)]);
var state_28357__$1 = state_28357;
var statearr_28360_30810 = state_28357__$1;
(statearr_28360_30810[(2)] = inst_28353);

(statearr_28360_30810[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28358 === (1))){
var state_28357__$1 = state_28357;
var statearr_28362_30811 = state_28357__$1;
(statearr_28362_30811[(2)] = null);

(statearr_28362_30811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28358 === (4))){
var inst_28338 = (state_28357[(7)]);
var inst_28338__$1 = (state_28357[(2)]);
var inst_28339 = (inst_28338__$1 == null);
var state_28357__$1 = (function (){var statearr_28367 = state_28357;
(statearr_28367[(7)] = inst_28338__$1);

return statearr_28367;
})();
if(cljs.core.truth_(inst_28339)){
var statearr_28368_30812 = state_28357__$1;
(statearr_28368_30812[(1)] = (5));

} else {
var statearr_28369_30813 = state_28357__$1;
(statearr_28369_30813[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28358 === (6))){
var inst_28338 = (state_28357[(7)]);
var inst_28343 = (state_28357[(8)]);
var inst_28343__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_28344 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28345 = [inst_28338,inst_28343__$1];
var inst_28346 = (new cljs.core.PersistentVector(null,2,(5),inst_28344,inst_28345,null));
var state_28357__$1 = (function (){var statearr_28371 = state_28357;
(statearr_28371[(8)] = inst_28343__$1);

return statearr_28371;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28357__$1,(8),jobs,inst_28346);
} else {
if((state_val_28358 === (3))){
var inst_28355 = (state_28357[(2)]);
var state_28357__$1 = state_28357;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28357__$1,inst_28355);
} else {
if((state_val_28358 === (2))){
var state_28357__$1 = state_28357;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28357__$1,(4),from);
} else {
if((state_val_28358 === (9))){
var inst_28350 = (state_28357[(2)]);
var state_28357__$1 = (function (){var statearr_28373 = state_28357;
(statearr_28373[(9)] = inst_28350);

return statearr_28373;
})();
var statearr_28375_30814 = state_28357__$1;
(statearr_28375_30814[(2)] = null);

(statearr_28375_30814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28358 === (5))){
var inst_28341 = cljs.core.async.close_BANG_(jobs);
var state_28357__$1 = state_28357;
var statearr_28376_30815 = state_28357__$1;
(statearr_28376_30815[(2)] = inst_28341);

(statearr_28376_30815[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28358 === (8))){
var inst_28343 = (state_28357[(8)]);
var inst_28348 = (state_28357[(2)]);
var state_28357__$1 = (function (){var statearr_28381 = state_28357;
(statearr_28381[(10)] = inst_28348);

return statearr_28381;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28357__$1,(9),results,inst_28343);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27551__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27551__auto____0 = (function (){
var statearr_28383 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28383[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27551__auto__);

(statearr_28383[(1)] = (1));

return statearr_28383;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27551__auto____1 = (function (state_28357){
while(true){
var ret_value__27552__auto__ = (function (){try{while(true){
var result__27553__auto__ = switch__27550__auto__(state_28357);
if(cljs.core.keyword_identical_QMARK_(result__27553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27553__auto__;
}
break;
}
}catch (e28384){var ex__27554__auto__ = e28384;
var statearr_28385_30816 = state_28357;
(statearr_28385_30816[(2)] = ex__27554__auto__);


if(cljs.core.seq((state_28357[(4)]))){
var statearr_28387_30817 = state_28357;
(statearr_28387_30817[(1)] = cljs.core.first((state_28357[(4)])));

} else {
throw ex__27554__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30818 = state_28357;
state_28357 = G__30818;
continue;
} else {
return ret_value__27552__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27551__auto__ = function(state_28357){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27551__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27551__auto____1.call(this,state_28357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27551__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27551__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27551__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27551__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27551__auto__;
})()
})();
var state__27963__auto__ = (function (){var statearr_28388 = f__27962__auto__();
(statearr_28388[(6)] = c__27961__auto___30809);

return statearr_28388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27963__auto__);
}));


var c__27961__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27962__auto__ = (function (){var switch__27550__auto__ = (function (state_28429){
var state_val_28430 = (state_28429[(1)]);
if((state_val_28430 === (7))){
var inst_28425 = (state_28429[(2)]);
var state_28429__$1 = state_28429;
var statearr_28435_30819 = state_28429__$1;
(statearr_28435_30819[(2)] = inst_28425);

(statearr_28435_30819[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28430 === (20))){
var state_28429__$1 = state_28429;
var statearr_28436_30820 = state_28429__$1;
(statearr_28436_30820[(2)] = null);

(statearr_28436_30820[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28430 === (1))){
var state_28429__$1 = state_28429;
var statearr_28437_30821 = state_28429__$1;
(statearr_28437_30821[(2)] = null);

(statearr_28437_30821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28430 === (4))){
var inst_28392 = (state_28429[(7)]);
var inst_28392__$1 = (state_28429[(2)]);
var inst_28393 = (inst_28392__$1 == null);
var state_28429__$1 = (function (){var statearr_28439 = state_28429;
(statearr_28439[(7)] = inst_28392__$1);

return statearr_28439;
})();
if(cljs.core.truth_(inst_28393)){
var statearr_28440_30826 = state_28429__$1;
(statearr_28440_30826[(1)] = (5));

} else {
var statearr_28441_30827 = state_28429__$1;
(statearr_28441_30827[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28430 === (15))){
var inst_28406 = (state_28429[(8)]);
var state_28429__$1 = state_28429;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28429__$1,(18),to,inst_28406);
} else {
if((state_val_28430 === (21))){
var inst_28420 = (state_28429[(2)]);
var state_28429__$1 = state_28429;
var statearr_28443_30828 = state_28429__$1;
(statearr_28443_30828[(2)] = inst_28420);

(statearr_28443_30828[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28430 === (13))){
var inst_28422 = (state_28429[(2)]);
var state_28429__$1 = (function (){var statearr_28445 = state_28429;
(statearr_28445[(9)] = inst_28422);

return statearr_28445;
})();
var statearr_28446_30834 = state_28429__$1;
(statearr_28446_30834[(2)] = null);

(statearr_28446_30834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28430 === (6))){
var inst_28392 = (state_28429[(7)]);
var state_28429__$1 = state_28429;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28429__$1,(11),inst_28392);
} else {
if((state_val_28430 === (17))){
var inst_28414 = (state_28429[(2)]);
var state_28429__$1 = state_28429;
if(cljs.core.truth_(inst_28414)){
var statearr_28447_30838 = state_28429__$1;
(statearr_28447_30838[(1)] = (19));

} else {
var statearr_28452_30839 = state_28429__$1;
(statearr_28452_30839[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28430 === (3))){
var inst_28427 = (state_28429[(2)]);
var state_28429__$1 = state_28429;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28429__$1,inst_28427);
} else {
if((state_val_28430 === (12))){
var inst_28403 = (state_28429[(10)]);
var state_28429__$1 = state_28429;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28429__$1,(14),inst_28403);
} else {
if((state_val_28430 === (2))){
var state_28429__$1 = state_28429;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28429__$1,(4),results);
} else {
if((state_val_28430 === (19))){
var state_28429__$1 = state_28429;
var statearr_28454_30844 = state_28429__$1;
(statearr_28454_30844[(2)] = null);

(statearr_28454_30844[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28430 === (11))){
var inst_28403 = (state_28429[(2)]);
var state_28429__$1 = (function (){var statearr_28455 = state_28429;
(statearr_28455[(10)] = inst_28403);

return statearr_28455;
})();
var statearr_28456_30845 = state_28429__$1;
(statearr_28456_30845[(2)] = null);

(statearr_28456_30845[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28430 === (9))){
var state_28429__$1 = state_28429;
var statearr_28458_30846 = state_28429__$1;
(statearr_28458_30846[(2)] = null);

(statearr_28458_30846[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28430 === (5))){
var state_28429__$1 = state_28429;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28459_30847 = state_28429__$1;
(statearr_28459_30847[(1)] = (8));

} else {
var statearr_28460_30848 = state_28429__$1;
(statearr_28460_30848[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28430 === (14))){
var inst_28408 = (state_28429[(11)]);
var inst_28406 = (state_28429[(8)]);
var inst_28406__$1 = (state_28429[(2)]);
var inst_28407 = (inst_28406__$1 == null);
var inst_28408__$1 = cljs.core.not(inst_28407);
var state_28429__$1 = (function (){var statearr_28462 = state_28429;
(statearr_28462[(11)] = inst_28408__$1);

(statearr_28462[(8)] = inst_28406__$1);

return statearr_28462;
})();
if(inst_28408__$1){
var statearr_28463_30855 = state_28429__$1;
(statearr_28463_30855[(1)] = (15));

} else {
var statearr_28464_30856 = state_28429__$1;
(statearr_28464_30856[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28430 === (16))){
var inst_28408 = (state_28429[(11)]);
var state_28429__$1 = state_28429;
var statearr_28469_30857 = state_28429__$1;
(statearr_28469_30857[(2)] = inst_28408);

(statearr_28469_30857[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28430 === (10))){
var inst_28399 = (state_28429[(2)]);
var state_28429__$1 = state_28429;
var statearr_28470_30862 = state_28429__$1;
(statearr_28470_30862[(2)] = inst_28399);

(statearr_28470_30862[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28430 === (18))){
var inst_28411 = (state_28429[(2)]);
var state_28429__$1 = state_28429;
var statearr_28471_30863 = state_28429__$1;
(statearr_28471_30863[(2)] = inst_28411);

(statearr_28471_30863[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28430 === (8))){
var inst_28396 = cljs.core.async.close_BANG_(to);
var state_28429__$1 = state_28429;
var statearr_28472_30864 = state_28429__$1;
(statearr_28472_30864[(2)] = inst_28396);

(statearr_28472_30864[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27551__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27551__auto____0 = (function (){
var statearr_28474 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28474[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27551__auto__);

(statearr_28474[(1)] = (1));

return statearr_28474;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27551__auto____1 = (function (state_28429){
while(true){
var ret_value__27552__auto__ = (function (){try{while(true){
var result__27553__auto__ = switch__27550__auto__(state_28429);
if(cljs.core.keyword_identical_QMARK_(result__27553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27553__auto__;
}
break;
}
}catch (e28475){var ex__27554__auto__ = e28475;
var statearr_28476_30865 = state_28429;
(statearr_28476_30865[(2)] = ex__27554__auto__);


if(cljs.core.seq((state_28429[(4)]))){
var statearr_28477_30867 = state_28429;
(statearr_28477_30867[(1)] = cljs.core.first((state_28429[(4)])));

} else {
throw ex__27554__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30868 = state_28429;
state_28429 = G__30868;
continue;
} else {
return ret_value__27552__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27551__auto__ = function(state_28429){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27551__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27551__auto____1.call(this,state_28429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27551__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27551__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27551__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27551__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27551__auto__;
})()
})();
var state__27963__auto__ = (function (){var statearr_28478 = f__27962__auto__();
(statearr_28478[(6)] = c__27961__auto__);

return statearr_28478;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27963__auto__);
}));

return c__27961__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__28480 = arguments.length;
switch (G__28480) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__28487 = arguments.length;
switch (G__28487) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__28491 = arguments.length;
switch (G__28491) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__27961__auto___30876 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27962__auto__ = (function (){var switch__27550__auto__ = (function (state_28518){
var state_val_28519 = (state_28518[(1)]);
if((state_val_28519 === (7))){
var inst_28514 = (state_28518[(2)]);
var state_28518__$1 = state_28518;
var statearr_28520_30883 = state_28518__$1;
(statearr_28520_30883[(2)] = inst_28514);

(statearr_28520_30883[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28519 === (1))){
var state_28518__$1 = state_28518;
var statearr_28525_30884 = state_28518__$1;
(statearr_28525_30884[(2)] = null);

(statearr_28525_30884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28519 === (4))){
var inst_28495 = (state_28518[(7)]);
var inst_28495__$1 = (state_28518[(2)]);
var inst_28496 = (inst_28495__$1 == null);
var state_28518__$1 = (function (){var statearr_28526 = state_28518;
(statearr_28526[(7)] = inst_28495__$1);

return statearr_28526;
})();
if(cljs.core.truth_(inst_28496)){
var statearr_28527_30885 = state_28518__$1;
(statearr_28527_30885[(1)] = (5));

} else {
var statearr_28528_30886 = state_28518__$1;
(statearr_28528_30886[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28519 === (13))){
var state_28518__$1 = state_28518;
var statearr_28531_30887 = state_28518__$1;
(statearr_28531_30887[(2)] = null);

(statearr_28531_30887[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28519 === (6))){
var inst_28495 = (state_28518[(7)]);
var inst_28501 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_28495) : p.call(null,inst_28495));
var state_28518__$1 = state_28518;
if(cljs.core.truth_(inst_28501)){
var statearr_28532_30890 = state_28518__$1;
(statearr_28532_30890[(1)] = (9));

} else {
var statearr_28533_30891 = state_28518__$1;
(statearr_28533_30891[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28519 === (3))){
var inst_28516 = (state_28518[(2)]);
var state_28518__$1 = state_28518;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28518__$1,inst_28516);
} else {
if((state_val_28519 === (12))){
var state_28518__$1 = state_28518;
var statearr_28534_30892 = state_28518__$1;
(statearr_28534_30892[(2)] = null);

(statearr_28534_30892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28519 === (2))){
var state_28518__$1 = state_28518;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28518__$1,(4),ch);
} else {
if((state_val_28519 === (11))){
var inst_28495 = (state_28518[(7)]);
var inst_28505 = (state_28518[(2)]);
var state_28518__$1 = state_28518;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28518__$1,(8),inst_28505,inst_28495);
} else {
if((state_val_28519 === (9))){
var state_28518__$1 = state_28518;
var statearr_28535_30893 = state_28518__$1;
(statearr_28535_30893[(2)] = tc);

(statearr_28535_30893[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28519 === (5))){
var inst_28498 = cljs.core.async.close_BANG_(tc);
var inst_28499 = cljs.core.async.close_BANG_(fc);
var state_28518__$1 = (function (){var statearr_28537 = state_28518;
(statearr_28537[(8)] = inst_28498);

return statearr_28537;
})();
var statearr_28538_30894 = state_28518__$1;
(statearr_28538_30894[(2)] = inst_28499);

(statearr_28538_30894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28519 === (14))){
var inst_28512 = (state_28518[(2)]);
var state_28518__$1 = state_28518;
var statearr_28539_30895 = state_28518__$1;
(statearr_28539_30895[(2)] = inst_28512);

(statearr_28539_30895[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28519 === (10))){
var state_28518__$1 = state_28518;
var statearr_28541_30896 = state_28518__$1;
(statearr_28541_30896[(2)] = fc);

(statearr_28541_30896[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28519 === (8))){
var inst_28507 = (state_28518[(2)]);
var state_28518__$1 = state_28518;
if(cljs.core.truth_(inst_28507)){
var statearr_28547_30906 = state_28518__$1;
(statearr_28547_30906[(1)] = (12));

} else {
var statearr_28548_30907 = state_28518__$1;
(statearr_28548_30907[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27551__auto__ = null;
var cljs$core$async$state_machine__27551__auto____0 = (function (){
var statearr_28549 = [null,null,null,null,null,null,null,null,null];
(statearr_28549[(0)] = cljs$core$async$state_machine__27551__auto__);

(statearr_28549[(1)] = (1));

return statearr_28549;
});
var cljs$core$async$state_machine__27551__auto____1 = (function (state_28518){
while(true){
var ret_value__27552__auto__ = (function (){try{while(true){
var result__27553__auto__ = switch__27550__auto__(state_28518);
if(cljs.core.keyword_identical_QMARK_(result__27553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27553__auto__;
}
break;
}
}catch (e28550){var ex__27554__auto__ = e28550;
var statearr_28551_30911 = state_28518;
(statearr_28551_30911[(2)] = ex__27554__auto__);


if(cljs.core.seq((state_28518[(4)]))){
var statearr_28552_30912 = state_28518;
(statearr_28552_30912[(1)] = cljs.core.first((state_28518[(4)])));

} else {
throw ex__27554__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30919 = state_28518;
state_28518 = G__30919;
continue;
} else {
return ret_value__27552__auto__;
}
break;
}
});
cljs$core$async$state_machine__27551__auto__ = function(state_28518){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27551__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27551__auto____1.call(this,state_28518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27551__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27551__auto____0;
cljs$core$async$state_machine__27551__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27551__auto____1;
return cljs$core$async$state_machine__27551__auto__;
})()
})();
var state__27963__auto__ = (function (){var statearr_28553 = f__27962__auto__();
(statearr_28553[(6)] = c__27961__auto___30876);

return statearr_28553;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27963__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__27961__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27962__auto__ = (function (){var switch__27550__auto__ = (function (state_28582){
var state_val_28583 = (state_28582[(1)]);
if((state_val_28583 === (7))){
var inst_28578 = (state_28582[(2)]);
var state_28582__$1 = state_28582;
var statearr_28584_30921 = state_28582__$1;
(statearr_28584_30921[(2)] = inst_28578);

(statearr_28584_30921[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (1))){
var inst_28560 = init;
var inst_28562 = inst_28560;
var state_28582__$1 = (function (){var statearr_28589 = state_28582;
(statearr_28589[(7)] = inst_28562);

return statearr_28589;
})();
var statearr_28590_30925 = state_28582__$1;
(statearr_28590_30925[(2)] = null);

(statearr_28590_30925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (4))){
var inst_28565 = (state_28582[(8)]);
var inst_28565__$1 = (state_28582[(2)]);
var inst_28566 = (inst_28565__$1 == null);
var state_28582__$1 = (function (){var statearr_28592 = state_28582;
(statearr_28592[(8)] = inst_28565__$1);

return statearr_28592;
})();
if(cljs.core.truth_(inst_28566)){
var statearr_28593_30929 = state_28582__$1;
(statearr_28593_30929[(1)] = (5));

} else {
var statearr_28594_30930 = state_28582__$1;
(statearr_28594_30930[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (6))){
var inst_28569 = (state_28582[(9)]);
var inst_28565 = (state_28582[(8)]);
var inst_28562 = (state_28582[(7)]);
var inst_28569__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_28562,inst_28565) : f.call(null,inst_28562,inst_28565));
var inst_28570 = cljs.core.reduced_QMARK_(inst_28569__$1);
var state_28582__$1 = (function (){var statearr_28595 = state_28582;
(statearr_28595[(9)] = inst_28569__$1);

return statearr_28595;
})();
if(inst_28570){
var statearr_28597_30931 = state_28582__$1;
(statearr_28597_30931[(1)] = (8));

} else {
var statearr_28598_30932 = state_28582__$1;
(statearr_28598_30932[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (3))){
var inst_28580 = (state_28582[(2)]);
var state_28582__$1 = state_28582;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28582__$1,inst_28580);
} else {
if((state_val_28583 === (2))){
var state_28582__$1 = state_28582;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28582__$1,(4),ch);
} else {
if((state_val_28583 === (9))){
var inst_28569 = (state_28582[(9)]);
var inst_28562 = inst_28569;
var state_28582__$1 = (function (){var statearr_28603 = state_28582;
(statearr_28603[(7)] = inst_28562);

return statearr_28603;
})();
var statearr_28604_30937 = state_28582__$1;
(statearr_28604_30937[(2)] = null);

(statearr_28604_30937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (5))){
var inst_28562 = (state_28582[(7)]);
var state_28582__$1 = state_28582;
var statearr_28606_30941 = state_28582__$1;
(statearr_28606_30941[(2)] = inst_28562);

(statearr_28606_30941[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (10))){
var inst_28576 = (state_28582[(2)]);
var state_28582__$1 = state_28582;
var statearr_28608_30942 = state_28582__$1;
(statearr_28608_30942[(2)] = inst_28576);

(statearr_28608_30942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28583 === (8))){
var inst_28569 = (state_28582[(9)]);
var inst_28572 = cljs.core.deref(inst_28569);
var state_28582__$1 = state_28582;
var statearr_28609_30947 = state_28582__$1;
(statearr_28609_30947[(2)] = inst_28572);

(statearr_28609_30947[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__27551__auto__ = null;
var cljs$core$async$reduce_$_state_machine__27551__auto____0 = (function (){
var statearr_28610 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28610[(0)] = cljs$core$async$reduce_$_state_machine__27551__auto__);

(statearr_28610[(1)] = (1));

return statearr_28610;
});
var cljs$core$async$reduce_$_state_machine__27551__auto____1 = (function (state_28582){
while(true){
var ret_value__27552__auto__ = (function (){try{while(true){
var result__27553__auto__ = switch__27550__auto__(state_28582);
if(cljs.core.keyword_identical_QMARK_(result__27553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27553__auto__;
}
break;
}
}catch (e28611){var ex__27554__auto__ = e28611;
var statearr_28612_30963 = state_28582;
(statearr_28612_30963[(2)] = ex__27554__auto__);


if(cljs.core.seq((state_28582[(4)]))){
var statearr_28613_30964 = state_28582;
(statearr_28613_30964[(1)] = cljs.core.first((state_28582[(4)])));

} else {
throw ex__27554__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30965 = state_28582;
state_28582 = G__30965;
continue;
} else {
return ret_value__27552__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27551__auto__ = function(state_28582){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27551__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27551__auto____1.call(this,state_28582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__27551__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27551__auto____0;
cljs$core$async$reduce_$_state_machine__27551__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27551__auto____1;
return cljs$core$async$reduce_$_state_machine__27551__auto__;
})()
})();
var state__27963__auto__ = (function (){var statearr_28614 = f__27962__auto__();
(statearr_28614[(6)] = c__27961__auto__);

return statearr_28614;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27963__auto__);
}));

return c__27961__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__27961__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27962__auto__ = (function (){var switch__27550__auto__ = (function (state_28620){
var state_val_28621 = (state_28620[(1)]);
if((state_val_28621 === (1))){
var inst_28615 = cljs.core.async.reduce(f__$1,init,ch);
var state_28620__$1 = state_28620;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28620__$1,(2),inst_28615);
} else {
if((state_val_28621 === (2))){
var inst_28617 = (state_28620[(2)]);
var inst_28618 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_28617) : f__$1.call(null,inst_28617));
var state_28620__$1 = state_28620;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28620__$1,inst_28618);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__27551__auto__ = null;
var cljs$core$async$transduce_$_state_machine__27551__auto____0 = (function (){
var statearr_28635 = [null,null,null,null,null,null,null];
(statearr_28635[(0)] = cljs$core$async$transduce_$_state_machine__27551__auto__);

(statearr_28635[(1)] = (1));

return statearr_28635;
});
var cljs$core$async$transduce_$_state_machine__27551__auto____1 = (function (state_28620){
while(true){
var ret_value__27552__auto__ = (function (){try{while(true){
var result__27553__auto__ = switch__27550__auto__(state_28620);
if(cljs.core.keyword_identical_QMARK_(result__27553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27553__auto__;
}
break;
}
}catch (e28639){var ex__27554__auto__ = e28639;
var statearr_28641_30988 = state_28620;
(statearr_28641_30988[(2)] = ex__27554__auto__);


if(cljs.core.seq((state_28620[(4)]))){
var statearr_28644_30989 = state_28620;
(statearr_28644_30989[(1)] = cljs.core.first((state_28620[(4)])));

} else {
throw ex__27554__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30990 = state_28620;
state_28620 = G__30990;
continue;
} else {
return ret_value__27552__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__27551__auto__ = function(state_28620){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__27551__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__27551__auto____1.call(this,state_28620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__27551__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__27551__auto____0;
cljs$core$async$transduce_$_state_machine__27551__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__27551__auto____1;
return cljs$core$async$transduce_$_state_machine__27551__auto__;
})()
})();
var state__27963__auto__ = (function (){var statearr_28648 = f__27962__auto__();
(statearr_28648[(6)] = c__27961__auto__);

return statearr_28648;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27963__auto__);
}));

return c__27961__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__28657 = arguments.length;
switch (G__28657) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__27961__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27962__auto__ = (function (){var switch__27550__auto__ = (function (state_28694){
var state_val_28695 = (state_28694[(1)]);
if((state_val_28695 === (7))){
var inst_28673 = (state_28694[(2)]);
var state_28694__$1 = state_28694;
var statearr_28697_30992 = state_28694__$1;
(statearr_28697_30992[(2)] = inst_28673);

(statearr_28697_30992[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28695 === (1))){
var inst_28667 = cljs.core.seq(coll);
var inst_28668 = inst_28667;
var state_28694__$1 = (function (){var statearr_28698 = state_28694;
(statearr_28698[(7)] = inst_28668);

return statearr_28698;
})();
var statearr_28701_30993 = state_28694__$1;
(statearr_28701_30993[(2)] = null);

(statearr_28701_30993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28695 === (4))){
var inst_28668 = (state_28694[(7)]);
var inst_28671 = cljs.core.first(inst_28668);
var state_28694__$1 = state_28694;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28694__$1,(7),ch,inst_28671);
} else {
if((state_val_28695 === (13))){
var inst_28688 = (state_28694[(2)]);
var state_28694__$1 = state_28694;
var statearr_28706_30994 = state_28694__$1;
(statearr_28706_30994[(2)] = inst_28688);

(statearr_28706_30994[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28695 === (6))){
var inst_28676 = (state_28694[(2)]);
var state_28694__$1 = state_28694;
if(cljs.core.truth_(inst_28676)){
var statearr_28708_30995 = state_28694__$1;
(statearr_28708_30995[(1)] = (8));

} else {
var statearr_28709_30996 = state_28694__$1;
(statearr_28709_30996[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28695 === (3))){
var inst_28692 = (state_28694[(2)]);
var state_28694__$1 = state_28694;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28694__$1,inst_28692);
} else {
if((state_val_28695 === (12))){
var state_28694__$1 = state_28694;
var statearr_28713_30997 = state_28694__$1;
(statearr_28713_30997[(2)] = null);

(statearr_28713_30997[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28695 === (2))){
var inst_28668 = (state_28694[(7)]);
var state_28694__$1 = state_28694;
if(cljs.core.truth_(inst_28668)){
var statearr_28715_30998 = state_28694__$1;
(statearr_28715_30998[(1)] = (4));

} else {
var statearr_28716_30999 = state_28694__$1;
(statearr_28716_30999[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28695 === (11))){
var inst_28684 = cljs.core.async.close_BANG_(ch);
var state_28694__$1 = state_28694;
var statearr_28717_31001 = state_28694__$1;
(statearr_28717_31001[(2)] = inst_28684);

(statearr_28717_31001[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28695 === (9))){
var state_28694__$1 = state_28694;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28718_31002 = state_28694__$1;
(statearr_28718_31002[(1)] = (11));

} else {
var statearr_28719_31003 = state_28694__$1;
(statearr_28719_31003[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28695 === (5))){
var inst_28668 = (state_28694[(7)]);
var state_28694__$1 = state_28694;
var statearr_28723_31004 = state_28694__$1;
(statearr_28723_31004[(2)] = inst_28668);

(statearr_28723_31004[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28695 === (10))){
var inst_28690 = (state_28694[(2)]);
var state_28694__$1 = state_28694;
var statearr_28724_31005 = state_28694__$1;
(statearr_28724_31005[(2)] = inst_28690);

(statearr_28724_31005[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28695 === (8))){
var inst_28668 = (state_28694[(7)]);
var inst_28678 = cljs.core.next(inst_28668);
var inst_28668__$1 = inst_28678;
var state_28694__$1 = (function (){var statearr_28726 = state_28694;
(statearr_28726[(7)] = inst_28668__$1);

return statearr_28726;
})();
var statearr_28727_31006 = state_28694__$1;
(statearr_28727_31006[(2)] = null);

(statearr_28727_31006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27551__auto__ = null;
var cljs$core$async$state_machine__27551__auto____0 = (function (){
var statearr_28735 = [null,null,null,null,null,null,null,null];
(statearr_28735[(0)] = cljs$core$async$state_machine__27551__auto__);

(statearr_28735[(1)] = (1));

return statearr_28735;
});
var cljs$core$async$state_machine__27551__auto____1 = (function (state_28694){
while(true){
var ret_value__27552__auto__ = (function (){try{while(true){
var result__27553__auto__ = switch__27550__auto__(state_28694);
if(cljs.core.keyword_identical_QMARK_(result__27553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27553__auto__;
}
break;
}
}catch (e28736){var ex__27554__auto__ = e28736;
var statearr_28737_31008 = state_28694;
(statearr_28737_31008[(2)] = ex__27554__auto__);


if(cljs.core.seq((state_28694[(4)]))){
var statearr_28738_31009 = state_28694;
(statearr_28738_31009[(1)] = cljs.core.first((state_28694[(4)])));

} else {
throw ex__27554__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31010 = state_28694;
state_28694 = G__31010;
continue;
} else {
return ret_value__27552__auto__;
}
break;
}
});
cljs$core$async$state_machine__27551__auto__ = function(state_28694){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27551__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27551__auto____1.call(this,state_28694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27551__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27551__auto____0;
cljs$core$async$state_machine__27551__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27551__auto____1;
return cljs$core$async$state_machine__27551__auto__;
})()
})();
var state__27963__auto__ = (function (){var statearr_28739 = f__27962__auto__();
(statearr_28739[(6)] = c__27961__auto__);

return statearr_28739;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27963__auto__);
}));

return c__27961__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__28746 = arguments.length;
switch (G__28746) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_31012 = (function (_){
var x__5346__auto__ = (((_ == null))?null:_);
var m__5347__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5346__auto__)]);
if((!((m__5347__auto__ == null)))){
return (m__5347__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5347__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5347__auto__.call(null,_));
} else {
var m__5345__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5345__auto__ == null)))){
return (m__5345__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5345__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5345__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_31012(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_31021 = (function (m,ch,close_QMARK_){
var x__5346__auto__ = (((m == null))?null:m);
var m__5347__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5346__auto__)]);
if((!((m__5347__auto__ == null)))){
return (m__5347__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5347__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5347__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5345__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5345__auto__ == null)))){
return (m__5345__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5345__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5345__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_31021(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_31023 = (function (m,ch){
var x__5346__auto__ = (((m == null))?null:m);
var m__5347__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5346__auto__)]);
if((!((m__5347__auto__ == null)))){
return (m__5347__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5347__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5347__auto__.call(null,m,ch));
} else {
var m__5345__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5345__auto__ == null)))){
return (m__5345__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5345__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5345__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_31023(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_31029 = (function (m){
var x__5346__auto__ = (((m == null))?null:m);
var m__5347__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5346__auto__)]);
if((!((m__5347__auto__ == null)))){
return (m__5347__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5347__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5347__auto__.call(null,m));
} else {
var m__5345__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5345__auto__ == null)))){
return (m__5345__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5345__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5345__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_31029(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28785 = (function (ch,cs,meta28786){
this.ch = ch;
this.cs = cs;
this.meta28786 = meta28786;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28785.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28787,meta28786__$1){
var self__ = this;
var _28787__$1 = this;
return (new cljs.core.async.t_cljs$core$async28785(self__.ch,self__.cs,meta28786__$1));
}));

(cljs.core.async.t_cljs$core$async28785.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28787){
var self__ = this;
var _28787__$1 = this;
return self__.meta28786;
}));

(cljs.core.async.t_cljs$core$async28785.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28785.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async28785.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28785.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async28785.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async28785.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async28785.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28786","meta28786",191232119,null)], null);
}));

(cljs.core.async.t_cljs$core$async28785.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28785.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28785");

(cljs.core.async.t_cljs$core$async28785.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"cljs.core.async/t_cljs$core$async28785");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28785.
 */
cljs.core.async.__GT_t_cljs$core$async28785 = (function cljs$core$async$__GT_t_cljs$core$async28785(ch,cs,meta28786){
return (new cljs.core.async.t_cljs$core$async28785(ch,cs,meta28786));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async28785(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__27961__auto___31048 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27962__auto__ = (function (){var switch__27550__auto__ = (function (state_28970){
var state_val_28971 = (state_28970[(1)]);
if((state_val_28971 === (7))){
var inst_28961 = (state_28970[(2)]);
var state_28970__$1 = state_28970;
var statearr_28979_31052 = state_28970__$1;
(statearr_28979_31052[(2)] = inst_28961);

(statearr_28979_31052[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28971 === (20))){
var inst_28840 = (state_28970[(7)]);
var inst_28855 = cljs.core.first(inst_28840);
var inst_28856 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28855,(0),null);
var inst_28857 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28855,(1),null);
var state_28970__$1 = (function (){var statearr_28981 = state_28970;
(statearr_28981[(8)] = inst_28856);

return statearr_28981;
})();
if(cljs.core.truth_(inst_28857)){
var statearr_28984_31063 = state_28970__$1;
(statearr_28984_31063[(1)] = (22));

} else {
var statearr_28986_31064 = state_28970__$1;
(statearr_28986_31064[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28971 === (27))){
var inst_28896 = (state_28970[(9)]);
var inst_28904 = (state_28970[(10)]);
var inst_28805 = (state_28970[(11)]);
var inst_28898 = (state_28970[(12)]);
var inst_28904__$1 = cljs.core._nth(inst_28896,inst_28898);
var inst_28906 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_28904__$1,inst_28805,done);
var state_28970__$1 = (function (){var statearr_28988 = state_28970;
(statearr_28988[(10)] = inst_28904__$1);

return statearr_28988;
})();
if(cljs.core.truth_(inst_28906)){
var statearr_28991_31071 = state_28970__$1;
(statearr_28991_31071[(1)] = (30));

} else {
var statearr_28993_31072 = state_28970__$1;
(statearr_28993_31072[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28971 === (1))){
var state_28970__$1 = state_28970;
var statearr_28994_31073 = state_28970__$1;
(statearr_28994_31073[(2)] = null);

(statearr_28994_31073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28971 === (24))){
var inst_28840 = (state_28970[(7)]);
var inst_28869 = (state_28970[(2)]);
var inst_28870 = cljs.core.next(inst_28840);
var inst_28816 = inst_28870;
var inst_28818 = null;
var inst_28819 = (0);
var inst_28820 = (0);
var state_28970__$1 = (function (){var statearr_28995 = state_28970;
(statearr_28995[(13)] = inst_28816);

(statearr_28995[(14)] = inst_28869);

(statearr_28995[(15)] = inst_28818);

(statearr_28995[(16)] = inst_28820);

(statearr_28995[(17)] = inst_28819);

return statearr_28995;
})();
var statearr_28996_31074 = state_28970__$1;
(statearr_28996_31074[(2)] = null);

(statearr_28996_31074[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28971 === (39))){
var state_28970__$1 = state_28970;
var statearr_29005_31075 = state_28970__$1;
(statearr_29005_31075[(2)] = null);

(statearr_29005_31075[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28971 === (4))){
var inst_28805 = (state_28970[(11)]);
var inst_28805__$1 = (state_28970[(2)]);
var inst_28806 = (inst_28805__$1 == null);
var state_28970__$1 = (function (){var statearr_29008 = state_28970;
(statearr_29008[(11)] = inst_28805__$1);

return statearr_29008;
})();
if(cljs.core.truth_(inst_28806)){
var statearr_29010_31085 = state_28970__$1;
(statearr_29010_31085[(1)] = (5));

} else {
var statearr_29012_31086 = state_28970__$1;
(statearr_29012_31086[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28971 === (15))){
var inst_28816 = (state_28970[(13)]);
var inst_28818 = (state_28970[(15)]);
var inst_28820 = (state_28970[(16)]);
var inst_28819 = (state_28970[(17)]);
var inst_28836 = (state_28970[(2)]);
var inst_28837 = (inst_28820 + (1));
var tmp28997 = inst_28816;
var tmp28998 = inst_28818;
var tmp28999 = inst_28819;
var inst_28816__$1 = tmp28997;
var inst_28818__$1 = tmp28998;
var inst_28819__$1 = tmp28999;
var inst_28820__$1 = inst_28837;
var state_28970__$1 = (function (){var statearr_29016 = state_28970;
(statearr_29016[(13)] = inst_28816__$1);

(statearr_29016[(15)] = inst_28818__$1);

(statearr_29016[(18)] = inst_28836);

(statearr_29016[(16)] = inst_28820__$1);

(statearr_29016[(17)] = inst_28819__$1);

return statearr_29016;
})();
var statearr_29019_31089 = state_28970__$1;
(statearr_29019_31089[(2)] = null);

(statearr_29019_31089[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28971 === (21))){
var inst_28873 = (state_28970[(2)]);
var state_28970__$1 = state_28970;
var statearr_29026_31090 = state_28970__$1;
(statearr_29026_31090[(2)] = inst_28873);

(statearr_29026_31090[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28971 === (31))){
var inst_28904 = (state_28970[(10)]);
var inst_28909 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_28904);
var state_28970__$1 = state_28970;
var statearr_29027_31091 = state_28970__$1;
(statearr_29027_31091[(2)] = inst_28909);

(statearr_29027_31091[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28971 === (32))){
var inst_28897 = (state_28970[(19)]);
var inst_28895 = (state_28970[(20)]);
var inst_28896 = (state_28970[(9)]);
var inst_28898 = (state_28970[(12)]);
var inst_28911 = (state_28970[(2)]);
var inst_28912 = (inst_28898 + (1));
var tmp29020 = inst_28897;
var tmp29021 = inst_28895;
var tmp29022 = inst_28896;
var inst_28895__$1 = tmp29021;
var inst_28896__$1 = tmp29022;
var inst_28897__$1 = tmp29020;
var inst_28898__$1 = inst_28912;
var state_28970__$1 = (function (){var statearr_29033 = state_28970;
(statearr_29033[(19)] = inst_28897__$1);

(statearr_29033[(20)] = inst_28895__$1);

(statearr_29033[(21)] = inst_28911);

(statearr_29033[(9)] = inst_28896__$1);

(statearr_29033[(12)] = inst_28898__$1);

return statearr_29033;
})();
var statearr_29036_31094 = state_28970__$1;
(statearr_29036_31094[(2)] = null);

(statearr_29036_31094[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28971 === (40))){
var inst_28927 = (state_28970[(22)]);
var inst_28935 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_28927);
var state_28970__$1 = state_28970;
var statearr_29041_31095 = state_28970__$1;
(statearr_29041_31095[(2)] = inst_28935);

(statearr_29041_31095[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28971 === (33))){
var inst_28916 = (state_28970[(23)]);
var inst_28919 = cljs.core.chunked_seq_QMARK_(inst_28916);
var state_28970__$1 = state_28970;
if(inst_28919){
var statearr_29042_31096 = state_28970__$1;
(statearr_29042_31096[(1)] = (36));

} else {
var statearr_29043_31097 = state_28970__$1;
(statearr_29043_31097[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28971 === (13))){
var inst_28830 = (state_28970[(24)]);
var inst_28833 = cljs.core.async.close_BANG_(inst_28830);
var state_28970__$1 = state_28970;
var statearr_29047_31098 = state_28970__$1;
(statearr_29047_31098[(2)] = inst_28833);

(statearr_29047_31098[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28971 === (22))){
var inst_28856 = (state_28970[(8)]);
var inst_28866 = cljs.core.async.close_BANG_(inst_28856);
var state_28970__$1 = state_28970;
var statearr_29048_31105 = state_28970__$1;
(statearr_29048_31105[(2)] = inst_28866);

(statearr_29048_31105[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28971 === (36))){
var inst_28916 = (state_28970[(23)]);
var inst_28921 = cljs.core.chunk_first(inst_28916);
var inst_28922 = cljs.core.chunk_rest(inst_28916);
var inst_28923 = cljs.core.count(inst_28921);
var inst_28895 = inst_28922;
var inst_28896 = inst_28921;
var inst_28897 = inst_28923;
var inst_28898 = (0);
var state_28970__$1 = (function (){var statearr_29049 = state_28970;
(statearr_29049[(19)] = inst_28897);

(statearr_29049[(20)] = inst_28895);

(statearr_29049[(9)] = inst_28896);

(statearr_29049[(12)] = inst_28898);

return statearr_29049;
})();
var statearr_29050_31112 = state_28970__$1;
(statearr_29050_31112[(2)] = null);

(statearr_29050_31112[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28971 === (41))){
var inst_28916 = (state_28970[(23)]);
var inst_28939 = (state_28970[(2)]);
var inst_28941 = cljs.core.next(inst_28916);
var inst_28895 = inst_28941;
var inst_28896 = null;
var inst_28897 = (0);
var inst_28898 = (0);
var state_28970__$1 = (function (){var statearr_29053 = state_28970;
(statearr_29053[(19)] = inst_28897);

(statearr_29053[(20)] = inst_28895);

(statearr_29053[(9)] = inst_28896);

(statearr_29053[(12)] = inst_28898);

(statearr_29053[(25)] = inst_28939);

return statearr_29053;
})();
var statearr_29054_31113 = state_28970__$1;
(statearr_29054_31113[(2)] = null);

(statearr_29054_31113[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28971 === (43))){
var state_28970__$1 = state_28970;
var statearr_29055_31114 = state_28970__$1;
(statearr_29055_31114[(2)] = null);

(statearr_29055_31114[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28971 === (29))){
var inst_28949 = (state_28970[(2)]);
var state_28970__$1 = state_28970;
var statearr_29059_31115 = state_28970__$1;
(statearr_29059_31115[(2)] = inst_28949);

(statearr_29059_31115[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28971 === (44))){
var inst_28958 = (state_28970[(2)]);
var state_28970__$1 = (function (){var statearr_29061 = state_28970;
(statearr_29061[(26)] = inst_28958);

return statearr_29061;
})();
var statearr_29062_31116 = state_28970__$1;
(statearr_29062_31116[(2)] = null);

(statearr_29062_31116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28971 === (6))){
var inst_28884 = (state_28970[(27)]);
var inst_28883 = cljs.core.deref(cs);
var inst_28884__$1 = cljs.core.keys(inst_28883);
var inst_28885 = cljs.core.count(inst_28884__$1);
var inst_28886 = cljs.core.reset_BANG_(dctr,inst_28885);
var inst_28894 = cljs.core.seq(inst_28884__$1);
var inst_28895 = inst_28894;
var inst_28896 = null;
var inst_28897 = (0);
var inst_28898 = (0);
var state_28970__$1 = (function (){var statearr_29065 = state_28970;
(statearr_29065[(19)] = inst_28897);

(statearr_29065[(20)] = inst_28895);

(statearr_29065[(27)] = inst_28884__$1);

(statearr_29065[(28)] = inst_28886);

(statearr_29065[(9)] = inst_28896);

(statearr_29065[(12)] = inst_28898);

return statearr_29065;
})();
var statearr_29067_31118 = state_28970__$1;
(statearr_29067_31118[(2)] = null);

(statearr_29067_31118[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28971 === (28))){
var inst_28895 = (state_28970[(20)]);
var inst_28916 = (state_28970[(23)]);
var inst_28916__$1 = cljs.core.seq(inst_28895);
var state_28970__$1 = (function (){var statearr_29068 = state_28970;
(statearr_29068[(23)] = inst_28916__$1);

return statearr_29068;
})();
if(inst_28916__$1){
var statearr_29069_31119 = state_28970__$1;
(statearr_29069_31119[(1)] = (33));

} else {
var statearr_29070_31120 = state_28970__$1;
(statearr_29070_31120[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28971 === (25))){
var inst_28897 = (state_28970[(19)]);
var inst_28898 = (state_28970[(12)]);
var inst_28900 = (inst_28898 < inst_28897);
var inst_28901 = inst_28900;
var state_28970__$1 = state_28970;
if(cljs.core.truth_(inst_28901)){
var statearr_29071_31132 = state_28970__$1;
(statearr_29071_31132[(1)] = (27));

} else {
var statearr_29072_31133 = state_28970__$1;
(statearr_29072_31133[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28971 === (34))){
var state_28970__$1 = state_28970;
var statearr_29073_31134 = state_28970__$1;
(statearr_29073_31134[(2)] = null);

(statearr_29073_31134[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28971 === (17))){
var state_28970__$1 = state_28970;
var statearr_29074_31135 = state_28970__$1;
(statearr_29074_31135[(2)] = null);

(statearr_29074_31135[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28971 === (3))){
var inst_28964 = (state_28970[(2)]);
var state_28970__$1 = state_28970;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28970__$1,inst_28964);
} else {
if((state_val_28971 === (12))){
var inst_28878 = (state_28970[(2)]);
var state_28970__$1 = state_28970;
var statearr_29075_31144 = state_28970__$1;
(statearr_29075_31144[(2)] = inst_28878);

(statearr_29075_31144[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28971 === (2))){
var state_28970__$1 = state_28970;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28970__$1,(4),ch);
} else {
if((state_val_28971 === (23))){
var state_28970__$1 = state_28970;
var statearr_29076_31145 = state_28970__$1;
(statearr_29076_31145[(2)] = null);

(statearr_29076_31145[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28971 === (35))){
var inst_28947 = (state_28970[(2)]);
var state_28970__$1 = state_28970;
var statearr_29077_31146 = state_28970__$1;
(statearr_29077_31146[(2)] = inst_28947);

(statearr_29077_31146[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28971 === (19))){
var inst_28840 = (state_28970[(7)]);
var inst_28847 = cljs.core.chunk_first(inst_28840);
var inst_28848 = cljs.core.chunk_rest(inst_28840);
var inst_28849 = cljs.core.count(inst_28847);
var inst_28816 = inst_28848;
var inst_28818 = inst_28847;
var inst_28819 = inst_28849;
var inst_28820 = (0);
var state_28970__$1 = (function (){var statearr_29078 = state_28970;
(statearr_29078[(13)] = inst_28816);

(statearr_29078[(15)] = inst_28818);

(statearr_29078[(16)] = inst_28820);

(statearr_29078[(17)] = inst_28819);

return statearr_29078;
})();
var statearr_29079_31147 = state_28970__$1;
(statearr_29079_31147[(2)] = null);

(statearr_29079_31147[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28971 === (11))){
var inst_28816 = (state_28970[(13)]);
var inst_28840 = (state_28970[(7)]);
var inst_28840__$1 = cljs.core.seq(inst_28816);
var state_28970__$1 = (function (){var statearr_29080 = state_28970;
(statearr_29080[(7)] = inst_28840__$1);

return statearr_29080;
})();
if(inst_28840__$1){
var statearr_29081_31148 = state_28970__$1;
(statearr_29081_31148[(1)] = (16));

} else {
var statearr_29082_31149 = state_28970__$1;
(statearr_29082_31149[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28971 === (9))){
var inst_28880 = (state_28970[(2)]);
var state_28970__$1 = state_28970;
var statearr_29083_31150 = state_28970__$1;
(statearr_29083_31150[(2)] = inst_28880);

(statearr_29083_31150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28971 === (5))){
var inst_28812 = cljs.core.deref(cs);
var inst_28813 = cljs.core.seq(inst_28812);
var inst_28816 = inst_28813;
var inst_28818 = null;
var inst_28819 = (0);
var inst_28820 = (0);
var state_28970__$1 = (function (){var statearr_29084 = state_28970;
(statearr_29084[(13)] = inst_28816);

(statearr_29084[(15)] = inst_28818);

(statearr_29084[(16)] = inst_28820);

(statearr_29084[(17)] = inst_28819);

return statearr_29084;
})();
var statearr_29085_31155 = state_28970__$1;
(statearr_29085_31155[(2)] = null);

(statearr_29085_31155[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28971 === (14))){
var state_28970__$1 = state_28970;
var statearr_29086_31156 = state_28970__$1;
(statearr_29086_31156[(2)] = null);

(statearr_29086_31156[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28971 === (45))){
var inst_28955 = (state_28970[(2)]);
var state_28970__$1 = state_28970;
var statearr_29087_31157 = state_28970__$1;
(statearr_29087_31157[(2)] = inst_28955);

(statearr_29087_31157[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28971 === (26))){
var inst_28884 = (state_28970[(27)]);
var inst_28951 = (state_28970[(2)]);
var inst_28952 = cljs.core.seq(inst_28884);
var state_28970__$1 = (function (){var statearr_29088 = state_28970;
(statearr_29088[(29)] = inst_28951);

return statearr_29088;
})();
if(inst_28952){
var statearr_29089_31159 = state_28970__$1;
(statearr_29089_31159[(1)] = (42));

} else {
var statearr_29090_31160 = state_28970__$1;
(statearr_29090_31160[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28971 === (16))){
var inst_28840 = (state_28970[(7)]);
var inst_28843 = cljs.core.chunked_seq_QMARK_(inst_28840);
var state_28970__$1 = state_28970;
if(inst_28843){
var statearr_29091_31161 = state_28970__$1;
(statearr_29091_31161[(1)] = (19));

} else {
var statearr_29092_31162 = state_28970__$1;
(statearr_29092_31162[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28971 === (38))){
var inst_28944 = (state_28970[(2)]);
var state_28970__$1 = state_28970;
var statearr_29093_31163 = state_28970__$1;
(statearr_29093_31163[(2)] = inst_28944);

(statearr_29093_31163[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28971 === (30))){
var state_28970__$1 = state_28970;
var statearr_29094_31164 = state_28970__$1;
(statearr_29094_31164[(2)] = null);

(statearr_29094_31164[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28971 === (10))){
var inst_28818 = (state_28970[(15)]);
var inst_28820 = (state_28970[(16)]);
var inst_28829 = cljs.core._nth(inst_28818,inst_28820);
var inst_28830 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28829,(0),null);
var inst_28831 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28829,(1),null);
var state_28970__$1 = (function (){var statearr_29095 = state_28970;
(statearr_29095[(24)] = inst_28830);

return statearr_29095;
})();
if(cljs.core.truth_(inst_28831)){
var statearr_29096_31165 = state_28970__$1;
(statearr_29096_31165[(1)] = (13));

} else {
var statearr_29097_31166 = state_28970__$1;
(statearr_29097_31166[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28971 === (18))){
var inst_28876 = (state_28970[(2)]);
var state_28970__$1 = state_28970;
var statearr_29098_31167 = state_28970__$1;
(statearr_29098_31167[(2)] = inst_28876);

(statearr_29098_31167[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28971 === (42))){
var state_28970__$1 = state_28970;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28970__$1,(45),dchan);
} else {
if((state_val_28971 === (37))){
var inst_28805 = (state_28970[(11)]);
var inst_28927 = (state_28970[(22)]);
var inst_28916 = (state_28970[(23)]);
var inst_28927__$1 = cljs.core.first(inst_28916);
var inst_28929 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_28927__$1,inst_28805,done);
var state_28970__$1 = (function (){var statearr_29101 = state_28970;
(statearr_29101[(22)] = inst_28927__$1);

return statearr_29101;
})();
if(cljs.core.truth_(inst_28929)){
var statearr_29106_31168 = state_28970__$1;
(statearr_29106_31168[(1)] = (39));

} else {
var statearr_29107_31169 = state_28970__$1;
(statearr_29107_31169[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28971 === (8))){
var inst_28820 = (state_28970[(16)]);
var inst_28819 = (state_28970[(17)]);
var inst_28822 = (inst_28820 < inst_28819);
var inst_28823 = inst_28822;
var state_28970__$1 = state_28970;
if(cljs.core.truth_(inst_28823)){
var statearr_29108_31170 = state_28970__$1;
(statearr_29108_31170[(1)] = (10));

} else {
var statearr_29109_31171 = state_28970__$1;
(statearr_29109_31171[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__27551__auto__ = null;
var cljs$core$async$mult_$_state_machine__27551__auto____0 = (function (){
var statearr_29110 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29110[(0)] = cljs$core$async$mult_$_state_machine__27551__auto__);

(statearr_29110[(1)] = (1));

return statearr_29110;
});
var cljs$core$async$mult_$_state_machine__27551__auto____1 = (function (state_28970){
while(true){
var ret_value__27552__auto__ = (function (){try{while(true){
var result__27553__auto__ = switch__27550__auto__(state_28970);
if(cljs.core.keyword_identical_QMARK_(result__27553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27553__auto__;
}
break;
}
}catch (e29111){var ex__27554__auto__ = e29111;
var statearr_29112_31172 = state_28970;
(statearr_29112_31172[(2)] = ex__27554__auto__);


if(cljs.core.seq((state_28970[(4)]))){
var statearr_29115_31174 = state_28970;
(statearr_29115_31174[(1)] = cljs.core.first((state_28970[(4)])));

} else {
throw ex__27554__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31175 = state_28970;
state_28970 = G__31175;
continue;
} else {
return ret_value__27552__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27551__auto__ = function(state_28970){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27551__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27551__auto____1.call(this,state_28970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__27551__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27551__auto____0;
cljs$core$async$mult_$_state_machine__27551__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27551__auto____1;
return cljs$core$async$mult_$_state_machine__27551__auto__;
})()
})();
var state__27963__auto__ = (function (){var statearr_29122 = f__27962__auto__();
(statearr_29122[(6)] = c__27961__auto___31048);

return statearr_29122;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27963__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__29125 = arguments.length;
switch (G__29125) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_31177 = (function (m,ch){
var x__5346__auto__ = (((m == null))?null:m);
var m__5347__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5346__auto__)]);
if((!((m__5347__auto__ == null)))){
return (m__5347__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5347__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5347__auto__.call(null,m,ch));
} else {
var m__5345__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5345__auto__ == null)))){
return (m__5345__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5345__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5345__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_31177(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_31178 = (function (m,ch){
var x__5346__auto__ = (((m == null))?null:m);
var m__5347__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5346__auto__)]);
if((!((m__5347__auto__ == null)))){
return (m__5347__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5347__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5347__auto__.call(null,m,ch));
} else {
var m__5345__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5345__auto__ == null)))){
return (m__5345__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5345__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5345__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_31178(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_31184 = (function (m){
var x__5346__auto__ = (((m == null))?null:m);
var m__5347__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5346__auto__)]);
if((!((m__5347__auto__ == null)))){
return (m__5347__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5347__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5347__auto__.call(null,m));
} else {
var m__5345__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5345__auto__ == null)))){
return (m__5345__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5345__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5345__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_31184(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_31196 = (function (m,state_map){
var x__5346__auto__ = (((m == null))?null:m);
var m__5347__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5346__auto__)]);
if((!((m__5347__auto__ == null)))){
return (m__5347__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5347__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5347__auto__.call(null,m,state_map));
} else {
var m__5345__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5345__auto__ == null)))){
return (m__5345__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5345__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5345__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_31196(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_31202 = (function (m,mode){
var x__5346__auto__ = (((m == null))?null:m);
var m__5347__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5346__auto__)]);
if((!((m__5347__auto__ == null)))){
return (m__5347__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5347__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5347__auto__.call(null,m,mode));
} else {
var m__5345__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5345__auto__ == null)))){
return (m__5345__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5345__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5345__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_31202(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5728__auto__ = [];
var len__5722__auto___31208 = arguments.length;
var i__5723__auto___31209 = (0);
while(true){
if((i__5723__auto___31209 < len__5722__auto___31208)){
args__5728__auto__.push((arguments[i__5723__auto___31209]));

var G__31210 = (i__5723__auto___31209 + (1));
i__5723__auto___31209 = G__31210;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((3) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5729__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29201){
var map__29203 = p__29201;
var map__29203__$1 = cljs.core.__destructure_map(map__29203);
var opts = map__29203__$1;
var statearr_29204_31211 = state;
(statearr_29204_31211[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_29205_31212 = state;
(statearr_29205_31212[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_29206_31213 = state;
(statearr_29206_31213[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29193){
var G__29194 = cljs.core.first(seq29193);
var seq29193__$1 = cljs.core.next(seq29193);
var G__29195 = cljs.core.first(seq29193__$1);
var seq29193__$2 = cljs.core.next(seq29193__$1);
var G__29196 = cljs.core.first(seq29193__$2);
var seq29193__$3 = cljs.core.next(seq29193__$2);
var self__5707__auto__ = this;
return self__5707__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29194,G__29195,G__29196,seq29193__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29260 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29261){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta29261 = meta29261;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29260.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29262,meta29261__$1){
var self__ = this;
var _29262__$1 = this;
return (new cljs.core.async.t_cljs$core$async29260(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta29261__$1));
}));

(cljs.core.async.t_cljs$core$async29260.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29262){
var self__ = this;
var _29262__$1 = this;
return self__.meta29261;
}));

(cljs.core.async.t_cljs$core$async29260.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29260.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async29260.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29260.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async29260.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async29260.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async29260.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async29260.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async29260.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta29261","meta29261",-925531275,null)], null);
}));

(cljs.core.async.t_cljs$core$async29260.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29260.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29260");

(cljs.core.async.t_cljs$core$async29260.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"cljs.core.async/t_cljs$core$async29260");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29260.
 */
cljs.core.async.__GT_t_cljs$core$async29260 = (function cljs$core$async$__GT_t_cljs$core$async29260(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29261){
return (new cljs.core.async.t_cljs$core$async29260(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29261));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async29260(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__27961__auto___31254 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27962__auto__ = (function (){var switch__27550__auto__ = (function (state_29344){
var state_val_29345 = (state_29344[(1)]);
if((state_val_29345 === (7))){
var inst_29304 = (state_29344[(2)]);
var state_29344__$1 = state_29344;
if(cljs.core.truth_(inst_29304)){
var statearr_29346_31256 = state_29344__$1;
(statearr_29346_31256[(1)] = (8));

} else {
var statearr_29347_31257 = state_29344__$1;
(statearr_29347_31257[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29345 === (20))){
var inst_29297 = (state_29344[(7)]);
var state_29344__$1 = state_29344;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29344__$1,(23),out,inst_29297);
} else {
if((state_val_29345 === (1))){
var inst_29276 = calc_state();
var inst_29281 = cljs.core.__destructure_map(inst_29276);
var inst_29282 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29281,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29283 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29281,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29284 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29281,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29285 = inst_29276;
var state_29344__$1 = (function (){var statearr_29348 = state_29344;
(statearr_29348[(8)] = inst_29282);

(statearr_29348[(9)] = inst_29283);

(statearr_29348[(10)] = inst_29284);

(statearr_29348[(11)] = inst_29285);

return statearr_29348;
})();
var statearr_29349_31271 = state_29344__$1;
(statearr_29349_31271[(2)] = null);

(statearr_29349_31271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29345 === (24))){
var inst_29288 = (state_29344[(12)]);
var inst_29285 = inst_29288;
var state_29344__$1 = (function (){var statearr_29350 = state_29344;
(statearr_29350[(11)] = inst_29285);

return statearr_29350;
})();
var statearr_29351_31273 = state_29344__$1;
(statearr_29351_31273[(2)] = null);

(statearr_29351_31273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29345 === (4))){
var inst_29299 = (state_29344[(13)]);
var inst_29297 = (state_29344[(7)]);
var inst_29296 = (state_29344[(2)]);
var inst_29297__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29296,(0),null);
var inst_29298 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29296,(1),null);
var inst_29299__$1 = (inst_29297__$1 == null);
var state_29344__$1 = (function (){var statearr_29353 = state_29344;
(statearr_29353[(13)] = inst_29299__$1);

(statearr_29353[(7)] = inst_29297__$1);

(statearr_29353[(14)] = inst_29298);

return statearr_29353;
})();
if(cljs.core.truth_(inst_29299__$1)){
var statearr_29354_31274 = state_29344__$1;
(statearr_29354_31274[(1)] = (5));

} else {
var statearr_29356_31275 = state_29344__$1;
(statearr_29356_31275[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29345 === (15))){
var inst_29318 = (state_29344[(15)]);
var inst_29289 = (state_29344[(16)]);
var inst_29318__$1 = cljs.core.empty_QMARK_(inst_29289);
var state_29344__$1 = (function (){var statearr_29360 = state_29344;
(statearr_29360[(15)] = inst_29318__$1);

return statearr_29360;
})();
if(inst_29318__$1){
var statearr_29361_31276 = state_29344__$1;
(statearr_29361_31276[(1)] = (17));

} else {
var statearr_29362_31277 = state_29344__$1;
(statearr_29362_31277[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29345 === (21))){
var inst_29288 = (state_29344[(12)]);
var inst_29285 = inst_29288;
var state_29344__$1 = (function (){var statearr_29363 = state_29344;
(statearr_29363[(11)] = inst_29285);

return statearr_29363;
})();
var statearr_29364_31278 = state_29344__$1;
(statearr_29364_31278[(2)] = null);

(statearr_29364_31278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29345 === (13))){
var inst_29311 = (state_29344[(2)]);
var inst_29312 = calc_state();
var inst_29285 = inst_29312;
var state_29344__$1 = (function (){var statearr_29365 = state_29344;
(statearr_29365[(17)] = inst_29311);

(statearr_29365[(11)] = inst_29285);

return statearr_29365;
})();
var statearr_29366_31279 = state_29344__$1;
(statearr_29366_31279[(2)] = null);

(statearr_29366_31279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29345 === (22))){
var inst_29338 = (state_29344[(2)]);
var state_29344__$1 = state_29344;
var statearr_29367_31280 = state_29344__$1;
(statearr_29367_31280[(2)] = inst_29338);

(statearr_29367_31280[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29345 === (6))){
var inst_29298 = (state_29344[(14)]);
var inst_29302 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_29298,change);
var state_29344__$1 = state_29344;
var statearr_29368_31281 = state_29344__$1;
(statearr_29368_31281[(2)] = inst_29302);

(statearr_29368_31281[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29345 === (25))){
var state_29344__$1 = state_29344;
var statearr_29369_31282 = state_29344__$1;
(statearr_29369_31282[(2)] = null);

(statearr_29369_31282[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29345 === (17))){
var inst_29290 = (state_29344[(18)]);
var inst_29298 = (state_29344[(14)]);
var inst_29320 = (inst_29290.cljs$core$IFn$_invoke$arity$1 ? inst_29290.cljs$core$IFn$_invoke$arity$1(inst_29298) : inst_29290.call(null,inst_29298));
var inst_29321 = cljs.core.not(inst_29320);
var state_29344__$1 = state_29344;
var statearr_29370_31283 = state_29344__$1;
(statearr_29370_31283[(2)] = inst_29321);

(statearr_29370_31283[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29345 === (3))){
var inst_29342 = (state_29344[(2)]);
var state_29344__$1 = state_29344;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29344__$1,inst_29342);
} else {
if((state_val_29345 === (12))){
var state_29344__$1 = state_29344;
var statearr_29371_31284 = state_29344__$1;
(statearr_29371_31284[(2)] = null);

(statearr_29371_31284[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29345 === (2))){
var inst_29285 = (state_29344[(11)]);
var inst_29288 = (state_29344[(12)]);
var inst_29288__$1 = cljs.core.__destructure_map(inst_29285);
var inst_29289 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29288__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29290 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29288__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29291 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29288__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_29344__$1 = (function (){var statearr_29372 = state_29344;
(statearr_29372[(18)] = inst_29290);

(statearr_29372[(16)] = inst_29289);

(statearr_29372[(12)] = inst_29288__$1);

return statearr_29372;
})();
return cljs.core.async.ioc_alts_BANG_(state_29344__$1,(4),inst_29291);
} else {
if((state_val_29345 === (23))){
var inst_29329 = (state_29344[(2)]);
var state_29344__$1 = state_29344;
if(cljs.core.truth_(inst_29329)){
var statearr_29373_31302 = state_29344__$1;
(statearr_29373_31302[(1)] = (24));

} else {
var statearr_29375_31304 = state_29344__$1;
(statearr_29375_31304[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29345 === (19))){
var inst_29324 = (state_29344[(2)]);
var state_29344__$1 = state_29344;
var statearr_29377_31312 = state_29344__$1;
(statearr_29377_31312[(2)] = inst_29324);

(statearr_29377_31312[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29345 === (11))){
var inst_29298 = (state_29344[(14)]);
var inst_29308 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_29298);
var state_29344__$1 = state_29344;
var statearr_29382_31316 = state_29344__$1;
(statearr_29382_31316[(2)] = inst_29308);

(statearr_29382_31316[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29345 === (9))){
var inst_29289 = (state_29344[(16)]);
var inst_29315 = (state_29344[(19)]);
var inst_29298 = (state_29344[(14)]);
var inst_29315__$1 = (inst_29289.cljs$core$IFn$_invoke$arity$1 ? inst_29289.cljs$core$IFn$_invoke$arity$1(inst_29298) : inst_29289.call(null,inst_29298));
var state_29344__$1 = (function (){var statearr_29384 = state_29344;
(statearr_29384[(19)] = inst_29315__$1);

return statearr_29384;
})();
if(cljs.core.truth_(inst_29315__$1)){
var statearr_29385_31321 = state_29344__$1;
(statearr_29385_31321[(1)] = (14));

} else {
var statearr_29386_31322 = state_29344__$1;
(statearr_29386_31322[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29345 === (5))){
var inst_29299 = (state_29344[(13)]);
var state_29344__$1 = state_29344;
var statearr_29387_31326 = state_29344__$1;
(statearr_29387_31326[(2)] = inst_29299);

(statearr_29387_31326[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29345 === (14))){
var inst_29315 = (state_29344[(19)]);
var state_29344__$1 = state_29344;
var statearr_29388_31341 = state_29344__$1;
(statearr_29388_31341[(2)] = inst_29315);

(statearr_29388_31341[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29345 === (26))){
var inst_29334 = (state_29344[(2)]);
var state_29344__$1 = state_29344;
var statearr_29391_31352 = state_29344__$1;
(statearr_29391_31352[(2)] = inst_29334);

(statearr_29391_31352[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29345 === (16))){
var inst_29326 = (state_29344[(2)]);
var state_29344__$1 = state_29344;
if(cljs.core.truth_(inst_29326)){
var statearr_29392_31370 = state_29344__$1;
(statearr_29392_31370[(1)] = (20));

} else {
var statearr_29394_31371 = state_29344__$1;
(statearr_29394_31371[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29345 === (10))){
var inst_29340 = (state_29344[(2)]);
var state_29344__$1 = state_29344;
var statearr_29398_31372 = state_29344__$1;
(statearr_29398_31372[(2)] = inst_29340);

(statearr_29398_31372[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29345 === (18))){
var inst_29318 = (state_29344[(15)]);
var state_29344__$1 = state_29344;
var statearr_29400_31376 = state_29344__$1;
(statearr_29400_31376[(2)] = inst_29318);

(statearr_29400_31376[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29345 === (8))){
var inst_29297 = (state_29344[(7)]);
var inst_29306 = (inst_29297 == null);
var state_29344__$1 = state_29344;
if(cljs.core.truth_(inst_29306)){
var statearr_29401_31381 = state_29344__$1;
(statearr_29401_31381[(1)] = (11));

} else {
var statearr_29402_31382 = state_29344__$1;
(statearr_29402_31382[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__27551__auto__ = null;
var cljs$core$async$mix_$_state_machine__27551__auto____0 = (function (){
var statearr_29403 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29403[(0)] = cljs$core$async$mix_$_state_machine__27551__auto__);

(statearr_29403[(1)] = (1));

return statearr_29403;
});
var cljs$core$async$mix_$_state_machine__27551__auto____1 = (function (state_29344){
while(true){
var ret_value__27552__auto__ = (function (){try{while(true){
var result__27553__auto__ = switch__27550__auto__(state_29344);
if(cljs.core.keyword_identical_QMARK_(result__27553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27553__auto__;
}
break;
}
}catch (e29404){var ex__27554__auto__ = e29404;
var statearr_29405_31384 = state_29344;
(statearr_29405_31384[(2)] = ex__27554__auto__);


if(cljs.core.seq((state_29344[(4)]))){
var statearr_29406_31385 = state_29344;
(statearr_29406_31385[(1)] = cljs.core.first((state_29344[(4)])));

} else {
throw ex__27554__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31386 = state_29344;
state_29344 = G__31386;
continue;
} else {
return ret_value__27552__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27551__auto__ = function(state_29344){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27551__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27551__auto____1.call(this,state_29344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__27551__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27551__auto____0;
cljs$core$async$mix_$_state_machine__27551__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27551__auto____1;
return cljs$core$async$mix_$_state_machine__27551__auto__;
})()
})();
var state__27963__auto__ = (function (){var statearr_29407 = f__27962__auto__();
(statearr_29407[(6)] = c__27961__auto___31254);

return statearr_29407;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27963__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_31406 = (function (p,v,ch,close_QMARK_){
var x__5346__auto__ = (((p == null))?null:p);
var m__5347__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5346__auto__)]);
if((!((m__5347__auto__ == null)))){
return (m__5347__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5347__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5347__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5345__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5345__auto__ == null)))){
return (m__5345__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5345__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5345__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_31406(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_31411 = (function (p,v,ch){
var x__5346__auto__ = (((p == null))?null:p);
var m__5347__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5346__auto__)]);
if((!((m__5347__auto__ == null)))){
return (m__5347__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5347__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5347__auto__.call(null,p,v,ch));
} else {
var m__5345__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5345__auto__ == null)))){
return (m__5345__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5345__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5345__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_31411(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_31416 = (function() {
var G__31417 = null;
var G__31417__1 = (function (p){
var x__5346__auto__ = (((p == null))?null:p);
var m__5347__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5346__auto__)]);
if((!((m__5347__auto__ == null)))){
return (m__5347__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5347__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5347__auto__.call(null,p));
} else {
var m__5345__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5345__auto__ == null)))){
return (m__5345__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5345__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5345__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__31417__2 = (function (p,v){
var x__5346__auto__ = (((p == null))?null:p);
var m__5347__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5346__auto__)]);
if((!((m__5347__auto__ == null)))){
return (m__5347__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5347__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5347__auto__.call(null,p,v));
} else {
var m__5345__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5345__auto__ == null)))){
return (m__5345__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5345__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5345__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__31417 = function(p,v){
switch(arguments.length){
case 1:
return G__31417__1.call(this,p);
case 2:
return G__31417__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__31417.cljs$core$IFn$_invoke$arity$1 = G__31417__1;
G__31417.cljs$core$IFn$_invoke$arity$2 = G__31417__2;
return G__31417;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__29424 = arguments.length;
switch (G__29424) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_31416(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_31416(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29463 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta29464){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta29464 = meta29464;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29463.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29465,meta29464__$1){
var self__ = this;
var _29465__$1 = this;
return (new cljs.core.async.t_cljs$core$async29463(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta29464__$1));
}));

(cljs.core.async.t_cljs$core$async29463.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29465){
var self__ = this;
var _29465__$1 = this;
return self__.meta29464;
}));

(cljs.core.async.t_cljs$core$async29463.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29463.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async29463.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29463.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async29463.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async29463.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async29463.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async29463.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta29464","meta29464",-1768419981,null)], null);
}));

(cljs.core.async.t_cljs$core$async29463.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29463.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29463");

(cljs.core.async.t_cljs$core$async29463.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"cljs.core.async/t_cljs$core$async29463");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29463.
 */
cljs.core.async.__GT_t_cljs$core$async29463 = (function cljs$core$async$__GT_t_cljs$core$async29463(ch,topic_fn,buf_fn,mults,ensure_mult,meta29464){
return (new cljs.core.async.t_cljs$core$async29463(ch,topic_fn,buf_fn,mults,ensure_mult,meta29464));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__29447 = arguments.length;
switch (G__29447) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4998__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__29429_SHARP_){
if(cljs.core.truth_((p1__29429_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__29429_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__29429_SHARP_.call(null,topic)))){
return p1__29429_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__29429_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async29463(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__27961__auto___31491 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27962__auto__ = (function (){var switch__27550__auto__ = (function (state_29553){
var state_val_29554 = (state_29553[(1)]);
if((state_val_29554 === (7))){
var inst_29549 = (state_29553[(2)]);
var state_29553__$1 = state_29553;
var statearr_29555_31492 = state_29553__$1;
(statearr_29555_31492[(2)] = inst_29549);

(statearr_29555_31492[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29554 === (20))){
var state_29553__$1 = state_29553;
var statearr_29556_31493 = state_29553__$1;
(statearr_29556_31493[(2)] = null);

(statearr_29556_31493[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29554 === (1))){
var state_29553__$1 = state_29553;
var statearr_29565_31494 = state_29553__$1;
(statearr_29565_31494[(2)] = null);

(statearr_29565_31494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29554 === (24))){
var inst_29532 = (state_29553[(7)]);
var inst_29541 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_29532);
var state_29553__$1 = state_29553;
var statearr_29570_31495 = state_29553__$1;
(statearr_29570_31495[(2)] = inst_29541);

(statearr_29570_31495[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29554 === (4))){
var inst_29484 = (state_29553[(8)]);
var inst_29484__$1 = (state_29553[(2)]);
var inst_29485 = (inst_29484__$1 == null);
var state_29553__$1 = (function (){var statearr_29571 = state_29553;
(statearr_29571[(8)] = inst_29484__$1);

return statearr_29571;
})();
if(cljs.core.truth_(inst_29485)){
var statearr_29572_31514 = state_29553__$1;
(statearr_29572_31514[(1)] = (5));

} else {
var statearr_29575_31515 = state_29553__$1;
(statearr_29575_31515[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29554 === (15))){
var inst_29526 = (state_29553[(2)]);
var state_29553__$1 = state_29553;
var statearr_29576_31521 = state_29553__$1;
(statearr_29576_31521[(2)] = inst_29526);

(statearr_29576_31521[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29554 === (21))){
var inst_29546 = (state_29553[(2)]);
var state_29553__$1 = (function (){var statearr_29578 = state_29553;
(statearr_29578[(9)] = inst_29546);

return statearr_29578;
})();
var statearr_29579_31522 = state_29553__$1;
(statearr_29579_31522[(2)] = null);

(statearr_29579_31522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29554 === (13))){
var inst_29508 = (state_29553[(10)]);
var inst_29510 = cljs.core.chunked_seq_QMARK_(inst_29508);
var state_29553__$1 = state_29553;
if(inst_29510){
var statearr_29581_31531 = state_29553__$1;
(statearr_29581_31531[(1)] = (16));

} else {
var statearr_29582_31536 = state_29553__$1;
(statearr_29582_31536[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29554 === (22))){
var inst_29538 = (state_29553[(2)]);
var state_29553__$1 = state_29553;
if(cljs.core.truth_(inst_29538)){
var statearr_29584_31537 = state_29553__$1;
(statearr_29584_31537[(1)] = (23));

} else {
var statearr_29585_31538 = state_29553__$1;
(statearr_29585_31538[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29554 === (6))){
var inst_29484 = (state_29553[(8)]);
var inst_29532 = (state_29553[(7)]);
var inst_29534 = (state_29553[(11)]);
var inst_29532__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_29484) : topic_fn.call(null,inst_29484));
var inst_29533 = cljs.core.deref(mults);
var inst_29534__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29533,inst_29532__$1);
var state_29553__$1 = (function (){var statearr_29586 = state_29553;
(statearr_29586[(7)] = inst_29532__$1);

(statearr_29586[(11)] = inst_29534__$1);

return statearr_29586;
})();
if(cljs.core.truth_(inst_29534__$1)){
var statearr_29587_31539 = state_29553__$1;
(statearr_29587_31539[(1)] = (19));

} else {
var statearr_29588_31540 = state_29553__$1;
(statearr_29588_31540[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29554 === (25))){
var inst_29543 = (state_29553[(2)]);
var state_29553__$1 = state_29553;
var statearr_29589_31541 = state_29553__$1;
(statearr_29589_31541[(2)] = inst_29543);

(statearr_29589_31541[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29554 === (17))){
var inst_29508 = (state_29553[(10)]);
var inst_29517 = cljs.core.first(inst_29508);
var inst_29518 = cljs.core.async.muxch_STAR_(inst_29517);
var inst_29519 = cljs.core.async.close_BANG_(inst_29518);
var inst_29520 = cljs.core.next(inst_29508);
var inst_29494 = inst_29520;
var inst_29495 = null;
var inst_29496 = (0);
var inst_29497 = (0);
var state_29553__$1 = (function (){var statearr_29600 = state_29553;
(statearr_29600[(12)] = inst_29497);

(statearr_29600[(13)] = inst_29519);

(statearr_29600[(14)] = inst_29495);

(statearr_29600[(15)] = inst_29496);

(statearr_29600[(16)] = inst_29494);

return statearr_29600;
})();
var statearr_29601_31556 = state_29553__$1;
(statearr_29601_31556[(2)] = null);

(statearr_29601_31556[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29554 === (3))){
var inst_29551 = (state_29553[(2)]);
var state_29553__$1 = state_29553;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29553__$1,inst_29551);
} else {
if((state_val_29554 === (12))){
var inst_29528 = (state_29553[(2)]);
var state_29553__$1 = state_29553;
var statearr_29602_31557 = state_29553__$1;
(statearr_29602_31557[(2)] = inst_29528);

(statearr_29602_31557[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29554 === (2))){
var state_29553__$1 = state_29553;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29553__$1,(4),ch);
} else {
if((state_val_29554 === (23))){
var state_29553__$1 = state_29553;
var statearr_29603_31564 = state_29553__$1;
(statearr_29603_31564[(2)] = null);

(statearr_29603_31564[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29554 === (19))){
var inst_29484 = (state_29553[(8)]);
var inst_29534 = (state_29553[(11)]);
var inst_29536 = cljs.core.async.muxch_STAR_(inst_29534);
var state_29553__$1 = state_29553;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29553__$1,(22),inst_29536,inst_29484);
} else {
if((state_val_29554 === (11))){
var inst_29508 = (state_29553[(10)]);
var inst_29494 = (state_29553[(16)]);
var inst_29508__$1 = cljs.core.seq(inst_29494);
var state_29553__$1 = (function (){var statearr_29608 = state_29553;
(statearr_29608[(10)] = inst_29508__$1);

return statearr_29608;
})();
if(inst_29508__$1){
var statearr_29609_31586 = state_29553__$1;
(statearr_29609_31586[(1)] = (13));

} else {
var statearr_29611_31588 = state_29553__$1;
(statearr_29611_31588[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29554 === (9))){
var inst_29530 = (state_29553[(2)]);
var state_29553__$1 = state_29553;
var statearr_29612_31592 = state_29553__$1;
(statearr_29612_31592[(2)] = inst_29530);

(statearr_29612_31592[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29554 === (5))){
var inst_29491 = cljs.core.deref(mults);
var inst_29492 = cljs.core.vals(inst_29491);
var inst_29493 = cljs.core.seq(inst_29492);
var inst_29494 = inst_29493;
var inst_29495 = null;
var inst_29496 = (0);
var inst_29497 = (0);
var state_29553__$1 = (function (){var statearr_29613 = state_29553;
(statearr_29613[(12)] = inst_29497);

(statearr_29613[(14)] = inst_29495);

(statearr_29613[(15)] = inst_29496);

(statearr_29613[(16)] = inst_29494);

return statearr_29613;
})();
var statearr_29614_31594 = state_29553__$1;
(statearr_29614_31594[(2)] = null);

(statearr_29614_31594[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29554 === (14))){
var state_29553__$1 = state_29553;
var statearr_29618_31595 = state_29553__$1;
(statearr_29618_31595[(2)] = null);

(statearr_29618_31595[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29554 === (16))){
var inst_29508 = (state_29553[(10)]);
var inst_29512 = cljs.core.chunk_first(inst_29508);
var inst_29513 = cljs.core.chunk_rest(inst_29508);
var inst_29514 = cljs.core.count(inst_29512);
var inst_29494 = inst_29513;
var inst_29495 = inst_29512;
var inst_29496 = inst_29514;
var inst_29497 = (0);
var state_29553__$1 = (function (){var statearr_29619 = state_29553;
(statearr_29619[(12)] = inst_29497);

(statearr_29619[(14)] = inst_29495);

(statearr_29619[(15)] = inst_29496);

(statearr_29619[(16)] = inst_29494);

return statearr_29619;
})();
var statearr_29621_31596 = state_29553__$1;
(statearr_29621_31596[(2)] = null);

(statearr_29621_31596[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29554 === (10))){
var inst_29497 = (state_29553[(12)]);
var inst_29495 = (state_29553[(14)]);
var inst_29496 = (state_29553[(15)]);
var inst_29494 = (state_29553[(16)]);
var inst_29502 = cljs.core._nth(inst_29495,inst_29497);
var inst_29503 = cljs.core.async.muxch_STAR_(inst_29502);
var inst_29504 = cljs.core.async.close_BANG_(inst_29503);
var inst_29505 = (inst_29497 + (1));
var tmp29615 = inst_29495;
var tmp29616 = inst_29496;
var tmp29617 = inst_29494;
var inst_29494__$1 = tmp29617;
var inst_29495__$1 = tmp29615;
var inst_29496__$1 = tmp29616;
var inst_29497__$1 = inst_29505;
var state_29553__$1 = (function (){var statearr_29629 = state_29553;
(statearr_29629[(17)] = inst_29504);

(statearr_29629[(12)] = inst_29497__$1);

(statearr_29629[(14)] = inst_29495__$1);

(statearr_29629[(15)] = inst_29496__$1);

(statearr_29629[(16)] = inst_29494__$1);

return statearr_29629;
})();
var statearr_29630_31625 = state_29553__$1;
(statearr_29630_31625[(2)] = null);

(statearr_29630_31625[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29554 === (18))){
var inst_29523 = (state_29553[(2)]);
var state_29553__$1 = state_29553;
var statearr_29631_31632 = state_29553__$1;
(statearr_29631_31632[(2)] = inst_29523);

(statearr_29631_31632[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29554 === (8))){
var inst_29497 = (state_29553[(12)]);
var inst_29496 = (state_29553[(15)]);
var inst_29499 = (inst_29497 < inst_29496);
var inst_29500 = inst_29499;
var state_29553__$1 = state_29553;
if(cljs.core.truth_(inst_29500)){
var statearr_29632_31635 = state_29553__$1;
(statearr_29632_31635[(1)] = (10));

} else {
var statearr_29633_31636 = state_29553__$1;
(statearr_29633_31636[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27551__auto__ = null;
var cljs$core$async$state_machine__27551__auto____0 = (function (){
var statearr_29635 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29635[(0)] = cljs$core$async$state_machine__27551__auto__);

(statearr_29635[(1)] = (1));

return statearr_29635;
});
var cljs$core$async$state_machine__27551__auto____1 = (function (state_29553){
while(true){
var ret_value__27552__auto__ = (function (){try{while(true){
var result__27553__auto__ = switch__27550__auto__(state_29553);
if(cljs.core.keyword_identical_QMARK_(result__27553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27553__auto__;
}
break;
}
}catch (e29636){var ex__27554__auto__ = e29636;
var statearr_29637_31647 = state_29553;
(statearr_29637_31647[(2)] = ex__27554__auto__);


if(cljs.core.seq((state_29553[(4)]))){
var statearr_29638_31649 = state_29553;
(statearr_29638_31649[(1)] = cljs.core.first((state_29553[(4)])));

} else {
throw ex__27554__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31651 = state_29553;
state_29553 = G__31651;
continue;
} else {
return ret_value__27552__auto__;
}
break;
}
});
cljs$core$async$state_machine__27551__auto__ = function(state_29553){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27551__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27551__auto____1.call(this,state_29553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27551__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27551__auto____0;
cljs$core$async$state_machine__27551__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27551__auto____1;
return cljs$core$async$state_machine__27551__auto__;
})()
})();
var state__27963__auto__ = (function (){var statearr_29640 = f__27962__auto__();
(statearr_29640[(6)] = c__27961__auto___31491);

return statearr_29640;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27963__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__29643 = arguments.length;
switch (G__29643) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__29650 = arguments.length;
switch (G__29650) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__29656 = arguments.length;
switch (G__29656) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__27961__auto___31678 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27962__auto__ = (function (){var switch__27550__auto__ = (function (state_29713){
var state_val_29714 = (state_29713[(1)]);
if((state_val_29714 === (7))){
var state_29713__$1 = state_29713;
var statearr_29715_31679 = state_29713__$1;
(statearr_29715_31679[(2)] = null);

(statearr_29715_31679[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29714 === (1))){
var state_29713__$1 = state_29713;
var statearr_29716_31680 = state_29713__$1;
(statearr_29716_31680[(2)] = null);

(statearr_29716_31680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29714 === (4))){
var inst_29666 = (state_29713[(7)]);
var inst_29665 = (state_29713[(8)]);
var inst_29668 = (inst_29666 < inst_29665);
var state_29713__$1 = state_29713;
if(cljs.core.truth_(inst_29668)){
var statearr_29717_31681 = state_29713__$1;
(statearr_29717_31681[(1)] = (6));

} else {
var statearr_29718_31682 = state_29713__$1;
(statearr_29718_31682[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29714 === (15))){
var inst_29695 = (state_29713[(9)]);
var inst_29700 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_29695);
var state_29713__$1 = state_29713;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29713__$1,(17),out,inst_29700);
} else {
if((state_val_29714 === (13))){
var inst_29695 = (state_29713[(9)]);
var inst_29695__$1 = (state_29713[(2)]);
var inst_29696 = cljs.core.some(cljs.core.nil_QMARK_,inst_29695__$1);
var state_29713__$1 = (function (){var statearr_29719 = state_29713;
(statearr_29719[(9)] = inst_29695__$1);

return statearr_29719;
})();
if(cljs.core.truth_(inst_29696)){
var statearr_29720_31683 = state_29713__$1;
(statearr_29720_31683[(1)] = (14));

} else {
var statearr_29721_31684 = state_29713__$1;
(statearr_29721_31684[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29714 === (6))){
var state_29713__$1 = state_29713;
var statearr_29722_31685 = state_29713__$1;
(statearr_29722_31685[(2)] = null);

(statearr_29722_31685[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29714 === (17))){
var inst_29702 = (state_29713[(2)]);
var state_29713__$1 = (function (){var statearr_29724 = state_29713;
(statearr_29724[(10)] = inst_29702);

return statearr_29724;
})();
var statearr_29725_31686 = state_29713__$1;
(statearr_29725_31686[(2)] = null);

(statearr_29725_31686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29714 === (3))){
var inst_29708 = (state_29713[(2)]);
var state_29713__$1 = state_29713;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29713__$1,inst_29708);
} else {
if((state_val_29714 === (12))){
var _ = (function (){var statearr_29727 = state_29713;
(statearr_29727[(4)] = cljs.core.rest((state_29713[(4)])));

return statearr_29727;
})();
var state_29713__$1 = state_29713;
var ex29723 = (state_29713__$1[(2)]);
var statearr_29729_31691 = state_29713__$1;
(statearr_29729_31691[(5)] = ex29723);


if((ex29723 instanceof Object)){
var statearr_29730_31692 = state_29713__$1;
(statearr_29730_31692[(1)] = (11));

(statearr_29730_31692[(5)] = null);

} else {
throw ex29723;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29714 === (2))){
var inst_29664 = cljs.core.reset_BANG_(dctr,cnt);
var inst_29665 = cnt;
var inst_29666 = (0);
var state_29713__$1 = (function (){var statearr_29734 = state_29713;
(statearr_29734[(11)] = inst_29664);

(statearr_29734[(7)] = inst_29666);

(statearr_29734[(8)] = inst_29665);

return statearr_29734;
})();
var statearr_29735_31694 = state_29713__$1;
(statearr_29735_31694[(2)] = null);

(statearr_29735_31694[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29714 === (11))){
var inst_29670 = (state_29713[(2)]);
var inst_29671 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_29713__$1 = (function (){var statearr_29736 = state_29713;
(statearr_29736[(12)] = inst_29670);

return statearr_29736;
})();
var statearr_29737_31695 = state_29713__$1;
(statearr_29737_31695[(2)] = inst_29671);

(statearr_29737_31695[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29714 === (9))){
var inst_29666 = (state_29713[(7)]);
var _ = (function (){var statearr_29738 = state_29713;
(statearr_29738[(4)] = cljs.core.cons((12),(state_29713[(4)])));

return statearr_29738;
})();
var inst_29681 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_29666) : chs__$1.call(null,inst_29666));
var inst_29682 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_29666) : done.call(null,inst_29666));
var inst_29683 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_29681,inst_29682);
var ___$1 = (function (){var statearr_29739 = state_29713;
(statearr_29739[(4)] = cljs.core.rest((state_29713[(4)])));

return statearr_29739;
})();
var state_29713__$1 = state_29713;
var statearr_29740_31700 = state_29713__$1;
(statearr_29740_31700[(2)] = inst_29683);

(statearr_29740_31700[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29714 === (5))){
var inst_29693 = (state_29713[(2)]);
var state_29713__$1 = (function (){var statearr_29741 = state_29713;
(statearr_29741[(13)] = inst_29693);

return statearr_29741;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29713__$1,(13),dchan);
} else {
if((state_val_29714 === (14))){
var inst_29698 = cljs.core.async.close_BANG_(out);
var state_29713__$1 = state_29713;
var statearr_29742_31707 = state_29713__$1;
(statearr_29742_31707[(2)] = inst_29698);

(statearr_29742_31707[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29714 === (16))){
var inst_29705 = (state_29713[(2)]);
var state_29713__$1 = state_29713;
var statearr_29746_31717 = state_29713__$1;
(statearr_29746_31717[(2)] = inst_29705);

(statearr_29746_31717[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29714 === (10))){
var inst_29666 = (state_29713[(7)]);
var inst_29686 = (state_29713[(2)]);
var inst_29687 = (inst_29666 + (1));
var inst_29666__$1 = inst_29687;
var state_29713__$1 = (function (){var statearr_29747 = state_29713;
(statearr_29747[(7)] = inst_29666__$1);

(statearr_29747[(14)] = inst_29686);

return statearr_29747;
})();
var statearr_29748_31723 = state_29713__$1;
(statearr_29748_31723[(2)] = null);

(statearr_29748_31723[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29714 === (8))){
var inst_29691 = (state_29713[(2)]);
var state_29713__$1 = state_29713;
var statearr_29749_31724 = state_29713__$1;
(statearr_29749_31724[(2)] = inst_29691);

(statearr_29749_31724[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27551__auto__ = null;
var cljs$core$async$state_machine__27551__auto____0 = (function (){
var statearr_29750 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29750[(0)] = cljs$core$async$state_machine__27551__auto__);

(statearr_29750[(1)] = (1));

return statearr_29750;
});
var cljs$core$async$state_machine__27551__auto____1 = (function (state_29713){
while(true){
var ret_value__27552__auto__ = (function (){try{while(true){
var result__27553__auto__ = switch__27550__auto__(state_29713);
if(cljs.core.keyword_identical_QMARK_(result__27553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27553__auto__;
}
break;
}
}catch (e29751){var ex__27554__auto__ = e29751;
var statearr_29752_31732 = state_29713;
(statearr_29752_31732[(2)] = ex__27554__auto__);


if(cljs.core.seq((state_29713[(4)]))){
var statearr_29753_31733 = state_29713;
(statearr_29753_31733[(1)] = cljs.core.first((state_29713[(4)])));

} else {
throw ex__27554__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31736 = state_29713;
state_29713 = G__31736;
continue;
} else {
return ret_value__27552__auto__;
}
break;
}
});
cljs$core$async$state_machine__27551__auto__ = function(state_29713){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27551__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27551__auto____1.call(this,state_29713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27551__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27551__auto____0;
cljs$core$async$state_machine__27551__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27551__auto____1;
return cljs$core$async$state_machine__27551__auto__;
})()
})();
var state__27963__auto__ = (function (){var statearr_29754 = f__27962__auto__();
(statearr_29754[(6)] = c__27961__auto___31678);

return statearr_29754;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27963__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__29757 = arguments.length;
switch (G__29757) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__27961__auto___31749 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27962__auto__ = (function (){var switch__27550__auto__ = (function (state_29855){
var state_val_29858 = (state_29855[(1)]);
if((state_val_29858 === (7))){
var inst_29769 = (state_29855[(7)]);
var inst_29768 = (state_29855[(8)]);
var inst_29768__$1 = (state_29855[(2)]);
var inst_29769__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29768__$1,(0),null);
var inst_29770 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29768__$1,(1),null);
var inst_29771 = (inst_29769__$1 == null);
var state_29855__$1 = (function (){var statearr_29864 = state_29855;
(statearr_29864[(7)] = inst_29769__$1);

(statearr_29864[(8)] = inst_29768__$1);

(statearr_29864[(9)] = inst_29770);

return statearr_29864;
})();
if(cljs.core.truth_(inst_29771)){
var statearr_29865_31759 = state_29855__$1;
(statearr_29865_31759[(1)] = (8));

} else {
var statearr_29866_31761 = state_29855__$1;
(statearr_29866_31761[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29858 === (1))){
var inst_29758 = cljs.core.vec(chs);
var inst_29759 = inst_29758;
var state_29855__$1 = (function (){var statearr_29867 = state_29855;
(statearr_29867[(10)] = inst_29759);

return statearr_29867;
})();
var statearr_29868_31762 = state_29855__$1;
(statearr_29868_31762[(2)] = null);

(statearr_29868_31762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29858 === (4))){
var inst_29759 = (state_29855[(10)]);
var state_29855__$1 = state_29855;
return cljs.core.async.ioc_alts_BANG_(state_29855__$1,(7),inst_29759);
} else {
if((state_val_29858 === (6))){
var inst_29848 = (state_29855[(2)]);
var state_29855__$1 = state_29855;
var statearr_29872_31766 = state_29855__$1;
(statearr_29872_31766[(2)] = inst_29848);

(statearr_29872_31766[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29858 === (3))){
var inst_29850 = (state_29855[(2)]);
var state_29855__$1 = state_29855;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29855__$1,inst_29850);
} else {
if((state_val_29858 === (2))){
var inst_29759 = (state_29855[(10)]);
var inst_29761 = cljs.core.count(inst_29759);
var inst_29762 = (inst_29761 > (0));
var state_29855__$1 = state_29855;
if(cljs.core.truth_(inst_29762)){
var statearr_29874_31767 = state_29855__$1;
(statearr_29874_31767[(1)] = (4));

} else {
var statearr_29875_31768 = state_29855__$1;
(statearr_29875_31768[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29858 === (11))){
var inst_29759 = (state_29855[(10)]);
var inst_29838 = (state_29855[(2)]);
var tmp29873 = inst_29759;
var inst_29759__$1 = tmp29873;
var state_29855__$1 = (function (){var statearr_29876 = state_29855;
(statearr_29876[(10)] = inst_29759__$1);

(statearr_29876[(11)] = inst_29838);

return statearr_29876;
})();
var statearr_29877_31769 = state_29855__$1;
(statearr_29877_31769[(2)] = null);

(statearr_29877_31769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29858 === (9))){
var inst_29769 = (state_29855[(7)]);
var state_29855__$1 = state_29855;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29855__$1,(11),out,inst_29769);
} else {
if((state_val_29858 === (5))){
var inst_29846 = cljs.core.async.close_BANG_(out);
var state_29855__$1 = state_29855;
var statearr_29878_31770 = state_29855__$1;
(statearr_29878_31770[(2)] = inst_29846);

(statearr_29878_31770[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29858 === (10))){
var inst_29841 = (state_29855[(2)]);
var state_29855__$1 = state_29855;
var statearr_29879_31771 = state_29855__$1;
(statearr_29879_31771[(2)] = inst_29841);

(statearr_29879_31771[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29858 === (8))){
var inst_29769 = (state_29855[(7)]);
var inst_29759 = (state_29855[(10)]);
var inst_29768 = (state_29855[(8)]);
var inst_29770 = (state_29855[(9)]);
var inst_29833 = (function (){var cs = inst_29759;
var vec__29764 = inst_29768;
var v = inst_29769;
var c = inst_29770;
return (function (p1__29755_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__29755_SHARP_);
});
})();
var inst_29834 = cljs.core.filterv(inst_29833,inst_29759);
var inst_29759__$1 = inst_29834;
var state_29855__$1 = (function (){var statearr_29886 = state_29855;
(statearr_29886[(10)] = inst_29759__$1);

return statearr_29886;
})();
var statearr_29887_31777 = state_29855__$1;
(statearr_29887_31777[(2)] = null);

(statearr_29887_31777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27551__auto__ = null;
var cljs$core$async$state_machine__27551__auto____0 = (function (){
var statearr_29888 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29888[(0)] = cljs$core$async$state_machine__27551__auto__);

(statearr_29888[(1)] = (1));

return statearr_29888;
});
var cljs$core$async$state_machine__27551__auto____1 = (function (state_29855){
while(true){
var ret_value__27552__auto__ = (function (){try{while(true){
var result__27553__auto__ = switch__27550__auto__(state_29855);
if(cljs.core.keyword_identical_QMARK_(result__27553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27553__auto__;
}
break;
}
}catch (e29889){var ex__27554__auto__ = e29889;
var statearr_29890_31781 = state_29855;
(statearr_29890_31781[(2)] = ex__27554__auto__);


if(cljs.core.seq((state_29855[(4)]))){
var statearr_29891_31783 = state_29855;
(statearr_29891_31783[(1)] = cljs.core.first((state_29855[(4)])));

} else {
throw ex__27554__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31785 = state_29855;
state_29855 = G__31785;
continue;
} else {
return ret_value__27552__auto__;
}
break;
}
});
cljs$core$async$state_machine__27551__auto__ = function(state_29855){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27551__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27551__auto____1.call(this,state_29855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27551__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27551__auto____0;
cljs$core$async$state_machine__27551__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27551__auto____1;
return cljs$core$async$state_machine__27551__auto__;
})()
})();
var state__27963__auto__ = (function (){var statearr_29892 = f__27962__auto__();
(statearr_29892[(6)] = c__27961__auto___31749);

return statearr_29892;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27963__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__29894 = arguments.length;
switch (G__29894) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__27961__auto___31787 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27962__auto__ = (function (){var switch__27550__auto__ = (function (state_29921){
var state_val_29922 = (state_29921[(1)]);
if((state_val_29922 === (7))){
var inst_29903 = (state_29921[(7)]);
var inst_29903__$1 = (state_29921[(2)]);
var inst_29904 = (inst_29903__$1 == null);
var inst_29905 = cljs.core.not(inst_29904);
var state_29921__$1 = (function (){var statearr_29925 = state_29921;
(statearr_29925[(7)] = inst_29903__$1);

return statearr_29925;
})();
if(inst_29905){
var statearr_29927_31788 = state_29921__$1;
(statearr_29927_31788[(1)] = (8));

} else {
var statearr_29930_31789 = state_29921__$1;
(statearr_29930_31789[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29922 === (1))){
var inst_29898 = (0);
var state_29921__$1 = (function (){var statearr_29934 = state_29921;
(statearr_29934[(8)] = inst_29898);

return statearr_29934;
})();
var statearr_29935_31790 = state_29921__$1;
(statearr_29935_31790[(2)] = null);

(statearr_29935_31790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29922 === (4))){
var state_29921__$1 = state_29921;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29921__$1,(7),ch);
} else {
if((state_val_29922 === (6))){
var inst_29916 = (state_29921[(2)]);
var state_29921__$1 = state_29921;
var statearr_29942_31791 = state_29921__$1;
(statearr_29942_31791[(2)] = inst_29916);

(statearr_29942_31791[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29922 === (3))){
var inst_29918 = (state_29921[(2)]);
var inst_29919 = cljs.core.async.close_BANG_(out);
var state_29921__$1 = (function (){var statearr_29943 = state_29921;
(statearr_29943[(9)] = inst_29918);

return statearr_29943;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29921__$1,inst_29919);
} else {
if((state_val_29922 === (2))){
var inst_29898 = (state_29921[(8)]);
var inst_29900 = (inst_29898 < n);
var state_29921__$1 = state_29921;
if(cljs.core.truth_(inst_29900)){
var statearr_29944_31792 = state_29921__$1;
(statearr_29944_31792[(1)] = (4));

} else {
var statearr_29945_31793 = state_29921__$1;
(statearr_29945_31793[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29922 === (11))){
var inst_29898 = (state_29921[(8)]);
var inst_29908 = (state_29921[(2)]);
var inst_29909 = (inst_29898 + (1));
var inst_29898__$1 = inst_29909;
var state_29921__$1 = (function (){var statearr_29946 = state_29921;
(statearr_29946[(10)] = inst_29908);

(statearr_29946[(8)] = inst_29898__$1);

return statearr_29946;
})();
var statearr_29947_31794 = state_29921__$1;
(statearr_29947_31794[(2)] = null);

(statearr_29947_31794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29922 === (9))){
var state_29921__$1 = state_29921;
var statearr_29948_31795 = state_29921__$1;
(statearr_29948_31795[(2)] = null);

(statearr_29948_31795[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29922 === (5))){
var state_29921__$1 = state_29921;
var statearr_29949_31796 = state_29921__$1;
(statearr_29949_31796[(2)] = null);

(statearr_29949_31796[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29922 === (10))){
var inst_29913 = (state_29921[(2)]);
var state_29921__$1 = state_29921;
var statearr_29950_31798 = state_29921__$1;
(statearr_29950_31798[(2)] = inst_29913);

(statearr_29950_31798[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29922 === (8))){
var inst_29903 = (state_29921[(7)]);
var state_29921__$1 = state_29921;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29921__$1,(11),out,inst_29903);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27551__auto__ = null;
var cljs$core$async$state_machine__27551__auto____0 = (function (){
var statearr_29954 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29954[(0)] = cljs$core$async$state_machine__27551__auto__);

(statearr_29954[(1)] = (1));

return statearr_29954;
});
var cljs$core$async$state_machine__27551__auto____1 = (function (state_29921){
while(true){
var ret_value__27552__auto__ = (function (){try{while(true){
var result__27553__auto__ = switch__27550__auto__(state_29921);
if(cljs.core.keyword_identical_QMARK_(result__27553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27553__auto__;
}
break;
}
}catch (e29955){var ex__27554__auto__ = e29955;
var statearr_29956_31799 = state_29921;
(statearr_29956_31799[(2)] = ex__27554__auto__);


if(cljs.core.seq((state_29921[(4)]))){
var statearr_29957_31800 = state_29921;
(statearr_29957_31800[(1)] = cljs.core.first((state_29921[(4)])));

} else {
throw ex__27554__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31801 = state_29921;
state_29921 = G__31801;
continue;
} else {
return ret_value__27552__auto__;
}
break;
}
});
cljs$core$async$state_machine__27551__auto__ = function(state_29921){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27551__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27551__auto____1.call(this,state_29921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27551__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27551__auto____0;
cljs$core$async$state_machine__27551__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27551__auto____1;
return cljs$core$async$state_machine__27551__auto__;
})()
})();
var state__27963__auto__ = (function (){var statearr_29958 = f__27962__auto__();
(statearr_29958[(6)] = c__27961__auto___31787);

return statearr_29958;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27963__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29963 = (function (f,ch,meta29961,_,fn1,meta29964){
this.f = f;
this.ch = ch;
this.meta29961 = meta29961;
this._ = _;
this.fn1 = fn1;
this.meta29964 = meta29964;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29963.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29965,meta29964__$1){
var self__ = this;
var _29965__$1 = this;
return (new cljs.core.async.t_cljs$core$async29963(self__.f,self__.ch,self__.meta29961,self__._,self__.fn1,meta29964__$1));
}));

(cljs.core.async.t_cljs$core$async29963.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29965){
var self__ = this;
var _29965__$1 = this;
return self__.meta29964;
}));

(cljs.core.async.t_cljs$core$async29963.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29963.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async29963.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29963.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__29959_SHARP_){
var G__29968 = (((p1__29959_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__29959_SHARP_) : self__.f.call(null,p1__29959_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__29968) : f1.call(null,G__29968));
});
}));

(cljs.core.async.t_cljs$core$async29963.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29961","meta29961",-1616183060,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29960","cljs.core.async/t_cljs$core$async29960",1831570138,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29964","meta29964",-1737440381,null)], null);
}));

(cljs.core.async.t_cljs$core$async29963.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29963.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29963");

(cljs.core.async.t_cljs$core$async29963.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"cljs.core.async/t_cljs$core$async29963");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29963.
 */
cljs.core.async.__GT_t_cljs$core$async29963 = (function cljs$core$async$__GT_t_cljs$core$async29963(f,ch,meta29961,_,fn1,meta29964){
return (new cljs.core.async.t_cljs$core$async29963(f,ch,meta29961,_,fn1,meta29964));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29960 = (function (f,ch,meta29961){
this.f = f;
this.ch = ch;
this.meta29961 = meta29961;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29960.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29962,meta29961__$1){
var self__ = this;
var _29962__$1 = this;
return (new cljs.core.async.t_cljs$core$async29960(self__.f,self__.ch,meta29961__$1));
}));

(cljs.core.async.t_cljs$core$async29960.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29962){
var self__ = this;
var _29962__$1 = this;
return self__.meta29961;
}));

(cljs.core.async.t_cljs$core$async29960.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29960.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async29960.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async29960.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29960.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async29963(self__.f,self__.ch,self__.meta29961,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__4996__auto__ = ret;
if(cljs.core.truth_(and__4996__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4996__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__29969 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__29969) : self__.f.call(null,G__29969));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async29960.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29960.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async29960.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29961","meta29961",-1616183060,null)], null);
}));

(cljs.core.async.t_cljs$core$async29960.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29960.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29960");

(cljs.core.async.t_cljs$core$async29960.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"cljs.core.async/t_cljs$core$async29960");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29960.
 */
cljs.core.async.__GT_t_cljs$core$async29960 = (function cljs$core$async$__GT_t_cljs$core$async29960(f,ch,meta29961){
return (new cljs.core.async.t_cljs$core$async29960(f,ch,meta29961));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async29960(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29972 = (function (f,ch,meta29973){
this.f = f;
this.ch = ch;
this.meta29973 = meta29973;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29972.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29974,meta29973__$1){
var self__ = this;
var _29974__$1 = this;
return (new cljs.core.async.t_cljs$core$async29972(self__.f,self__.ch,meta29973__$1));
}));

(cljs.core.async.t_cljs$core$async29972.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29974){
var self__ = this;
var _29974__$1 = this;
return self__.meta29973;
}));

(cljs.core.async.t_cljs$core$async29972.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29972.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async29972.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29972.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async29972.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29972.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async29972.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29973","meta29973",-900676906,null)], null);
}));

(cljs.core.async.t_cljs$core$async29972.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29972.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29972");

(cljs.core.async.t_cljs$core$async29972.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"cljs.core.async/t_cljs$core$async29972");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29972.
 */
cljs.core.async.__GT_t_cljs$core$async29972 = (function cljs$core$async$__GT_t_cljs$core$async29972(f,ch,meta29973){
return (new cljs.core.async.t_cljs$core$async29972(f,ch,meta29973));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async29972(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29991 = (function (p,ch,meta29992){
this.p = p;
this.ch = ch;
this.meta29992 = meta29992;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29991.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29993,meta29992__$1){
var self__ = this;
var _29993__$1 = this;
return (new cljs.core.async.t_cljs$core$async29991(self__.p,self__.ch,meta29992__$1));
}));

(cljs.core.async.t_cljs$core$async29991.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29993){
var self__ = this;
var _29993__$1 = this;
return self__.meta29992;
}));

(cljs.core.async.t_cljs$core$async29991.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29991.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async29991.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async29991.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29991.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async29991.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29991.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async29991.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29992","meta29992",436769723,null)], null);
}));

(cljs.core.async.t_cljs$core$async29991.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29991.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29991");

(cljs.core.async.t_cljs$core$async29991.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"cljs.core.async/t_cljs$core$async29991");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29991.
 */
cljs.core.async.__GT_t_cljs$core$async29991 = (function cljs$core$async$__GT_t_cljs$core$async29991(p,ch,meta29992){
return (new cljs.core.async.t_cljs$core$async29991(p,ch,meta29992));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async29991(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__30034 = arguments.length;
switch (G__30034) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__27961__auto___31820 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27962__auto__ = (function (){var switch__27550__auto__ = (function (state_30068){
var state_val_30069 = (state_30068[(1)]);
if((state_val_30069 === (7))){
var inst_30064 = (state_30068[(2)]);
var state_30068__$1 = state_30068;
var statearr_30077_31828 = state_30068__$1;
(statearr_30077_31828[(2)] = inst_30064);

(statearr_30077_31828[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30069 === (1))){
var state_30068__$1 = state_30068;
var statearr_30078_31829 = state_30068__$1;
(statearr_30078_31829[(2)] = null);

(statearr_30078_31829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30069 === (4))){
var inst_30043 = (state_30068[(7)]);
var inst_30043__$1 = (state_30068[(2)]);
var inst_30048 = (inst_30043__$1 == null);
var state_30068__$1 = (function (){var statearr_30079 = state_30068;
(statearr_30079[(7)] = inst_30043__$1);

return statearr_30079;
})();
if(cljs.core.truth_(inst_30048)){
var statearr_30080_31830 = state_30068__$1;
(statearr_30080_31830[(1)] = (5));

} else {
var statearr_30083_31831 = state_30068__$1;
(statearr_30083_31831[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30069 === (6))){
var inst_30043 = (state_30068[(7)]);
var inst_30055 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_30043) : p.call(null,inst_30043));
var state_30068__$1 = state_30068;
if(cljs.core.truth_(inst_30055)){
var statearr_30084_31835 = state_30068__$1;
(statearr_30084_31835[(1)] = (8));

} else {
var statearr_30085_31836 = state_30068__$1;
(statearr_30085_31836[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30069 === (3))){
var inst_30066 = (state_30068[(2)]);
var state_30068__$1 = state_30068;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30068__$1,inst_30066);
} else {
if((state_val_30069 === (2))){
var state_30068__$1 = state_30068;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30068__$1,(4),ch);
} else {
if((state_val_30069 === (11))){
var inst_30058 = (state_30068[(2)]);
var state_30068__$1 = state_30068;
var statearr_30092_31837 = state_30068__$1;
(statearr_30092_31837[(2)] = inst_30058);

(statearr_30092_31837[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30069 === (9))){
var state_30068__$1 = state_30068;
var statearr_30093_31838 = state_30068__$1;
(statearr_30093_31838[(2)] = null);

(statearr_30093_31838[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30069 === (5))){
var inst_30053 = cljs.core.async.close_BANG_(out);
var state_30068__$1 = state_30068;
var statearr_30094_31839 = state_30068__$1;
(statearr_30094_31839[(2)] = inst_30053);

(statearr_30094_31839[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30069 === (10))){
var inst_30061 = (state_30068[(2)]);
var state_30068__$1 = (function (){var statearr_30095 = state_30068;
(statearr_30095[(8)] = inst_30061);

return statearr_30095;
})();
var statearr_30096_31843 = state_30068__$1;
(statearr_30096_31843[(2)] = null);

(statearr_30096_31843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30069 === (8))){
var inst_30043 = (state_30068[(7)]);
var state_30068__$1 = state_30068;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30068__$1,(11),out,inst_30043);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27551__auto__ = null;
var cljs$core$async$state_machine__27551__auto____0 = (function (){
var statearr_30106 = [null,null,null,null,null,null,null,null,null];
(statearr_30106[(0)] = cljs$core$async$state_machine__27551__auto__);

(statearr_30106[(1)] = (1));

return statearr_30106;
});
var cljs$core$async$state_machine__27551__auto____1 = (function (state_30068){
while(true){
var ret_value__27552__auto__ = (function (){try{while(true){
var result__27553__auto__ = switch__27550__auto__(state_30068);
if(cljs.core.keyword_identical_QMARK_(result__27553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27553__auto__;
}
break;
}
}catch (e30107){var ex__27554__auto__ = e30107;
var statearr_30108_31850 = state_30068;
(statearr_30108_31850[(2)] = ex__27554__auto__);


if(cljs.core.seq((state_30068[(4)]))){
var statearr_30109_31851 = state_30068;
(statearr_30109_31851[(1)] = cljs.core.first((state_30068[(4)])));

} else {
throw ex__27554__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31854 = state_30068;
state_30068 = G__31854;
continue;
} else {
return ret_value__27552__auto__;
}
break;
}
});
cljs$core$async$state_machine__27551__auto__ = function(state_30068){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27551__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27551__auto____1.call(this,state_30068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27551__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27551__auto____0;
cljs$core$async$state_machine__27551__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27551__auto____1;
return cljs$core$async$state_machine__27551__auto__;
})()
})();
var state__27963__auto__ = (function (){var statearr_30110 = f__27962__auto__();
(statearr_30110[(6)] = c__27961__auto___31820);

return statearr_30110;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27963__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__30112 = arguments.length;
switch (G__30112) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__27961__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27962__auto__ = (function (){var switch__27550__auto__ = (function (state_30177){
var state_val_30178 = (state_30177[(1)]);
if((state_val_30178 === (7))){
var inst_30172 = (state_30177[(2)]);
var state_30177__$1 = state_30177;
var statearr_30192_31889 = state_30177__$1;
(statearr_30192_31889[(2)] = inst_30172);

(statearr_30192_31889[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30178 === (20))){
var inst_30142 = (state_30177[(7)]);
var inst_30153 = (state_30177[(2)]);
var inst_30154 = cljs.core.next(inst_30142);
var inst_30128 = inst_30154;
var inst_30129 = null;
var inst_30130 = (0);
var inst_30131 = (0);
var state_30177__$1 = (function (){var statearr_30193 = state_30177;
(statearr_30193[(8)] = inst_30130);

(statearr_30193[(9)] = inst_30129);

(statearr_30193[(10)] = inst_30128);

(statearr_30193[(11)] = inst_30131);

(statearr_30193[(12)] = inst_30153);

return statearr_30193;
})();
var statearr_30194_31890 = state_30177__$1;
(statearr_30194_31890[(2)] = null);

(statearr_30194_31890[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30178 === (1))){
var state_30177__$1 = state_30177;
var statearr_30195_31891 = state_30177__$1;
(statearr_30195_31891[(2)] = null);

(statearr_30195_31891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30178 === (4))){
var inst_30115 = (state_30177[(13)]);
var inst_30115__$1 = (state_30177[(2)]);
var inst_30116 = (inst_30115__$1 == null);
var state_30177__$1 = (function (){var statearr_30200 = state_30177;
(statearr_30200[(13)] = inst_30115__$1);

return statearr_30200;
})();
if(cljs.core.truth_(inst_30116)){
var statearr_30202_31892 = state_30177__$1;
(statearr_30202_31892[(1)] = (5));

} else {
var statearr_30203_31899 = state_30177__$1;
(statearr_30203_31899[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30178 === (15))){
var state_30177__$1 = state_30177;
var statearr_30210_31900 = state_30177__$1;
(statearr_30210_31900[(2)] = null);

(statearr_30210_31900[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30178 === (21))){
var state_30177__$1 = state_30177;
var statearr_30211_31901 = state_30177__$1;
(statearr_30211_31901[(2)] = null);

(statearr_30211_31901[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30178 === (13))){
var inst_30130 = (state_30177[(8)]);
var inst_30129 = (state_30177[(9)]);
var inst_30128 = (state_30177[(10)]);
var inst_30131 = (state_30177[(11)]);
var inst_30138 = (state_30177[(2)]);
var inst_30139 = (inst_30131 + (1));
var tmp30204 = inst_30130;
var tmp30205 = inst_30129;
var tmp30206 = inst_30128;
var inst_30128__$1 = tmp30206;
var inst_30129__$1 = tmp30205;
var inst_30130__$1 = tmp30204;
var inst_30131__$1 = inst_30139;
var state_30177__$1 = (function (){var statearr_30212 = state_30177;
(statearr_30212[(14)] = inst_30138);

(statearr_30212[(8)] = inst_30130__$1);

(statearr_30212[(9)] = inst_30129__$1);

(statearr_30212[(10)] = inst_30128__$1);

(statearr_30212[(11)] = inst_30131__$1);

return statearr_30212;
})();
var statearr_30213_31902 = state_30177__$1;
(statearr_30213_31902[(2)] = null);

(statearr_30213_31902[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30178 === (22))){
var state_30177__$1 = state_30177;
var statearr_30214_31903 = state_30177__$1;
(statearr_30214_31903[(2)] = null);

(statearr_30214_31903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30178 === (6))){
var inst_30115 = (state_30177[(13)]);
var inst_30126 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_30115) : f.call(null,inst_30115));
var inst_30127 = cljs.core.seq(inst_30126);
var inst_30128 = inst_30127;
var inst_30129 = null;
var inst_30130 = (0);
var inst_30131 = (0);
var state_30177__$1 = (function (){var statearr_30221 = state_30177;
(statearr_30221[(8)] = inst_30130);

(statearr_30221[(9)] = inst_30129);

(statearr_30221[(10)] = inst_30128);

(statearr_30221[(11)] = inst_30131);

return statearr_30221;
})();
var statearr_30222_31904 = state_30177__$1;
(statearr_30222_31904[(2)] = null);

(statearr_30222_31904[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30178 === (17))){
var inst_30142 = (state_30177[(7)]);
var inst_30146 = cljs.core.chunk_first(inst_30142);
var inst_30147 = cljs.core.chunk_rest(inst_30142);
var inst_30148 = cljs.core.count(inst_30146);
var inst_30128 = inst_30147;
var inst_30129 = inst_30146;
var inst_30130 = inst_30148;
var inst_30131 = (0);
var state_30177__$1 = (function (){var statearr_30223 = state_30177;
(statearr_30223[(8)] = inst_30130);

(statearr_30223[(9)] = inst_30129);

(statearr_30223[(10)] = inst_30128);

(statearr_30223[(11)] = inst_30131);

return statearr_30223;
})();
var statearr_30224_31905 = state_30177__$1;
(statearr_30224_31905[(2)] = null);

(statearr_30224_31905[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30178 === (3))){
var inst_30174 = (state_30177[(2)]);
var state_30177__$1 = state_30177;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30177__$1,inst_30174);
} else {
if((state_val_30178 === (12))){
var inst_30162 = (state_30177[(2)]);
var state_30177__$1 = state_30177;
var statearr_30225_31906 = state_30177__$1;
(statearr_30225_31906[(2)] = inst_30162);

(statearr_30225_31906[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30178 === (2))){
var state_30177__$1 = state_30177;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30177__$1,(4),in$);
} else {
if((state_val_30178 === (23))){
var inst_30170 = (state_30177[(2)]);
var state_30177__$1 = state_30177;
var statearr_30227_31913 = state_30177__$1;
(statearr_30227_31913[(2)] = inst_30170);

(statearr_30227_31913[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30178 === (19))){
var inst_30157 = (state_30177[(2)]);
var state_30177__$1 = state_30177;
var statearr_30229_31914 = state_30177__$1;
(statearr_30229_31914[(2)] = inst_30157);

(statearr_30229_31914[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30178 === (11))){
var inst_30142 = (state_30177[(7)]);
var inst_30128 = (state_30177[(10)]);
var inst_30142__$1 = cljs.core.seq(inst_30128);
var state_30177__$1 = (function (){var statearr_30230 = state_30177;
(statearr_30230[(7)] = inst_30142__$1);

return statearr_30230;
})();
if(inst_30142__$1){
var statearr_30232_31915 = state_30177__$1;
(statearr_30232_31915[(1)] = (14));

} else {
var statearr_30233_31916 = state_30177__$1;
(statearr_30233_31916[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30178 === (9))){
var inst_30164 = (state_30177[(2)]);
var inst_30165 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_30177__$1 = (function (){var statearr_30234 = state_30177;
(statearr_30234[(15)] = inst_30164);

return statearr_30234;
})();
if(cljs.core.truth_(inst_30165)){
var statearr_30235_31917 = state_30177__$1;
(statearr_30235_31917[(1)] = (21));

} else {
var statearr_30236_31918 = state_30177__$1;
(statearr_30236_31918[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30178 === (5))){
var inst_30118 = cljs.core.async.close_BANG_(out);
var state_30177__$1 = state_30177;
var statearr_30237_31919 = state_30177__$1;
(statearr_30237_31919[(2)] = inst_30118);

(statearr_30237_31919[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30178 === (14))){
var inst_30142 = (state_30177[(7)]);
var inst_30144 = cljs.core.chunked_seq_QMARK_(inst_30142);
var state_30177__$1 = state_30177;
if(inst_30144){
var statearr_30238_31920 = state_30177__$1;
(statearr_30238_31920[(1)] = (17));

} else {
var statearr_30239_31921 = state_30177__$1;
(statearr_30239_31921[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30178 === (16))){
var inst_30160 = (state_30177[(2)]);
var state_30177__$1 = state_30177;
var statearr_30246_31922 = state_30177__$1;
(statearr_30246_31922[(2)] = inst_30160);

(statearr_30246_31922[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30178 === (10))){
var inst_30129 = (state_30177[(9)]);
var inst_30131 = (state_30177[(11)]);
var inst_30136 = cljs.core._nth(inst_30129,inst_30131);
var state_30177__$1 = state_30177;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30177__$1,(13),out,inst_30136);
} else {
if((state_val_30178 === (18))){
var inst_30142 = (state_30177[(7)]);
var inst_30151 = cljs.core.first(inst_30142);
var state_30177__$1 = state_30177;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30177__$1,(20),out,inst_30151);
} else {
if((state_val_30178 === (8))){
var inst_30130 = (state_30177[(8)]);
var inst_30131 = (state_30177[(11)]);
var inst_30133 = (inst_30131 < inst_30130);
var inst_30134 = inst_30133;
var state_30177__$1 = state_30177;
if(cljs.core.truth_(inst_30134)){
var statearr_30257_31927 = state_30177__$1;
(statearr_30257_31927[(1)] = (10));

} else {
var statearr_30258_31928 = state_30177__$1;
(statearr_30258_31928[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__27551__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__27551__auto____0 = (function (){
var statearr_30259 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30259[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27551__auto__);

(statearr_30259[(1)] = (1));

return statearr_30259;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27551__auto____1 = (function (state_30177){
while(true){
var ret_value__27552__auto__ = (function (){try{while(true){
var result__27553__auto__ = switch__27550__auto__(state_30177);
if(cljs.core.keyword_identical_QMARK_(result__27553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27553__auto__;
}
break;
}
}catch (e30260){var ex__27554__auto__ = e30260;
var statearr_30261_31931 = state_30177;
(statearr_30261_31931[(2)] = ex__27554__auto__);


if(cljs.core.seq((state_30177[(4)]))){
var statearr_30262_31932 = state_30177;
(statearr_30262_31932[(1)] = cljs.core.first((state_30177[(4)])));

} else {
throw ex__27554__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31933 = state_30177;
state_30177 = G__31933;
continue;
} else {
return ret_value__27552__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27551__auto__ = function(state_30177){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27551__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27551__auto____1.call(this,state_30177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__27551__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27551__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27551__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27551__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27551__auto__;
})()
})();
var state__27963__auto__ = (function (){var statearr_30266 = f__27962__auto__();
(statearr_30266[(6)] = c__27961__auto__);

return statearr_30266;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27963__auto__);
}));

return c__27961__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__30270 = arguments.length;
switch (G__30270) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__30274 = arguments.length;
switch (G__30274) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__30279 = arguments.length;
switch (G__30279) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__27961__auto___31948 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27962__auto__ = (function (){var switch__27550__auto__ = (function (state_30314){
var state_val_30315 = (state_30314[(1)]);
if((state_val_30315 === (7))){
var inst_30309 = (state_30314[(2)]);
var state_30314__$1 = state_30314;
var statearr_30328_31949 = state_30314__$1;
(statearr_30328_31949[(2)] = inst_30309);

(statearr_30328_31949[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30315 === (1))){
var inst_30291 = null;
var state_30314__$1 = (function (){var statearr_30329 = state_30314;
(statearr_30329[(7)] = inst_30291);

return statearr_30329;
})();
var statearr_30330_31950 = state_30314__$1;
(statearr_30330_31950[(2)] = null);

(statearr_30330_31950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30315 === (4))){
var inst_30294 = (state_30314[(8)]);
var inst_30294__$1 = (state_30314[(2)]);
var inst_30295 = (inst_30294__$1 == null);
var inst_30296 = cljs.core.not(inst_30295);
var state_30314__$1 = (function (){var statearr_30333 = state_30314;
(statearr_30333[(8)] = inst_30294__$1);

return statearr_30333;
})();
if(inst_30296){
var statearr_30336_31952 = state_30314__$1;
(statearr_30336_31952[(1)] = (5));

} else {
var statearr_30337_31953 = state_30314__$1;
(statearr_30337_31953[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30315 === (6))){
var state_30314__$1 = state_30314;
var statearr_30338_31954 = state_30314__$1;
(statearr_30338_31954[(2)] = null);

(statearr_30338_31954[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30315 === (3))){
var inst_30311 = (state_30314[(2)]);
var inst_30312 = cljs.core.async.close_BANG_(out);
var state_30314__$1 = (function (){var statearr_30346 = state_30314;
(statearr_30346[(9)] = inst_30311);

return statearr_30346;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30314__$1,inst_30312);
} else {
if((state_val_30315 === (2))){
var state_30314__$1 = state_30314;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30314__$1,(4),ch);
} else {
if((state_val_30315 === (11))){
var inst_30294 = (state_30314[(8)]);
var inst_30303 = (state_30314[(2)]);
var inst_30291 = inst_30294;
var state_30314__$1 = (function (){var statearr_30347 = state_30314;
(statearr_30347[(10)] = inst_30303);

(statearr_30347[(7)] = inst_30291);

return statearr_30347;
})();
var statearr_30348_31956 = state_30314__$1;
(statearr_30348_31956[(2)] = null);

(statearr_30348_31956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30315 === (9))){
var inst_30294 = (state_30314[(8)]);
var state_30314__$1 = state_30314;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30314__$1,(11),out,inst_30294);
} else {
if((state_val_30315 === (5))){
var inst_30294 = (state_30314[(8)]);
var inst_30291 = (state_30314[(7)]);
var inst_30298 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_30294,inst_30291);
var state_30314__$1 = state_30314;
if(inst_30298){
var statearr_30354_31960 = state_30314__$1;
(statearr_30354_31960[(1)] = (8));

} else {
var statearr_30355_31964 = state_30314__$1;
(statearr_30355_31964[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30315 === (10))){
var inst_30306 = (state_30314[(2)]);
var state_30314__$1 = state_30314;
var statearr_30358_31965 = state_30314__$1;
(statearr_30358_31965[(2)] = inst_30306);

(statearr_30358_31965[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30315 === (8))){
var inst_30291 = (state_30314[(7)]);
var tmp30350 = inst_30291;
var inst_30291__$1 = tmp30350;
var state_30314__$1 = (function (){var statearr_30359 = state_30314;
(statearr_30359[(7)] = inst_30291__$1);

return statearr_30359;
})();
var statearr_30360_31966 = state_30314__$1;
(statearr_30360_31966[(2)] = null);

(statearr_30360_31966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27551__auto__ = null;
var cljs$core$async$state_machine__27551__auto____0 = (function (){
var statearr_30364 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30364[(0)] = cljs$core$async$state_machine__27551__auto__);

(statearr_30364[(1)] = (1));

return statearr_30364;
});
var cljs$core$async$state_machine__27551__auto____1 = (function (state_30314){
while(true){
var ret_value__27552__auto__ = (function (){try{while(true){
var result__27553__auto__ = switch__27550__auto__(state_30314);
if(cljs.core.keyword_identical_QMARK_(result__27553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27553__auto__;
}
break;
}
}catch (e30367){var ex__27554__auto__ = e30367;
var statearr_30370_31968 = state_30314;
(statearr_30370_31968[(2)] = ex__27554__auto__);


if(cljs.core.seq((state_30314[(4)]))){
var statearr_30371_31969 = state_30314;
(statearr_30371_31969[(1)] = cljs.core.first((state_30314[(4)])));

} else {
throw ex__27554__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31970 = state_30314;
state_30314 = G__31970;
continue;
} else {
return ret_value__27552__auto__;
}
break;
}
});
cljs$core$async$state_machine__27551__auto__ = function(state_30314){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27551__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27551__auto____1.call(this,state_30314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27551__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27551__auto____0;
cljs$core$async$state_machine__27551__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27551__auto____1;
return cljs$core$async$state_machine__27551__auto__;
})()
})();
var state__27963__auto__ = (function (){var statearr_30372 = f__27962__auto__();
(statearr_30372[(6)] = c__27961__auto___31948);

return statearr_30372;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27963__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__30377 = arguments.length;
switch (G__30377) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__27961__auto___31972 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27962__auto__ = (function (){var switch__27550__auto__ = (function (state_30433){
var state_val_30434 = (state_30433[(1)]);
if((state_val_30434 === (7))){
var inst_30429 = (state_30433[(2)]);
var state_30433__$1 = state_30433;
var statearr_30436_31973 = state_30433__$1;
(statearr_30436_31973[(2)] = inst_30429);

(statearr_30436_31973[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30434 === (1))){
var inst_30380 = (new Array(n));
var inst_30381 = inst_30380;
var inst_30382 = (0);
var state_30433__$1 = (function (){var statearr_30437 = state_30433;
(statearr_30437[(7)] = inst_30382);

(statearr_30437[(8)] = inst_30381);

return statearr_30437;
})();
var statearr_30438_31977 = state_30433__$1;
(statearr_30438_31977[(2)] = null);

(statearr_30438_31977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30434 === (4))){
var inst_30394 = (state_30433[(9)]);
var inst_30394__$1 = (state_30433[(2)]);
var inst_30398 = (inst_30394__$1 == null);
var inst_30399 = cljs.core.not(inst_30398);
var state_30433__$1 = (function (){var statearr_30439 = state_30433;
(statearr_30439[(9)] = inst_30394__$1);

return statearr_30439;
})();
if(inst_30399){
var statearr_30440_31983 = state_30433__$1;
(statearr_30440_31983[(1)] = (5));

} else {
var statearr_30441_31984 = state_30433__$1;
(statearr_30441_31984[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30434 === (15))){
var inst_30420 = (state_30433[(2)]);
var state_30433__$1 = state_30433;
var statearr_30443_31987 = state_30433__$1;
(statearr_30443_31987[(2)] = inst_30420);

(statearr_30443_31987[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30434 === (13))){
var state_30433__$1 = state_30433;
var statearr_30444_31991 = state_30433__$1;
(statearr_30444_31991[(2)] = null);

(statearr_30444_31991[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30434 === (6))){
var inst_30382 = (state_30433[(7)]);
var inst_30416 = (inst_30382 > (0));
var state_30433__$1 = state_30433;
if(cljs.core.truth_(inst_30416)){
var statearr_30452_31993 = state_30433__$1;
(statearr_30452_31993[(1)] = (12));

} else {
var statearr_30453_31994 = state_30433__$1;
(statearr_30453_31994[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30434 === (3))){
var inst_30431 = (state_30433[(2)]);
var state_30433__$1 = state_30433;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30433__$1,inst_30431);
} else {
if((state_val_30434 === (12))){
var inst_30381 = (state_30433[(8)]);
var inst_30418 = cljs.core.vec(inst_30381);
var state_30433__$1 = state_30433;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30433__$1,(15),out,inst_30418);
} else {
if((state_val_30434 === (2))){
var state_30433__$1 = state_30433;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30433__$1,(4),ch);
} else {
if((state_val_30434 === (11))){
var inst_30410 = (state_30433[(2)]);
var inst_30411 = (new Array(n));
var inst_30381 = inst_30411;
var inst_30382 = (0);
var state_30433__$1 = (function (){var statearr_30455 = state_30433;
(statearr_30455[(7)] = inst_30382);

(statearr_30455[(8)] = inst_30381);

(statearr_30455[(10)] = inst_30410);

return statearr_30455;
})();
var statearr_30456_31996 = state_30433__$1;
(statearr_30456_31996[(2)] = null);

(statearr_30456_31996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30434 === (9))){
var inst_30381 = (state_30433[(8)]);
var inst_30408 = cljs.core.vec(inst_30381);
var state_30433__$1 = state_30433;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30433__$1,(11),out,inst_30408);
} else {
if((state_val_30434 === (5))){
var inst_30394 = (state_30433[(9)]);
var inst_30403 = (state_30433[(11)]);
var inst_30382 = (state_30433[(7)]);
var inst_30381 = (state_30433[(8)]);
var inst_30402 = (inst_30381[inst_30382] = inst_30394);
var inst_30403__$1 = (inst_30382 + (1));
var inst_30404 = (inst_30403__$1 < n);
var state_30433__$1 = (function (){var statearr_30457 = state_30433;
(statearr_30457[(11)] = inst_30403__$1);

(statearr_30457[(12)] = inst_30402);

return statearr_30457;
})();
if(cljs.core.truth_(inst_30404)){
var statearr_30458_31999 = state_30433__$1;
(statearr_30458_31999[(1)] = (8));

} else {
var statearr_30459_32000 = state_30433__$1;
(statearr_30459_32000[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30434 === (14))){
var inst_30423 = (state_30433[(2)]);
var inst_30426 = cljs.core.async.close_BANG_(out);
var state_30433__$1 = (function (){var statearr_30461 = state_30433;
(statearr_30461[(13)] = inst_30423);

return statearr_30461;
})();
var statearr_30462_32004 = state_30433__$1;
(statearr_30462_32004[(2)] = inst_30426);

(statearr_30462_32004[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30434 === (10))){
var inst_30414 = (state_30433[(2)]);
var state_30433__$1 = state_30433;
var statearr_30463_32005 = state_30433__$1;
(statearr_30463_32005[(2)] = inst_30414);

(statearr_30463_32005[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30434 === (8))){
var inst_30403 = (state_30433[(11)]);
var inst_30381 = (state_30433[(8)]);
var tmp30460 = inst_30381;
var inst_30381__$1 = tmp30460;
var inst_30382 = inst_30403;
var state_30433__$1 = (function (){var statearr_30466 = state_30433;
(statearr_30466[(7)] = inst_30382);

(statearr_30466[(8)] = inst_30381__$1);

return statearr_30466;
})();
var statearr_30467_32011 = state_30433__$1;
(statearr_30467_32011[(2)] = null);

(statearr_30467_32011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27551__auto__ = null;
var cljs$core$async$state_machine__27551__auto____0 = (function (){
var statearr_30468 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30468[(0)] = cljs$core$async$state_machine__27551__auto__);

(statearr_30468[(1)] = (1));

return statearr_30468;
});
var cljs$core$async$state_machine__27551__auto____1 = (function (state_30433){
while(true){
var ret_value__27552__auto__ = (function (){try{while(true){
var result__27553__auto__ = switch__27550__auto__(state_30433);
if(cljs.core.keyword_identical_QMARK_(result__27553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27553__auto__;
}
break;
}
}catch (e30472){var ex__27554__auto__ = e30472;
var statearr_30475_32013 = state_30433;
(statearr_30475_32013[(2)] = ex__27554__auto__);


if(cljs.core.seq((state_30433[(4)]))){
var statearr_30476_32015 = state_30433;
(statearr_30476_32015[(1)] = cljs.core.first((state_30433[(4)])));

} else {
throw ex__27554__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32016 = state_30433;
state_30433 = G__32016;
continue;
} else {
return ret_value__27552__auto__;
}
break;
}
});
cljs$core$async$state_machine__27551__auto__ = function(state_30433){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27551__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27551__auto____1.call(this,state_30433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27551__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27551__auto____0;
cljs$core$async$state_machine__27551__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27551__auto____1;
return cljs$core$async$state_machine__27551__auto__;
})()
})();
var state__27963__auto__ = (function (){var statearr_30477 = f__27962__auto__();
(statearr_30477[(6)] = c__27961__auto___31972);

return statearr_30477;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27963__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__30483 = arguments.length;
switch (G__30483) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__27961__auto___32022 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27962__auto__ = (function (){var switch__27550__auto__ = (function (state_30532){
var state_val_30533 = (state_30532[(1)]);
if((state_val_30533 === (7))){
var inst_30528 = (state_30532[(2)]);
var state_30532__$1 = state_30532;
var statearr_30534_32023 = state_30532__$1;
(statearr_30534_32023[(2)] = inst_30528);

(statearr_30534_32023[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30533 === (1))){
var inst_30485 = [];
var inst_30489 = inst_30485;
var inst_30490 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_30532__$1 = (function (){var statearr_30535 = state_30532;
(statearr_30535[(7)] = inst_30489);

(statearr_30535[(8)] = inst_30490);

return statearr_30535;
})();
var statearr_30536_32027 = state_30532__$1;
(statearr_30536_32027[(2)] = null);

(statearr_30536_32027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30533 === (4))){
var inst_30493 = (state_30532[(9)]);
var inst_30493__$1 = (state_30532[(2)]);
var inst_30494 = (inst_30493__$1 == null);
var inst_30495 = cljs.core.not(inst_30494);
var state_30532__$1 = (function (){var statearr_30541 = state_30532;
(statearr_30541[(9)] = inst_30493__$1);

return statearr_30541;
})();
if(inst_30495){
var statearr_30542_32034 = state_30532__$1;
(statearr_30542_32034[(1)] = (5));

} else {
var statearr_30543_32035 = state_30532__$1;
(statearr_30543_32035[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30533 === (15))){
var inst_30489 = (state_30532[(7)]);
var inst_30520 = cljs.core.vec(inst_30489);
var state_30532__$1 = state_30532;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30532__$1,(18),out,inst_30520);
} else {
if((state_val_30533 === (13))){
var inst_30515 = (state_30532[(2)]);
var state_30532__$1 = state_30532;
var statearr_30544_32041 = state_30532__$1;
(statearr_30544_32041[(2)] = inst_30515);

(statearr_30544_32041[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30533 === (6))){
var inst_30489 = (state_30532[(7)]);
var inst_30517 = inst_30489.length;
var inst_30518 = (inst_30517 > (0));
var state_30532__$1 = state_30532;
if(cljs.core.truth_(inst_30518)){
var statearr_30546_32043 = state_30532__$1;
(statearr_30546_32043[(1)] = (15));

} else {
var statearr_30547_32046 = state_30532__$1;
(statearr_30547_32046[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30533 === (17))){
var inst_30525 = (state_30532[(2)]);
var inst_30526 = cljs.core.async.close_BANG_(out);
var state_30532__$1 = (function (){var statearr_30548 = state_30532;
(statearr_30548[(10)] = inst_30525);

return statearr_30548;
})();
var statearr_30549_32049 = state_30532__$1;
(statearr_30549_32049[(2)] = inst_30526);

(statearr_30549_32049[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30533 === (3))){
var inst_30530 = (state_30532[(2)]);
var state_30532__$1 = state_30532;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30532__$1,inst_30530);
} else {
if((state_val_30533 === (12))){
var inst_30489 = (state_30532[(7)]);
var inst_30508 = cljs.core.vec(inst_30489);
var state_30532__$1 = state_30532;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30532__$1,(14),out,inst_30508);
} else {
if((state_val_30533 === (2))){
var state_30532__$1 = state_30532;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30532__$1,(4),ch);
} else {
if((state_val_30533 === (11))){
var inst_30489 = (state_30532[(7)]);
var inst_30497 = (state_30532[(11)]);
var inst_30493 = (state_30532[(9)]);
var inst_30505 = inst_30489.push(inst_30493);
var tmp30553 = inst_30489;
var inst_30489__$1 = tmp30553;
var inst_30490 = inst_30497;
var state_30532__$1 = (function (){var statearr_30563 = state_30532;
(statearr_30563[(7)] = inst_30489__$1);

(statearr_30563[(8)] = inst_30490);

(statearr_30563[(12)] = inst_30505);

return statearr_30563;
})();
var statearr_30564_32053 = state_30532__$1;
(statearr_30564_32053[(2)] = null);

(statearr_30564_32053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30533 === (9))){
var inst_30490 = (state_30532[(8)]);
var inst_30501 = cljs.core.keyword_identical_QMARK_(inst_30490,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_30532__$1 = state_30532;
var statearr_30565_32054 = state_30532__$1;
(statearr_30565_32054[(2)] = inst_30501);

(statearr_30565_32054[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30533 === (5))){
var inst_30497 = (state_30532[(11)]);
var inst_30498 = (state_30532[(13)]);
var inst_30490 = (state_30532[(8)]);
var inst_30493 = (state_30532[(9)]);
var inst_30497__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_30493) : f.call(null,inst_30493));
var inst_30498__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_30497__$1,inst_30490);
var state_30532__$1 = (function (){var statearr_30567 = state_30532;
(statearr_30567[(11)] = inst_30497__$1);

(statearr_30567[(13)] = inst_30498__$1);

return statearr_30567;
})();
if(inst_30498__$1){
var statearr_30571_32058 = state_30532__$1;
(statearr_30571_32058[(1)] = (8));

} else {
var statearr_30572_32060 = state_30532__$1;
(statearr_30572_32060[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30533 === (14))){
var inst_30497 = (state_30532[(11)]);
var inst_30493 = (state_30532[(9)]);
var inst_30510 = (state_30532[(2)]);
var inst_30511 = [];
var inst_30512 = inst_30511.push(inst_30493);
var inst_30489 = inst_30511;
var inst_30490 = inst_30497;
var state_30532__$1 = (function (){var statearr_30573 = state_30532;
(statearr_30573[(7)] = inst_30489);

(statearr_30573[(14)] = inst_30512);

(statearr_30573[(8)] = inst_30490);

(statearr_30573[(15)] = inst_30510);

return statearr_30573;
})();
var statearr_30574_32073 = state_30532__$1;
(statearr_30574_32073[(2)] = null);

(statearr_30574_32073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30533 === (16))){
var state_30532__$1 = state_30532;
var statearr_30575_32076 = state_30532__$1;
(statearr_30575_32076[(2)] = null);

(statearr_30575_32076[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30533 === (10))){
var inst_30503 = (state_30532[(2)]);
var state_30532__$1 = state_30532;
if(cljs.core.truth_(inst_30503)){
var statearr_30576_32078 = state_30532__$1;
(statearr_30576_32078[(1)] = (11));

} else {
var statearr_30577_32079 = state_30532__$1;
(statearr_30577_32079[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30533 === (18))){
var inst_30522 = (state_30532[(2)]);
var state_30532__$1 = state_30532;
var statearr_30578_32081 = state_30532__$1;
(statearr_30578_32081[(2)] = inst_30522);

(statearr_30578_32081[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30533 === (8))){
var inst_30498 = (state_30532[(13)]);
var state_30532__$1 = state_30532;
var statearr_30579_32084 = state_30532__$1;
(statearr_30579_32084[(2)] = inst_30498);

(statearr_30579_32084[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__27551__auto__ = null;
var cljs$core$async$state_machine__27551__auto____0 = (function (){
var statearr_30580 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30580[(0)] = cljs$core$async$state_machine__27551__auto__);

(statearr_30580[(1)] = (1));

return statearr_30580;
});
var cljs$core$async$state_machine__27551__auto____1 = (function (state_30532){
while(true){
var ret_value__27552__auto__ = (function (){try{while(true){
var result__27553__auto__ = switch__27550__auto__(state_30532);
if(cljs.core.keyword_identical_QMARK_(result__27553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27553__auto__;
}
break;
}
}catch (e30584){var ex__27554__auto__ = e30584;
var statearr_30585_32091 = state_30532;
(statearr_30585_32091[(2)] = ex__27554__auto__);


if(cljs.core.seq((state_30532[(4)]))){
var statearr_30586_32092 = state_30532;
(statearr_30586_32092[(1)] = cljs.core.first((state_30532[(4)])));

} else {
throw ex__27554__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32097 = state_30532;
state_30532 = G__32097;
continue;
} else {
return ret_value__27552__auto__;
}
break;
}
});
cljs$core$async$state_machine__27551__auto__ = function(state_30532){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27551__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27551__auto____1.call(this,state_30532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27551__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27551__auto____0;
cljs$core$async$state_machine__27551__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27551__auto____1;
return cljs$core$async$state_machine__27551__auto__;
})()
})();
var state__27963__auto__ = (function (){var statearr_30587 = f__27962__auto__();
(statearr_30587[(6)] = c__27961__auto___32022);

return statearr_30587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27963__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
