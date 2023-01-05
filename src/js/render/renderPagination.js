import refs from '../refs';

// paginationContainer.addEventListener('click', e => {
//   e.preventDefault();
//   if (e.target.className !== 'pagination__item') return;
//   currentPage = e.target.dataset.page;
//   const pageElements = createPagesElements();
// });

export default function createPagesElements(pages) {
  let pagesElements = '';
  if (pages <= 7) {
    for (let i = 1; i <= pages; i += 1) {
      pagesElements += `<li class="pagination__item">
        <a class="pagination__link" href="#" data-page=${i}>${i}</a></li>`;
    }
  } else if (pages > 7) {
    for (let i = 1; i <= pages; i += 1) {
      pagesElements += `<li class="pagination__item">
        <a class="pagination__link" href="#" data-page=${i}>${i}</a></li>`;
      if (i > 7) {
        break;
      }
      pagesElements += `<li class="pagination__item">
        <a class="pagination__link" href="#" data-page=${i}>...</a></li>`;
    }
  }

  refs.paginationLeft.insertAdjacentHTML('afterend', pagesElements);
}
