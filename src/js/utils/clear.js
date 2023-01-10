// Очистка текстового контенту по тегу
function clearContent(tag) {
  tag.textContent = '';
}

// Очистка всього контенту в середині тегу
function clearHTML(tag) {
  tag.innerHTML = '';
}

export { clearContent, clearHTML };
