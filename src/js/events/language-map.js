const langs = {
  home: {
    en: 'home',
    ru: 'главная',
    uk: 'головна',
  },

  library: {
    en: 'my library',
    ru: 'библиотека',
    uk: 'бібліотека',
  },

  watched: {
    en: 'watched',
    ru: 'просмотренные',
    uk: 'переглянуті',
  },

  queue: {
    en: 'queue',
    ru: 'очередь',
    uk: 'черга',
  },

  polyci: {
    en: 'All Rights Reserved',
    ru: 'Все права защищены',
    uk: 'Всі права захищені',
  },

  developer: {
    en: 'Developed with',
    ru: 'Разработано',
    uk: 'Розроблено',
  },

  by: {
    en: 'by',
    ru: ' ',
    uk: ' ',
  },

  students: {
    en: 'GoIT Students',
    ru: 'Студентами GoIT',
    uk: 'Студентами GoIT',
  },

  rating: {
    en: 'Vote / Votes',
    ru: 'Рейтинг / Голосов',
    uk: 'Рейтинг / Голосів',
  },

  popularity: {
    en: 'Popularity',
    ru: 'Популярность',
    uk: 'Популярність',
  },

  original: {
    en: 'Original Title',
    ru: 'Оригинальное название',
    uk: 'Оригінальна назва',
  },

  genre: {
    en: 'Genre',
    ru: 'Жанр',
    uk: 'Жанр',
  },

  other: {
    en: 'Other',
    ru: 'Другое',
    uk: 'Інше',
  },

  about: {
    en: 'About',
    ru: 'Описание',
    uk: 'Опис',
  },

  addwatched: {
    en: 'add to Watched',
    ru: 'Добавить в просмотренные',
    uk: 'Додати до переглянутих',
  },
  delwatched: {
    en: 'Remove from watched',
    ru: 'Удалить из просмотренных',
    uk: 'Видалити з переглянутих',
  },
  addqueue: {
    en: 'add to queue',
    ru: 'добавить в очередь',
    uk: 'додати до черги',
  },
  delqueue: {
    en: 'Remove from queue',
    ru: 'Удалить из очереди',
    uk: 'Видалити з черги',
  },

  emptySearch: {
    en: 'Enter the name of the movie, for a correct search!',
    ru: 'Введите название фильма, для корректного поиска!',
    uk: 'Введіть назву фільму, для правильного пошуку!',
  },

  badQuery: {
    en: 'Nothing is found. Wrong query.',
    ru: 'Ничего не найдено. Неверный запрос.',
    uk: 'Нічого не знайдено. Неправильний запит.',
  },
  searchplaceholder: {
    en: 'Movie search',
    ru: 'Поиск фильмов',
    uk: 'Пошук фільмів',
  },

  notMovie: {
    en: 'Oops, movie not found. Please, choose another movie',
    ru: 'Упс, фильм не найден. Пожалуйста, выберите другой фильм',
    uk: 'На жаль, фільм не знайдено. Будь ласка, виберіть інший фільм',
  },

  group: {
    en: 'Group',
    ru: 'Группа',
    uk: 'Група',
  },
  andrii: {
    en: 'Mazka Andrii',
    ru: 'Мазка Андрей',
    uk: 'Мазка Андрій',
  },
  aleksandr: {
    en: '',
    ru: '',
    uk: '',
  },
  alex: {
    en: '',
    ru: '',
    uk: '',
  },
  aleksey: {
    en: '',
    ru: '',
    uk: '',
  },
  vitaliy: {
    en: '',
    ru: '',
    uk: '',
  },
  vadim: {
    en: '',
    ru: '',
    uk: '',
  },
  vladislav: {
    en: '',
    ru: '',
    uk: '',
  },
  denis: {
    en: '',
    ru: '',
    uk: '',
  },
  dmitriy: {
    en: '',
    ru: '',
    uk: '',
  },
  lesya: {
    en: '',
    ru: '',
    uk: '',
  },
  maksim: {
    en: '',
    ru: '',
    uk: '',
  },

  lead: {
    en: 'Team Lead',
    ru: 'Тимлид',
    uk: 'Тімлід',
  },

  scrum: {
    en: 'Scrum Master',
    ru: 'Скрам мастер',
    uk: 'Скрам майстер',
  },

  dev1: {
    en: 'Developer',
    ru: 'Разработчик',
    uk: 'Розробник',
  },
  dev2: {
    en: 'Developer',
    ru: 'Разработчик',
    uk: 'Розробник',
  },
  dev3: {
    en: 'Developer',
    ru: 'Разработчик',
    uk: 'Розробник',
  },
  dev4: {
    en: 'Developer',
    ru: 'Разработчик',
    uk: 'Розробник',
  },
  dev5: {
    en: 'Developer',
    ru: 'Разработчик',
    uk: 'Розробник',
  },
  dev6: {
    en: 'Developer',
    ru: 'Разработчик',
    uk: 'Розробник',
  },
  dev7: {
    en: 'Developer',
    ru: 'Разработчик',
    uk: 'Розробник',
  },
  dev8: {
    en: 'Developer',
    ru: 'Разработчик',
    uk: 'Розробник',
  },
  dev9: {
    en: 'Developer',
    ru: 'Разработчик',
    uk: 'Розробник',
  },
  trday: { en: 'Day', ru: 'День', uk: 'День' },
  trweek: { en: 'Week', ru: 'Неделя', uk: 'Тиждень' },
  emptyWatched1: {
    en: "You don't have any movies you've watched.",
    ru: 'У вас еще нет фильмов которые вы смотрели.',
    uk: 'Ви ще не маєте фільмів які ви дивилися.',
  },
  emptyWatched2: {
    en: 'Add the first one.',
    ru: 'Добавьте свой первый фильм.',
    uk: 'Додайте свій перший фільм.',
  },
  emptyQueue1: {
    en: "You don't have any movies in the queue.",
    ru: 'У вас еще нет фильмов в очереди для просмотра.',
    uk: 'У вас ще немає фільмів у черзі для перегляду.',
  },
  emptyQueue2: {
    en: 'Add the first one.',
    ru: 'Добавьте свой первый фильм.',
    uk: 'Додайте свій перший фільм.',
  },

  trailer: {
    en: 'Sorry, trailer not found',
    ru: 'Извините, трейлер не найден',
    uk: 'Вибачте, трейлер не знайдено',
  },

  detailsNotFound: {
    en: 'No information',
    ru: 'Нету информации',
    uk: 'Інформації немає',
  },

  logOut: {
    en: 'Log out',
    ru: 'Выйти',
    uk: 'Вийти',
  },

  logIn: {
    en: 'Log in',
    ru: 'Войти',
    uk: 'Увійти',
  },

  hello: {
    en: 'Hello',
    ru: 'Привет',
    uk: 'Привіт',
  },
};

export default langs;
