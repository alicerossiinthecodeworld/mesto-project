import('../pages/index.css');
import {createCard, addCard, cardAddButton, cardAddForm, cardAddPopUp} from './card.js';
import {openPopUp, closePopUp} from './utils.js';

const profileEditPopUp = document.querySelector('.profile-edit-pop-up');
const profileEditForm = profileEditPopUp.querySelector('.pop-up__form');
const profileEditButton = document.querySelector('.profile__edit-button');
const nameInput = profileEditPopUp.querySelector('.pop-up__input[name="name"]');
const jobInput = profileEditPopUp.querySelector('.pop-up__input[name="profession"]');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__description');
const imageText = document.querySelector('.pop-up__image-text');
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
});

//редактирование профиля
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopUp(profileEditPopUp);
}

profileEditForm.addEventListener('submit', handleProfileFormSubmit);


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
});


cardAddForm.addEventListener('submit', addCard);

