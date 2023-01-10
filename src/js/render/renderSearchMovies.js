import refs from '../refs';

import MovieDB from '../API/fetchMovieAPI';

// Імпорт зображення для плейсхолдеру, коли зображення немає
import defaultImg from '../../images/default.jpg';

const movieDB = new MovieDB();

// Функція приймає массив id жанрів з фільму та повертає массив назв жанрів
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

// Функція створення розмітки для рендеру фільмів
export default async function renderMovies(data) {
  // В змінну films записується декілька промісів, тому використовуємо метод promise.all
  const films = await Promise.all(
    data.map(async ({ poster_path, release_date, genre_ids, title, id }) => {
      // Використовуємо синтаксис async/await в методі map, щоб отримати данні з жанрами фільмів
      const genresList = await findGenres(genre_ids);

      const poster = `https://image.tmdb.org/t/p/w500/${poster_path}`;
      const posterPlaceholder = defaultImg;

      // Перевірка довжини массиву з жанрами
      const genres =
        genresList.length < 3
          ? genresList.join(', ')
          : `${genresList[0]}, ${genresList[1]}, Other`;

      return `<li class="movies__item" data-id="${id}">
        <a href="#" class="movies__link">
          <img src="${
            poster_path ? poster : posterPlaceholder
          }" class="movies__img" alt="${title}" />

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

  return films.join('');
}
