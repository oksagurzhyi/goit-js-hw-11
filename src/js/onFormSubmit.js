import { fetchImagies } from './fetch_imagies';
import { creatImagies } from './creatImagies';
import { refs } from './refs';
import { page } from './onClickBtnLoadMore';

refs.btnMore.classList.add('unvisible');

export async function onFormSubmit(event) {
  event.preventDefault();
  const query = event.currentTarget.elements.searchQuery.value.trim();

  refs.divGallery.innerHTML = '';
  const result = await fetchImagies(query);
  console.log(result.totalHits);
  if (result.totalHits === 0) {
    console.log(`Sorry, we can't find ${query}`);
    return;
  } else {
    creatImagies(result);

    refs.btnMore.classList.remove('unvisible');
  }
}
