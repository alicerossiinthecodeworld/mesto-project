import('../pages/index.css');
import { createCard, addCard, cardAddButton, cardAddForm, cardAddPopUp, titleInput, linkInput } from './card.js';
import { openPopUp, closePopUp, handleClickOverlay, handleEscKey } from './modal.js';
import { enableValidation} from './validate.js';


export const config = {
  popUpSelector: '.pop-up', 
  formSelector: '.pop-up__form',
  inputSelector: '.pop-up__input',
  submitButtonSelector: '.pop-up__submit',
  inactiveButtonClass: 'pop-up__submit_inavailible',
  inputErrorClass: 'pop-up__input_error',
  errorClass: 'pop-up__error_visible',
  errorElementSelector: '.pop-up__error'
};

const profileEditButton = document.querySelector('.profile__edit-button');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__description');
const closeButtons = document.querySelectorAll('.pop-up__close');
const profileEditPopUp = document.querySelector('.profile-edit-pop-up');
const nameInput = profileEditPopUp.querySelector('.pop-up__input[name="name"]');
const jobInput = profileEditPopUp.querySelector('.pop-up__input[name="profession"]');
const profileEditForm = profileEditPopUp.querySelector('.pop-up__form');

closeButtons.forEach((button) => {
  const popUp = button.closest('.pop-up');
  button.addEventListener('click', () => closePopUp(popUp, config));
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopUp(profileEditPopUp);
}


profileEditButton.addEventListener("click", () => {
  const errorInputs = profileEditPopUp.querySelectorAll(config.inputErrorClass);
  errorInputs.forEach((input) => { hideInputError(input, config); })
  openPopUp(profileEditPopUp);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  profileEditForm.addEventListener('submit', handleProfileFormSubmit)
});

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  },
  {
    name: 'Гуадалканал',
    link: 'https://www.orangesmile.com/common/img_cities_w300/guadalcanal-island-6559-4.jpg'
  }
];


createCard(initialCards);

cardAddButton.addEventListener("click", () => {
  const errorInputs = cardAddPopUp.querySelectorAll(config.inputErrorClass);
  errorInputs.forEach((input) => { hideInputError(input, config); })
  openPopUp(cardAddPopUp);
  cardAddForm.addEventListener('submit', addCard);
});

document.addEventListener('DOMContentLoaded', () => {
  enableValidation(config);
});

const popUpList = document.querySelectorAll(config.popUpSelector);
popUpList.forEach((popUp) => {
  popUp.addEventListener('click', handleClickOverlay);
});
document.addEventListener('keydown', handleEscKey); 