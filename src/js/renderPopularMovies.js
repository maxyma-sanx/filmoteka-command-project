import refs from './refs';
import genresList from './genres.js';

function findGenres(genres_ids) {
  return genres_ids.map(id => {
    for (let i = 0; i < genresList.genres.length; i += 1) {
      if (id === genresList.genres[i].id) {
        return genresList.genres[i].name;
      }
    }
  });
}

export default function renderPopularMovies(data) {
  const films = data
    .map(({ poster_path, release_date, original_title, genre_ids }) => {
      const genres =
        findGenres(genre_ids).length < 3
          ? findGenres(genre_ids).join(', ')
          : `${findGenres(genre_ids)[0]}, ${findGenres(genre_ids)[1]}, Other`;

      return `<li class="movies__item">
        <a href="">
          <img src="https://image.tmdb.org/t/p/w500/${poster_path}" width="395" height="574" alt="${original_title}" />
          <div class="movies__info">
            <h3 class="movies__title">${original_title}</h3>
            <p class="movies__text">${genres} | ${new Date(
        release_date
      ).getFullYear()}</p>
          </div>
        </a>
      </li>`;
    })
    .join('');

  refs.movies.insertAdjacentHTML('beforeend', films);
}
