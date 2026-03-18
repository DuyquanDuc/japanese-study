/**
 * Firebase initialization — replace placeholder values with your Firebase project config.
 */
(() => {
  const firebaseConfig = {
    apiKey: 'AIzaSyCU4xySiSogA4DExQPZX69GWVR3lEN8Ocg',
    authDomain: 'japanese-study-e67af.firebaseapp.com',
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
