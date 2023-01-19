import refs from '../refs';

import { signUpWithGoogle, signOutFromGoogle } from '../API/firebaseAPI';

const isAuth = localStorage.getItem('auth');

import { app } from '../../firebase-config';

// Перевірка чи авторизований користувач, якщо так, то приховувати (або показувати) кнопки з хедеру
if (!isAuth) {
  refs.googleSignOut.style.display = 'none';
  refs.myLibrary.style.display = 'none';
} else if (isAuth) {
  refs.googleSignOut.style.display = 'block';
  refs.googleSignUp.style.display = 'none';
}

refs.googleSignUp.addEventListener('click', () => {
  signUpWithGoogle(app);
});
refs.googleSignOut.addEventListener('click', () => {
  signOutFromGoogle(app);
});
