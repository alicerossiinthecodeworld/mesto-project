// открытие и закрытие поп-апа редактирования профиля
const profileEditPopUp = document.querySelector('.profile-edit-pop-up');
const profileEditForm = profileEditPopUp.querySelector('.pop-up__form');
const profileEditButton = document.querySelector('.profile__edit-button');
const nameInput = profileEditPopUp.querySelector('.pop-up__input[name="name"]');
const jobInput = profileEditPopUp.querySelector('.pop-up__input[name="profession"]');
const cardsTemplate = document.querySelector('#card-template');
const cardsList = document.querySelector('.cards__gallery');
const cardAddButton = document.querySelector('.profile__add-button');
const cardAddPopUp = document.querySelector('.card-add-pop-up');
const cardAddForm= cardAddPopUp.querySelector('.pop-up__form')
const titleInput = document.querySelector('.pop-up__input[name="title"]');
const linkInput = document.querySelector('.pop-up__input[name="link"]');
const imageContainer = document.querySelector('.pop-up__image-container');
const imagePopUp = document.querySelector('.image-pop-up');
const imageClose = imagePopUp.querySelector('.pop-up__close');
const image = document.querySelector(".pop-up__image");
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__description');
const imageText = document.querySelector('.pop-up__image-text');

function closePopUp(popUp) {
  popUp.classList.remove('pop-up_opened');
}

function openPopUp(popUp) {
  popUp.classList.add('pop-up_opened');
}

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

function createSingleCard(cardData) {
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

function createCard(cardsData) {
  cardsData.forEach((cardData) => {
    const card = createSingleCard(cardData);
    cardsList.appendChild(card);
  });
}

createCard(initialCards);

function openImage(event) {
  const imgSrc = event.target.getAttribute("src");
  const imgAlt = event.target.getAttribute("alt");
  image.setAttribute('src', imgSrc);
  image.setAttribute('alt', imgAlt);
  imageText.textContent = imgAlt;
  openPopUp(imagePopUp);
}


function closeImage() {
  closePopUp(imagePopUp);
}

//добавление карточки

cardAddButton.addEventListener("click", () => {
  openPopUp(cardAddPopUp);
});

function addCard(evt) {
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

cardAddForm.addEventListener('submit', addCard);

