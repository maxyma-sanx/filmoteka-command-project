import refs from '../refs';

// Отримуємо поточну тему з localStorage
const currentTheme = localStorage.getItem('theme');

// Слухач подій при зміні прапорця
refs.themeSwitcher.addEventListener('change', switchTheme, false);

// Перевірка, яка тема зараз актуальна, і її активація
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
}

if (currentTheme === 'dark') {
  refs.themeSwitcher.checked = true;
} else {
  document.documentElement.setAttribute('data-theme', 'light');
  localStorage.setItem('theme', 'light');
}

// Функція перемикання між темами
function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }
}
