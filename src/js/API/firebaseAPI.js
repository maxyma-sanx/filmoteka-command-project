import refs from '../refs';

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { app } from '../../firebase-config';
import { Notify } from 'notiflix';

refs.googleSignUp.addEventListener('click', signUpWithGoogle);
refs.googleSignOut.addEventListener('click', signOutFromGoogle);

const auth = getAuth(app);
const provider = new GoogleAuthProvider(app);
const isAuth = localStorage.getItem('auth');

if (!isAuth) {
  refs.googleSignOut.style.display = 'none';
  refs.myLibrary.style.display = 'none';
} else if (isAuth) {
  refs.googleSignOut.style.display = 'block';
  refs.googleSignUp.style.display = 'none';
}

function signUpWithGoogle() {
  // Sign in Firebase using popup auth and Google as the identity provider.

  signInWithPopup(auth, provider)
    .then(result => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;

      localStorage.setItem('auth', JSON.stringify(token));

      Notify.info(`Success! User ${user.displayName} is authorized!`);
      location.reload();
      // ...
    })
    .catch(error => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      Notify.failure(`${errorMessage}`);
    });
}

function signOutFromGoogle() {
  signOut(auth)
    .then(() => {
      localStorage.removeItem('auth');
      Notify.info(`Success! You is logout`);
      location.reload();
    })
    .catch(error => {
      Notify.failure(`${error.message}`);
    });
}

export { signUpWithGoogle, signOutFromGoogle };
