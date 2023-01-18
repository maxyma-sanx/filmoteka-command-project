const langs = {
  home: {
    'en-US': 'home',
    'uk-UA': 'головна',
  },
  library: {
    'en-US': 'my library',
    'uk-UA': 'бібліотека',
  },
  logOut: {
    'en-US': 'Log out',
    'uk-UA': 'Вийти',
  },
  logIn: {
    'en-US': 'Log in',
    'uk-UA': 'Увійти',
  },
  watched: {
    'en-US': 'watched',
    'uk-UA': 'переглянуті',
  },
  queue: {
    'en-US': 'queue',
    'uk-UA': 'черга',
  },
  year: {
    'en-US': 'Release year',
    'uk-UA': 'рік',
  },
  polyci: {
    'en-US': 'All Rights Reserved',
    'uk-UA': 'Всі права захищені',
  },
  developer: {
    'en-US': 'Developed with',
    'uk-UA': 'Розроблено',
  },
  by: {
    'en-US': 'by',
    'uk-UA': ' ',
  },
  students: {
    'en-US': 'GoIT Students',
    'uk-UA': 'студентами GoIT',
  },
  rating: {
    'en-US': 'Vote / Votes',
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
    'uk-UA': 'Популярність',
  },
  original: {
    'en-US': 'Original Title',
    'uk-UA': 'Оригінальна назва',
  },
  genre: {
    'en-US': 'Genres',
    'uk-UA': 'Жанри',
  },
  other: {
    'en-US': 'Other',
    'uk-UA': 'Інше',
  },
  about: {
    'en-US': 'About',
    'uk-UA': 'Опис',
  },
  addwatched: {
    'en-US': 'add to Watched',
    'uk-UA': 'Додати до переглянутих',
  },
  delwatched: {
    'en-US': 'Remove from watched',
    'uk-UA': 'Видалити з переглянутих',
  },
  addqueue: {
    'en-US': 'add to queue',
    'uk-UA': 'Додати до черги',
  },
  delqueue: {
    'en-US': 'Remove from queue',
    'uk-UA': 'Видалити з черги',
  },
  emptySearch: {
    'en-US': 'Enter the name of the movie, for a correct search!',
    'uk-UA': 'Введіть назву фільму, для правильного пошуку!',
  },
  badQuery: {
    'en-US': 'Nothing is found. Wrong query.',
    'uk-UA': 'Нічого не знайдено. Неправильний запит.',
  },
  searchplaceholder: {
    'en-US': 'Movie search',
    'uk-UA': 'Пошук фільмів',
  },
  group: {
    'en-US': 'Group',
    'uk-UA': 'Група',
  },
  andrii: {
    'en-US': 'Andrii Mazka',
    'uk-UA': 'Андрій Мазка',
  },
  aleksandr: {
    'en-US': 'Alexander Kisliy',
    'uk-UA': 'Олександр Кислий',
  },
  aleksey: {
    'en-US': 'Aleksei Krupsky',
    'uk-UA': 'Олексій Крупський',
  },
  vitaliy: {
    'en-US': 'Vitaliy Ishchuk',
    'uk-UA': 'Віталій Іщук',
  },
  vadym: {
    'en-US': 'Vadym Zhuravlov',
    'uk-UA': 'Вадим Журавльов',
  },
  vladislav: {
    'en-US': 'Vladyslav Sanhinov',
    'uk-UA': 'Владислав Санхінов',
  },
  denis: {
    'en-US': 'Denis Mazurov',
    'uk-UA': 'Денис Мазуров',
  },
  dmitriy: {
    'en-US': 'Dmytro Avramenko',
    'uk-UA': 'Дмитро Авраменко',
  },
  lesya: {
    'en-US': 'Larysa Furmanchuk',
    'uk-UA': 'Лариса Фурманчук',
  },
  maksim: {
    'en-US': 'Maksym Koralkov',
    'uk-UA': 'Максим Коральков',
  },
  aleks: {
    'en-US': 'Alexander Lytvyniuk',
    'uk-UA': 'Олександр Литвинюк',
  },
  modalTitle: {
    'en-US': 'Developed with participation',
    'uk-UA': 'Розроблено за участю',
  },
  lead: {
    'en-US': 'Team Lead',
    'uk-UA': 'Тім-лід',
  },
  scrum: {
    'en-US': 'Scrum Master',
    'uk-UA': 'Скрам майстер',
  },
  dev: {
    'en-US': 'Developer',
    'uk-UA': 'Розробник',
  },
  dev2: {
    'en-US': 'Developer',
    'uk-UA': 'Розробник',
  },
  dev3: {
    'en-US': 'Developer',
    'uk-UA': 'Розробник',
  },
  dev4: {
    'en-US': 'Developer',
    'uk-UA': 'Розробник',
  },
  dev5: {
    'en-US': 'Developer',
    'uk-UA': 'Розробник',
  },
  dev6: {
    'en-US': 'Developer',
    'uk-UA': 'Розробник',
  },
  dev7: {
    'en-US': 'Developer',
    'uk-UA': 'Розробник',
  },
  dev8: {
    'en-US': 'Developer',
    'uk-UA': 'Розробник',
  },
  dev9: {
    'en-US': 'Developer',
    'uk-UA': 'Розробник',
  },
  trday: { 'en-US': 'Day', 'ru-RU': 'День', 'uk-UA': 'День' },
  trweek: { 'en-US': 'Week', 'ru-RU': 'Неделя', 'uk-UA': 'Тиждень' },
  emptyWatched1: {
    'en-US': "You don't have any movies you've watched.",
    'uk-UA': 'Ви ще не маєте фільмів які ви дивилися.',
  },
  emptyWatched2: {
    'en-US': 'Add the first one.',
    'uk-UA': 'Додайте свій перший фільм.',
  },
  emptyQueue1: {
    'en-US': "You don't have any movies to watch yet.",
    'uk-UA': 'У вас ще немає фільмів для перегляду.',
  },
  emptyQueue2: {
    'en-US': 'Go to the most popular movies',
    'uk-UA': 'Перейдіть до найпопулярніших фільмів',
  },
  trailer: {
    'en-US': 'Sorry, trailer not found',
    'uk-UA': 'Вибачте, трейлер не знайдено',
  },
  detailsNotFound: {
    'en-US': 'No information',
    'uk-UA': 'Інформації немає',
  },
  hello: {
    'en-US': 'Hello',
    'uk-UA': 'Привіт',
  },
};

export default langs;
