import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import * as pixabayApi from './js/pixabay-api.js';
import * as render from './js/render-functions.js';

const form = document.querySelector('.form');
const formInput = document.querySelector('.form-input');
const button = document.querySelector('.form-btn');

form.addEventListener('submit', formSubmit);

function formSubmit(event) {
  event.preventDefault();

  const searchImage = formInput.value.trim();

  if (searchImage === '') {
    return alert(`Please, fill in the field`);
  }

  render.clearGallery();
  render.showLoader();

  pixabayApi
    .getImagesByQuery(searchImage)
    .then(res => {
      if (!res.hits.length) {
        return iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          timeout: 5000,
          color: 'red',
        });
      }
      render.createGallery(res.hits);
      render.hideLoader();
    })
    .catch(error => {
      iziToast.error({
        message: `Error`,
        position: 'topRight',
        timeout: 5000,
        color: 'red',
      });
    })
    .finally(() => {
      render.hideLoader();
    });
}
