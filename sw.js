self.addEventListener('install', (e) => {
  console.log('Service Worker: Installed');
});

self.addEventListener('activate', (e) => {
  console.log('Service Worker: Activated');
});

// Android requires a fetch listener to trigger the "Real App" installation
self.addEventListener('fetch', (e) => {
  // We leave this blank so it just loads the live internet version of your app
});