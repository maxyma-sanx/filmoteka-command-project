import refs from '../refs';

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
}

function onCloseModalEsc(e) {
  if (e.key !== 'Escape') {
    return;
  } else {
    refs.backdrop.classList.add('is-hidden');
  }
}

export { onCloseModal, onCloseModalBackdrop, onCloseModalEsc };

// function onModalClose() {
//   refs.modalClose.addEventListener('click', onCrossModal);
//   refs.backdrop.addEventListener('click', onBackdropClose);
//   document.addEventListener('keydown', onEscClose);

//   function onCrossModal() {
//     refs.backdrop.classList.add('is-hidden');
//   }

//   function onBackdropClose(e) {
//     if (e.target !== refs.backdrop) {
//       return;
//     }

//     refs.backdrop.classList.add('is-hidden');
//   }

//   function onEscClose(e) {
//     if (e.key !== 'Escape') {
//       return;
//     } else {
//       refs.backdrop.classList.add('is-hidden');
//     }
//   }

//   refs.modalClose.removeEventListener('click', onCrossModal);
//   refs.backdrop.removeEventListener('click', onBackdropClose);
//   document.removeEventListener('keydown', onEscClose);
// }

export { onModalClose };
