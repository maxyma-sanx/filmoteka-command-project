import Notiflix from 'notiflix';

// Notify базові налаштування
Notiflix.Notify.init({
  clickToClose: true,
  closeButton: true,
  useIcon: true,
});

// Report
Notiflix.Report.init({});

// Confirm
Notiflix.Confirm.init({});

// Loading
Notiflix.Loading.init({});

// Block
Notiflix.Block.init({});
