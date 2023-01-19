import refs from '../refs';

import { signOutFromGoogle } from '../API/firebaseAPI';
import { app } from '../../firebase-config';

refs.googleSignOutFromLibrary.addEventListener('click', () => {
  signOutFromGoogle(app);
});
