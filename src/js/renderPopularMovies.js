import {movies} from "./refs";
export default function renderPopularMovies(data) {
    const films = data.map(({
        poster_path,
        release_date,
        original_title,
        genre_ids,


    }) => {
        return `<li class="movies__item">
        <a href="">
          <img src="${poster_path}" alt="${original_title}" />
          <div class="movies__info">
            <h3 class="movies__title">${original_title}</h3>
            <p class="movies__text">${Object.values(genre_ids)} | ${new Date(release_date).getFullYear()}</p>
          </div>
        </a>
      </li>`
    }).join('');
    movies.insertAdjacentHTML('beforeend', films);
}
