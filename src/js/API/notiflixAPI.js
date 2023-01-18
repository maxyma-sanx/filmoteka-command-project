import Notiflix from 'notiflix';

// Notify базові налаштування
Notiflix.Notify.init({
  clickToClose: true,
  closeButton: false,
  useIcon: true,
  borderRadius: '10px',
  position: 'right-top',
});

Notiflix.Loading.init({
  zindex: 100000,
});
