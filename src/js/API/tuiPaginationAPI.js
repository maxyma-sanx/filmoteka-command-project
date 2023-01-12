export default function (totalResults) {
  // Базові налаштування пагігнації
  const mediaQuery = window.matchMedia('(max-width: 768px)');

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
