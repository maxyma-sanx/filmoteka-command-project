import refs from '../refs';

import MovieDB from '../API/fetchMovieAPI';

import renderMovies from '../render/renderSearchMovies';

const movieDB = new MovieDB();

const parsedQueueData = JSON.parse(localStorage.getItem('queue'));

export default (async function watchedMovies() {
  if (!parsedQueueData) {
    return;
  }

  const data = await Promise.all(
    parsedQueueData.map(async id => {
      const movieData = await movieDB.fetchMovieDetails(id);
      return movieData;
    })
  );

  const renderMarkup = await renderMovies(data);

  refs.movies.innerHTML = renderMarkup;
})();
