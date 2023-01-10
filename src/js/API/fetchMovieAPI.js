import axios from 'axios';

// Стартові налаштування axios
const API_KEY = 'b5dbc40d665affe8ed0bac71106b3fa8';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export default class MovieDB {
  #searchQuery = '';
  #page = 1;

  // Параметри запиту, в майбутньому може змінитись
  #moviesParams = {
    params: {
      api_key: API_KEY,
    },
  };

  // Запит на отримання фільмів по популярності
  async fetchPopularMovie() {
    const url = `trending/movie/day?page=${this.#page}`;

    const { data } = await axios.get(url, this.#moviesParams);

    return data;
  }

  // Запит на отримання фільмів по запиту (пошуку)
  async fetchSearchMovie() {
    const url = `search/movie/?query=${this.#searchQuery}&page=${this.#page}`;

    const { data } = await axios.get(url, this.#moviesParams);

    return data;
  }

  // Запит на отримання жанрів фільмів
  async fetchMoviesGenres() {
    const {
      data: { genres },
    } = await axios.get(`genre/movie/list?`, this.#moviesParams);

    return genres;
  }

  // Запит на отримання детальної інформації про один фільм по id
  async fetchMovieDetails(id) {
    const url = `movie/${id}?`;

    const { data } = await axios.get(url, this.#moviesParams);

    return data;
  }

  // Запит на отримання трейлеру фільма по id
  async fetchMovieTrailer(id) {
    const url = `movie/${id}/videos?`;

    const { data } = await axios.get(url, this.#moviesParams);

    return data;
  }

  get query() {
    return this.#searchQuery;
  }

  set query(newQuery) {
    this.#searchQuery = newQuery;
  }

  get page() {
    return this.#page;
  }

  set page(newPage) {
    this.#page = newPage;
  }
}
