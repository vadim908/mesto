const showInputError = (formElement, inputElement, errorMessage) => {
    
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add('popup__form_error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('popup__text-error_active');
  };

  const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove('popup__form_error');
    errorElement.classList.remove('popup__text-error_active');

    errorElement.textContent = '';
  };

  const isValid = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      hideInputError(formElement, inputElement);
    }
  }; 

  const setEventListeners = (formElement) => {

    const inputList = Array.from(formElement.querySelectorAll('.popup__text'));
    const buttonElement = formElement.querySelector('.popup__button');
    toggleButtonState(inputList, buttonElement);

    inputList.forEach((inputElement) => {

      inputElement.addEventListener('input', () => {

        isValid(formElement, inputElement);
        toggleButtonState(inputList, buttonElement);
      });
    });
  }; 

  const enableValidation = () => {

    const formList = Array.from(document.querySelectorAll('.popup__container'));
  

    formList.forEach((formElement) => {
      formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
      });
      setEventListeners(formElement);
    });
  };
  
  const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  }; 


  const toggleButtonState = (inputList, buttonElement) => {

    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add('popup__button_disabled');
      buttonElement.disabled = 'disabled';
    } else {

      buttonElement.classList.remove('popup__button_disabled');
    }
  }; 


  enableValidation(); 
