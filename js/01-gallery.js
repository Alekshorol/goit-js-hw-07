import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
console.log(galleryEl);

const galleryMarkup = makeGalleryMurkup(galleryItems);

galleryEl.insertAdjacentHTML("beforeend", galleryMarkup);

galleryEl.addEventListener("click", atGalleryClick);

function atGalleryClick(evt) {
  evt.preventDefault();
  const isImage = evt.target.classList.contains("gallery__image");
  if (!isImage) {
    return;
  }
  const largeImageURL = evt.target.dataset.sourse;
}
