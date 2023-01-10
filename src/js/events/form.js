import refs from '../refs';

import { Notify } from 'notiflix';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import tuiPaginationAPI from '../API/tuiPaginationAPI';

import MovieDB from '../API/fetchMovieAPI';

import renderMovies from '../render/renderSearchMovies';
import { clearContent, clearHTML } from '../utils/clear';

const movieDB = new MovieDB();

const WARNING_TEXT =
  'Search result not successful. Enter the correct movie name and try again';

refs.searchForm.addEventListener('submit', onSeachFormSubmit);

// Функція пошуку фільмів по сабміту
export default async function onSeachFormSubmit(e) {
  try {
    e.preventDefault();

    movieDB.query = e.target.elements.query.value.trim();

    if (!movieDB.query) {
      refs.warningText.textContent = WARNING_TEXT;
      return;
    }

    const { results, total_results } = await movieDB.fetchSearchMovie();

    if (results.length === 0) {
      refs.warningText.textContent = WARNING_TEXT;
      return;
    }

    clearHTML(refs.movies);
    clearContent(refs.warningText);

    renderMovies(results);

    // Створення пагінації фільмів по пошуку
    const pagination = new Pagination(
      refs.pagination,
      tuiPaginationAPI(total_results)
    );

    pagination.on('afterMove', async event => {
      movieDB.page = event.page;
      const { results } = await movieDB.fetchSearchMovie();
      clearHTML(refs.movies);
      renderMovies(results);
    });

    e.target.reset();
  } catch (error) {
    Notify.failure(`${error.message}`);
  }
}
