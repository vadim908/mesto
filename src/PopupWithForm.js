import {Popup} from './Popup.js';

export class PopupWithForm extends Popup{
    constructor(popupSelector, ew){
        super(popupSelector)
        this._popupSelector = popupSelector;
        this._ew = ew;
    }

        _getInputValues() {
            this._inputList = this._popupSelector.querySelectorAll('.popup__text');
            this._inputValues = {};   
            this._inputList.forEach(input => {
              this._inputValues[input.name] = input.value;
            });
            return this._inputValues;  
        }
    

    setEventListeners(){
        this._popupSelector.querySelector(".popup__container").addEventListener('submit', (evt)=> {
            evt.preventDefault();
            this._ew(this._getInputValues())
            super.closePopup();
        }); 
    }

    close(){
        this._form = this._popupSelector.querySelector('.popup__container')
        this._form.reset();
        super.closePopup();
    }
}