import refs from '../refs';

import MovieDB from '../API/fetchMovieAPI';

import renderMovies from '../render/renderSearchMovies';

import onMovieClick from './movieCard';

const movieDB = new MovieDB();

const parsedQueueData = JSON.parse(localStorage.getItem('queue'));

export default (async function watchedMovies() {
  if (!parsedQueueData) {
    return;
  }

  const data = await Promise.all(
    parsedQueueData.map(async id => {
      const movieData = await movieDB.fetchMovieDetails(id);
      return movieData;
    })
  );
  if (refs.queueBtn.classList.contains('header__library-btn--active')) {
    const renderMarkup = await renderMovies(data);
    refs.movies.innerHTML = renderMarkup;
  }

  refs.movies.addEventListener('click', onMovieClick);
  refs.queueBtn.addEventListener('click', addClassActive);

  function addClassActive() {
    refs.watchedBtn.classList.remove('header__library-btn--active');
    refs.queueBtn.classList.add('header__library-btn--active');
    watchedMovies();
  }
})();
