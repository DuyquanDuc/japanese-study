/**
 * Auth module — Google Sign-In, sign-out, auth state management.
 */
const Auth = (() => {
  let currentUser = null;
  const readyCallbacks = [];
  let resolved = false;

  const provider = new firebase.auth.GoogleAuthProvider();

  window.auth.onAuthStateChanged(user => {
    currentUser = user;
    if (!resolved) {
      resolved = true;
      readyCallbacks.forEach(cb => cb(user));
    }
  });

  function signIn() {
    return window.auth.signInWithPopup(provider);
  }

  function signOut() {
    return window.auth.signOut();
  }

  function onReady(callback) {
    if (resolved) {
      callback(currentUser);
    } else {
      readyCallbacks.push(callback);
    }
  }

  function getUid() {
    return currentUser ? currentUser.uid : null;
  }

  function getUser() {
    return currentUser;
  }

  return { signIn, signOut, onReady, getUid, getUser };
})();
