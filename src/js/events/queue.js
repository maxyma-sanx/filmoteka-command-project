import refs from '../refs';

import { Loading } from 'notiflix';

import MovieDB from '../API/fetchMovieAPI';

import renderMovies from '../render/renderSearchMovies';

import onMovieClick from './movieCard';

import lang from '../utils/checkLang';

const CURRENT_PAGE = 'current';

const movieDB = new MovieDB();

const parsedQueueData = JSON.parse(localStorage.getItem('queue'));

export default (async function watchedMovies() {
  if (!parsedQueueData) {
    return;
  }

  Loading.standard();

  const data = await Promise.all(
    parsedQueueData.map(async id => {
      const movieData = await movieDB.fetchMovieDetails(id, lang);
      return movieData;
    })
  );

  if (refs.queueBtn.classList.contains('header__library-btn--active')) {
    const renderMarkup = await renderMovies(data);
    refs.movies.innerHTML = renderMarkup;

    if (renderMarkup.includes('li class="movies__item"')) {
      refs.myLibraryWrap.innerHTML = '';
    }
  }

  Loading.remove();

  refs.movies.addEventListener('click', onMovieClick);
  refs.queueBtn.addEventListener('click', addClassActive);

  function addClassActive() {
    refs.watchedBtn.classList.remove('header__library-btn--active');
    refs.queueBtn.classList.add('header__library-btn--active');

    watchedMovies();

    const currentPage = refs.queueBtn.classList;
    const res = currentPage[1];
    localStorage.setItem(CURRENT_PAGE, JSON.stringify(res));
  }
})();
