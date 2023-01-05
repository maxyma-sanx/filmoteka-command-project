const hide = document.querySelector('.backdrop');
const moadalClose = document.querySelector('.modal__button--close');

moadalClose.addEventListener('click', onCloseModal);
hide.addEventListener('click', onCloseModalBackdrop);
document.addEventListener('keydown', onCloseModalEsc);

function onCloseModal(evt) {
  evt.preventDefault();
  console.log(hide.classList);
  hide.classList.add('is-hidden');
  console.log(hide.classList);
}

function onCloseModalBackdrop(evt) {
  evt.preventDefault();

  if (evt.target !== hide) {
    return;
  }
  hide.classList.add('is-hidden');
  hide.removeEventListener('click', onCloseModalBackdrop);
}

function onCloseModalEsc(evt) {
  evt.preventDefault();

  console.log(evt.key);
  if (evt.key !== 'Escape') {
    return;
  } else {
    hide.classList.add('is-hidden');
  }

  document.removeEventListener('keydown', onCloseModalEsc);
}
