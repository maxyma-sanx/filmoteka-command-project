export default {
  movies: document.querySelector('.movies__list'),
  targetMovie: document.querySelector('.movies__item'),
  //! modalMovie: document.querySelector('.modal'),
  paginationLeft: document.querySelector("[data-action='left']"),
  paginationRight: document.querySelector("[data-action='right']"),
  searchForm: document.querySelector('.header__form'),
  watchedBtn: document.querySelector('.header__library-btn--watched'),
  queueBtn: document.querySelector('.header__library-btn--queue'),
  warningText: document.querySelector('.header__warning-search'),
  backdrop: document.querySelector('.backdrop'),
  modalClose: document.querySelector('.modal__button--close'),
};
