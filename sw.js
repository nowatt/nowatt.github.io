if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let o={};const c=e=>i(e,t),l={module:{uri:t},exports:o,require:c};s[t]=Promise.all(n.map((e=>l[e]||c(e)))).then((e=>(r(...e),o)))}}define(["./workbox-e3490c72"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-CQ068FlN.js",revision:null},{url:"assets/index-YzqW4iA6.css",revision:null},{url:"index.html",revision:"7b748906f895b0088111f4c384e92116"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"ServiceWorker.js",revision:"6d5c037cfbcd158139da220cc82dec27"},{url:"icons/nowatt_512.png",revision:"da471a0a46938d80a000427e314f1053"},{url:"manifest.webmanifest",revision:"86c5e4c9c5f58b9e2046063ddc2f9e53"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
