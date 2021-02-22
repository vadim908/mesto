import {Popup} from './Popup.js';

export class PopupDelForm extends Popup{
    constructor(popupElement){
        super(popupElement)
        this._buttonDel = document.querySelector('.popup-del__button');
    }

    setEventListeners(handlerButtonDel){
        super.setEventListeners();
        this._handlerButtonDel = handlerButtonDel;
        this._buttonDel.addEventListener('click', this._handlerButtonDel)
    }

    close(){
        super.close();
        this._buttonDel.removeEventListener('click', this._handlerButtonDel)
    }
}