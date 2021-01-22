class FormValidator {
    constructor(config, formElement){
        this._config = config;
        this._formElement = formElement;
    }

    _showInputError (inputElement, errorMessage) {
    
      const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
      inputElement.classList.add(this._config.inputErrorClass);
      errorElement.textContent = errorMessage;
      errorElement.classList.add(this._config.errorClass);
    };

    _hideInputError (inputElement){
      const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
      inputElement.classList.remove(this._config.inputErrorClass);
      errorElement.classList.remove(this._config.errorClass);
  
      errorElement.textContent = '';
    };

    _isValid(inputElement) {
      if (!inputElement.checkValidity()) {
        this._showInputError(inputElement, inputElement.validationMessage);
      } else {
        this._hideInputError(inputElement);
      }
    };

    _setEventListeners(){

      const inputList = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));
      const buttonElement = this._formElement.querySelector(this._config.submitButtonSelector);
      this._toggleButtonState(inputList, buttonElement, this._config);
      
      inputList.forEach((inputElement) => {
  
        inputElement.addEventListener('input', () => {
  
          this._isValid(this._formElement, inputElement, this._config);
          this._toggleButtonState(inputList, buttonElement, this._config);
        });
      });
    }; 

    enableValidation () {

      const formList = document.querySelectorAll(this._config.formSelector);
  
  
      formList.forEach(() => {
        this._formElement.addEventListener('submit', (evt) => {
          evt.preventDefault();
        });
        this._setEventListeners();
      });
    }

      _toggleButtonState (inputList, buttonElement) {
    
        if (this._hasInvalidInput(inputList)) {
          buttonElement.classList.add(this._config.inactiveButtonClass);
          buttonElement.disabled = 'disabled';
        } else {
    
          buttonElement.classList.remove(this._config.inactiveButtonClass);
          buttonElement.disabled = '';
        }
      }; 
      
      _toggleFormState (){
        const inputList = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));
        const buttonElement = this._formElement.querySelector(this._config.submitButtonSelector);
        
        this.toggleButtonState(inputList, buttonElement);
      };

      _hasInvalidInput (inputList) {
        return inputList.some((inputElement) => {
          return !inputElement.checkValidity();
        })
      };
    };
      

    const VALIDATION_SELECTORS_CONFIG = {
      formSelector: '.popup__container',
      inputSelector: '.popup__text',
      submitButtonSelector: '.popup__button',
      inactiveButtonClass: 'popup__button_disabled',
      inputErrorClass: 'popup__text_error',
      errorClass: 'error_active'
    };
    
    const submitFormEditProfileNode = document.querySelector('.popup-edit__container');
    
      
    const profileValidator = new FormValidator(VALIDATION_SELECTORS_CONFIG, submitFormEditProfileNode);
    profileValidator.enableValidation();

    
    

    
    
  



    

      

        
        
        

