import refs from '../refs';

import langs from '../utils/language-map';

const languageSelect = refs.languageSelectBtn;
const allLang = ['en-US', 'ru-RU', 'uk-UA'];

function getStorageSetting() {
  const saveData = localStorage.getItem('user-setting');

  try {
    if (saveData) {
      const parsedData = JSON.parse(saveData);
      return parsedData;
    }

    return {};
  } catch (error) {
    console.log(error);
  }
}

function setStorageSetting(key, value) {
  const savedData = getStorageSetting();
  let newData = {};

  if (savedData) {
    newData = { ...savedData, [key]: value };
  } else {
    newData = { [key]: value };
  }

  const dataJson = JSON.stringify(newData);

  localStorage.setItem('user-setting', dataJson);
}

languageSelect.addEventListener('change', changeURLLanguage);

function changeURLLanguage(e) {
  let lang = e.currentTarget.value;
  location.href = `${window.location.pathname}#${lang}`;
  setStorageSetting('lang', lang);

  location.reload();
}

changeLanguage();

function changeLanguage() {
  const saveLang = getStorageSetting();

  if (saveLang.lang) {
    location.href = `${window.location.pathname}#${saveLang.lang}`;
  }

  let hash = window.location.hash.substring(1);

  if (!allLang.includes(hash)) {
    location.href = `${window.location.pathname}#en-US`;
    location.reload();
  }

  languageSelect.value = hash;
  setStorageSetting('lang', hash);

  const keys = Object.keys(langs);

  for (let key of keys) {
    const element = document.querySelector(`.lang-${key}`);
    const language = langs[key][hash];
    if (element && language) {
      element.innerHTML = language;
    }
  }
}
