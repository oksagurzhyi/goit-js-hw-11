import { fetchImagies } from './js/fetch_imagies';
import { refs } from './js/refs';
import { onFormSubmit } from './js/onFormSubmit';
import { onClickBtnLoadMore } from './js/onClickBtnLoadMore';

// fetchImagies('cat');

refs.form.addEventListener('submit', onFormSubmit);
refs.btnMore.addEventListener('click', onClickBtnLoadMore);

// onClickBtnLoadMore(q, page);
