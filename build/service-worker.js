"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","bac479d3f42a51992658753a02a72653"],["/static/css/main.dc3a8e1d.css","4ad747de0d6b36fc55a7cd31ae3ce8bc"],["/static/js/main.bc86da3e.js","243bbb0443d5678b0156a4d544ec8c7e"],["/static/media/JavaScript-logo.0cded3a3.png","0cded3a3276425911d55a2552bf361bf"],["/static/media/LinkedIn_logo_initials.3f60edfd.png","3f60edfd3589f7ad589cd03676982f12"],["/static/media/css3-logo.970b93f0.png","970b93f0f37f1af926ba32a3200c0879"],["/static/media/email-logo.8a1834f4.png","8a1834f453f33e7b8f1350a3acf703fb"],["/static/media/expressjs-logo.d638bd34.png","d638bd34b425dec39792d4a81189eddf"],["/static/media/html5-logo.454a400c.png","454a400ca987d4271e54045982ea3876"],["/static/media/jwt-logo.40eddeb9.png","40eddeb90fc29a08e1d114cfe0dc60d1"],["/static/media/mongoosejs-logo.cd7c3398.png","cd7c3398b37f251d645a976826c62a9c"],["/static/media/mysql-logo.bab2c760.png","bab2c760c60f17191cb3a002e08a3dbf"],["/static/media/nodejs-logo.6dcf6999.png","6dcf699938b2291d1634f91adb0dded1"],["/static/media/react-icon.1994f143.png","1994f14300d7eb26bf419be3ca4fa494"],["/static/media/redux-logo.59c46753.png","59c467536111a981d904a050d335c2be"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var a=new Request(n,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});