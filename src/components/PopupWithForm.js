import {Popup} from './Popup.js';

export class PopupWithForm extends Popup{
    constructor(popupElement, handleSubmit ){
        super(popupElement)
        this._handleSubmit = handleSubmit;
    }

        _getInputValues() {
            this._inputList = this._popupElement.querySelectorAll('.popup__text');
            this._inputValues = {};
            this._inputList.forEach(input => {
              this._inputValues[input.name] = input.value;
            });
            return this._inputValues;
        }


    setEventListeners(){
        super.setEventListeners()
        
        this._popupElement.querySelector(".popup__container").addEventListener('submit', this._handleSubmit);
        
    }

    close(){
        this._form = this._popupElement.querySelector('.popup__container')
        this._form.reset();
        super.close();
    }
}
