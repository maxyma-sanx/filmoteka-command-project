export default function checkData(data, array, id, key) {
  if (data) {
    data.push(id);
    localStorage.setItem(key, JSON.stringify(data));
  } else {
    array.push(id);
    localStorage.setItem(key, JSON.stringify(array));
  }
}
