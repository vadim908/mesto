import {Popup} from './Popup.js';

export class PopupWithForm extends Popup{
    constructor(popupElement, handleSubmit ){
        super(popupElement)
        this._handleSubmit = handleSubmit;
        this._form = this._popupElement.querySelector('.popup__container')
        this._inputList = this._popupElement.querySelectorAll('.popup__text');
    }

        _getInputValues() {
            this._inputValues = {};
            this._inputList.forEach(input => {
              this._inputValues[input.name] = input.value;
            });
            
            return this._inputValues;
            
        }


    setEventListeners(){
        super.setEventListeners()
        
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault()
            this._handleSubmit( this._getInputValues()) 
        });
        
    }

    close(){
        this._form.reset();
        super.close();
    }
}
