import refs from '../refs';

import MovieDB from '../API/fetchMovieAPI';
import { Notify } from 'notiflix';

import renderMovies from '../render/renderSearchMovies';
import { clearContent, clearHTML } from '../utils/clear';

const movieDB = new MovieDB();

const WARNING_TEXT =
  'Search result not successful. Enter the correct movie name and try again';

refs.searchForm.addEventListener('submit', onSeachFormSubmit);

export default async function onSeachFormSubmit(e) {
  try {
    e.preventDefault();

    movieDB.query = e.target.elements.query.value.trim();

    if (!movieDB.query) {
      refs.warningText.textContent = WARNING_TEXT;
      return;
    }

    const { results, total_pages, total_results } =
      await movieDB.fetchSearchMovie();

    if (results.length === 0) {
      refs.warningText.textContent = WARNING_TEXT;
      return;
    }

    clearHTML(refs.movies);
    clearContent(refs.warningText);

    renderMovies(results);

    e.target.reset();
  } catch (error) {
    Notify.failure(`${error.message}`);
  }
}