const C='securlog-fb-v16',A=['./','index.html','manifest.webmanifest','icon-192.png','icon-512.png','logo.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>c.addAll(A)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!=C).map(x=>caches.delete(x)))).then(()=>clients.claim())));
self.addEventListener('fetch',e=>{
  const u=new URL(e.request.url);
  if(e.request.method!='GET'||u.hostname.endsWith('googleapis.com')||u.hostname.endsWith('firebaseio.com')||/openstreetmap\.(org|fr)$|arcgisonline\.com$|opentopomap\.org$/.test(u.hostname))return; // tuiles de la carte : jamais interceptées // les données passent par Firestore (cache intégré)
  e.respondWith(fetch(e.request).then(r=>{if(r.ok){const cp=r.clone();caches.open(C).then(c=>c.put(e.request,cp))}return r}).catch(()=>caches.match(e.request)));
});
