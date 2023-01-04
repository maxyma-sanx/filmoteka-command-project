const hide = document.querySelector('.backdrop');
const moadalClose = document.querySelector('.modal__button--close');

moadalClose.addEventListener('click', onCloseModal);

function onCloseModal(evt) {
  evt.preventDefault();

  hide.classList.add('is-hidden');
}
