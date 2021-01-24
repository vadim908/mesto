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
  
          this._isValid(inputElement);
          this._toggleButtonState(inputList, buttonElement, this._config);
          
        });
      });
    }; 

    enableValidation () {
        this._setEventListeners();
      };
    
      
      _toggleButtonState (inputList, buttonElement) {
    
        if (this._hasInvalidInput(inputList)) {
          buttonElement.classList.add(this._config.inactiveButtonClass);
          buttonElement.disabled = 'disabled';
        } else {
    
          buttonElement.classList.remove(this._config.inactiveButtonClass);
          buttonElement.disabled = '';
        }
      }; 
      
      toggleFormState(){
        const inputList = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));
        const buttonElement = this._formElement.querySelector(this._config.submitButtonSelector);
        
        this._toggleButtonState(inputList, buttonElement);
      };

      _hasInvalidInput (inputList) {
        return inputList.some((inputElement) => {
          return !inputElement.checkValidity();
        })
      };
    };
    
    export {FormValidator}
    import {VALIDATION_SELECTORS_CONFIG} from './validationConfig.js';
   