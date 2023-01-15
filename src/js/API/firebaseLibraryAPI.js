import refs from '../refs';

import { getAuth, signOut } from 'firebase/auth';
import { app } from '../../firebase-config';
import { Notify } from 'notiflix';

const auth = getAuth(app);

refs.googleSignOutFromLibrary.addEventListener('click', signOutFromGoogle);

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
