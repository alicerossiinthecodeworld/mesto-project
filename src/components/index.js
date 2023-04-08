import('../pages/index.css');
import { createCard, addCard, cardAddButton, cardAddForm, cardAddPopUp, titleInput, linkInput } from './card.js';
import { openPopUp, closePopUp, handleClickOverlay, hideLoading, showLoading } from './modal.js';
import { blockSubmitButton, enableValidation, hideInputError } from './validate.js';
import { getUser, getCards, updateProfile, changeAvatar } from './api.js';

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
const profileAvatar = document.querySelector('.profile__avatar-image');
const avatarPopUp = document.querySelector('.avatar__change__pop-up');
const avatarEditForm = avatarPopUp.querySelector('.pop-up__form')
const avatarEdit = document.querySelector('.profile__avatar-container');
const avatarLinkInput = avatarPopUp.querySelector('.pop-up__input[name="avatar-link"]');


closeButtons.forEach((button) => {
  const popUp = button.closest('.pop-up');
  button.addEventListener('click', () => closePopUp(popUp, config));
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  const name = nameInput.value;
  const about = jobInput.value;
  const buttonElement = profileEditPopUp.querySelector(config.submitButtonSelector);
  const text = buttonElement.textContent;
  showLoading(buttonElement);
  updateProfile(name, about)
    .then(userData => {
      console.log(userData);
      profileName.textContent = userData.name;
      profileJob.textContent = userData.about;
      closePopUp(profileEditPopUp);
    })
    .catch(error => {
      console.error(error);
    })
    .finally(() => {
      hideLoading(buttonElement, text);
    });
}

profileEditButton.addEventListener("click", () => {
  const inputs = profileEditPopUp.querySelectorAll(config.inputSelector);
  inputs.forEach((input) => { hideInputError(input, config); })
  openPopUp(profileEditPopUp);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  profileEditForm.addEventListener('submit', handleProfileFormSubmit)
});


cardAddButton.addEventListener("click", () => {
  titleInput.value = ''
  linkInput.value = ''
  const inputs = cardAddPopUp.querySelectorAll(config.inputSelector);
  inputs.forEach((input) => { hideInputError(input, config); })
  openPopUp(cardAddPopUp);
  const buttonElement = cardAddPopUp.querySelector(config.submitButtonSelector);
  blockSubmitButton(buttonElement, config.inactiveButtonClass)
});

document.addEventListener('DOMContentLoaded', () => {
  enableValidation(config);
});


cardAddForm.addEventListener('submit', (evt) => {
  addCard(evt);
});

avatarEditForm.addEventListener('submit', (evt) => {
  const buttonElement = avatarEditForm.querySelector(config.submitButtonSelector);
  const text = buttonElement.textContent;
  showLoading(buttonElement);
  changeAvatar(avatarLinkInput.value).then((data)=>{
    console.log(data);
    profileAvatar.src = data.avatar;
    closePopUp(avatarPopUp);
  })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
    hideLoading(buttonElement, text);
  });
});


function openAvatarForm() {
  const inputs = avatarPopUp.querySelectorAll(config.inputSelector);
  inputs.forEach((input) => { hideInputError(input, config); })
  avatarLinkInput.value = '';
  console.log(avatarPopUp);
  openPopUp(avatarPopUp);
  const buttonElement = avatarPopUp.querySelector(config.submitButtonSelector);
  blockSubmitButton(buttonElement, config.inactiveButtonClass);
}

avatarEdit.addEventListener('click', openAvatarForm)


const popUpList = document.querySelectorAll(config.popUpSelector);
popUpList.forEach((popUp) => {
  popUp.addEventListener('click', handleClickOverlay);
});

window.addEventListener('load', () => {
  Promise.all([
    getUserInfo(),
    getUserCards()
  ])
    .then((values) => {
      profileName.textContent = values[0].name;
      profileJob.textContent = values[0].about;
      profileAvatar.src = values[0].avatar;
      createCard(values[1]);
    })
    .catch((err) => {
      console.log(err);
    })
});


function getUserInfo() {
  getUser().then((result) => {
    profileName.textContent = result.name;
    profileJob.textContent = result.about;
    profileAvatar.src = result.avatar;
  });
}

export function getUserCards() {
  getCards()
    .then(result => {

      createCard(result);
    })
    .catch(error => {
      console.error(error);
    });
}
