import refs from '../refs';

// Закриття модалки по бекдропу
function onCloseModal() {
  refs.backdrop.classList.add('is-hidden');
  removeEventListener();
}

// Закриття модалки ???
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
