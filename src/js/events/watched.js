import refs from '../refs';

import MovieDB from '../API/fetchMovieAPI';

import renderMovies from '../render/renderSearchMovies';

import onMovieClick from './movieCard';
const CURRENT_PAGE = 'current';

const movieDB = new MovieDB();
const parsedCurrent = JSON.parse(localStorage.getItem(CURRENT_PAGE));
console.log(parsedCurrent);
if (parsedCurrent === 'header__library-btn--watched') {
  refs.watchedBtn.classList.add('header__library-btn--active');
} else if (parsedCurrent === 'header__library-btn--queue') {
  refs.queueBtn.classList.add('header__library-btn--active');
} else {
  refs.watchedBtn.classList.add('header__library-btn--active');
}

const parsedWatchedData = JSON.parse(localStorage.getItem('watched'));

export default (async function watchedMovies() {
  if (!parsedWatchedData) {
    return;
  }

  const data = await Promise.all(
    parsedWatchedData.map(async id => {
      const movieData = await movieDB.fetchMovieDetails(id);
      return movieData;
    })
  );

  if (refs.watchedBtn.classList.contains('header__library-btn--active')) {
    const renderMarkup = await renderMovies(data);
    refs.movies.innerHTML = renderMarkup;
  }

  refs.movies.addEventListener('click', onMovieClick);
  refs.watchedBtn.addEventListener('click', addClassActive);

  function addClassActive() {
    refs.queueBtn.classList.remove('header__library-btn--active');
    refs.watchedBtn.classList.add('header__library-btn--active');

    watchedMovies();

    const currentPage = refs.watchedBtn.classList;
    const res = currentPage[1];
    console.log(currentPage[1]);
    localStorage.setItem(CURRENT_PAGE, JSON.stringify(res));
  }
})();
