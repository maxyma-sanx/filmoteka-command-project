import refs from '../refs';
import MovieDB from '../API/fetchMovieAPI';

refs.addToWatchedBtn.addEventListener('click', setStorage);

const movieDB = new MovieDB();

async function getMovieId() {
  const data = await movieDB.fetchMovieDetails(300);
  console.log(data);
  const { id } = await data;
  console.log(id);
  return id;
}

getMovieId();

let filmID = '';

// console.log(filmID);
// //в DATA надо положить ID фильма

export function setStorage(key, filmID) {
  filmID = getMovieId();

  const dataJson = JSON.stringify(filmID);
  localStorage.setItem('added-watched', dataJson);
}
