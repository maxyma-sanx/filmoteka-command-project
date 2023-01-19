import refs from '../refs';

import { Loading, Notify } from 'notiflix';

import MovieDB from '../API/fetchMovieAPI';

import renderMovies from '../render/renderSearchMovies';
import createPagination from '../API/tuiPaginationAPI';

import { clearContent, clearHTML } from '../utils/clear';

import langs from '../utils/language-map';
import lang from '../utils/checkStorageLang';

const movieDB = new MovieDB();
const languageSelect = refs.languageSelectBtn;

// Встановлюємо значення плейсхолдеру (пошук фільмів) відповідно до обраної мови
refs.searchForm.elements.query.placeholder = langs.searchplaceholder[lang];

// Якщо мова ніяка не обрана, за дефолтом встановлюємо Movie search
if (!lang) {
  refs.searchForm.elements.query.placeholder = 'Movie search';
}

refs.searchForm.addEventListener('submit', onSeachFormSubmit);

// Функція пошуку фільмів по сабміту
export default async function onSeachFormSubmit(e) {
  try {
    e.preventDefault();

    movieDB.query = e.target.elements.query.value.trim();

    if (!movieDB.query) {
      refs.warningText.textContent = langs.emptySearch[languageSelect.value];
      return;
    }

    Loading.standard();

    const { results, total_results } = await movieDB.fetchSearchMovie(lang);

    if (results.length === 0) {
      refs.warningText.textContent = langs.badQuery[languageSelect.value];

      Loading.remove();

      return;
    }

    clearHTML(refs.movies);
    clearContent(refs.warningText);

    const renderMarkup = await renderMovies(results);
    refs.movies.insertAdjacentHTML('beforeend', renderMarkup);

    Loading.remove();

    // Створення пагінації для фільмів по пошуку
    createPagination(total_results, async event => {
      movieDB.page = event.page;

      clearHTML(refs.movies);

      Loading.standard();

      const { results } = await movieDB.fetchSearchMovie(lang);
      const renderMarkup = await renderMovies(results);

      refs.movies.insertAdjacentHTML('beforeend', renderMarkup);

      Loading.remove();
    });
    e.target.reset();
  } catch (error) {
    Notify.failure(`${error.message}`);
  }
}
