const langs = {
  home: {
    'en-US': 'home',
    'ru-RU': 'главная',
    'uk-UA': 'головна',
  },

  library: {
    'en-US': 'my library',
    'ru-RU': 'библиотека',
    'uk-UA': 'бібліотека',
  },

  logOut: {
    'en-US': 'Log out',
    'ru-RU': 'Выйти',
    'uk-UA': 'Вийти',
  },

  logIn: {
    'en-US': 'Log in',
    'ru-RU': 'Войти',
    'uk-UA': 'Увійти',
  },

  watched: {
    'en-US': 'watched',
    'ru-RU': 'просмотренные',
    'uk-UA': 'переглянуті',
  },

  queue: {
    'en-US': 'queue',
    'ru-RU': 'очередь',
    'uk-UA': 'черга',
  },

  year: {
    'en-US': 'Release year',
    'uk-UA': 'рік',
  },

  polyci: {
    'en-US': 'All Rights Reserved',
    'ru-RU': 'Все права защищены',
    'uk-UA': 'Всі права захищені',
  },

  developer: {
    'en-US': 'Developed with',
    'ru-RU': 'Разработано',
    'uk-UA': 'Розроблено',
  },

  by: {
    'en-US': 'by',
    'ru-RU': ' ',
    'uk-UA': ' ',
  },

  students: {
    'en-US': 'GoIT Students',
    'ru-RU': 'Студентами GoIT',
    'uk-UA': 'Студентами GoIT',
  },

  rating: {
    'en-US': 'Vote / Votes',
    'ru-RU': 'Рейтинг / Голосов',
    'uk-UA': 'Рейтинг / Голосів',
  },

  action: {
    'en-US': 'Action',
    'uk-UA': 'Бойовик',
  },

  adventure: {
    'en-US': 'Adventure',
    'uk-UA': 'Пригоди',
  },
  animation: {
    'en-US': 'Animation',
    'uk-UA': 'Мультфільм',
  },
  сomedy: {
    'en-US': 'Comedy',
    'uk-UA': 'Комедія',
  },
  crime: {
    'en-US': 'Crime',
    'uk-UA': 'Кримінал',
  },
  documentary: {
    'en-US': 'Documentary',
    'uk-UA': 'Документальний',
  },
  drama: {
    'en-US': 'Drama',
    'uk-UA': 'Драма',
  },
  family: {
    'en-US': 'Family',
    'uk-UA': 'Сімейний',
  },
  fantasy: {
    'en-US': 'Fantasy',
    'uk-UA': 'Фентезі',
  },
  history: {
    'en-US': 'History',
    'uk-UA': 'Історичний',
  },
  horror: {
    'en-US': 'Horror',
    'uk-UA': 'Жахи',
  },
  music: {
    'en-US': 'Music',
    'uk-UA': 'Музичний',
  },
  mystery: {
    'en-US': 'Mystery',
    'uk-UA': 'Містика',
  },
  romance: {
    'en-US': 'Romance',
    'uk-UA': 'Романтичний',
  },
  scienceFiction: {
    'en-US': 'Science Fiction',
    'uk-UA': 'Наукова фантастика',
  },
  tvMovie: {
    'en-US': 'TV Movie',
    'uk-UA': 'Серіал',
  },
  thriller: {
    'en-US': 'Thriller',
    'uk-UA': 'Трилер',
  },
  war: {
    'en-US': 'War',
    'uk-UA': 'Про війну',
  },

  western: {
    'en-US': 'Western',
    'uk-UA': 'Вестерн',
  },
  popularity: {
    'en-US': 'Popularity',
    'ru-RU': 'Популярность',
    'uk-UA': 'Популярність',
  },

  original: {
    'en-US': 'Original Title',
    'ru-RU': 'Оригинальное название',
    'uk-UA': 'Оригінальна назва',
  },

  genre: {
    'en-US': 'Genres',
    'ru-RU': 'Жанри',
    'uk-UA': 'Жанри',
  },

  other: {
    'en-US': 'Other',
    'ru-RU': 'Другое',
    'uk-UA': 'Інше',
  },

  about: {
    'en-US': 'About',
    'ru-RU': 'Описание',
    'uk-UA': 'Опис',
  },

  addwatched: {
    'en-US': 'add to Watched',
    'ru-RU': 'Добавить в просмотренные',
    'uk-UA': 'Додати до переглянутих',
  },
  addedToWatched: {
    'en-US': 'Success! The movie has been added to the library.',
    'uk-UA': 'Фільм додано до бібліотеки!',
  },
  removedFromWatched: {
    'en-US': 'The movie has been removed from the library.',
    'uk-UA': 'Фільм вилучено з бібліотеки!',
  },
  delwatched: {
    'en-US': 'Remove from watched',
    'ru-RU': 'Удалить из просмотренных',
    'uk-UA': 'Видалити з переглянутих',
  },

  searchwarning: {
    'en-US':
      'Search result not successful. Enter the correct movie name and try again',
    'uk-UA':
      'Результат пошуку невдалий. Введіть правильну назву фільму та повторіть спробу',
  },

  addqueue: {
    'en-US': 'add to queue',
    'ru-RU': 'добавить в очередь',
    'uk-UA': 'додати до черги',
  },
  delqueue: {
    'en-US': 'Remove from queue',
    'ru-RU': 'Удалить из очереди',
    'uk-UA': 'Видалити з черги',
  },

  emptySearch: {
    'en-US': 'Enter the name of the movie, for a correct search!',
    'ru-RU': 'Введите название фильма, для корректного поиска!',
    'uk-UA': 'Введіть назву фільму, для правильного пошуку!',
  },

  badQuery: {
    'en-US': 'Nothing is found. Wrong query.',
    'ru-RU': 'Ничего не найдено. Неверный запрос.',
    'uk-UA': 'Нічого не знайдено. Неправильний запит.',
  },
  searchplaceholder: {
    'en-US': 'Movie search',
    'ru-RU': 'Поиск фильмов',
    'uk-UA': 'Пошук фільмів',
  },

  notMovie: {
    'en-US': 'Oops, movie not found. Please, choose another movie',
    'ru-RU': 'Упс, фильм не найден. Пожалуйста, выберите другой фильм',
    'uk-UA': 'На жаль, фільм не знайдено. Будь ласка, виберіть інший фільм',
  },

  group: {
    'en-US': 'Group',
    'ru-RU': 'Группа',
    'uk-UA': 'Група',
  },
  andrii: {
    'en-US': 'Andrii Mazka',
    // 'ru-RU': 'Мазка Андрей',
    'uk-UA': 'Андрій Мазка',
  },

  aleksandr: {
    'en-US': 'Alexander Kisliy',
    // 'ru-RU': '',
    'uk-UA': 'Олександр Кислий',
  },
  aleksey: {
    'en-US': 'Aleksei Krupsky',
    // 'ru-RU': '',
    'uk-UA': 'Олексій Крупський',
  },
  vitaliy: {
    'en-US': 'Vitaliy Ishchuk',
    // 'ru-RU': '',
    'uk-UA': 'Віталій Іщук',
  },
  vadym: {
    'en-US': 'Vadym Zhuravlov',
    // 'ru-RU': '',
    'uk-UA': 'Вадим Журавльов',
  },
  vladislav: {
    'en-US': ' Vladyslav Sanhinov',
    // 'ru-RU': '',
    'uk-UA': 'Владислав Санхінов',
  },
  denis: {
    'en-US': 'Denis Murov',
    // 'ru-RU': '',
    'uk-UA': 'Денис Муров',
  },
  dmitriy: {
    'en-US': 'Dmytro Avramenko',
    // 'ru-RU': '',
    'uk-UA': 'Дмитро Авраменко',
  },
  lesya: {
    'en-US': 'Larysa Furmanchuk',
    // 'ru-RU': '',
    'uk-UA': 'Лариса Фурманчук',
  },
  maksim: {
    'en-US': 'Maxym Koralkov',
    // 'ru-RU': '',
    'uk-UA': 'Максим Коралков',
  },
  modalTitle: {
    'en-US': 'Developed with participation',
    // 'ru-RU': '',
    'uk-UA': 'Розроблено за участю',
  },

  lead: {
    'en-US': 'Team Lead',
    'ru-RU': 'Тимлид',
    'uk-UA': 'Тім-лід',
  },

  scrum: {
    'en-US': 'Scrum Master',
    'ru-RU': 'Скрам мастер',
    'uk-UA': 'Скрам майстер',
  },

  dev: {
    'en-US': 'Developer',
    'ru-RU': 'Разработчик',
    'uk-UA': 'Розробник',
  },
  dev2: {
    'en-US': 'Developer',
    'ru-RU': 'Разработчик',
    'uk-UA': 'Розробник',
  },
  dev3: {
    'en-US': 'Developer',
    'ru-RU': 'Разработчик',
    'uk-UA': 'Розробник',
  },
  dev4: {
    'en-US': 'Developer',
    'ru-RU': 'Разработчик',
    'uk-UA': 'Розробник',
  },
  dev5: {
    'en-US': 'Developer',
    'ru-RU': 'Разработчик',
    'uk-UA': 'Розробник',
  },
  dev6: {
    'en-US': 'Developer',
    'ru-RU': 'Разработчик',
    'uk-UA': 'Розробник',
  },
  dev7: {
    'en-US': 'Developer',
    'ru-RU': 'Разработчик',
    'uk-UA': 'Розробник',
  },
  dev8: {
    'en-US': 'Developer',
    'ru-RU': 'Разработчик',
    'uk-UA': 'Розробник',
  },
  dev9: {
    'en-US': 'Developer',
    'ru-RU': 'Разработчик',
    'uk-UA': 'Розробник',
  },
  trday: { 'en-US': 'Day', 'ru-RU': 'День', 'uk-UA': 'День' },
  trweek: { 'en-US': 'Week', 'ru-RU': 'Неделя', 'uk-UA': 'Тиждень' },
  emptyWatched1: {
    'en-US': "You don't have any movies you've watched.",
    'ru-RU': 'У вас еще нет фильмов которые вы смотрели.',
    'uk-UA': 'Ви ще не маєте фільмів які ви дивилися.',
  },
  emptyWatched2: {
    'en-US': 'Add the first one.',
    'ru-RU': 'Добавьте свой первый фильм.',
    'uk-UA': 'Додайте свій перший фільм.',
  },
  emptyQueue1: {
    'en-US': "You don't have any movies in the queue.",
    'ru-RU': 'У вас еще нет фильмов в очереди для просмотра.',
    'uk-UA': 'У вас ще немає фільмів у черзі для перегляду.',
  },
  emptyQueue2: {
    'en-US': 'Add the first one.',
    'ru-RU': 'Добавьте свой первый фильм.',
    'uk-UA': 'Додайте свій перший фільм.',
  },

  trailer: {
    'en-US': 'Sorry, trailer not found',
    'ru-RU': 'Извините, трейлер не найден',
    'uk-UA': 'Вибачте, трейлер не знайдено',
  },

  detailsNotFound: {
    'en-US': 'No information',
    'ru-RU': 'Нету информации',
    'uk-UA': 'Інформації немає',
  },

  hello: {
    'en-US': 'Hello',
    'ru-RU': 'Привет',
    'uk-UA': 'Привіт',
  },
};

export default langs;
