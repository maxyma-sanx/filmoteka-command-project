import refs from '../refs';

import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import tuiPaginationAPI from '../API/tuiPaginationAPI';

export default function createPagination(totalResults, clb) {
  // Перевірка по точці перелому
  const mediaQuery = window.matchMedia('(max-width: 768px)');

  // Базові налаштування пагігнації
  const options = {
    totalItems: totalResults,
    itemsPerPage: 20,
    visiblePages: 5,
    usageStatistics: false,
  };

  if (mediaQuery.matches) {
    options.visiblePages = 3;
  }

  const pagination = new Pagination(refs.pagination, options);

  pagination.on('afterMove', clb);
}
