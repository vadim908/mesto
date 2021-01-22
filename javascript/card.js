export class Cards {
    constructor(name, link,){
        this._name = name;
        this._link = link;
    }

    _getTemplate() {
        // забираем размеку из HTML и клонируем элемент
          const cardElement = document
          .querySelector('#card')
          .content
          .querySelector('.element')
          .cloneNode(true);
          
        // вернём DOM-элемент карточки
          return cardElement;
      }

      _generateCard() {
        // Запишем разметку в приватное поле _element. 
        // Так у других элементов появится доступ к ней.
        this._element = this._getTemplate();
        this._element.querySelector('.element__trash').addEventListener('click', () => {
          this._element.remove()
        });

        this._element.querySelector('.element__heart').addEventListener('click', () => {
          this._element.querySelector('.element__heart').classList.toggle('element__heart_active');
        });

        this._element.querySelector('.element__img').addEventListener('click', () => {
           this._elementImg = this._element.querySelector('.element__img');
           this._elementTitle = this._element.querySelector('.element__title');
          openPoopImg(this._elementImg, this._elementTitle)
        })

        // Добавим данные
        this._element.querySelector('.element__img').src = this._link;
        this._element.querySelector('.element__title').textContent = this._name;
        
        

        // Вернём элемент наружу
        return this._element;


        
      }

      
      
}

initialCards.forEach((item) => {
    // Создадим экземпляр карточки
    const card = new Cards(item.name, item.link);
    // Создаём карточку и возвращаем наружу
    const cardElement = card._generateCard();
  
    // Добавляем в DOM
    document.querySelector('.elements').append(cardElement);
  }); 

  import {initialCards} from './initialCards.js';
  import {openPoopImg} from './index.js';