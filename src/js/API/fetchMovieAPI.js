import axios from 'axios';

// Стартові налаштування axios
const API_KEY = 'b5dbc40d665affe8ed0bac71106b3fa8';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export default class MovieDB {
  #searchQuery = '';
  #page = 1;

  // Параметри запиту
  #moviesParams = {
    params: {
      api_key: API_KEY,
    },
  };

  // Запит на отримання фільмів по популярності
  async fetchPopularMovie(lang) {
    const url = `trending/movie/day?page=${this.#page}&language=${lang}`;

    const { data } = await axios.get(url, this.#moviesParams);

    return data;
  }

  // Запит на отримання фільмів по запиту (пошуку)
  async fetchSearchMovie(lang) {
    const url = `search/movie/?query=${this.#searchQuery}&page=${
      this.#page
    }&language=${lang}`;

    const { data } = await axios.get(url, this.#moviesParams);

    return data;
  }

  // Запит на отримання жанрів фільмів
  async fetchMoviesGenres(lang) {
    const {
      data: { genres },
    } = await axios.get(
      `genre/movie/list?language=${lang}`,
      this.#moviesParams
    );

    return genres;
  }

  // Запит на отримання фільмів по жанрам
  async fetchMoviesDiscover(param, type, lang) {
    const { data } = await axios.get(
      `discover/movie?${param}=${type}&page=${this.#page}&language=${lang}`,
      this.#moviesParams
    );

    return data;
  }

  // Запит на отримання детальної інформації про один фільм по id
  async fetchMovieDetails(id, lang) {
    const url = `movie/${id}?language=${lang}`;

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
