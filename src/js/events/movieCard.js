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
import lang from '../utils/checkStorageLang';
import isUkraineLang from '../utils/checkUrkLang';

refs.movies.addEventListener('click', onMovieClick);

const WATCHED_KEY = 'watched';
const QUEUE_KEY = 'queue';

const movieDB = new MovieDB();

// Массиви данних які беруться з localStorage при завантаженні сторінки
const parsedWatchedData = JSON.parse(localStorage.getItem(WATCHED_KEY)) || [];
const parsedQueueData = JSON.parse(localStorage.getItem(QUEUE_KEY)) || [];

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
  if (
    btn.textContent === 'Add to watched' ||
    btn.textContent === 'Додати до перегляду'
  ) {
    isUkraineLang
      ? (btn.textContent = 'Видалити з переглянутого')
      : (btn.textContent = 'Remove from watched');

    // Пушимо в localStorage id фільму
    checkData(parsedWatchedData, filmID, WATCHED_KEY);
    onBtnClickReload();
  } else {
    isUkraineLang
      ? (btn.textContent = 'Додати до перегляду')
      : (btn.textContent = 'Add to watched');

    // Видаляємо з localStorage id фільму
    removeLocalData(parsedWatchedData, filmID, WATCHED_KEY);
    onBtnClickReload();
  }
}

// Функція додає та видаляє з localStorage id фільмів у черзі
function queueWatchedBtn(btn, filmID) {
  if (
    btn.textContent === 'Add to queue' ||
    btn.textContent === 'Додати до черги'
  ) {
    isUkraineLang
      ? (btn.textContent = 'Видалити з черги')
      : (btn.textContent = 'Remove from queue');

    // Пушимо в localStorage id фільму
    checkData(parsedQueueData, filmID, QUEUE_KEY);
    onBtnClickReload();
  } else {
    isUkraineLang
      ? (btn.textContent = 'Додати до черги')
      : (btn.textContent = 'Add to queue');

    // Видаляємо з localStorage id фільму
    removeLocalData(parsedQueueData, filmID, QUEUE_KEY);
    onBtnClickReload();
  }
}

// Функція створює розмітку для iFrame відео з ютубу по id
function createBasicLightBoxIframe(data) {
  document.removeEventListener('keydown', onCloseModalEsc);

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
            document.addEventListener('keydown', onCloseModalEsc);
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

// Функція перевіряє сторінку на якій ми зараз знаходимось, якщо умова виконується, поточна сторінка перезавантажується
function onBtnClickReload() {
  if (window.location.pathname === '/library.html') {
    location.reload();
  }
}
