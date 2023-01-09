import refs from '../refs';

import MovieDB from '../API/fetchMovieAPI';

import renderTargetMovie from '../render/renderTargetMovie';
import {
  onCloseModal,
  onCloseModalBackdrop,
  onCloseModalEsc,
  removeEventListener,
} from './modal';

refs.movies.addEventListener('click', onMovieClick);

const movieDB = new MovieDB();

const watched = [];
const queue = [];

export default async function onMovieClick(e) {
  try {
    e.preventDefault();

    refs.modalClose.addEventListener('click', onCloseModal);
    refs.backdrop.addEventListener('click', onCloseModalBackdrop);
    document.addEventListener('keydown', onCloseModalEsc);

    refs.backdrop.classList.remove('is-hidden');
    if (e.target === e.currentTarget) return;
    let filmID = e.target.closest('.movies__item').dataset.id;
    const movie = await movieDB.fetchMovieDetails(filmID);
    const { results } = await movieDB.fetchMovieTrailer(filmID);

    // console.log(results[0].key); Отримати id трейлера

    renderTargetMovie(movie);

    const watchedBtn = document.getElementById('addToWatchedBtn');
    const queueBtn = document.getElementById('addToQueueBtn');

    watchedBtn.addEventListener('click', () => {
      watched.push(filmID);
      localStorage.setItem('watched', JSON.stringify(watched));
    });

    queueBtn.addEventListener('click', () => {
      queue.push(filmID);
      localStorage.setItem('queue', JSON.stringify(queue));
    });
  } catch (error) {
    console.log(error);
  }
}
