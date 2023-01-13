// Функція видалення id та запису в localStorage нових данних
export default function removeLocalData(arr, id, key) {
  const indexID = arr.indexOf(id);

  arr.splice(indexID, 1);

  localStorage.setItem(key, JSON.stringify(arr));
}
