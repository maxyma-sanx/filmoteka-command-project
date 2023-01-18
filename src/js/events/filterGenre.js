import refs from '../refs';

import MovieDB from '../API/fetchMovieAPI';

import renderMovies from '../render/renderSearchMovies';

import { clearHTML, clearContent } from '../utils/clear';
import { Loading } from 'notiflix';

import lang from '../utils/checkStorageLang';
import createPagination from '../API/tuiPaginationAPI';

const movieDB = new MovieDB();

for (const item of refs.filterGenreBtn.children) {
  item.addEventListener('click', onGenreBtnClick);
}

// Функція фільтрації фільмів по жанрам
async function onGenreBtnClick(e) {
  e.preventDefault();

  Loading.standard();

  const { results, total_results } = await movieDB.fetchMoviesDiscoverByGenres(
    e.target.dataset.id,
    lang
  );

  clearHTML(refs.movies);
  clearContent(refs.warningText);

  const renderMarkup = await renderMovies(results);

  refs.movies.insertAdjacentHTML('beforeend', renderMarkup);

  Loading.remove();

  // Створення пагінації для фільмів по жанрам
  createPagination(total_results, async event => {
    movieDB.page = event.page;

    clearHTML(refs.movies);

    Loading.standard();

    const { results } = await movieDB.fetchMoviesDiscoverByGenres(
      e.target.dataset.id,
      lang
    );

    const renderMarkup = await renderMovies(results);

    refs.movies.insertAdjacentHTML('beforeend', renderMarkup);

    Loading.remove();
  });
}
