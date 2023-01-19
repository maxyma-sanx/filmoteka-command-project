import refs from '../refs';

import MovieDB from '../API/fetchMovieAPI';

import renderMovies from '../render/renderSearchMovies';

import { clearHTML, clearContent } from '../utils/clear';
import { Loading } from 'notiflix';

import lang from '../utils/checkStorageLang';
import createPagination from '../API/tuiPaginationAPI';

const movieDB = new MovieDB();

for (const item of refs.filterGenreBtn.children) {
  item.addEventListener('click', e => {
    onFilterBtnClick(e, e.target.dataset.id, 'with_genres');
    hightlightSelected(item);
  });
}

for (const item of refs.filterYearBtn.children) {
  item.addEventListener('click', e => {
    onFilterBtnClick(e, e.target.dataset.year, 'primary_release_year');
    hightlightSelected(item);
  });
}

async function onFilterBtnClick(e, type, param) {
  e.preventDefault();

  Loading.standard();

  const { results, total_results } = await movieDB.fetchMoviesDiscover(
    param,
    type,
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

    const { results } = await movieDB.fetchMoviesDiscover(param, type, lang);

    const renderMarkup = await renderMovies(results);

    refs.movies.insertAdjacentHTML('beforeend', renderMarkup);

    Loading.remove();
  });
}

// Функція підсвічує активний елемент у фільтрі
function hightlightSelected(item) {
  const currentActiveBtn = document.querySelector('.hightlight');

  if (currentActiveBtn) {
    currentActiveBtn.classList.remove('hightlight');
  }

  item.classList.add('hightlight');
}
