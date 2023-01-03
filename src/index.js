import refs from './js/refs';
import MovieDB from './js/fetchMovieAPI';

import renderPopularMovies from './js/renderPopularMovies';
import renderSearchMovies from './js/renderSearchMovies';
import renderTargetMovie from './js/renderTargetMovie';

const movieDB = new MovieDB();
// console.log(movieDB.fetchPopularMovie());

movieDB.fetchPopularMovie().then(({results}) => {
    console.log(results);
    return renderPopularMovies(results)
});
