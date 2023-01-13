const btnUp = document.querySelector('.btn-up');

window.addEventListener('scroll', trackScroll);

// Функція що додає кнопку btnUp після зміщення від початкового екрану пошуку
function trackScroll() {
  if (window.pageYOffset > 300) {
    btnUp.classList.add('active');
  } else {
    btnUp.classList.remove('active');
  }
}

// Функція, яка при кліку на кнопку Up повертає користувача на верх сторінки та ховає кнопку Up
btnUp.addEventListener('click', сlickToUpBtn);

function сlickToUpBtn() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
