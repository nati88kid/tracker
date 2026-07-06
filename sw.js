self.addEventListener('install', (e) => { 
  console.log('App Installed'); 
});

// NEW: We added a "fetch" listener. 
// This proves to the phone that we are a real, secure app!
self.addEventListener('fetch', (e) => {
  // We leave this blank for now. The phone just needs to see it exists.
});