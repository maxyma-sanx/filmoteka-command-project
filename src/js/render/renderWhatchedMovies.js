import refs from '../refs';

import MovieDB from '../API/fetchMovieAPI';

const movieDB = new MovieDB();

whatched = ['315162', '593643', '76600'];

refs.watchedBtn.addEventListener('click', whatched);

// async function whatched(e) {
//   try {
//     e.preventDefault();

//     let filmID = e.target.closest('.movies__item').dataset.id;

//     const movie = await movieDB.fetchMovieDetails(filmID);

//     console.log(movie);

//     whatched.forEach(element => {
//       renderWhatchedMovies(movie);
//     });

//     renderWhatchedMovies(movie);

//     const watchedBtn = document.getElementById('addToWatchedBtn');

//     watchedBtn.addEventListener('click', () => {
//       watched.push(filmID);
//       localStorage.setItem('watched', JSON.stringify(watched));
//     });
//   } catch (error) {
//     console.log(error);
//   }
// }

// async function findGenres(genresID) {
//   const genres = await movieDB.fetchMoviesGenres();

//   return genresID.map(id => {
//     for (let i = 0; i < genres.length; i += 1) {
//       if (id === genres[i].id) {
//         return genres[i].name;
//       }
//     }
//   });
// }

// export default async function renderWhatchedMovies(data) {
//   const films = await Promise.all(
//     data.map(async ({ poster_path, release_date, genre_ids, title, id }) => {
//       const genresList = await findGenres(genre_ids);

//       const poster = `https://image.tmdb.org/t/p/w500/${poster_path}`;
//       const posterPlaceholder = `https://via.placeholder.com/395x574`;

//       const genres =
//         genresList.length < 3
//           ? genresList.join(', ')
//           : `${genresList[0]}, ${genresList[1]}, Other`;

//       return `<li class="movies__item" data-id="${id}">
//         <a href="#">
//           <img src="${
//             poster_path ? poster : posterPlaceholder
//           }" width="395" height="574" alt="${title}"/>
//           <div class="movies__info">
//             <h3 class="movies__title">${title}</h3>
//             <p class="movies__text">${
//               genres.length !== 0 ? genres : 'Genre: unknown'
//             } | ${
//         release_date ? new Date(release_date).getFullYear() : 'Year: unknown'
//       }</p>
//           </div>
//         </a>
//       </li>`;
//     })
//   );

//   refs.movies.insertAdjacentHTML('beforeend', films.join(''));
// }
