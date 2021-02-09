import {PopupWithImage} from './PopupWithImage.js'

class Cards {
  constructor(name, link, template, openPopupImg) {
      this._name = name;
      this._link = link;
      this._template = template;
      this._openPopupImg = openPopupImg;
  }

  _getTemplate() {
      // забираем размеку из HTML и клонируем элемент
      const cardElement = document.querySelector(this._template).content.querySelector(".element").cloneNode(true);

      // вернём DOM-элемент карточки
      return cardElement;
  }

  _handleLike() {
    const handleLike = this._element.querySelector(".element__heart");
        handleLike.addEventListener("click", () => {  
          handleLike.classList.toggle("element__heart_active");
      });
  }

  _removeCard() {
      this._element.querySelector(".element__trash").addEventListener("click", () => {
          this._element.remove();
          this._element = null;
      });
  }

  _openPopupImgCard(popupImg) {
    popupImg.addEventListener("click", () => {
        this._elementImg = popupImg;
        this._elementTitle = this._element.querySelector(".element__title");
        this._openPopupImg(this._elementImg, this._elementTitle);
    });
}
  
  generateCard() {
      // Запишем разметку в приватное поле _element.
      // Так у других элементов появится доступ к ней.

      this._element = this._getTemplate();
      const popupImg = this._element.querySelector(".element__img");
      this._removeCard();
      this._handleLike();
      this._openPopupImgCard(popupImg);

      // Добавим данные
      popupImg.src = this._link;
      this._element.querySelector(".element__title").textContent = this._name;
      popupImg.alt = this._name;

      // Вернём элемент наружу
      return this._element;
  }
}

export { Cards };
