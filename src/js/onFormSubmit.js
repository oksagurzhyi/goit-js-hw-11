import { fetchImagies } from './fetch_imagies';
import { creatImagies } from './creatImagies';
import { refs } from './refs';
import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let page = 1;
let queryToFetch = '';
let totalPage = 0;

refs.btnMore.style.display = 'none';

export async function onFormSubmit(event) {
  event.preventDefault();
  queryToFetch = event.currentTarget.elements.searchQuery.value.trim();

  refs.divGallery.innerHTML = '';
  page = 1;

  const result = await fetchImagies(queryToFetch);
  console.log(result);

  if (result.totalHits === 0) {
    Notiflix.Notify.failure(`Sorry, we can't find ${queryToFetch}`);

    return;
  }
  totalPage = Math.ceil(result.totalHits / 40);
  if (totalPage > 1) {
    refs.btnMore.style.display = 'inline-block';
  }

  creatImagies(result);
  const options = {
    captionPosition: 'bottom',
    captionDelay: 250,
    captionsData: 'alt',
  };
  const lightbox = new SimpleLightbox('.gallery a', options);
  Notiflix.Notify.success(`Hooray! We found ${result.totalHits} images.`);
}

export async function onClickBtnLoadMore() {
  try {
    page += 1;

    const data = await fetchImagies(queryToFetch, page);

    creatImagies(data);
    let gallery = new SimpleLightbox('.gallery a');
    gallery.refresh();
    if (page === totalPage) {
      refs.btnMore.style.display = 'none';

      Notiflix.Notify.warning(
        `We're sorry, but you've reached the end of search results.`
      );
    }
  } catch (error) {
    console.log(error);
  }
}
