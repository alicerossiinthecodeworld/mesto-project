import { openPopUp, closePopUp } from './modal.js';
import { apiconfig, postCard, deleteCard } from './api.js';

const cardsTemplate = document.querySelector('#card-template');
const cardsList = document.querySelector('.cards__gallery');
export const cardAddButton = document.querySelector('.profile__add-button');
export const cardAddPopUp = document.querySelector('.card-add-pop-up');
export const cardAddForm = cardAddPopUp.querySelector('.pop-up__form');
export const titleInput = document.querySelector('.pop-up__input[name="title"]');
export const linkInput = document.querySelector('.pop-up__input[name="link"]');
const imagePopUp = document.querySelector('.pop-up_type_image');
const image = document.querySelector(".pop-up__image");
const imageText = document.querySelector('.pop-up__image-text');

export function addCard(evt) {
  evt.preventDefault();
  const cardData = {
    name: titleInput.value,
    link: linkInput.value
  };

  postCard(cardData.name, cardData.link)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const card = createSingleCard(data);
      cardsList.prepend(card);
      card._id = data._id;
      evt.target.reset();
      closePopUp(cardAddPopUp);
    })
    .catch((err) => {
      console.log(err);
    });
}


export function createSingleCard(cardData) {
  const card = cardsTemplate.content.cloneNode(true);
  const cardImage = card.querySelector('.cards__picture');
  const likeCounter = card.querySelector('.cards__like-counter')
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  card.id = cardData._id;
  if (cardData.likeCounter){
    likeCounter.textContent = cardData.likes.length;
  }
  const cardText = card.querySelector('.cards__text');
  cardText.textContent = cardData.name;

  const deleteButton = card.querySelector('.cards__delete-button');
  if (cardData.owner._id !== apiconfig.id){
    const deleteButton = card.querySelector('.cards__delete-button');
    deleteButton.remove();
  }
  else{
  deleteButton.addEventListener('click', (evt) => {
    deleteCard(card.id);
    const cardElement = evt.target.closest('.cards__item');
    cardElement.remove();
  });
}
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

