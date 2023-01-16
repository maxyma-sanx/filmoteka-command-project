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
  Loading.standard();

  const data = await Promise.all(
    parsedQueueData.map(async id => {
      const movieData = await movieDB.fetchMovieDetails(id, lang);
      return movieData;
    })
  );

  // Це перевірка для 'заглушки', якщо не буду що рендерить.
  if (data) {
    refs.myLibraryWrap.children[0].style.display = 'block';
    refs.myLibraryWrap.children[1].style.display = 'block';
    Loading.remove();
  }

  if (refs.queueBtn.classList.contains('header__library-btn--active')) {
    const renderMarkup = await renderMovies(data);
    refs.movies.innerHTML = renderMarkup;

    if (renderMarkup.includes('li class="movies__item"')) {
      refs.myLibraryWrap.children[0].style.display = 'none';
      refs.myLibraryWrap.children[1].style.display = 'none';
    }
  }

  Loading.remove();

  refs.movies.addEventListener('click', onMovieClick);
  refs.queueBtn.addEventListener('click', addClassActive);

  function addClassActive() {
    if (parsedQueueData.length === 0 && refs.movies.length === 0) {
      refs.myLibraryWrap.children[0].style.display = 'block';
      refs.myLibraryWrap.children[1].style.display = 'block';
    } else {
      watchedMovies();
    }
    refs.watchedBtn.classList.remove('header__library-btn--active');
    refs.queueBtn.classList.add('header__library-btn--active');

    watchedMovies();

    const currentPage = refs.queueBtn.classList;
    const res = currentPage[1];
    localStorage.setItem(CURRENT_PAGE, JSON.stringify(res));
  }
})();
