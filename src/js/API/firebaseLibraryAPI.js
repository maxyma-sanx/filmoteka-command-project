import refs from '../refs';

import { Notify } from 'notiflix';

import { getAuth, signOut } from 'firebase/auth';
import { app } from '../../firebase-config';

const auth = getAuth(app);

refs.googleSignOutFromLibrary.addEventListener('click', signOutFromGoogle);

// Вийти з аккаунта гугл
function signOutFromGoogle() {
  signOut(auth)
    .then(() => {
      localStorage.removeItem('auth');
    })
    .catch(error => {
      Notify.failure(`${error.message}`);
    });
}

export { signOutFromGoogle };
