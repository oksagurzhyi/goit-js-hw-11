import { refs } from './refs';

export function creatImagies(data) {
  const markup = data.hits
    .map(
      ({
        likes,
        webformatURL,
        largeImageURL,
        tags,
        views,
        comments,
        downloads,
      }) =>
        `
     <div class="gallery__item">
  <a class="gallery__link" href="${largeImageURL}"><img class="gallery__image" src="${webformatURL}" alt="${tags}" loading="lazy" /></a>
  <div class="info">
    <p class="info-item">
      <b>Likes: ${likes}</b>
    </p>
    <p class="info-item">
      <b>Views: ${views}</b>
    </p>
    <p class="info-item">
      <b>Comments: ${comments}</b>
    </p>
    <p class="info-item">
      <b>Download: ${downloads}</b>
    </p>
  </div>
</div>
  `
    )
    .join('');
  console.log(data);
  refs.divGallery.insertAdjacentHTML('beforeend', markup);
}
