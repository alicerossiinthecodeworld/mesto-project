import {hideInputError} from "./utils";

export function closePopUp(popUp) {
  const errorInputs = popUp.querySelectorAll('.pop-up__input_error');
  errorInputs.forEach((input)=> {hideInputError(input);})
  popUp.classList.remove('pop-up_opened');
}

export function openPopUp(popUp) {
  popUp.classList.add('pop-up_opened');
}
