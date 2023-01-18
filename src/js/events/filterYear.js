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

for (const item of refs.filterYearBtn.children) {
  item.addEventListener('click', onYearBtnClick);
}

async function onYearBtnClick(e) {
  e.preventDefault();

  Loading.standard();

  const { results, total_results } = await movieDB.fetchMoviesDiscoverByYear(
    e.target.dataset.year,
    lang
  );

  clearHTML(refs.movies);
  clearContent(refs.warningText);

  const renderMarkup = await renderMovies(results);

  refs.movies.insertAdjacentHTML('beforeend', renderMarkup);

  Loading.remove();

  const pagination = new Pagination(
    refs.pagination,
    tuiPaginationAPI(total_results)
  );

  pagination.on('afterMove', async event => {
    movieDB.page = event.page;

    clearHTML(refs.movies);

    Loading.standard();

    const { results } = await movieDB.fetchMoviesDiscoverByYear(
      e.target.dataset.year,
      lang
    );

    const renderMarkup = await renderMovies(results);

    refs.movies.insertAdjacentHTML('beforeend', renderMarkup);

    Loading.remove();
  });
}
