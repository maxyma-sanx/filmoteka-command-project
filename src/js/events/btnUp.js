import refs from '../refs';

window.addEventListener('scroll', trackScroll);

// Функція що додає кнопку btnUp після зміщення від початкового екрану пошуку
function trackScroll() {
  if (window.pageYOffset > 300) {
    refs.btnUp.classList.add('active');
  } else {
    refs.btnUp.classList.remove('active');
  }
}

// Функція, яка при кліку на кнопку Up повертає користувача на верх сторінки та ховає кнопку Up
refs.btnUp.addEventListener('click', сlickToUpBtn);

function сlickToUpBtn() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
