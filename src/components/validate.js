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


function checkInputValidity(input, submitButton, config) {
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


function hasInvalidInput(inputList){
  return inputList.some((inputElement) => {
  return !inputElement.validity.valid;
}); 
}

export function blockSubmitButton(submitButton, inactiveButtonClass) {
  submitButton.classList.add(inactiveButtonClass);
  submitButton.disabled = true;
}

export function unlockSubmitButton(submitButton, inactiveButtonClass) {
  submitButton.classList.remove(inactiveButtonClass);
  submitButton.disabled = false
}


function toggleButtonState(inputList, submitButton, config){
  if (hasInvalidInput(inputList)){
    blockSubmitButton(submitButton, config.inactiveButtonClass);
  }
  else {unlockSubmitButton(submitButton, config.inactiveButtonClass);}
}


function setEventListeners (inputList, submitButton, config) {
  toggleButtonState(inputList, submitButton, config);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(inputElement, submitButton, config);
      toggleButtonState(inputList, submitButton, config);
    });
  });
};

export function enableValidation(config) {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
    const buttonElement = formElement.querySelector(config.submitButtonSelector);
    setEventListeners(inputList, buttonElement, config);
  });
};



