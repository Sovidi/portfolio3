if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let r={};const t=e=>a(e,c),o={module:{uri:c},exports:r,require:t};s[c]=Promise.all(n.map((e=>o[e]||t(e)))).then((e=>(i(...e),r)))}}define(["./workbox-07a7b4f2"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"40d2bdd8566a0a4854dd8700d9f37774"},{url:"/_next/static/3Yuq80u5WwLsL5ODcxyKr/_buildManifest.js",revision:"50654c4134ba6f71b423498e9447ee91"},{url:"/_next/static/3Yuq80u5WwLsL5ODcxyKr/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/68-d5b7e1243bf385c7.js",revision:"3Yuq80u5WwLsL5ODcxyKr"},{url:"/_next/static/chunks/876-50f7b3516b2e8fa1.js",revision:"3Yuq80u5WwLsL5ODcxyKr"},{url:"/_next/static/chunks/app/_not-found-72cda6c870c46d44.js",revision:"3Yuq80u5WwLsL5ODcxyKr"},{url:"/_next/static/chunks/app/layout-65ab59ab99cc46b4.js",revision:"3Yuq80u5WwLsL5ODcxyKr"},{url:"/_next/static/chunks/app/page-29625f617fdbfbad.js",revision:"3Yuq80u5WwLsL5ODcxyKr"},{url:"/_next/static/chunks/fd9d1056-81c1f8a3799bb50a.js",revision:"3Yuq80u5WwLsL5ODcxyKr"},{url:"/_next/static/chunks/framework-8883d1e9be70c3da.js",revision:"3Yuq80u5WwLsL5ODcxyKr"},{url:"/_next/static/chunks/main-a9b9b3352d2b9cbf.js",revision:"3Yuq80u5WwLsL5ODcxyKr"},{url:"/_next/static/chunks/main-app-ae8413d9efae627c.js",revision:"3Yuq80u5WwLsL5ODcxyKr"},{url:"/_next/static/chunks/pages/_app-1534f180665c857f.js",revision:"3Yuq80u5WwLsL5ODcxyKr"},{url:"/_next/static/chunks/pages/_error-b646007f40c4f0a8.js",revision:"3Yuq80u5WwLsL5ODcxyKr"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-86897fd28e14c1d2.js",revision:"3Yuq80u5WwLsL5ODcxyKr"},{url:"/_next/static/css/3537e10b8439ae2a.css",revision:"3537e10b8439ae2a"},{url:"/_next/static/css/4182ad88a8d57fc1.css",revision:"4182ad88a8d57fc1"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/click.627ad62a.png",revision:"627ad62a"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/_next/static/media/github2.75f8fc84.png",revision:"75f8fc84"},{url:"/_next/static/media/link.114bba54.png",revision:"114bba54"},{url:"/assets/about.png",revision:"9ac8e42347e71d8ba6e6b7e7dd5d076f"},{url:"/assets/click.png",revision:"a38b754e9bca95d81afd562f9e8aad92"},{url:"/assets/cloudtype.png",revision:"e773559d8df01c86abfb219e0f5c5741"},{url:"/assets/css.png",revision:"594aa284c4862d5ee3766d6d0bd42547"},{url:"/assets/everland.png",revision:"49760bf557a41590a6ec617796d1569d"},{url:"/assets/express.png",revision:"97c301cd8e242913a72ed23bac02c422"},{url:"/assets/figma.png",revision:"396dc84f0aa0722bf115ddb567be0462"},{url:"/assets/finale.png",revision:"a1a83dd8f7bfe8e90963dfe6c28491f9"},{url:"/assets/finder.png",revision:"b1533a92eb3927372f90a7b406d1d411"},{url:"/assets/fullpage.png",revision:"a074254e9b715092381d989ee8033610"},{url:"/assets/german.png",revision:"557d0a9aeb0e302a98796cee77e2805e"},{url:"/assets/github.png",revision:"81e93e7c4180fb263fdb958124229335"},{url:"/assets/github2.png",revision:"6bcdf386752c27e542400fe2339b2aac"},{url:"/assets/html.png",revision:"fb1e7f9db2540c3194a9179094a925e2"},{url:"/assets/instagram.png",revision:"9084b7d32172b9fdd518f0d91452dcfa"},{url:"/assets/jquery.png",revision:"48fe746eb012b145d687abf191d27415"},{url:"/assets/js.png",revision:"a00831a712bb4f59eba35cb2c4c7a737"},{url:"/assets/kakao.png",revision:"583804a1308f407d7c53996df47930bb"},{url:"/assets/link.png",revision:"607e929de521842bccd961370d2b8a07"},{url:"/assets/logo.png",revision:"82b9c7a5a3f405032b1db71a25f67021"},{url:"/assets/mail.png",revision:"805374a1d3bdaee29877dd651ffa7686"},{url:"/assets/mariadb.png",revision:"8e25515d10989614b6d86f1990980669"},{url:"/assets/mongodb.png",revision:"0fbd04cba8e061b55e9da307a880f8f3"},{url:"/assets/moviefinder.png",revision:"cab00eb1bd44dd9989575bff4fd54565"},{url:"/assets/mysql.png",revision:"995dba0baad861b51315365b0c2ad547"},{url:"/assets/netlify.png",revision:"3d9f9920da8712e7c6014ad5be7caeb3"},{url:"/assets/next.png",revision:"1c871f393a4ea92ea80b13b8d15af440"},{url:"/assets/nodejs.png",revision:"4c6c0929cc58f241847a744b2de75e2f"},{url:"/assets/notion.png",revision:"50cde159fc4ddd1824fa0cd26d38261b"},{url:"/assets/npm.png",revision:"cedf6c0bcea24bef375b62df98721933"},{url:"/assets/petsalon.png",revision:"41fe8492f59e0e5304ddbfa097e89e4e"},{url:"/assets/phone.png",revision:"94272bb8252ece86d2d8663f2fbe5c5f"},{url:"/assets/portfolio.gif",revision:"1be8800b19dce85a3046a04d40959665"},{url:"/assets/postman.png",revision:"73bb49edb42db9daf6cb32614e970ef4"},{url:"/assets/react.png",revision:"28ad6305640283f7e86fcc76d2eb51e5"},{url:"/assets/scaryhouse.png",revision:"939ee160f4900bac1fce9d3a1f5aef87"},{url:"/assets/scss.png",revision:"6d454ae448825df4cd80fb76bd0bbd6a"},{url:"/assets/swiper.png",revision:"b62e99ec203ad8ab1dbff7984371dc7c"},{url:"/assets/textpoint.png",revision:"5f6ef28985ce950ed78b161eb26333fd"},{url:"/assets/togrocery.png",revision:"4fc3c9b4abcb8d4d293c6e4bd2d88734"},{url:"/assets/typescript.png",revision:"5ff1f323c240b720c3ea24111b9043c1"},{url:"/assets/velog.png",revision:"44fb660d99e66a641dbef3e743432e49"},{url:"/assets/vercel.png",revision:"e7f7a879a811da4b60c4cd57a25b46c7"},{url:"/assets/vue.png",revision:"923cb2223d722233d5abcbfb583b73e7"},{url:"/assets/wonderplace.png",revision:"bed7f160d9db77505782bfbf8f9adee2"},{url:"/assets/zeplin.png",revision:"3ef0dd6ade97bcb64f016adb5b3c524e"},{url:"/cat.png",revision:"f999765fa759bbd9ce6ae27a305af2f8"},{url:"/icons/apple-touch-icon-114x114.png",revision:"e0c25e90484a6f6a535b8ce43259a4cf"},{url:"/icons/apple-touch-icon-120x120.png",revision:"734dda3e8401f6cb734ea537d8617240"},{url:"/icons/apple-touch-icon-144x144.png",revision:"9f5f99b40fba85b48bbb9f9c30668123"},{url:"/icons/apple-touch-icon-152x152.png",revision:"4e4c98e9feb1098ab28a1dd50e1f72c6"},{url:"/icons/apple-touch-icon-57x57.png",revision:"5838219498eb29e0a79f12720b8f0e58"},{url:"/icons/apple-touch-icon-60x60.png",revision:"a791b2d81320b389ab92382c79b7977b"},{url:"/icons/apple-touch-icon-72x72.png",revision:"6a2c0bdcf3e7f57aeb5d8d77529b738e"},{url:"/icons/apple-touch-icon-76x76.png",revision:"0efdd01e86048017692ba30aacced6a2"},{url:"/icons/favicon-128.png",revision:"7b5e3192d78cb07521d4a672511bcf76"},{url:"/icons/favicon-16x16.png",revision:"3d804a7e949a3d35d08cc7a8cee5447e"},{url:"/icons/favicon-196x196.png",revision:"4744c1c526b2ce02928ba4a22286b39d"},{url:"/icons/favicon-32x32.png",revision:"b0cd8a92caa0f54f2e555f5faef11e3e"},{url:"/icons/favicon-96x96.png",revision:"d0acb1210b46fb73b793e0b24b7cf6da"},{url:"/icons/favicon.ico",revision:"29dc3efd5a819a6b23040594b7cc6be3"},{url:"/icons/mstile-144x144.png",revision:"9f5f99b40fba85b48bbb9f9c30668123"},{url:"/icons/mstile-150x150.png",revision:"880b6551027702f88b3ac96e5d713f3d"},{url:"/icons/mstile-310x150.png",revision:"419e0fa59cf5eef34f134955f062fccf"},{url:"/icons/mstile-310x310.png",revision:"375170dd7655a33ac00c4f5535ae56b6"},{url:"/icons/mstile-70x70.png",revision:"7b5e3192d78cb07521d4a672511bcf76"},{url:"/manifest.json",revision:"c7ebc6352e908c875cd9de4418d481b0"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
