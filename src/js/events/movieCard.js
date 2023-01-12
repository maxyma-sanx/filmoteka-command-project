import refs from '../refs';
import * as basicLightbox from 'basiclightbox'

import { Notify } from 'notiflix';

import MovieDB from '../API/fetchMovieAPI';

import renderTargetMovie from '../render/renderTargetMovie';
import renderTrailer from '../render/renderTrailerIframe';

import {
  onCloseModal,
  onCloseModalBackdrop,
  onCloseModalEsc,
  removeEventListener,
} from './modal';

import checkData from '../utils/checkData';
import removeLocalData from '../utils/removeData';
import renderTrailer from '../render/renderTrailerIframe';

refs.movies.addEventListener('click', onMovieClick);

const WATCHED_KEY = 'watched';
const QUEUE_KEY = 'queue';

const movieDB = new MovieDB();

// Пусті массиви на той випадок, коли localStorage порожній
const watched = [];
const queue = [];

// Массиви данних які беруться з localStorage при завантаженні сторінки
const parsedWatchedData = JSON.parse(localStorage.getItem('watched'));
const parsedQueueData = JSON.parse(localStorage.getItem('queue'));

// Логіка при відкритті модалки з фільмом
export default async function onMovieClick(e) {
  try {
    e.preventDefault();
    refs.body.classList.add('disable-scroll');
    refs.modalClose.addEventListener('click', onCloseModal);
    refs.backdrop.addEventListener('click', onCloseModalBackdrop);
    document.addEventListener('keydown', onCloseModalEsc);
    refs.backdrop.classList.remove('is-hidden');

    if (e.target === e.currentTarget) return;

    // Знаходимо id конкретного фільму
    let filmID = e.target.closest('.movies__item').dataset.id;

    const movie = await movieDB.fetchMovieDetails(filmID);
    const { results } = await movieDB.fetchMovieTrailer(filmID);

    renderTargetMovie(movie, results);

    // Знаходимо кнопки watchedBtn та queueBtn після рендеру картки з фільмом
    const watchedBtn = document.getElementById('addToWatchedBtn');
    const queueBtn = document.getElementById('addToQueueBtn');
    const trailerBtn = document.querySelector('.modal__trailer-btn');

    trailerBtn.addEventListener('click', () => {
      if (results.length === 0) {
        const instance = basicLightbox.create(
          `<div class="modal-iframe">
              <p class="trailer-error">Trailer not found</p>
            </div>`,
          {
            onShow: instance => {
              window.addEventListener('keydown', function onEscClick(e) {
                if (e.code === 'Escape') {
                  instance.close();
                  window.removeEventListener('keydown', onEscClick);
                }
              });
            }
          }
        );

        instance.show();
      }
    
      const instance = basicLightbox.create(
        `<iframe class="video-trailer" width="640" height="480" frameborder="0" allowfullscreen allow='autoplay'
            src="https://www.youtube.com/embed/${results[0].key}?autoplay=1" >
          </iframe>`,
        {
          onShow: instance => {
            window.addEventListener('keydown', function onEscClick(e) {
              // console.log(e);
              if (e.code === 'Escape') {
                instance.close();
                window.removeEventListener('keydown', onEscClick);
              }
            });
          }
        });
      
      instance.show();
    });

    watchedBtn.addEventListener('click', () => {
      if (watchedBtn.textContent === 'Add to watched') {
        watchedBtn.textContent = 'Remove from watched';
        Notify.info('Success! The movie has been added to the library.');

        // Пушимо в localStorage id фільму
        checkData(parsedWatchedData, watched, filmID, WATCHED_KEY);
      } else {
        watchedBtn.textContent = 'Add to watched';

        // Видаляємо з localStorage id фільму
        removeLocalData(watched, filmID, WATCHED_KEY);
        removeLocalData(parsedWatchedData, filmID, WATCHED_KEY);
      }
    });

    queueBtn.addEventListener('click', () => {
      if (queueBtn.textContent === 'Add to queue') {
        queueBtn.textContent = 'Remove from queue';
        Notify.info('Success! The movie has been added to the library.');

        // Пушимо в localStorage id фільму
        checkData(parsedQueueData, queue, filmID, QUEUE_KEY);
      } else {
        queueBtn.textContent = 'Add to queue';

        // Видаляємо з localStorage id фільму
        removeLocalData(queue, filmID, QUEUE_KEY);
        removeLocalData(parsedQueueData, filmID, QUEUE_KEY);
      }
    });
  } catch (error) {
    Notify.failure(`${error.message}`);
  }
}

