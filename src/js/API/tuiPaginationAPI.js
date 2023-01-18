export default function (totalResults) {
  // Перевірка по точці перелому
  const mediaQuery = window.matchMedia('(max-width: 768px)');

  // Базові налаштування пагігнації
  const options = {
    totalItems: totalResults,
    itemsPerPage: 20,
    visiblePages: 5,
    usageStatistics: false,
  };

  if (mediaQuery.matches) {
    options.visiblePages = 3;
  }

  return options;
}
