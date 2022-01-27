import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector(".gallery");

// todo Stage 1

// * Stage 1.1

const galleryInnerEl = galleryItems.map(({ preview, original, descript }) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href=${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${descript}"
    />
  </a>
</div>`
    
}).join("");

// * Stage 1.2

galleryEl.insertAdjacentHTML("beforeend", galleryInnerEl);



// todo Stage 2

galleryEl.addEventListener("click", selectPicture);

function selectPicture(event) {
    event.preventDefault();

    if (event.target.nodeName === "IMG") {
        var lightbox = new SimpleLightbox(event.target);
        console.log(event.target)
        lightbox.open()
    };
    
};