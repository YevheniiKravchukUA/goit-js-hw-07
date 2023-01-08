import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");

galleryItems.forEach(({ preview, original, description }) => {
  const markupString = `<a href="${original}" class="gallery__item" >
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;

  galleryRef.insertAdjacentHTML("beforeend", markupString);
});

let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

galleryRef.addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target === e.currentTarget) {
    return;
  }
});
