import refs from '../refs';

import * as basicLightbox from 'basiclightbox';
import { Loading, Notify } from 'notiflix';

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
import lang from '../utils/checkLang';

refs.movies.addEventListener('click', onMovieClick);

const WATCHED_KEY = 'watched';
const QUEUE_KEY = 'queue';

const movieDB = new MovieDB();

// Массиви данних які беруться з localStorage при завантаженні сторінки
const parsedWatchedData = JSON.parse(localStorage.getItem('watched')) || [];
const parsedQueueData = JSON.parse(localStorage.getItem('queue')) || [];

// Логіка при відкритті модалки з фільмом
export default async function onMovieClick(e) {
  try {
    e.preventDefault();

    if (e.target === e.currentTarget) return;

    modalCloseHandler();

    // Отримуємо статус авторизації
    const isAuth = JSON.parse(localStorage.getItem('auth'));

    // Знаходимо id конкретного фільму
    let filmID = e.target.closest('.movies__item').dataset.id;

    Loading.standard();

    const movie = await movieDB.fetchMovieDetails(filmID, lang);
    const { results } = await movieDB.fetchMovieTrailer(filmID);

    renderTargetMovie(movie, results);

    Loading.remove();

    // Знаходимо кнопки watchedBtn та queueBtn після рендеру картки з фільмом
    const watchedBtn = document.getElementById('addToWatchedBtn');
    const queueBtn = document.getElementById('addToQueueBtn');
    const trailerBtn = document.querySelector('.modal__trailer-btn');

    // Статус кнопок на сторінці модалки, відповідно до статусу авторизації
    if (!isAuth) {
      watchedBtn.style.display = 'none';
      queueBtn.style.display = 'none';
    } else {
      watchedBtn.style.display = 'block';
      queueBtn.style.display = 'block';
    }

    // Клік по кнопці Youtube
    trailerBtn.addEventListener('click', () => {
      createBasicLightBoxIframe(results);
    });

    // Клік по кнопці Watched
    watchedBtn.addEventListener('click', () => {
      changeWatchedBtn(watchedBtn, filmID);
    });

    // Клік по кнопці Queue
    queueBtn.addEventListener('click', () => {
      queueWatchedBtn(queueBtn, filmID);
    });
  } catch (error) {
    Notify.failure(`${error.message}`);
  }
}

// Функція додає та видаляє з localStorage id переглянутих фільмів

function changeWatchedBtn(btn, filmID) {
  if (btn.textContent === 'Add to watched') {
    btn.textContent = 'Remove from watched';
    Notify.info('Success! The movie has been added to the library.');

    // Пушимо в localStorage id фільму
    checkData(parsedWatchedData, filmID, WATCHED_KEY);
  } else {
    btn.textContent = 'Add to watched';

    // Видаляємо з localStorage id фільму
    removeLocalData(parsedWatchedData, filmID, WATCHED_KEY);
    Notify.info('Success! The movie has been removed from the library.');
  }
}

// Функція додає та видаляє з localStorage id фільмів у черзі

function queueWatchedBtn(btn, filmID) {
  if (btn.textContent === 'Add to queue') {
    btn.textContent = 'Remove from queue';
    Notify.info('Success! The movie has been added to the library.');

    // Пушимо в localStorage id фільму
    checkData(parsedQueueData, filmID, QUEUE_KEY);
  } else {
    btn.textContent = 'Add to queue';

    Notify.info('Success! The movie has been removed from the library.');

    // Видаляємо з localStorage id фільму
    removeLocalData(parsedQueueData, filmID, QUEUE_KEY);
  }
}

// Функція створює розмітку для iFrame відео з ютубу по id

function createBasicLightBoxIframe(data) {
  const movieID = data.find(item => item.name === 'Official Trailer');

  const instance = basicLightbox.create(
    `<iframe class="video-trailer" width="640" height="480" frameborder="0" allowfullscreen allow='autoplay'
            src="https://www.youtube.com/embed/${
              movieID ? movieID.key : 'zwBpUdZ0lrQ'
            }?autoplay=1" >
          </iframe>`,
    {
      onShow: instance => {
        window.addEventListener('keydown', function onEscClick(e) {
          if (e.code === 'Escape') {
            instance.close();
            window.removeEventListener('keydown', onEscClick);
          }
        });
      },
    }
  );

  instance.show();
}

// Обробка слухачів модального вікна

function modalCloseHandler() {
  refs.body.classList.add('disable-scroll');
  refs.modalClose.addEventListener('click', onCloseModal);
  refs.backdrop.addEventListener('click', onCloseModalBackdrop);
  document.addEventListener('keydown', onCloseModalEsc);
  refs.backdrop.classList.remove('is-hidden');
}
