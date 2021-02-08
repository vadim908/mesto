
import { initialCards } from "./initialCards.js";
import { Cards } from "./card.js";
import { FormValidator } from "./FormValidator.js";
import { VALIDATION_SELECTORS_CONFIG } from "./validationConfig.js";
import {Section} from './Section.js';
import {Popup} from './Popup.js';
import {PopupWithImage} from './PopupWithImage.js';
import {PopupWithForm} from './PopupWithForm.js';
import {UserInfo} from './UserInfo.js';
import '../pages/index.css';

const profileButton = document.querySelector(".profile__button");
const popupEdit = document.querySelector(".popup-edit");
const popupAuthor = document.querySelector(".popup__text_author");
const popupCharacteristic = document.querySelector(".popup__text_characteristic");
const popupEditButtonClose = document.querySelector(".popup-edit__button-close");
const popupEditForm = document.querySelector(".popup-edit__container");
const buttonSetCards = document.querySelector(".button");
const popupCards = document.querySelector(".popup-cards");
const popurCardsForm = document.querySelector(".popup-cards__container");
const popupCardsButtonClose = document.querySelector(".popup-cards__button-close");
const containerSection = document.querySelector(".elements")
const popupImgButtonClose = document.querySelector(".popup-img__button-close")
const elementsCards = document.querySelector(".elements");

const cardsData = new UserInfo({name: ".profile__title", post: ".profile__subtitle"})


const popupCardsCreate = new PopupWithForm(
    popupCards,
    (data)=> {


        const card = new Cards(data.name, data.url, "#card", handleCardClick);
        const cardsElement = card.generateCard();
    
        elementsCards.prepend(cardsElement);
        popupCardsCreate.close(popupCards);
    });
    popupCardsCreate.setEventListeners(popupCards);

const editPopup = new PopupWithForm(
    popupEdit,
    (data) => {
        popupAuthor.value = data.name;
        popupCharacteristic.value = data.post;
        cardsData.setUserInfo(data)
        
    });
    
    editPopup.setEventListeners(popupEdit);

profileButton.addEventListener("click", () => {
    const popupEditProfile = new Popup(popupEdit);
    cardsData.openUserInfo(cardsData.getUserInfo());
    popupEditProfile.openPopup(popupEdit)
    profileValidator.toggleFormState();  
});


buttonSetCards.addEventListener("click", () => {
    const popupCardsNew = new Popup(popupCards);
    popupCardsNew.openPopup(popupCards)
    cardsValidator.toggleFormState();
});

popupEditButtonClose.addEventListener("click", () => {
    editPopup.close();
});

popupCardsButtonClose.addEventListener("click", () =>{
    popupCardsCreate.close();
});

popupImgButtonClose.addEventListener("click", () => {
    popupCardsCreate.close();
})

function handleCardClick (img, header){
    const popupImg = document.querySelector(".popup-img");
    const popupWithImg = new PopupWithImage(popupImg);
    popupWithImg.openPopupImg(img, header)
}

const cardsList = new Section({
    items: initialCards,
    renderer: (item) => {
    
    const card = new Cards(item.name, item.link, "#card", handleCardClick);
        // Создаём карточку и возвращаем наружу
        const cardElement = card.generateCard();      
        cardsList.addItem(cardElement);
      },
    },
    containerSection
  );

  cardsList.renderItems();


const profileValidator = new FormValidator(VALIDATION_SELECTORS_CONFIG, popupEditForm);
profileValidator.enableValidation();

const cardsValidator = new FormValidator(VALIDATION_SELECTORS_CONFIG, popurCardsForm);
cardsValidator.enableValidation();

