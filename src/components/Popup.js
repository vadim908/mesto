export class Popup {
    constructor(popupElement){
        this._popupElement = popupElement;
    }

    _closePopupKeyEscape(evt){
        if (evt.key === "Escape" && this._popupElement != null) {
            this.close.bind(this._popupElement);
        }
    };
    
    _closeOverlay(evt){
        if (evt.target === this._popupElement) {
            this.close.bind(this._popupElement);
        }
    };

    open() {
        this._popupElement.classList.add("popup_opened");
        document.addEventListener("keydown", this._closePopupKeyEscape);
        document.addEventListener("mousedown", this._closeOverlay);
    }

    close() {
        this._popupElement.classList.remove("popup_opened");
        document.removeEventListener("keydown", this._closePopupKeyEscape);
        document.removeEventListener("mousedown", this._closeOverlay);
    }

    setEventListeners(){
       
        this._popupElement.querySelector(".popup__button-close").addEventListener('click', this.close());
        
    }
}