import { hideInputError} from "./validate";

export function closePopUp(popUp, config) {
  const errorInputs = popUp.querySelectorAll('.pop-up__input_error');
  errorInputs.forEach((input) => { hideInputError(input, config); })
  popUp.classList.remove('pop-up_opened');
  document.removeEventListener('keydown', handleEscKey);
  popUp.removeEventListener('click', handleClickOverlay);
}

export function openPopUp(popUp) {
  popUp.classList.add('pop-up_opened');
  document.addEventListener('keydown', handleEscKey);
  popUp.addEventListener('click', handleClickOverlay);
}

function handleEscKey(event) {
  if (event.key === 'Escape') {
    const activePopUp = document.querySelector('.pop-up_opened');
    if (activePopUp) {
      closePopUp(activePopUp, {});
    }
  }
}

function handleClickOverlay(event) {
  if (event.target === event.currentTarget) {
    closePopUp(event.currentTarget, {});
  }
}