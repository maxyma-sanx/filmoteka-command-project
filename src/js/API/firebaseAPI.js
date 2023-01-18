import refs from '../refs';

import { Notify } from 'notiflix';

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { app } from '../../firebase-config';

refs.googleSignUp.addEventListener('click', signUpWithGoogle);
refs.googleSignOut.addEventListener('click', signOutFromGoogle);

const auth = getAuth(app);
const provider = new GoogleAuthProvider(app);
const isAuth = localStorage.getItem('auth');

// Перевірка чи авторизований користувач, якщо так, то приховувати (або показувати) кнопки з хедеру
if (!isAuth) {
  refs.googleSignOut.style.display = 'none';
  refs.myLibrary.style.display = 'none';
} else if (isAuth) {
  refs.googleSignOut.style.display = 'block';
  refs.googleSignUp.style.display = 'none';
}

// Авторизація через гугл
function signUpWithGoogle() {
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
function signOutFromGoogle() {
  signOut(auth)
    .then(() => {
      localStorage.removeItem('auth');

      location.reload();
    })
    .catch(error => {
      Notify.failure(`${error.message}`);
    });
}

export { signUpWithGoogle, signOutFromGoogle };
