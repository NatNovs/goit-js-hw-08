import 'simplelightbox/dist/simple-lightbox.min.css';

import SimpleLightbox from 'simplelightbox';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line



const galleryList = document.querySelector('.gallery');
const cardsItem = createGalleryCards(galleryItems);

galleryList.insertAdjacentHTML('beforeend', cardsItem);

function createGalleryCards(galleryList) {
  return galleryList
    .map(({ preview, original, description }) => {
      return `<li>
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join('');
}

let lightbox = new SimpleLightbox('.gallery__item', {
  captionPosition: 'button',
  captionsData: 'alt',
  captionDelay: 250,
  disableRightClick: true,
  fadeSpeed: 500,
});

console.log(galleryList);
console.dir(lightbox);