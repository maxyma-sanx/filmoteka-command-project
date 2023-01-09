import refs from '../refs';

export default function modalClose() {
  refs.modalClose.addEventListener('click', onCloseModal);
  refs.backdrop.addEventListener('click', onCloseModalBackdrop);
  document.addEventListener('keydown', onCloseModalEsc);

  function onCloseModal() {
    refs.backdrop.classList.add('is-hidden');
    removeEventListener();
  }

  function onCloseModalBackdrop(e) {
    if (e.target === refs.backdrop) {
      refs.backdrop.classList.add('is-hidden');
    }
    removeEventListener();
  }

  function onCloseModalEsc(e) {
    console.log(e.key);
    if (e.key !== 'Escape') {
      return;
    } else {
      refs.backdrop.classList.add('is-hidden');
    }
    removeEventListener();
  }

  function removeEventListener() {
    refs.backdrop.classList.contains('is-hidden');
    refs.modalClose.removeEventListener('click', onCloseModal);
    refs.backdrop.removeEventListener('click', onCloseModalBackdrop);
    document.removeEventListener('keydown', onCloseModalEsc);
  }
}

export { modalClose };
