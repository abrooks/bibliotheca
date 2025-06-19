
shadow.cljs.devtools.client.env.module_loaded('main');

try { bibliotheca.core.init(); } catch (e) { console.error("An error occurred when calling (bibliotheca.core/init)"); throw(e); }