import refs from './refs';
import MovieDB from './fetchMovieAPI';

const movieDB = new MovieDB();

async function findGenres(genres_ids) {
  const genres = await movieDB.fetchMoviesGenres();

  return genres_ids.map(id => {
    for (let i = 0; i < genres.length; i += 1) {
      if (id === genres[i].id) {
        return genres[i].name;
      }
    }
  });
}

export default async function renderMovies(data) {
  const films = await Promise.all(
    data.map(
      async ({ poster_path, release_date, original_title, genre_ids }) => {
        const data = await findGenres(genre_ids);

        const genres =
          data.length < 3 ? data.join(', ') : `${data[0]}, ${data[1]}, Other`;

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
      }
    )
  );

  refs.movies.insertAdjacentHTML('beforeend', films.join(''));
}
