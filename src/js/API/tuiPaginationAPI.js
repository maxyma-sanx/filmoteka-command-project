export default function (totalResults) {
  const options = {
    totalItems: totalResults,
    itemsPerPage: 20,
    visiblePages: 5,
    usageStatistics: false,
  };

  return options;
}
