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
  window.addEventListener("keydown", onBtnEscClick);
  function onBtnEscClick(evt) {
    console.log(evt);
    if (evt.code === "Escape") {
      console.log(evt);
      instance.close();
      window.removeEventListener("keydown", onBtnEscClick);
    }
  }
  if (!instance.visible()) {
    console.log(instance.visible());
    window.removeEventListener("keydown", onBtnEscClick);
  }
}
function makeLightboxExample(URL) {
  return basicLightbox.create(`<img width="1280" height="auto" src="${URL}">`);
}
function makeGalleryMarkup(gallery) {
  return gallery.map((item) => makeItemMarkup(item)).join("");
}
function makeItemMarkup({ preview, original, description }) {
  return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
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
