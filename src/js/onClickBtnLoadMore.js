import { creatImagies } from './creatImagies';
import { fetchImagies } from './fetch_imagies';
import { refs } from './refs';

export let page = 1;

export async function onClickBtnLoadMore() {
  let q = refs.form.elements.searchQuery.value;
  console.log('page do', page);

  page += 1;
  console.log('page', page);

  const data = await fetchImagies(q, page);
  creatImagies(data);
}
