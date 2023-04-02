import { showInputError, hideInputError, blockSubmitButton, unlockSubmitButton} from "./utils";
import { titleInput, linkInput } from "./card";
export const profileEditPopUp = document.querySelector('.profile-edit-pop-up');
export const nameInput = profileEditPopUp.querySelector('.pop-up__input[name="name"]');
export const jobInput = profileEditPopUp.querySelector('.pop-up__input[name="profession"]');
export const profileEditForm = profileEditPopUp.querySelector('.pop-up__form');


//валидация формы редактирования профиля
function checkSymbolsNumber( value, min, max) {
  const symbols = value.length;
  return symbols < min || symbols > max
}

function invalidCharError(input, value){
  console.log('invalidCharError: input', input);
  console.log('invalidCharError: value', value);
  const invalidChar = value.match(/[^a-zA-Zа-яА-ЯёЁ-\s]/);
  console.log('invalidCharError: invalidChar', invalidChar);
  const errorMessage = `Недопустимый символ "${invalidChar[0]}"`;
  showInputError(input, errorMessage);
}


export function checkFormValidity(...inputs) {
  let isFormValid = true;
  inputs.forEach(input => {
    if (!input.isValid) {
      isFormValid = false;
    }
  });
  if (isFormValid) {
    unlockSubmitButton();
  } else {
    blockSubmitButton();
  }
  return isFormValid;
}

export function checkNameValidity() {
  const regex = /^[a-zA-Zа-яА-ЯёЁ-\s]+$/;
  const value = nameInput.value;
  nameInput.isValid = true;
  if (!value) {
    showInputError(nameInput, 'Вы забыли заполнить это поле');
    nameInput.isValid = false;
  }
  else if (checkSymbolsNumber(value, 2, 40)) {
    const errorMessage = `Должно быть от 2 до 40 символов`;
    showInputError(nameInput, errorMessage);
    nameInput.isValid = false;
  }
  else if (!regex.test(value)) {
    invalidCharError(nameInput, value);
    nameInput.isValid = false;
  } 
  else {
    hideInputError(nameInput);
    nameInput.isValid = true;
  }
}

export function checkDescriptionValidity() {
  const regex = /^[a-zA-Zа-яА-ЯёЁ-\s]+$/;
  const value = jobInput.value;
  jobInput.isValid = true;
  if (!value) {
    showInputError(jobInput, 'Вы забыли заполнить это поле');
    jobInput.isValid = false;
  }
  else if (checkSymbolsNumber(value, 2, 200)) {
    const errorMessage = `Должно быть от 2 до 200 символов`;
    showInputError(jobInput, errorMessage);
    jobInput.isValid = false;
  }
  else if (!regex.test(value)) {
    invalidCharError(jobInput, value);
    jobInput.isValid = false;
  } 
  else {
    hideInputError(jobInput);
  }
}

export function checkTitleValidity(){
  const regex = /^[a-zA-Zа-яА-ЯёЁ-\s]+$/;
  const value = titleInput.value;
  titleInput.isValid = false;
  if (!value) {
    showInputError(titleInput, 'Вы забыли заполнить это поле');
    titleInput.isValid = false;
  }
  else if (checkSymbolsNumber(value, 2, 30)) {
    const errorMessage = `Должно быть от 2 до 30 символов`;
    showInputError(titleInput, errorMessage);
    titleInput.isValid = false;
  }
  else if (!regex.test(value)) {
    invalidCharError(titleInput, value);
    titleInput.isValid = false;
  }
  else {
    hideInputError(titleInput);
    titleInput.isValid = true;
  }
}

export function checkLinkInputValidity(){
  const value = linkInput.value;
  const isURL = /^(ftp|http|https):\/\/[^ "]+$/.test(value);
  linkInput.isValid = false;
  if (!isURL) {
    const errorMessage = 'введите валидный Url';
    showInputError(linkInput, errorMessage);
  }
  else {
    hideInputError(linkInput);
    linkInput.isValid = true;
  }
}