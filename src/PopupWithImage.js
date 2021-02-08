import {Popup} from './Popup.js';

export class PopupWithImage extends Popup {
    constructor(popupSelector){
        super(popupSelector)

    }
    
    openPopupImg(img, header){
        
        const poopImgCon = document.querySelector(".popup-img__content");
        const poopImgTitle = document.querySelector(".popup-img__title");
        poopImgCon.src = img.src;
        poopImgTitle.textContent = header.textContent;
        poopImgCon.alt = header.textContent;
        super.setEventListeners();
        super.openPopup();

    };
}