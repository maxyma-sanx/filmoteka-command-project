import refs from '../refs';

export default function modalClose() {
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
    if (refs.backdrop.classList.contains('is-hidden')) {
      refs.backdrop.removeEventListener('click', onCloseModalBackdrop);
    } else {
      return;
    }
  }

  function onCloseModalEsc(e) {
    console.log(e.key);
    if (e.key !== 'Escape') {
      return;
    } else {
      refs.backdrop.classList.add('is-hidden');
    }
    if (refs.backdrop.classList.contains('is-hidden')) {
      document.removeEventListener('keydown', onCloseModalEsc);
    } else {
      return;
    }
  }
}

export { modalClose };
