class FormValidator {
  constructor(config, formElement) {
      this._config = config;
      this._formElement = formElement;
      this._inputList = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));
      this._buttonElement = this._formElement.querySelector(this._config.submitButtonSelector);
  }

  _showInputError(inputElement, errorMessage) {
      const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
      inputElement.classList.add(this._config.inputErrorClass);
      errorElement.textContent = errorMessage;
      errorElement.classList.add(this._config.errorClass);
  }

  _hideInputError(inputElement) {
      const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
      inputElement.classList.remove(this._config.inputErrorClass);
      errorElement.classList.remove(this._config.errorClass);

      errorElement.textContent = "";
  }

  _isValid(inputElement) {
      if (!inputElement.checkValidity()) {
          this._showInputError(inputElement, inputElement.validationMessage);
      } else {
          this._hideInputError(inputElement);
      }
  }

  _setEventListeners() {
      this._toggleButtonState(this._config);

      this._inputList.forEach((inputElement) => {
          inputElement.addEventListener("input", () => {
              this._isValid(inputElement);
              this._toggleButtonState(this._config);
          });
      });
  }

  _resetDefault() {
      this._formElement.addEventListener("submit", (evt) => {
          evt.preventDefault();
      });
  }

  enableValidation() {
      this._resetDefault();
      this._setEventListeners();
  }

  _toggleButtonState() {
      if (this._hasInvalidInput(this._inputList)) {
        this._buttonElement.classList.add(this._config.inactiveButtonClass);
        this._buttonElement.disabled = "disabled";
      } else {
        this._buttonElement.classList.remove(this._config.inactiveButtonClass);
        this._buttonElement.disabled = "";
      }
  }

  toggleFormState() {
      this._toggleButtonState();
      this._inputList.forEach((inputElement) => {
        this._hideInputError(inputElement)
      });


  }

  _hasInvalidInput() {
      return this._inputList.some((inputElement) => {
          return !inputElement.checkValidity();
      });
  }
}

export { FormValidator };
