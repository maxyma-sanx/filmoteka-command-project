import refs from '../refs';

import defaultImg from '../../images/default.jpg';

import isUkraineLang from '../utils/checkUrkLang';

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
          }' alt="${title}" width="264" height="374"/>
          <button class="modal__trailer-btn" type="button">
            <svg width="100" height="100" viewBox="-35.2 -41.333 305.067 248">
              <path fill="red" d="M229.763 25.817c-2.699-10.162-10.65-18.165-20.748-20.881C190.716 0 117.333 0 117.333 0S43.951 0 25.651 4.936C15.553 7.652 7.6 15.655 4.903 25.817 0 44.236 0 82.667 0 82.667s0 38.429 4.903 56.85C7.6 149.68 15.553 157.681 25.65 160.4c18.3 4.934 91.682 4.934 91.682 4.934s73.383 0 91.682-4.934c10.098-2.718 18.049-10.72 20.748-20.882 4.904-18.421 4.904-56.85 4.904-56.85s0-38.431-4.904-56.85"/>
              <path fill="#fff" d="m93.333 117.559 61.333-34.89-61.333-34.894z"/>
            </svg>
          </button>  
        </div>
        
        <div class="modal__wrapper">
            <h2 class="modal__title">${
              title || original_title || 'Information is not available'
            }</h2>
            <ul class="modal__list">
            <li class="modal__item">
                <p class="modal__text lang-rating">${
                  isUkraineLang ? 'Рейтинг / Голосів' : 'Vote / Votes'
                }</p>
                <div class="modal__vote-container">
                <span class="modal__info modal__info--accent">${
                  vote || 'Information is not available'
                }</span>
                <span>/</span>
                <span class="modal__info modal__info--noaccent">${
                  vote_count ||
                  `${
                    isUkraineLang
                      ? 'Інформація не доступна'
                      : 'Information is not available'
                  }`
                }</span>
                </div>
            </li>

            <li class="modal__item">
                <p class="modal__text lang-popularity">${
                  isUkraineLang ? 'Популярність' : 'Popularity'
                }</p>
                <span class="modal__info">${
                  populary ||
                  `${
                    isUkraineLang
                      ? 'Інформація не доступна'
                      : 'Information is not available'
                  }`
                }</span>
            </li>

            <li class="modal__item">
                <p class="modal__text lang-original">${
                  isUkraineLang ? 'Оригінальна назва' : 'Original Title'
                }</p>
                <span class="modal__info">${
                  original_title ||
                  title ||
                  `${
                    isUkraineLang
                      ? 'Інформація не доступна'
                      : 'Information is not available'
                  }`
                }</span>
            </li>

            <li class="modal__item">
                <p class="modal__text lang-genre">${
                  isUkraineLang ? 'Жанр' : 'Genre'
                }</p>
                <span class="modal__info">${
                  genres.length !== 0
                    ? genre
                    : `${
                        isUkraineLang
                          ? 'Інформація не доступна'
                          : 'Information is not available'
                      }`
                }</span>
            </li>
            </ul>

            <div class="modal__desc">
            <p class="modal__desc-title">${isUkraineLang ? 'Опис' : 'About'}</p>
            <p class="modal__desc-text">${
              overview ||
              `${
                isUkraineLang
                  ? 'Інформація не доступна'
                  : 'Information is not available'
              }`
            }</p>
            <p class="modal__movie-id is-hidden">${id}</p>

            <div class="modal__buttons-container">
              <button type="button" class="modal__btn" id="addToWatchedBtn">${
                isWatchedData
                  ? `${
                      isUkraineLang
                        ? 'Видалити з перегляду'
                        : 'Remove from watched'
                    }`
                  : `${
                      isUkraineLang ? 'Додати до перегляду' : 'Add to watched'
                    }`
              }</button>
              <button type="button" class="modal__btn" id="addToQueueBtn">${
                isQueueData
                  ? `${
                      isUkraineLang ? 'Видалити з черги' : 'Remove from queue'
                    }`
                  : `${isUkraineLang ? 'Додати до черги' : 'Add to queue'}`
              }</button>
                   
            </div>
            </div>
        </div>`;

  refs.modalMovie.innerHTML = markUpModal;
}
