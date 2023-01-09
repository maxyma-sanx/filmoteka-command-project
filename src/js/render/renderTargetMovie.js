import refs from '../refs';

export default function renderTargetMovie({
  poster_path,
  original_title,
  title,
  name,
  vote_average,
  vote_count,
  popularity,
  genres,
  overview,
  id,
}) {
  const vote = vote_average.toFixed(1);
  const populary = popularity.toFixed(1);
  const genre = genres.map(obj => obj.name).join(', ');

  const watchedData = JSON.parse(localStorage.getItem('watched')) || [];
  const queueData = JSON.parse(localStorage.getItem('queue')) || [];

  const isWatchedData = watchedData.includes(id.toString());
  const isQueueData = queueData.includes(id.toString());

  const markUpModal = `
        <img class="modal__image" src=https://image.tmdb.org/t/p/w500/${poster_path} alt="Film Image" />

        <div class="modal__wrapper">
            <h2 class="modal__title">${title || original_title || name}</h2>
            <ul class="modal__list">
            <li class="modal__item">
                <p class="modal__text">Vote / Votes</p>
                <div class="modal__vote-container">
                <span class="modal__info modal__info--accent">${vote}</span>
                <span>/</span>
                <span class="modal__info modal__info--noaccent">${vote_count}</span>
                </div>
            </li>

            <li class="modal__item">
                <p class="modal__text">Popularity</p>
                <span class="modal__info">${populary}</span>
            </li>

            <li class="modal__item">
                <p class="modal__text">Original Title</p>
                <span class="modal__info">${
                  title || original_title || name
                }</span>
            </li>

            <li class="modal__item">
                <p class="modal__text">Genre</p>
                <span class="modal__info">${genre}</span>
            </li>
            </ul>

            <div class="modal__desc">
            <p class="modal__desc-title">About</p>
            <p class="modal__desc-text">${overview}</p>
            <p class="modal__movie-id is-hidden">${id}</p>

            <div class="modal__buttons-container">
              <button type="button" class="modal__btn" id="addToWatchedBtn">
              ${isWatchedData ? 'Remove from watched' : 'Add to watched'}
              </button>
              <button type="button" class="modal__btn" id="addToQueueBtn">
              ${isQueueData ? 'Remove from queue' : 'Add to queue'}
              </button>
            </div>
            </div>
        </div>`;
  refs.modalMovie.innerHTML = markUpModal;
}
