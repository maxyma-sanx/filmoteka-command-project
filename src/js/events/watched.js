import refs from '../refs';

import MovieDB from '../API/fetchMovieAPI';

import renderMovies from '../render/renderSearchMovies';

const movieDB = new MovieDB();

const parsedWatchedData = JSON.parse(localStorage.getItem('watched'));

export default (async function watchedMovies() {
  const data = await Promise.all(
    parsedWatchedData.map(async id => {
      const movieData = await movieDB.fetchMovieDetails(id);
      return movieData;
    })
  );

  // console.log(data);

  const renderMarkup = await renderMovies(data);

  refs.movies.innerHTML = renderMarkup;
})();
