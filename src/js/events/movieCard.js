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
import { clearHTML } from '../utils/clear';

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

    Loading.standard();

    clearHTML(refs.modalMovie);

    // Отримуємо статус авторизації
    const isAuth = JSON.parse(localStorage.getItem('auth'));

    // Знаходимо id конкретного фільму
    let filmID = e.target.closest('.movies__item').dataset.id;

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
      changeMovieStatusBtn(
        watchedBtn,
        filmID,
        'watched',
        'перегляду',
        parsedWatchedData,
        WATCHED_KEY
      );
    });

    // Клік по кнопці Queue
    queueBtn.addEventListener('click', () => {
      changeMovieStatusBtn(
        queueBtn,
        filmID,
        'queue',
        'черги',
        parsedQueueData,
        QUEUE_KEY
      );
    });
  } catch (error) {
    Notify.failure(`${error.message}`);
  }
}

// Функція змінює статус кнопок та додає чи видаляє id з localStorage

function changeMovieStatusBtn(btn, filmID, textEng, textUa, data, key) {
  if (
    btn.textContent === `Add to ${textEng}` ||
    btn.textContent === `Додати до ${textUa}`
  ) {
    isUkraineLang
      ? (btn.textContent = `Видалити з ${textUa}`)
      : (btn.textContent = `Remove from ${textEng}`);

    // Пушимо в localStorage id фільму
    checkData(data, filmID, key);
    onBtnClickReload();
  } else {
    isUkraineLang
      ? (btn.textContent = `Додати до ${textUa}`)
      : (btn.textContent = `Add to ${textEng}`);

    // Видаляємо з localStorage id фільму
    removeLocalData(data, filmID, key);
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
  if (window.location.pathname === '/filmoteka-command-project/library.html') {
    location.reload();
  }
}
