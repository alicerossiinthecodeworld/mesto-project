export function blockSubmitButton() {
  const submitButton = event.target.closest('.pop-up').querySelector('.pop-up__submit');
  submitButton.classList.add('pop-up__submit_inavailible');
}

export function unlockSubmitButton() {
  const submitButton = event.target.closest('.pop-up').querySelector('.pop-up__submit');
  submitButton.classList.remove('pop-up__submit_inavailible');
}

export const showInputError = (inputElement, errorMessage) => {
  const errorElement = document.querySelector(`.${inputElement.name}-error`);
  inputElement.classList.add('pop-up__input_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('pop-up__error_visible');
  blockSubmitButton();
};

export const hideInputError = (input) => {
  const inputElement = input.target || input;
  const errorElement = document.querySelector(`.${inputElement?.name}-error`);
  if (errorElement) {
    errorElement.classList.remove('pop-up__error_visible');
    errorElement.textContent = '';
  }
  inputElement?.classList.remove('pop-up__input_error');
};








