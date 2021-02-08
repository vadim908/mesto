export class Popup {
    constructor(popupSelector){
        this._popupSelector = popupSelector;
    }

    _closePopupKeyEscape(evt){
        const popurOpen = document.querySelector(".popup_opened");
        if (evt.key === "Escape" && popurOpen != null) {
            this.closePopup(popurOpen);
        }
    };
    
    _closeOverlay(evt){
        const popurOpen = document.querySelector(".popup_opened");
        if (evt.target === popurOpen) {
            this.closePopup(popurOpen);
        }
    };

    openPopup() {
        this._popupSelector.classList.add("popup_opened");
        document.addEventListener("keydown", this._closePopupKeyEscape);
        document.addEventListener("mousedown", this._closeOverlay);
    }

    closePopup() {
        this._popupSelector.classList.remove("popup_opened");
    }

    setEventListeners(){
       
        this._popupSelector.querySelector(".popup__button-close").addEventListener('click', this.closePopup());
        
    }
}