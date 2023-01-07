import { refs } from '../refs';
import MovieDB from '../API/fetchMovieAPI';

refs.movies.addEventListener('click', onMovieClick);

async function onMovieClick(e) {
  e.preventDefault();
  if (e.target === e.currentTarget) return;

  const film = await movieDB.getMovie(e.target.parentNode.dataset.id);

  const modalMarkUp = await renderTargetMovie(film);
}

const movieDB = new MovieDB();

async function getMovie() {
  try {
    const movie = await movieDB.fetchMovieDetails(id);
  } catch (error) {
    console.log(error);
  }
}

export default async function renderTargetMovie({
  poster_path,
  original_title,
  title,
  name,
  vote_average,
  vote_count,
  popularity,
  genres,
  overview,
}) {
  const vote = vote_average.toFixed(1);
  const populary = popularity.toFixed(1);
  const genre = genres.map(obj => obj.name).join(', ');

  const markUpModal = `<div class="modal__card">
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

            <div class="modal__buttons-container">
                <button type="button" class="modal__btn">add to Watched</button>
                <button type="button" class="modal__btn">add to queue</button>
            </div>
            </div>
        </div>
        </div>`;
  refs.modalMovie.innerHTML = markUpModal;
}
