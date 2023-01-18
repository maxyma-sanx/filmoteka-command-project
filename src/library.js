import 'animate.css';
import './js/API/notiflixAPI';
import {
  onCloseModal,
  onCloseModalBackdrop,
  onCloseModalEsc,
} from './js/events/modal';
import watchedMovies from './js/events/watched';
import queueMovies from './js/events/queue';
import themeSwither from './js/events/theme-switcher';
import { trackScroll, сlickToUpBtn } from './js/events/btnUp';
import { signOutFromGoogle } from './js/API/firebaseLibraryAPI';
import './js/events/multi-language';
import {
  onCloseModalDev,
  onCloseModalDevBackdrop,
  onOpenModalDev,
  onCloseModaDevlEsc,
} from './js/events/modalDevs';
