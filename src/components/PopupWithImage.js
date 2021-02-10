import {Popup} from './Popup.js';

export class PopupWithImage extends Popup {
    constructor(popupElement){
        super(popupElement)
        this._popupElement = popupElement;

    }
    
    open(img, header){
        
        const poopImgCon = this._popupElement.querySelector(".popup-img__content");
        const poopImgTitle = this._popupElement.querySelector(".popup-img__title");
        poopImgCon.src = img.src;
        poopImgTitle.textContent = header.textContent;
        poopImgCon.alt = header.textContent;
        super.open();

    };
}