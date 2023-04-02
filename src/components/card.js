import {openPopUp, closePopUp} from './modal.js';


const cardsTemplate = document.querySelector('#card-template');
const cardsList = document.querySelector('.cards__gallery');
export const cardAddButton = document.querySelector('.profile__add-button');
export const cardAddPopUp = document.querySelector('.card-add-pop-up');
export const cardAddForm= cardAddPopUp.querySelector('.pop-up__form');
const titleInput = document.querySelector('.pop-up__input[name="title"]');
const linkInput = document.querySelector('.pop-up__input[name="link"]');
const imagePopUp = document.querySelector('.image-pop-up');
const image = document.querySelector(".pop-up__image");
const imageText = document.querySelector('.pop-up__image-text');

export function addCard(evt) {
  evt.preventDefault();

  const cardData = {
    name: titleInput.value,
    link: linkInput.value
  };

  const card = createSingleCard(cardData);
  cardsList.prepend(card);

  evt.target.reset()

  closePopUp(cardAddPopUp);
}


export function createSingleCard(cardData) {
  const card = cardsTemplate.content.cloneNode(true);
  const cardImage = card.querySelector('.cards__picture');
  if (cardData.link) {
    cardImage.src = cardData.link;
  }
  cardImage.alt = cardData.name;
  const cardText = card.querySelector('.cards__text');
  cardText.textContent = cardData.name;

  const deleteButton = card.querySelector('.cards__delete-button');
  deleteButton.addEventListener('click', (evt) => {
    const cardElement = evt.target.closest('.cards__item');
    cardElement.remove();
  });
  const likeButton = card.querySelector('.cards__like-button');
  likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('cards__like-button_active');
  });
  cardImage.addEventListener('click', openImage);
  return card;
}

export function createCard(cardsData) {
  cardsData.forEach((cardData) => {
    const card = createSingleCard(cardData);
    cardsList.appendChild(card);
  });
}

function openImage(event) {
  const imgSrc = event.target.getAttribute("src");
  const imgAlt = event.target.getAttribute("alt");
  image.setAttribute('src', imgSrc);
  image.setAttribute('alt', imgAlt);
  imageText.textContent = imgAlt;
  openPopUp(imagePopUp);
}
