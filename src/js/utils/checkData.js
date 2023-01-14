// Функція яка перевіряє наявність id в localStorage, та пушить нові данні
export default function checkData(data, id, key) {
  if (data) {
    if (!data.includes(id.toString())) {
      data.push(id);
    }
    localStorage.setItem(key, JSON.stringify(data));
  }
}
