import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");

galleryItems.forEach(({ preview, original, description }) => {
  const markupString = `<div class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;

  galleryRef.insertAdjacentHTML("beforeend", markupString);
});

galleryRef.addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target === e.currentTarget) {
    return;
  }

  const showedImage = basicLightbox.create(
    `
		    <img width="1400" height="900" src="${e.target.dataset.source}">
	    `
  );

  showedImage.show(() => {
    window.addEventListener("keydown", closeOnEscapeButton);
  });

  function closeOnEscapeButton(e) {
    if (e.code === "Escape") {
      console.log(e.code);

      showedImage.close(() => {
        window.removeEventListener("keydown", closeOnEscapeButton);
      });
    }
  }
});
