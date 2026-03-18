/**
 * Auth module — Google Sign-In, sign-out, auth state management.
 */
const Auth = (() => {
  let currentUser = null;
  const listeners = [];
  let initialResolved = false;

  const provider = new firebase.auth.GoogleAuthProvider();

  window.auth.onAuthStateChanged(user => {
    currentUser = user;
    initialResolved = true;
    listeners.forEach(cb => cb(user));
  });

  function signIn() {
    return window.auth.signInWithPopup(provider);
  }

  function signOut() {
    return window.auth.signOut();
  }

  function onAuthStateChanged(callback) {
    listeners.push(callback);
    if (initialResolved) {
      callback(currentUser);
    }
  }

  function getUid() {
    return currentUser ? currentUser.uid : null;
  }

  function getUser() {
    return currentUser;
  }

  return { signIn, signOut, onAuthStateChanged, getUid, getUser };
})();
