if(!self.define){let e,i={};const c=(c,n)=>(c=new URL(c+".js",n).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(n,s)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let d={};const a=e=>c(e,o),f={module:{uri:o},exports:d,require:a};i[o]=Promise.all(n.map((e=>f[e]||a(e)))).then((e=>(s(...e),d)))}}define(["./workbox-03115cca"],(function(e){"use strict";e.setCacheNameDetails({prefix:"elepub-web"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"css/index-1deb9d23.css",revision:"4df1cff0f581cf75cfbe4a0c17a6fd43"},{url:"css/MainLayout-03d0754c.css",revision:"e617b729423ab89ca82384fd8222fcfa"},{url:"css/PreviewContent-f4e4e056.css",revision:"251a4e62344f4829f191d66581abb230"},{url:"favicon.ico",revision:"3b92443b981daf38409acff2d83da0d9"},{url:"icons/apple-icon-120x120.png",revision:"4db6f5d439dbd4f3af456710e0a88f7e"},{url:"icons/apple-icon-152x152.png",revision:"9c1633f46c19d543cbb4a0308d056815"},{url:"icons/apple-icon-167x167.png",revision:"cee8025beea882d26fbb9fb8ac17758d"},{url:"icons/apple-icon-180x180.png",revision:"69ee65c3cca39173c36414721ce96605"},{url:"icons/favicon-120x120.png",revision:"6842960bcd5a112433ecbf19e8ca34a4"},{url:"icons/favicon-16x16.png",revision:"731e39e097e26d5d19ca4afa6ce64f16"},{url:"icons/favicon-32x32.png",revision:"48f9146614187a3f29a8064d82a83832"},{url:"icons/favicon-96x96.png",revision:"5fced8028f5faadf4b9d1ffc5ff0ccbc"},{url:"icons/icon-128x128.png",revision:"07d1a8d65352abebf959931253203a6d"},{url:"icons/icon-192x192.png",revision:"86c18da519483324630c74e06d4d3915"},{url:"icons/icon-256x256.png",revision:"06682269a60c93d97d0b4eb16f7d2d9e"},{url:"icons/ms-icon-144x144.png",revision:"9583433ba7eda1efc029f0c7ef529099"},{url:"index.html",revision:"85004a274330d24ca588c8a450dedc2a"},{url:"js/fastclick-aab4f297.js",revision:"40efabedb876d409f1732920a78f9ae0"},{url:"js/index-c4b2cde4.js",revision:"3de894dba3b65f7de40fb23aeed4ceb7"},{url:"js/MainLayout-2da01b8d.js",revision:"e287742d604b663f89d468bc247ce80e"},{url:"js/PreviewContent-263ce7ba.js",revision:"a9a557624821c680da166f2cb80e1fd1"},{url:"manifest.json",revision:"27773f239d3d7a964d83a0eeab26ead6"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\.js$/]}))}));
