function checkValidity(input, submitButton, config) {
  input.setCustomValidity('');
  if (!input.checkValidity()) {
    if (input.validity.patternMismatch){
      input.setCustomValidity(input.dataset.errorMessage);
    }
    showInputError(input, input.validationMessage, submitButton, config);
    return false;
  }
  else { 
    hideInputError(input, config);
    return true;
  }  
}

export function blockSubmitButton(submitButton, inactiveButtonClass) {
  submitButton.classList.add(inactiveButtonClass);
  submitButton.disabled = true;
}

export function unlockSubmitButton(submitButton, inactiveButtonClass) {
  submitButton.classList.remove(inactiveButtonClass);
  submitButton.disabled = false
}
export function showInputError(inputElement, errorMessage, submitButton, config) {
  const errorElement = document.querySelector(`.${inputElement.name}-error`);
  inputElement.classList.add(config.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(config.errorClass);
  blockSubmitButton(submitButton, config.inactiveButtonClass);
};

export function hideInputError(input, config) {
  const inputElement = input.target || input;
  const errorElement = document.querySelector(`.${inputElement.name}-error`);
  if (errorElement) {
    errorElement.classList.remove(config.errorClass);
    errorElement.textContent = '';
  }
  inputElement.classList.remove(config.inputErrorClass);
};

export function enableValidation(config) {
  const forms = Array.from(document.querySelectorAll(config.formSelector));
  forms.forEach((form) => {
    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    const inputs = Array.from(form.querySelectorAll(config.inputSelector));
    const submitButton = form.querySelector(config.submitButtonSelector);
    const inputArray = [];

    function handleFormSubmit(event) {
      event.preventDefault();
    }

    inputs.forEach(input => {
      inputArray.push(input);
      input.addEventListener('input', () => handleFormInput(input, config));
    });

    form.addEventListener('submit', handleFormSubmit);

    blockSubmitButton(submitButton, config.inactiveButtonClass);
  });
}

export function handleFormInput(input, config) {
  const form = input.closest(config.formSelector);
  const submitButton = form.querySelector(config.submitButtonSelector);
  const inputs = Array.from(form.querySelectorAll(config.inputSelector));
  inputs.forEach((input) => {
    checkValidity(input, submitButton, config);
  });
  const isFormValid = inputs.every(input => input.validity.valid);
  isFormValid ? unlockSubmitButton(submitButton, config.inactiveButtonClass) : blockSubmitButton(submitButton, config.inactiveButtonClass);
}





