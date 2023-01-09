export default function removeLocalData(arr, id, key) {
  const indexID = arr.indexOf(id);

  arr.splice(indexID, 1);

  localStorage.setItem(key, JSON.stringify(arr));
}
