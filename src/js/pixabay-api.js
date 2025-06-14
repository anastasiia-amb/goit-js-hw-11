import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const API_KEY = '50824035-87dfb0469b0d9be7736d790bf';
const params = new URLSearchParams({
  key: API_KEY,
  q: '',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: 'true',
});

export function getImagesByQuery(query) {
  params.set('q', query);
  return axios(`https://pixabay.com/api?${params}`).then(res => {
    res.data.hits;
  });
}
