import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector(".gallery")

// todo Stage 1

galleryItems.forEach(elem => {
    // * Stage 1.1
    const itemEl = document.createElement("div");
    itemEl.classList.add("gallery__item");
    galleryEl.append(itemEl);

    // * Stage 1.2
    const galleryLinkEl = document.createElement("a");
    galleryLinkEl.classList.add("gallery__link");
    galleryLinkEl.setAttribute("href", `${elem.original}`);
    itemEl.append(galleryLinkEl);

    // * Stage 1.3
    const imageEl = document.createElement("img");
    imageEl.classList.add("gallery__image");
    imageEl.setAttribute("src", `${elem.preview}`);
    imageEl.setAttribute("data-source", `${elem.original}`)
    imageEl.setAttribute("alt", `${elem.description}`);
    galleryLinkEl.append(imageEl);
});

// todo Stage 2

galleryEl.addEventListener("click", selectPicture);

function selectPicture(event) {
    event.preventDefault();

    if (event.target.nodeName === "IMG") {
        const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`)

instance.show()
        return console.log("active")
    }
}






