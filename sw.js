var C='painel-v1';
self.addEventListener('install',function(){self.skipWaiting()});
self.addEventListener('activate',function(e){e.waitUntil(clients.claim())});
self.addEventListener('fetch',function(e){var u=new URL(e.request.url);
  if(e.request.method!=='GET'||u.origin!==location.origin||!/painel\.html$|manifest\.webmanifest$|icon-\d+\.png$/.test(u.pathname))return;
  e.respondWith(fetch(e.request).then(function(r){var c=r.clone();caches.open(C).then(function(k){k.put(e.request,c)});return r}).catch(function(){return caches.match(e.request)}))});
