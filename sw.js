if(!self.define){let e,i={};const n=(n,c)=>(n=new URL(n+".js",c).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(c,s)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let d={};const f=e=>n(e,o),r={module:{uri:o},exports:d,require:f};i[o]=Promise.all(c.map((e=>r[e]||f(e)))).then((e=>(s(...e),d)))}}define(["./workbox-17c5f633"],(function(e){"use strict";e.setCacheNameDetails({prefix:"elepub"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"css/index.css",revision:"d63abb97bcbe420ffd9236822a85ffe5"},{url:"css/MainLayout.css",revision:"fd01f425888843cb2e33560a8a569c96"},{url:"css/PreviewContent.css",revision:"a276f1a1964d783853de1596fcb9c58f"},{url:"css/unocss.css",revision:"b0bb0ed2dcccf9220531e6b1a208ffdd"},{url:"favicon.ico",revision:"3b92443b981daf38409acff2d83da0d9"},{url:"icons/apple-icon-120x120.png",revision:"4db6f5d439dbd4f3af456710e0a88f7e"},{url:"icons/apple-icon-152x152.png",revision:"9c1633f46c19d543cbb4a0308d056815"},{url:"icons/apple-icon-167x167.png",revision:"cee8025beea882d26fbb9fb8ac17758d"},{url:"icons/apple-icon-180x180.png",revision:"69ee65c3cca39173c36414721ce96605"},{url:"icons/favicon-120x120.png",revision:"6842960bcd5a112433ecbf19e8ca34a4"},{url:"icons/favicon-128x128.png",revision:"07d1a8d65352abebf959931253203a6d"},{url:"icons/favicon-16x16.png",revision:"731e39e097e26d5d19ca4afa6ce64f16"},{url:"icons/favicon-32x32.png",revision:"48f9146614187a3f29a8064d82a83832"},{url:"icons/favicon-96x96.png",revision:"5fced8028f5faadf4b9d1ffc5ff0ccbc"},{url:"icons/icon-128x128.png",revision:"07d1a8d65352abebf959931253203a6d"},{url:"icons/icon-192x192.png",revision:"86c18da519483324630c74e06d4d3915"},{url:"icons/icon-256x256.png",revision:"06682269a60c93d97d0b4eb16f7d2d9e"},{url:"icons/logo.png",revision:"06682269a60c93d97d0b4eb16f7d2d9e"},{url:"icons/ms-icon-144x144.png",revision:"9583433ba7eda1efc029f0c7ef529099"},{url:"index.html",revision:"ed08de1adf8b906226d8ca60f38a2ac8"},{url:"js/ErrorNotFound-e8253567.js",revision:"a1806d1e5342fe80466a3ad3eb031e29"},{url:"js/fastclick-aab4f297.js",revision:"40efabedb876d409f1732920a78f9ae0"},{url:"js/index-5f3b07e9.js",revision:"4a6d55817d8232dcf8115359f517d5a9"},{url:"js/MainLayout-ec8f4a13.js",revision:"cdf11e7124f4f4505454b3bbd8298633"},{url:"js/PreviewContent-3e066b4b.js",revision:"07d0663a12fdcac6f114e90a7259bd6e"},{url:"js/unocss-114edfc6.js",revision:"68b329da9893e34099c7d8ad5cb9c940"},{url:"manifest.json",revision:"928262921b8e35cc3fc66f553dbd6696"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\.js$/]}))}));
