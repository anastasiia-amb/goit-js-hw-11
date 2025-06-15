import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

const form = document.querySelector('.form');
const formInput = document.querySelector('.form-input');

form.addEventListener('submit', formSubmit);

function formSubmit(event) {
  event.preventDefault();

  const searchImage = formInput.value.trim();

  if (searchImage === '') {
    return iziToast.warning({
      message: 'Please, fill in the field',
      position: 'topRight',
      timeout: 3000,
    });
  }

  clearGallery();
  showLoader();

  getImagesByQuery(searchImage)
    .then(data => {
      const images = data.hits;

      if (images.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          timeout: 5000,
          color: 'red',
        });
        return;
      }
      createGallery(images);
    })
    .catch(error =>
      iziToast.error({
        message: `Error`,
        position: 'topRight',
        timeout: 5000,
        color: 'red',
      })
    )
    .finally(() => {
      hideLoader();
      form.reset();
    });
}
