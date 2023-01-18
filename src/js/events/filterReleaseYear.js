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

for (const item of refs.filterReleaseYearBtn.children) {
  item.addEventListener('click', onReleaseYearBtnClick);
}

async function onReleaseYearBtnClick(e) {
  e.preventDefault();

  Loading.standard();

  const { results, total_results } = await movieDB.fetchMoviesDiscover(
    e.target.id,
    lang
  );

  for (const movie of results) {
  if (
  new Date(movie.release_date).getFullYear() > 2010 &&
  new Date(movie.release_date).getFullYear() < 2015
  ) {
  console.log(movie);
  }
  }

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

    const { results } = await movieDB.fetchMoviesDiscover(e.target.id, lang);

    const renderMarkup = await renderMovies(results);

    refs.movies.insertAdjacentHTML('beforeend', renderMarkup);

    Loading.remove();
  });
}