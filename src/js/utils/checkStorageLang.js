// Змінна для перевірки мови у localStorage
let lang = JSON.parse(localStorage.getItem('user-setting'));

// Якщо в localStorage немає данних, встановлюємо значення en-US за замовченням
if (!lang) {
  lang = location.href = `${window.location.pathname}#'en-US'`;
}

export default lang.lang;
