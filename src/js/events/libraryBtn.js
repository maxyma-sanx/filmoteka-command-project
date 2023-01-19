import refs from '../refs';

import { Loading } from 'notiflix';

import MovieDB from '../API/fetchMovieAPI';

import renderMovies from '../render/renderSearchMovies';
import onMovieClick from './movieCard';

import lang from '../utils/checkStorageLang';

const CURRENT_PAGE = 'current';

const movieDB = new MovieDB();

// Достаємо проглянуті фільми з локал стореж
const parsedWatchedData = JSON.parse(localStorage.getItem('watched'));
const parsedQueueData = JSON.parse(localStorage.getItem('queue'));

// Достаємо поточну сторінку з локал стореж
const parsedCurrent = JSON.parse(localStorage.getItem(CURRENT_PAGE));

// Якщо поточної сторінки немає в LocalStorage, то по defaultу
// буде Watched
if (!parsedCurrent) {
  refs.watchedBtn.classList.add('header__library-btn--active');
  refs.queueBtn.classList.remove('header__library-btn--active');
  renderLibraryMovies(parsedWatchedData);
}

// Перевіряємо чи поточна зараз сторінка Watched
if (parsedCurrent === 'header__library-btn--watched') {
  refs.watchedBtn.classList.add('header__library-btn--active');
  refs.queueBtn.classList.remove('header__library-btn--active');
  renderLibraryMovies(parsedWatchedData);
}

// Перевіряємо чи поточна зараз сторінка Queue
if (parsedCurrent === 'header__library-btn--queue') {
  refs.watchedBtn.classList.remove('header__library-btn--active');
  refs.queueBtn.classList.add('header__library-btn--active');
  renderLibraryMovies(parsedQueueData);
}

// Слухач на вибране кіно
refs.movies.addEventListener('click', onMovieClick);

// Слухач на кнопку Watched
refs.watchedBtn.addEventListener('click', () => {
  addClassActive(refs.queueBtn, refs.watchedBtn, parsedWatchedData);
});

// Слухач на кнопку Queue
refs.queueBtn.addEventListener('click', () => {
  addClassActive(refs.watchedBtn, refs.queueBtn, parsedQueueData);
});

// Функція при натисканні на кнопку watched або queue
async function addClassActive(firstBtn, secondBtn, results) {
  firstBtn.classList.remove('header__library-btn--active');
  secondBtn.classList.add('header__library-btn--active');

  const currentPage = secondBtn.classList;
  const res = currentPage[1];

  localStorage.setItem(CURRENT_PAGE, JSON.stringify(res));

  renderLibraryMovies(results);
}

// функція рендера контенту на сторінку Watched та Queue
async function renderLibraryMovies(results) {
  if (!results) {
    return;
  }

  Loading.standard();

  const data = await Promise.all(
    results.map(async id => {
      const movieData = await movieDB.fetchMovieDetails(id, lang);
      return movieData;
    })
  );

  if (data) {
    refs.myLibraryWrap.children[0].style.display = 'block';
    refs.myLibraryWrap.children[1].style.display = 'block';
    Loading.remove();
  }

  const renderMarkup = await renderMovies(data);
  refs.movies.innerHTML = renderMarkup;

  if (renderMarkup.includes('li class="movies__item"')) {
    refs.myLibraryWrap.children[0].style.display = 'none';
    refs.myLibraryWrap.children[1].style.display = 'none';
  }

  Loading.remove();
}
