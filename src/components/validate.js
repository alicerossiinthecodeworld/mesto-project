export function checkValidity(input, submitButton, config) {
  const regex = /^[a-zA-Zа-яА-ЯёЁ-\s]+$/;
  const symbols = input.value.length;

  if (input.name === 'name') {
    console.log('имя')
    if (!input.value) {
      showInputError(input, 'Вы пропустили это поле', submitButton, config);
      return false;
    }
    if (symbols < 2) {
      showInputError(input, 'Минимальное количество символов 2, сейчас ' + symbols, submitButton, config);
      return false;
    }
    if (symbols > 40) {
      showInputError(input, 'Должно быть до 40 символов, сейчас ' + symbols, submitButton, config);
      return false;
    }
    if (!regex.test(input.value)) {
      const errorMessage = "Разрешены только латинские, кириллические буквы, знаки дефиса и пробелы";
      showInputError(input, errorMessage, submitButton, config);
      return false;
    }
  }

  if (input.name === 'profession') {
    console.log('повар спрашивает повара')
    if (!input.value) {
      showInputError(input, 'Вы пропустили это поле', submitButton, config);
      return false;
    }
    if (symbols < 2) {
      showInputError(input, 'Минимальное количество символов 2, сейчас ' + symbols, submitButton, config);
      return false;
    }
    if (symbols > 200) {
      showInputError(input, 'Должно быть до 200 символов, сейчас ' + symbols, submitButton, config);
      return false;
    }
    if (!regex.test(input.value)) {
      const errorMessage = "Разрешены только латинские, кириллические буквы, знаки дефиса и пробелы";
      showInputError(input, errorMessage, submitButton, config);
      return false;
    }
  }

  if (input.name === 'title') {
    console.log('титул')
    if (!input.value) {
      showInputError(input, 'Вы пропустили это поле',submitButton, config);
      return false;
    }
    if (symbols < 2) {
      showInputError(input, 'Минимальное количество символов 2, сейчас ' + symbols, submitButton, config);
      return false;
    }
    if (symbols > 30) {
      showInputError(input, 'Должно быть до 30 символов, сейчас ' + symbols, submitButton, config);
      return false;
    }
    if (!regex.test(input.value)) {
      const errorMessage = "Разрешены только латинские, кириллические буквы, знаки дефиса и пробелы";
      showInputError(input, errorMessage, submitButton, config);
      return false;
    }
  }

  if (input.name === 'link') {
    console.log('линк');
    if (!input.value) {
      showInputError(input, 'Вы пропустили это поле',submitButton, config);
      return false;
    }
    const isURL = /^(ftp|http|https):\/\/[^ "]+$/.test(input.value);
    if (!isURL) {
      showInputError(input, 'Введите адрес сайта', submitButton, config);
      return false;
    }
  }

  hideInputError(input, config);
  return true;
}


export function blockSubmitButton(submitButton, inactiveButtonClass) {
  console.log(submitButton);
  submitButton.classList.add(inactiveButtonClass);
  submitButton.disabled = true;
}

export function unlockSubmitButton(submitButton, inactiveButtonClass) 
{
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
  console.log('enableValidation called');
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
      input.isValid = true;
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
  input.isValid = checkValidity(input, submitButton, config);
  const inputs = Array.from(form.querySelectorAll(config.inputSelector));
  const isFormValid = inputs.every(input => input.isValid);
  console.log(isFormValid)
  isFormValid ? unlockSubmitButton(submitButton, config.inactiveButtonClass) : blockSubmitButton(submitButton, config.inactiveButtonClass);
}