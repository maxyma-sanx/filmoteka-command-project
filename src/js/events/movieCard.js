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

    // console.log(results[0].key); Отримати id трейлера

    renderTargetMovie(movie);

    const watchedBtn = document.getElementById('addToWatchedBtn');
    const queueBtn = document.getElementById('addToQueueBtn');

    watchedBtn.addEventListener('click', () => {
      checkData(parsedWatchedData, watched, filmID, WATCHED_KEY);

      const data = JSON.parse(localStorage.getItem(WATCHED_KEY));

      if (watchedBtn.textContent === "Add to watched") {
        watchedBtn.textContent = 'Remove from watched';

        const newData = data.filter(item => item !== filmID);

        localStorage.setItem(WATCHED_KEY, JSON.stringify(newData));
      } else {
        
      }
      
    });

    queueBtn.addEventListener('click', () => {
      checkData(parsedQueueData, queue, filmID, QUEUE_KEY);
    });
  } catch (error) {
    console.log(error);
  }
}
