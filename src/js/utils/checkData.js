export default function checkData(data, array, id, key) {
  if (data) {
    if (array.includes(id.toString()) || data.includes(id.toString())) {
      console.log('id уже существует');
    }
    data.push(id);
    localStorage.setItem(key, JSON.stringify(data));
  } else {
    array.push(id);
    localStorage.setItem(key, JSON.stringify(array));
  }
}
