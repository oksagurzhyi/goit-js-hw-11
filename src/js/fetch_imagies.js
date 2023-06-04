import axios from 'axios';
import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '36922214-8401a7f70e38261c1802e2ba4';

export async function fetchImagies(q, page = 1) {
  try {
    if (!q) {
      return;
    }
    const { data } = await axios({
      params: {
        key: API_KEY,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        q,
        page,
        per_page: 40,
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
}
