import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector(".gallery")

// todo Stage 1

// * Stage 1.1

const galleryInnerEl = galleryItems.map(({ preview, original, description }) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href=${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    
}).join("");

// * Stage 1.2

galleryEl.insertAdjacentHTML("beforeend", galleryInnerEl);

// todo Stage 2


galleryEl.addEventListener("click", selectPicture);


const instance = basicLightbox.create(`
<div class="modal">
      <div class="modal__section">
        <div class="modal__poster">
          <img class="modal__img" src=${"https://content.rozetka.com.ua/goods/images/big/177447689.jpg"} alt="movie_poster" />
        </div>
        <div class="modal__container">
          <h1 class="modal__title">Movie Name</h1>
          <div class="modal__information">
            <ul class="modal__item">
              <li class="modal__into"><p>Vote/Votes:</p></li>
              <li class="modal__into"><p>Popularity</p></li>
              <li class="modal__into"><p>Original title</p></li>
              <li class="modal__into"><p>Genre</p></li>
            </ul>
            <ul>
              <li class="modal__into modal__into--vote">
                  <span class="modal__vote">7.3</span> / <span class="modal__votes">1260</span>
              </li class="modal__into">
              <li class="modal__into"><p>100.2</p></li>
              <li class="modal__into"><p class="modal__origin">A FISTFUL OF LEAD</p></li>
              <li class="modal__into"><p>Western</p></li>
            </ul>
          </div>
          <h2 class="modal__subtitle">About</h2>
          <p class="modal__text">
            Four of the West’s most infamous outlaws assemble to steal a huge
            stash of gold from the most corrupt settlement of the gold rush
            towns. But not all goes to plan one is killed and the other three
            escapes with bags of gold hide out in the abandoned gold mine where
            they happen across another gang of three – who themselves were
            planning to hit the very same bank! As tensions rise, things go from
            bad to worse as they realise the bags of gold are filled with
            lead... they’ve been double crossed – but by who and how?
          </p>
          <div class="modal__buttons">
            <button class="button">Add to watched</button>
            <button class="button">Add to queue</button>
          </div>
        </div>
      </div>
    </div>`,
  {
    onShow: (condition) => {
      window.addEventListener("keydown", keyboardEvent)
    }
  },
  {
    onClose: (condition) => {
      window.removeEventListener("keydown", keyboardEvent)
    }
  }
);


function selectPicture(event) {
    event.preventDefault();



    instance.show()
  
}; 

function keyboardEvent(event) {
  if (event.key === "Escape") {
    instance.close()
    console.log("!")
  }
}

//if (event.target.nodeName === "IMG") {
//    instance.element().querySelector(".picture__lightbox")
//      .setAttribute("src", `${event.target.dataset.source}`)
//
//    instance.show()
//  };














