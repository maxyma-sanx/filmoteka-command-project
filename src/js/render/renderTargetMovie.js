import refs from '../refs';

import defaultImg from '../../images/default.jpg';

export default function renderTargetMovie(data, results) {
  const {
    poster_path,
    original_title,
    title,
    vote_average,
    vote_count,
    popularity,
    genres,
    overview,
    id,
  } = data;

  const vote = vote_average.toFixed(1);
  const populary = popularity.toFixed(1);
  const genre = genres.map(obj => obj.name).join(', ');

  // Отримуємо масив данних з localStorage
  const watchedData = JSON.parse(localStorage.getItem('watched')) || [];
  const queueData = JSON.parse(localStorage.getItem('queue')) || [];

  // true або false для правильного відображення текстового контенту для кнопки
  const isWatchedData = watchedData.includes(id.toString());
  const isQueueData = queueData.includes(id.toString());

  const poster = `https://image.tmdb.org/t/p/w500/${poster_path}`;
  const posterPlaceholder = defaultImg;

  const markUpModal = `
        <div class="modal__img-container">
          <img class="modal__image" src='${
          poster_path ? poster : posterPlaceholder
          }' alt="${title}" />
          <button class="modal__trailer-btn" type="button">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 1024 1024">
            <title>youtube</title>
            <g id="icomoon-ignore">
            </g>
            <path fill="#f00" d="M1002.453 264.747c-12.365-43.307-45.781-76.722-88.183-88.866l-0.905-0.222c-79.787-21.376-400.896-21.376-400.896-21.376s-320.299-0.427-400.896 21.376c-43.307 12.365-76.722 45.781-88.866 88.183l-0.222 0.905c-14.173 72.978-22.281 156.904-22.281 242.723 0 1.743 0.003 3.484 0.010 5.225l-0.001-0.268c-0.004 1.198-0.006 2.617-0.006 4.035 0 85.813 8.107 169.732 23.598 251.033l-1.32-8.327c12.365 43.307 45.781 76.722 88.183 88.866l0.905 0.222c79.701 21.419 400.896 21.419 400.896 21.419s320.256 0 400.896-21.419c43.307-12.365 76.722-45.781 88.866-88.183l0.222-0.905c13.59-71.472 21.364-153.686 21.364-237.715 0-3.173-0.011-6.344-0.033-9.513l0.003 0.486c0.024-2.951 0.037-6.439 0.037-9.929 0-84.041-7.776-166.267-22.648-245.996l1.278 8.245zM409.984 665.643v-306.901l267.264 153.685z"></path>
            </svg>
          </button>  
        </div>
        
        <div class="modal__wrapper">
            <h2 class="modal__title">${title || original_title}</h2>
            <ul class="modal__list">
            <li class="modal__item">
                <p class="modal__text">Vote / Votes</p>
                <div class="modal__vote-container">
                <span class="modal__info modal__info--accent">${
                  vote || 'Not vodet yet'
                }</span>
                <span>/</span>
                <span class="modal__info modal__info--noaccent">${
                  vote_count || 'Not counted yet'
                }</span>
                </div>
            </li>

            <li class="modal__item">
                <p class="modal__text">Popularity</p>
                <span class="modal__info">${populary || 'No popularity'}</span>
            </li>

            <li class="modal__item">
                <p class="modal__text">Original Title</p>
                <span class="modal__info">${title || original_title}</span>
            </li>

            <li class="modal__item">
                <p class="modal__text">Genre</p>
                <span class="modal__info">${
                  genres.length !== 0 ? genre : 'Genre: unknown'
                }</span>
            </li>
            </ul>

            <div class="modal__desc">
            <p class="modal__desc-title">About</p>
            <p class="modal__desc-text">${overview || 'No description'}</p>
            <p class="modal__movie-id is-hidden">${id}</p>

            <div class="modal__buttons-container">
              <button type="button" class="modal__btn" id="addToWatchedBtn">${
                isWatchedData ? 'Remove from watched' : 'Add to watched'
              }</button>
              <button type="button" class="modal__btn" id="addToQueueBtn">${
                isQueueData ? 'Remove from queue' : 'Add to queue'
              }</button>
                   
            </div>
            </div>
        </div>`;
  refs.modalMovie.innerHTML = markUpModal;
}
