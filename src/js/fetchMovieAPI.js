import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org';

export default class MovieDB {
  #searchQuery = 'avatar';
  #page = 1;
  #params = {
    params: {
      api_key: 'b5dbc40d665affe8ed0bac71106b3fa8',
      page: this.#page,
    },
  };

  async fetchPopularMovie() {
    const { data } = await axios.get(`3/trending/movie/day?`, this.#params);
    return data;
  }

  async fetchSearchMovie() {
    const { data } = await axios.get(
      `3/search/movie/?query=${this.#searchQuery}`,
      this.#params
    );
    return data;
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
