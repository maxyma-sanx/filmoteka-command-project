import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

// Авторизація через гугл
function signUpWithGoogle(app) {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider(app);

  // Sign in Firebase using popup auth and Google as the identity provider.
  signInWithPopup(auth, provider)
    .then(result => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      localStorage.setItem('auth', JSON.stringify(token));

      location.reload();
    })
    .catch(error => {
      // Handle Errors here.
      const errorMessage = error.message;

      Notify.failure(`${errorMessage}`);
    });
}

// Вийти з аккаунта гугл
function signOutFromGoogle(app) {
  const auth = getAuth(app);

  signOut(auth)
    .then(() => {
      localStorage.removeItem('auth');

      location.href = 'index.html';
    })
    .catch(error => {
      Notify.failure(`${error.message}`);
    });
}

export { signUpWithGoogle, signOutFromGoogle };
