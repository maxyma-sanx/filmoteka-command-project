import refs from '../refs';
import getMovie from '../render/renderTargetMovie';
  

refs.modalClose.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onCloseModalBackdrop);
document.addEventListener('keydown', onCloseModalEsc);

function onCloseModal() {
  refs.backdrop.classList.add('is-hidden');
}

function onCloseModalBackdrop(e) {
  if (e.target !== refs.backdrop) {
    return;
  }

  refs.backdrop.classList.add('is-hidden');
  refs.backdrop.removeEventListener('click', onCloseModalBackdrop);
}

function onCloseModalEsc(e) {
  if (e.key !== 'Escape') {
    return;
  } else {
    refs.backdrop.classList.add('is-hidden');
  }

  document.removeEventListener('keydown', onCloseModalEsc);
}

export { onCloseModal, onCloseModalBackdrop, onCloseModalEsc };
