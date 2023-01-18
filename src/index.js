import 'animate.css';
import './js/API/notiflixAPI';
import renderPopularMovies from './js/render/renderPopularMovies';
import onSeachFormSubmit from './js/events/form';
import {
  onCloseModal,
  onCloseModalBackdrop,
  onCloseModalEsc,
} from './js/events/modal';
import onMovieClick from './js/events/movieCard';
import themeSwither from './js/events/theme-switcher';
import { trackScroll, сlickToUpBtn } from './js/events/btnUp';
import { signUpWithGoogle, signOutFromGoogle } from './js/API/firebaseAPI';
import onCloseModalDev from './js/events/modalDevs';
import filterGenre from './js/events/filterGenre';
import './js/events/multi-language';
