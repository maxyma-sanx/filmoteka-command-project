import MovieDB from '../API/fetchMovieAPI';

import lang from '../utils/checkStorageLang';

// Імпорт зображення для плейсхолдеру, коли зображення немає
import defaultImg from '../../images/default.jpg';

import lang from '../utils/checkStorageLang';
import isUkraineLang from '../utils/checkUrkLang';

const movieDB = new MovieDB();

// Функція приймає массив id жанрів з фільму та повертає массив назв жанрів
async function findGenres(genresID) {
  const genres = await movieDB.fetchMoviesGenres(lang);

  return genresID.map(id => {
    for (let i = 0; i < genres.length; i += 1) {
      if (id === genres[i].id || id.id === genres[i].id) {
        return genres[i].name;
      }
    }
  });
}

// Функція створення розмітки для рендеру фільмів
export default async function renderMovies(data) {
  // В змінну films записується декілька промісів, тому використовуємо метод promise.all
  const films = await Promise.all(
    data.map(
      async ({ poster_path, release_date, genre_ids, title, id, genres }) => {
        // Використовуємо синтаксис async/await в методі map, щоб отримати данні з жанрами фільмів
        const genresList = genre_ids
          ? await findGenres(genre_ids)
          : await findGenres(genres);

        const poster = `https://image.tmdb.org/t/p/w500/${poster_path}`;
        const posterPlaceholder = defaultImg;

        // Перевірка довжини массиву з жанрами
        const genresArr =
          genresList.length <= 3
            ? genresList.join(', ')
            : `${genresList[0]}, ${genresList[1]}, ${
                isUkraineLang ? 'Інші' : 'Other'
              }`;

        return `<li class="movies__item" data-id="${id}">
        <a href="#" class="movies__link">
          <img src="${
            poster_path ? poster : posterPlaceholder
          }" class="movies__img" alt="${title}" />

          <div class="movies__info">
            <h3 class="movies__title">${title}</h3>
            <p class="movies__text">${
              genresArr.length !== 0
                ? genresArr
                : `${isUkraineLang ? 'Жанр: невідомо' : 'Genre: unknown'}`
            } | ${
          release_date
            ? new Date(release_date).getFullYear()
            : `${isUkraineLang ? 'Рік: невідомо' : 'Year: unknown'}`
        }</p>
          </div>
        </a>
      </li>`;
      }
    )
  );

  return films.join('');
}
