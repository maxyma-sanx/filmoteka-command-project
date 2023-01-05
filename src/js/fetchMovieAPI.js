import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export default class MovieDB {
  #searchQuery = '';
  #page = 1;

  #popularMoviesParams = {
    params: {
      api_key: 'b5dbc40d665affe8ed0bac71106b3fa8',
      page: this.#page,
    },
  };

  #searchMoviesParams = {
    params: {
      api_key: 'b5dbc40d665affe8ed0bac71106b3fa8',
      page: this.#page,
      query: this.#searchQuery,
    },
  };

  #genresMoviesParams = {
    params: {
      api_key: 'b5dbc40d665affe8ed0bac71106b3fa8',
    },
  };

  async fetchPopularMovie() {
    const { data } = await axios.get(
      `trending/movie/day?`,
      this.#popularMoviesParams
    );
    return data;
  }

  async fetchSearchMovie() {
    const { data } = await axios.get(
      `search/movie/?`,
      this.#searchMoviesParams
    );
    return data;
  }

  async fetchMoviesGenres() {
    const {
      data: { genres },
    } = await axios.get(`genre/movie/list?`, this.#genresMoviesParams);

    return genres;
  }

  get query() {
    return this.#searchQuery;
  }

  set query(newQuery) {
    this.#searchQuery = newQuery;
  }

  incrementPage() {
    this.#page += 1;
  }

  decrementPage() {
    this.#page -= 1;
  }

  resetPage() {
    this.#page = 1;
  }

  setPage(page) {
    this.#page = page;
  }
}
