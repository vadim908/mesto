class Cards {
    constructor(name, link, template, openPoopImg){
        this._name = name;
        this._link = link;
        this._template = template;
        this._openPoopImg = openPoopImg;
    }
    
    _getTemplate() {
        // забираем размеку из HTML и клонируем элемент
          const cardElement = document
          .querySelector(this._template)
          .content
          .querySelector('.element')
          .cloneNode(true);
          
        // вернём DOM-элемент карточки
          return cardElement;
      }

      _handleLike(){
        this._element.querySelector('.element__heart').addEventListener('click', () => {
          this._element.querySelector('.element__heart').classList.toggle('element__heart_active');
        });
      }

      _removeCard() {
        this._element.querySelector('.element__trash').addEventListener('click', () => {
          this._element.remove();
          this._element = null;
        });
      }

      _openPopupImgCard(){
        this._element.querySelector('.element__img').addEventListener('click', () => {
        this._elementImg = this._element.querySelector('.element__img');
        this._elementTitle = this._element.querySelector('.element__title');
        this._openPoopImg(this._elementImg, this._elementTitle)
       })
      }

      generateCard() {
        // Запишем разметку в приватное поле _element. 
        // Так у других элементов появится доступ к ней.
        this._element = this._getTemplate();
        this._removeCard();
        this._handleLike();
        this._openPopupImgCard();

        // Добавим данные
        this._element.querySelector('.element__img').src = this._link;
        this._element.querySelector('.element__title').textContent = this._name;
        this._element.querySelector('.element__img').alt = this._name;

        // Вернём элемент наружу
        return this._element;
      } 
}

export {Cards};