import refs from '../refs';

import MovieDB from '../API/fetchMovieAPI';

import renderTargetMovie from '../render/renderTargetMovie';
import {
  onCloseModal,
  onCloseModalBackdrop,
  onCloseModalEsc,
  removeEventListener,
} from './modal';
import checkData from '../utils/checkData';
import removeLocalData from '../utils/removeData';

refs.movies.addEventListener('click', onMovieClick);

const WATCHED_KEY = 'watched';
const QUEUE_KEY = 'queue';

const movieDB = new MovieDB();

const watched = [];
const queue = [];

const parsedWatchedData = JSON.parse(localStorage.getItem('watched'));
const parsedQueueData = JSON.parse(localStorage.getItem('queue'));

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

    console.log(results);

    renderTargetMovie(movie, results);

    const watchedBtn = document.getElementById('addToWatchedBtn');
    const queueBtn = document.getElementById('addToQueueBtn');

    watchedBtn.addEventListener('click', () => {
      if (watchedBtn.textContent === 'Add to watched') {
        watchedBtn.textContent = 'Remove from watched';
        checkData(parsedWatchedData, watched, filmID, WATCHED_KEY);
      } else {
        watchedBtn.textContent = 'Add to watched';
        removeLocalData(watched, filmID, WATCHED_KEY);
        removeLocalData(parsedWatchedData, filmID, WATCHED_KEY);
      }
    });

    queueBtn.addEventListener('click', () => {
      if (queueBtn.textContent === 'Add to queue') {
        queueBtn.textContent = 'Remove from queue';
        checkData(parsedQueueData, queue, filmID, QUEUE_KEY);
      } else {
        queueBtn.textContent = 'Add to queue';
        removeLocalData(queue, filmID, QUEUE_KEY);
        removeLocalData(parsedQueueData, filmID, QUEUE_KEY);
      }
    });
  } catch (error) {
    console.log(error);
  }
}
