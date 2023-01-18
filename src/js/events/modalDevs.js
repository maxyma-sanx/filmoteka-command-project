import refs from '../refs';

// Відкриття модалки по кнопці "GoIT Students"
refs.openBtnModalDev.addEventListener('click', onOpenModalDev);

function onOpenModalDev() {
  refs.backdropDevs.classList.remove('is-hidden');
  // Блокування скролу по боді
  refs.body.classList.add('disable-scroll');

  // Додавання слухачів
  refs.clsBtnModalDev.addEventListener('click', onCloseModalDev);
  refs.backdropDevs.addEventListener('click', onCloseModalDevBackdrop);
  document.addEventListener('keydown', onCloseModaDevlEsc);
}

// Закриття модалки по кнопці 'close'
function onCloseModalDev() {
  // console.log('кнопка close');
  refs.backdropDevs.classList.add('is-hidden');
  // Зняття слухача кнопки 'close'
  refs.clsBtnModalDev.removeEventListener('click', onCloseModalDev);
  refs.body.classList.remove('disable-scroll');
}

// Закриття модалки по 'backdrop_dev'
function onCloseModalDevBackdrop(e) {
  if (e.target === refs.backdropDevs) {
    // console.log('backdrop_dev');
    refs.backdropDevs.classList.add('is-hidden');
    // Зняття слухача по 'backdrop_dev'
    refs.backdropDevs.removeEventListener('click', onCloseModalDevBackdrop);
    refs.body.classList.remove('disable-scroll');
  }
}

// Закриття модалки по 'Esc'
function onCloseModaDevlEsc(e) {
  // console.log('Escape');
  if (e.key !== 'Escape') {
    return;
  } else {
    refs.backdropDevs.classList.add('is-hidden');
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
