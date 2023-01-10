import refs from '../refs';

// Закриття модалки по кнопці close
function onCloseModal() {
  refs.backdrop.classList.add('is-hidden');

  removeEventListener();
}

// Закриття модалки по бекдропу
function onCloseModalBackdrop(e) {
  if (e.target === refs.backdrop) {
    refs.backdrop.classList.add('is-hidden');
  }
  removeEventListener();
}

// Закриття модалки по esc
function onCloseModalEsc(e) {
  if (e.key !== 'Escape') {
    return;
  } else {
    refs.backdrop.classList.add('is-hidden');
  }
  removeEventListener();
}

// Зняття слухачів
function removeEventListener() {
  if (refs.backdrop.classList.contains('is-hidden')) {
    refs.modalClose.removeEventListener('click', onCloseModal);
    refs.backdrop.removeEventListener('click', onCloseModalBackdrop);
    document.removeEventListener('keydown', onCloseModalEsc);
    refs.body.classList.remove('disable-scroll');
  } else {
    return;
  }
}

export {
  onCloseModal,
  onCloseModalBackdrop,
  onCloseModalEsc,
  removeEventListener,
};
