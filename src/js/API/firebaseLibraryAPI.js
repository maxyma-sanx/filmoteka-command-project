import refs from '../refs';

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { app } from '../../firebase-config';
import { Notify } from 'notiflix';

const auth = getAuth(app);
// const provider = new GoogleAuthProvider(app);
const isAuth = localStorage.getItem('auth');

console.log(isAuth);
// if (!isAuth) {
//   refs.googleSignOut.style.display = 'none';

// } else if (isAuth) {
//   refs.googleSignOut.style.display = 'block';
//   refs.googleSignUp.style.display = 'none';
// }

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
