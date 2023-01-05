import refs from '../refs';

import MovieDB from '../API/fetchMovieAPI';

const movieDB = new MovieDB();

async function findGenres(genresID) {
  const genres = await movieDB.fetchMoviesGenres();

  return genresID.map(id => {
    for (let i = 0; i < genres.length; i += 1) {
      if (id === genres[i].id) {
        return genres[i].name;
      }
    }
  });
}

export default async function renderMovies(data) {
  const films = await Promise.all(
    data.map(async ({ poster_path, release_date, genre_ids, title }) => {
      const genresList = await findGenres(genre_ids);

      const poster = `https://image.tmdb.org/t/p/w500/${poster_path}`;
      const posterPlaceholder = `https://via.placeholder.com/395x574`;

      const genres =
        genresList.length < 3
          ? genresList.join(', ')
          : `${genresList[0]}, ${genresList[1]}, Other`;

      return `<li class="movies__item">
        <a href="">
          <img src="${
            poster_path ? poster : posterPlaceholder
          }" width="395" height="574" alt="${title}" />
          <div class="movies__info">
            <h3 class="movies__title">${title}</h3>
            <p class="movies__text">${
              genres.length !== 0 ? genres : 'Genre: unknown'
            } | ${
        release_date ? new Date(release_date).getFullYear() : 'Year: unknown'
      }</p>
          </div>
        </a>
      </li>`;
    })
  );

  refs.movies.insertAdjacentHTML('beforeend', films.join(''));
}