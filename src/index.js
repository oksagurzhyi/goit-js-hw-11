import { fetchImagies } from './js/fetch_imagies';
import { refs } from './js/refs';
import { onFormSubmit, onClickBtnLoadMore } from './js/onFormSubmit';

refs.form.addEventListener('submit', onFormSubmit);
refs.btnMore.addEventListener('click', onClickBtnLoadMore);
