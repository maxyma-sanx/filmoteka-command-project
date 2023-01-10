export default function (totalResults) {
  // Базові налаштування пагігнації
  const options = {
    totalItems: totalResults,
    itemsPerPage: 20,
    visiblePages: 5,
    usageStatistics: false,
  };

  return options;
}
