import refs from '../refs';

import { Loading } from 'notiflix';

import MovieDB from '../API/fetchMovieAPI';

import renderMovies from '../render/renderSearchMovies';

import onMovieClick from './movieCard';

import lang from '../utils/checkLang';

const CURRENT_PAGE = 'current';

const movieDB = new MovieDB();

// Достаємо проглянуті фільми з локал стореж
const parsedWatchedData = JSON.parse(localStorage.getItem('watched'));

// Достаємо поточну сторінку з локал стореж
const parsedCurrent = JSON.parse(localStorage.getItem(CURRENT_PAGE));

// Якщо поточної сторінки немає в LocalStorage, то по defaultу
// буде Watched
if (!parsedCurrent) {
  refs.watchedBtn.classList.add('header__library-btn--active');
  refs.queueBtn.classList.remove('header__library-btn--active');
  renderWatchedMovies();
}
// Перевіряємо чи поточна зараз сторінка Watched
if (parsedCurrent === 'header__library-btn--watched') {
  refs.watchedBtn.classList.add('header__library-btn--active');
  refs.queueBtn.classList.remove('header__library-btn--active');
  renderWatchedMovies();
}
//
// Слухач на вибране кіно
refs.movies.addEventListener('click', onMovieClick);

// Слухач на кнопку Watched
refs.watchedBtn.addEventListener('click', addClassActive);

// Функція при натисканні на кнопку Watched
async function addClassActive() {
  refs.watchedBtn.classList.add('header__library-btn--active');
  refs.queueBtn.classList.remove('header__library-btn--active');

  const currentPage = refs.watchedBtn.classList;
  const res = currentPage[1];

  localStorage.setItem(CURRENT_PAGE, JSON.stringify(res));

  renderWatchedMovies();
}

// функція рендера контенту на сторінку Watched
async function renderWatchedMovies() {
  if (!parsedWatchedData) {
    return;
  }
  Loading.standard();
  const data = await Promise.all(
    parsedWatchedData.map(async id => {
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
