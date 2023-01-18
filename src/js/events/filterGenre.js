import refs from '../refs';

import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import tuiPaginationAPI from '../API/tuiPaginationAPI';

import MovieDB from '../API/fetchMovieAPI';

import renderMovies from '../render/renderSearchMovies';

import { clearHTML, clearContent } from '../utils/clear';
import { Loading } from 'notiflix';

import lang from '../utils/checkStorageLang';

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
  const pagination = new Pagination(
    refs.pagination,
    tuiPaginationAPI(total_results)
  );

  pagination.on('afterMove', async event => {
    movieDB.page = event.page;

    clearHTML(refs.movies);

    Loading.standard();

    const { results } = await movieDB.fetchMoviesDiscoverByGenres(
      e.target.id,
      lang
    );

    const renderMarkup = await renderMovies(results);

    refs.movies.insertAdjacentHTML('beforeend', renderMarkup);

    Loading.remove();
  });
}
