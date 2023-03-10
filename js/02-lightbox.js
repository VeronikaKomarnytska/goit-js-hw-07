import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector(".gallery");

const markup = createImageGalleryMarkup(galleryItems);

galleryRef.innerHTML = markup;

function createImageGalleryMarkup(galleryItems) {
       console.log(galleryRef);

    return galleryItems
     .map(({ preview, original, description }) => {
      return `
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
            `;
        })
      .join("");
      }
galleryRef.addEventListener("click", (event) => {
    event.preventDefault();

    if (event.target.nodeName !== "IMG") {
        return;
    }
    const lightbox = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250});

    });

