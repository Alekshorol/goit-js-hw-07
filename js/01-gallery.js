import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
console.log(galleryEl);

const galleryMarkup = makeGalleryMarkup(galleryItems);

galleryEl.addEventListener("click", atGallery);

function atGallery(evt) {
  evt.preventDefault();
  const itImg = evt.target.classList.contains("gallery__image");
  if (!itImg) {
    return;
  }
  const largeImage = evt.target.dataset.source;
  const instance = makeLightboxExample(largeImage);
  instance.show();
}
function makeLightboxExample(URL) {
  return basicLightbox.create(`<img width="1280" height="800" src="${URL}">`);
}
function makeGalleryMarkup(gallery) {
  return gallery.map((item) => makeItemMarkup(item)).join("");
}
function makeItemMarkup({ preview, original, description }) {
  return `<div class="gallery__item">
    <a class="gallery__link" href="large-image.jpg">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`;
}
galleryEl.insertAdjacentHTML("beforeend", galleryMarkup);
