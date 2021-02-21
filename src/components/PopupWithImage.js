import {Popup} from './Popup.js';

export class PopupWithImage extends Popup {
    constructor(popupElement){
        super(popupElement)
        this._popupElement = popupElement;
        this._poopImgCon = this._popupElement.querySelector(".popup-img__content");
        this._poopImgTitle = this._popupElement.querySelector(".popup-img__title");

    }
    
    open(img, header){
        
        
        poopImgCon.src = img.src;
        poopImgTitle.textContent = header.textContent;
        poopImgCon.alt = header.textContent;
        super.open();

    };
}