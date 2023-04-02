import('../pages/index.css');
import {createCard, addCard, cardAddButton, cardAddForm, cardAddPopUp, titleInput, linkInput} from './card.js';
import {openPopUp, closePopUp} from './modal.js';
import { profileEditPopUp, nameInput, jobInput, profileEditForm, checkNameValidity, checkDescriptionValidity, checkTitleValidity, checkLinkInputValidity, checkFormValidity} from './validate.js';

const profileEditButton = document.querySelector('.profile__edit-button');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__description');
const closeButtons = document.querySelectorAll('.pop-up__close');


closeButtons.forEach((button) => {
  // находим 1 раз ближайший к крестику попап 
  const popUp = button.closest('.pop-up');
  // устанавливаем обработчик закрытия на крестик
  button.addEventListener('click', () => closePopUp(popUp));
});

profileEditButton.addEventListener("click", () => {
  openPopUp(profileEditPopUp);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  nameInput.isValid = true;
  jobInput.isValid = true;
  nameInput.addEventListener('input', checkNameValidity);
  jobInput.addEventListener('input', checkDescriptionValidity);
  profileEditForm.addEventListener('input', () => checkFormValidity(nameInput,jobInput));
}); 


//редактирование профиля
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  // Проверка валидности полей ввода перед отправкой формы
  if (checkFormValidity(nameInput, jobInput)) {
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopUp(profileEditPopUp);
  }
}

// добавление карточек
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

//добавление карточки

cardAddButton.addEventListener("click", () => {
  openPopUp(cardAddPopUp);
  titleInput.addEventListener('input', checkTitleValidity);
  linkInput.addEventListener('input', checkLinkInputValidity);
  cardAddForm.addEventListener('input', () => checkFormValidity(titleInput, linkInput));
});

cardAddForm.addEventListener('submit', addCard);
profileEditForm.addEventListener('submit', handleProfileFormSubmit);

