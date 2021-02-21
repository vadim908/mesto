import { PopupWithImage } from './PopupWithImage.js'

class Cards {
    constructor({ name, link, _id, likes, owner, userId }, template, openPopupImg, delButtonForm, addLike, removeLike) {
        this._name = name;
        this._link = link;
        this._template = template;
        this._openPopupImg = openPopupImg;
        this._delButtonForm = delButtonForm;
        this._likes = likes;
        this._ownerId = owner._id;
        this._imageId = _id;
        this._userId = userId;
        this._addLike = addLike;
        this._removeLike = removeLike;
        this._handleLike = this._handleLike.bind(this);
    }

    _getTemplate() {
        // забираем размеку из HTML и клонируем элемент
        const cardElement = document.querySelector(this._template).content.querySelector(".element").cloneNode(true);

        // вернём DOM-элемент карточки
        return cardElement;
    }

    //   handleLike() {
    //     const handleLike = this._element.querySelector(".element__heart");
    //         handleLike.addEventListener("click", () => {  
    //           handleLike.classList.toggle("element__heart_active");
    //       });
    //   }

    likeCounter(counter) {
        this._element.querySelector('.element__number').textContent = counter;
    }

    _handleLike(evt) {
        if (!evt.target.classList.contains('element__heart_active')) {
            this._element.querySelector('.element__heart').classList.add('element__heart_active');
            this._addLike();
        } else {
            this._element.querySelector('.element__heart').classList.remove('element__heart_active');
            this._removeLike();
        }
    }


    checkLikes() {
        this._likes.forEach((item) => {
            if (item._id === this._userId) {
                this._element.querySelector(".element__heart").classList.add("element__heart_active")
            }
        })
    }



    removeCard() {
        this._element.remove();
        this._element = null;
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
        //   this.checkLikes()
        const popupImg = this._element.querySelector(".element__img");
        this._element.querySelector('.element__heart').addEventListener('click', this._handleLike)
        this._element.querySelector('.element__number').textContent = this._likes.length;
        console.log(this._likes.length)
        this._likes.forEach((item) => {
            if (item._id === this._userId) {
                this._element.querySelector(".element__heart").classList.add("element__heart_active")
            }
        })
        this._openPopupImgCard(popupImg);
        if (this._ownerId !== this._userId) {
            this._element.querySelector('.element__trash').remove();
        }
        if (this._ownerId === this._userId) {
            this._element.querySelector('.element__trash').addEventListener('click', this._delButtonForm);
        }
        // Добавим данные
        popupImg.src = this._link;
        this._element.querySelector(".element__title").textContent = this._name;
        popupImg.alt = this._name;

        // Вернём элемент наружу
        return this._element;

        /////

        // создаем переменную привязанную к элементу ссылки
        // даем картинке ссылку(.src) и alt
        const cardPhotoElement = this._element.querySelector('.element__link');
        // привязываем текст к карточке
        this._element.querySelector('.element__text').textContent = this._name;
        this._cardImage = cardPhotoElement;
        this._cardImage.src = this._link;
        this._cardImage.alt = this._name;
        //вызываем слушатели
        this._element.querySelector('.element__number').textContent = this._likes.length;
        this._likes.forEach((item) => {
            if (item._id === this._userId) {
                this._element.querySelector('.element__like').classList.add('element__like_active');
            }
        })
        this._removeButton = this._element.querySelector('.element__trash');
        this._setEventListener();
        this.checkId();
        return this._element;
    }


    returnCardsId() {
        return this._imageId;
    }
}






export { Cards };