// открытие и закрытие поп-апа редактирования профиля
const profileEditPopUp = document.querySelector('.profile-edit-pop-up');
const profileEditClose = profileEditPopUp.querySelector('.pop-up__close');
const profileEditButton = document.querySelector('.profile__edit-button');
const profileEditSubmitButton = profileEditPopUp.querySelector('.pop-up__submit')
const nameInput = profileEditPopUp.querySelector('.pop-up__input[name="name"]');
const jobInput = profileEditPopUp.querySelector('.pop-up__input[name="profession"]');
const cardsTemplate = document.querySelector('#card-template');
const cardsList = document.querySelector('.cards__gallery');
const cardAddButton = document.querySelector('.profile__add-button');
const cardAddPopUp = document.querySelector('.card-add-pop-up');
const cardAddClose = cardAddPopUp.querySelector('.pop-up__close');
const cardAddSubmitButton = cardAddPopUp.querySelector('.pop-up__submit')
const titleInput = document.querySelector('.pop-up__input[name="title"]');
const linkInput = document.querySelector('.pop-up__input[name="link"]');
const imageContainer = document.querySelector('.pop-up__image-container');
const imagePopUp = document.querySelector('.image-pop-up');
const imageClose = imagePopUp.querySelector('.pop-up__close');


profileEditButton.addEventListener("click", () => {
  profileEditPopUp.classList.add('pop-up_opened');
  nameInput.value = document.querySelector('.profile__name').textContent;
  jobInput.value = document.querySelector('.profile__description').textContent;
});

profileEditClose.addEventListener("click", () => {
  profileEditPopUp.classList.remove('pop-up_opened');
});

//редактирование профиля
function formSubmitHandler(evt) {
  evt.preventDefault();
  document.querySelector('.profile__name').textContent = nameInput.value;
  document.querySelector('.profile__description').textContent = jobInput.value;
  profileEditPopUp.classList.remove('pop-up_opened');
}

profileEditSubmitButton.addEventListener('click', formSubmitHandler);


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
  const cardText = card.querySelector('.cards__text');
  cardText.textContent = cardData.name;

  const deleteButton = card.querySelector('.cards__delete-button');
  deleteButton.addEventListener('click', (evt) => {
    const cardElement = evt.target.closest('.cards__item');
    cardElement.remove();
  });
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
  let imgSrc = event.target.getAttribute("src");
  let image = document.querySelector(".pop-up__image");
  imageClose.addEventListener('click', closeImage);
  image.setAttribute('src', imgSrc);
  imagePopUp.classList.add('pop-up_opened');
}



function closeImage() {
  imagePopUp.classList.remove('pop-up_opened');
}



document.querySelectorAll('.cards__picture').forEach(image => {
  image.addEventListener('click', openImage);
});

//жмяк лайка на карточки

const likeButtons = document.querySelectorAll('.cards__like-button');

likeButtons.forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle('cards__like-button_active');
  });
});

//добавление карточки

cardAddButton.addEventListener("click", () => {
  cardAddPopUp.classList.add('pop-up_opened');
});

cardAddClose.addEventListener("click", () => {
  cardAddPopUp.classList.remove('pop-up_opened');
});

function addCard(evt) {
  evt.preventDefault();

  const cardData = {
    name: titleInput.value,
    link: linkInput.value
  };

  const card = createSingleCard(cardData);
  cardsList.prepend(card);

  titleInput.value = '';
  linkInput.value = '';

  cardAddPopUp.classList.remove('pop-up_opened');

  const likeButtons = document.querySelectorAll('.cards__like-button');
  likeButtons.forEach(button => {
    button.addEventListener('click', () => {
      button.classList.toggle('cards__like-button_active');
    });
  });
  document.querySelectorAll('.cards__picture').forEach(image => {
    image.addEventListener('click', openImage);
  });
}

cardAddSubmitButton.addEventListener('click', addCard);

