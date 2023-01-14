import Notiflix from 'notiflix';

// Notify базові налаштування
Notiflix.Notify.init({
  clickToClose: true,
  closeButton: false,
  useIcon: true,
  borderRadius: '10px',
  position: 'right-top',
  info: {
    background: '#ff6b08',
    textColor: '#fff',
    childClassName: 'notiflix-notify-info',
    notiflixIconColor: 'rgba(0,0,0,0.2)',
    fontAwesomeClassName: 'fas fa-info-circle',
    fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
    backOverlayColor: 'rgba(38,192,211,0.2)',
  },
});
