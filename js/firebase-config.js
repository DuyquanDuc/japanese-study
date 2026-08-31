/**
 * Firebase initialization — replace placeholder values with your Firebase project config.
 */
(() => {
  // Serve the auth handler from the app's own origin where possible. Browsers
  // that partition third-party storage (Firefox Total Cookie Protection) drop
  // the credential relayed back from a cross-origin authDomain.
  const host = window.location.hostname;
  const sameOrigin = host.endsWith('.web.app') || host.endsWith('.firebaseapp.com');

  const firebaseConfig = {
    apiKey: 'AIzaSyCU4xySiSogA4DExQPZX69GWVR3lEN8Ocg',
    authDomain: sameOrigin ? host : 'japanese-study-e67af.firebaseapp.com',
    projectId: 'japanese-study-e67af',
    storageBucket: 'japanese-study-e67af.firebasestorage.app',
    messagingSenderId: '596155285310',
    appId: '1:596155285310:web:b13de939390be94205f66f',
    measurementId: 'G-XBD9LQBSK1'
  };

  firebase.initializeApp(firebaseConfig);
  window.auth = firebase.auth();
  window.db = firebase.firestore();
})();
