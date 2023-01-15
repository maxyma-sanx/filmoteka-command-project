import refs from '../refs';

import { Loading, Notify } from 'notiflix';

import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import tuiPaginationAPI from '../API/tuiPaginationAPI';

import MovieDB from '../API/fetchMovieAPI';

import renderMovies from '../render/renderSearchMovies';

import { clearContent, clearHTML } from '../utils/clear';
import lang from '../utils/checkLang';
import langs from '../utils/language-map';

const movieDB = new MovieDB();
const languageSelect = refs.languageSelectBtn;

// ('Search result not successful. Enter the correct movie name and try again');

refs.searchForm.addEventListener('submit', onSeachFormSubmit);

// Функція пошуку фільмів по сабміту
export default async function onSeachFormSubmit(e) {
  try {
    e.preventDefault();

    movieDB.query = e.target.elements.query.value.trim();

    if (!movieDB.query) {
      refs.warningText.textContent = langs.badQuery[languageSelect.value];
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
    const pagination = new Pagination(
      refs.pagination,
      tuiPaginationAPI(total_results)
    );

    pagination.on('afterMove', async event => {
      movieDB.page = event.page;
      clearHTML(refs.movies);

      Loading.standard();

      const { results } = await movieDB.fetchSearchMovie();
      const renderMarkup = await renderMovies(results);

      refs.movies.insertAdjacentHTML('beforeend', renderMarkup);

      Loading.remove();
    });

    e.target.reset();
  } catch (error) {
    Notify.failure(`${error.message}`);
  }
}
