if(!self.define){let e,i={};const c=(c,n)=>(c=new URL(c+".js",n).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(n,s)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let a={};const r=e=>c(e,o),f={module:{uri:o},exports:a,require:r};i[o]=Promise.all(n.map((e=>f[e]||r(e)))).then((e=>(s(...e),a)))}}define(["./workbox-6393944f"],(function(e){"use strict";e.setCacheNameDetails({prefix:"elepub"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"css/index.css",revision:"f92e694b168d635f39f49d7488e73965"},{url:"css/MainLayout.css",revision:"fd01f425888843cb2e33560a8a569c96"},{url:"css/PreviewContent.css",revision:"a276f1a1964d783853de1596fcb9c58f"},{url:"css/unocss.css",revision:"53c7a5f2c30a13c802020e9565aa8f7f"},{url:"favicon.ico",revision:"3b92443b981daf38409acff2d83da0d9"},{url:"icons/apple-icon-120x120.png",revision:"4db6f5d439dbd4f3af456710e0a88f7e"},{url:"icons/apple-icon-152x152.png",revision:"9c1633f46c19d543cbb4a0308d056815"},{url:"icons/apple-icon-167x167.png",revision:"cee8025beea882d26fbb9fb8ac17758d"},{url:"icons/apple-icon-180x180.png",revision:"69ee65c3cca39173c36414721ce96605"},{url:"icons/favicon-120x120.png",revision:"6842960bcd5a112433ecbf19e8ca34a4"},{url:"icons/favicon-128x128.png",revision:"07d1a8d65352abebf959931253203a6d"},{url:"icons/favicon-16x16.png",revision:"731e39e097e26d5d19ca4afa6ce64f16"},{url:"icons/favicon-32x32.png",revision:"48f9146614187a3f29a8064d82a83832"},{url:"icons/favicon-96x96.png",revision:"5fced8028f5faadf4b9d1ffc5ff0ccbc"},{url:"icons/icon-128x128.png",revision:"07d1a8d65352abebf959931253203a6d"},{url:"icons/icon-192x192.png",revision:"86c18da519483324630c74e06d4d3915"},{url:"icons/icon-256x256.png",revision:"06682269a60c93d97d0b4eb16f7d2d9e"},{url:"icons/logo.png",revision:"06682269a60c93d97d0b4eb16f7d2d9e"},{url:"icons/ms-icon-144x144.png",revision:"9583433ba7eda1efc029f0c7ef529099"},{url:"index.html",revision:"44860449f4f297322855540d5fafdd10"},{url:"js/ErrorNotFound-b833d685.js",revision:"abe13d32297e77842a0b6ca0ae7afa8c"},{url:"js/fastclick-aab4f297.js",revision:"40efabedb876d409f1732920a78f9ae0"},{url:"js/index-53c5a0f0.js",revision:"e28026d3b6a9a813bfaaf176801b0902"},{url:"js/MainLayout-635ab5c3.js",revision:"97d71909577c416eb349469aa798972c"},{url:"js/PreviewContent-406ccf97.js",revision:"62a4aad59ccfb532c75b4a60f5994887"},{url:"js/unocss-114edfc6.js",revision:"68b329da9893e34099c7d8ad5cb9c940"},{url:"manifest.json",revision:"928262921b8e35cc3fc66f553dbd6696"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\.js$/]}))}));
