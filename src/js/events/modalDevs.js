import refs from '../refs';

const backdropDevs = document.querySelector('.backdrop_dev');
const clsBtnModalDev = document.querySelector('.modal_dev_btn--close');
const openBtnModalDev = document.querySelector('.footer__link');

clsBtnModalDev.addEventListener('click', onCloseModalDev);
function onCloseModalDev() {
  console.log('closed modal_dev');
  backdropDevs.classList.add('is-hidden');
  // removeEventListener();
}

openBtnModalDev.addEventListener('click', onOpenModalDev);
function onOpenModalDev() {
  // evt.preventDefault();
  console.log('opened modal_dev');
  backdropDevs.classList.remove('is-hidden');
  // removeEventListener();
}
