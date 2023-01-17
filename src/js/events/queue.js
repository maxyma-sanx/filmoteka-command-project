import refs from '../refs';

import { Loading } from 'notiflix';

import MovieDB from '../API/fetchMovieAPI';

import renderMovies from '../render/renderSearchMovies';

import onMovieClick from './movieCard';

import lang from '../utils/checkStorageLang';

const CURRENT_PAGE = 'current';

const movieDB = new MovieDB();

// Достаємо проглянуті фільми з локал стореж
const parsedQueueData = JSON.parse(localStorage.getItem('queue'));

// Достаємо поточну сторінку з локал стореж
const parsedCurrent = JSON.parse(localStorage.getItem(CURRENT_PAGE));

// Перевіряємо чи поточна зараз сторінка Queue
if (parsedCurrent === 'header__library-btn--queue') {
  refs.watchedBtn.classList.remove('header__library-btn--active');
  refs.queueBtn.classList.add('header__library-btn--active');
  renderQueueMovies();
}

// Слухач на вибране кіно
refs.movies.addEventListener('click', onMovieClick);

// Слухач на кнопку Watched
refs.queueBtn.addEventListener('click', addClassActive);

// Функція при натисканні на кнопку Watched
async function addClassActive() {
  refs.watchedBtn.classList.remove('header__library-btn--active');
  refs.queueBtn.classList.add('header__library-btn--active');

  const currentPage = refs.queueBtn.classList;
  const res = currentPage[1];

  localStorage.setItem(CURRENT_PAGE, JSON.stringify(res));

  renderQueueMovies();
}

// функція рендера контенту на сторінку Queue
async function renderQueueMovies() {
  if (!parsedQueueData) {
    return;
  }
  Loading.standard();
  const data = await Promise.all(
    parsedQueueData.map(async id => {
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
