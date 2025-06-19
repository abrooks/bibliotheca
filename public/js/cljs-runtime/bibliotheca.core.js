goog.provide('bibliotheca.core');
if((typeof bibliotheca !== 'undefined') && (typeof bibliotheca.core !== 'undefined') && (typeof bibliotheca.core.root !== 'undefined')){
} else {
bibliotheca.core.root = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
/**
 * Mount the root component
 */
bibliotheca.core.mount_root = (function bibliotheca$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_();

var root_el = document.getElementById("app");
if(cljs.core.truth_(cljs.core.deref(bibliotheca.core.root))){
} else {
cljs.core.reset_BANG_(bibliotheca.core.root,reagent.dom.client.create_root(root_el));
}

return cljs.core.deref(bibliotheca.core.root).render(reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bibliotheca.views.main_panel], null)));
});
/**
 * Initialize the application
 */
bibliotheca.core.init = (function bibliotheca$core$init(){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-media-data","load-media-data",478089540)], null));

return bibliotheca.core.mount_root();
});

//# sourceMappingURL=bibliotheca.core.js.map
