import refs from '../refs';

const backdropDevs = document.querySelector('.backdrop_dev');
const clsBtnModalDev = document.querySelector('.modal_dev_btn--close');
const openBtnModalDev = document.querySelector('.footer__link');

// Відкриття модалки по кнопці "GoIT Students"
openBtnModalDev.addEventListener('click', onOpenModalDev);
function onOpenModalDev() {
  backdropDevs.classList.remove('is-hidden');
  // Блокування скролу по боді
  refs.body.classList.add('disable-scroll');

  // Додавання слухачів
  clsBtnModalDev.addEventListener('click', onCloseModalDev);
  backdropDevs.addEventListener('click', onCloseModalDevBackdrop);
  document.addEventListener('keydown', onCloseModaDevlEsc);
}

// Закриття модалки по кнопці 'close'
function onCloseModalDev() {
  // console.log('кнопка close');
  backdropDevs.classList.add('is-hidden');
  // Зняття слухача кнопки 'close'
  clsBtnModalDev.removeEventListener('click', onCloseModalDev);
  refs.body.classList.remove('disable-scroll');
}

// Закриття модалки по 'backdrop_dev'
function onCloseModalDevBackdrop(e) {
  if (e.target === backdropDevs) {
    // console.log('backdrop_dev');
    backdropDevs.classList.add('is-hidden');
    // Зняття слухача по 'backdrop_dev'
    backdropDevs.removeEventListener('click', onCloseModalDevBackdrop);
    refs.body.classList.remove('disable-scroll');
  }
}

// Закриття модалки по 'Esc'
function onCloseModaDevlEsc(e) {
  // console.log('Escape');
  if (e.key !== 'Escape') {
    return;
  } else {
    backdropDevs.classList.add('is-hidden');
  }

  // Зняття слухача кнопки 'Esc'
  document.removeEventListener('keydown', onCloseModaDevlEsc);
  refs.body.classList.remove('disable-scroll');
}

export {
  onCloseModalDev,
  onCloseModalDevBackdrop,
  onOpenModalDev,
  onCloseModaDevlEsc,
};
