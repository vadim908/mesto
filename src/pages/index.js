import { Cards } from "../components/card.js";
import { FormValidator } from "../components/FormValidator.js";
import {Section} from '../components/Section.js';
import {Popup} from '../components/Popup.js';
import {PopupWithImage} from '../components/PopupWithImage.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import {UserInfo} from '../components/UserInfo.js';
import {profileButton,
        popupEdit,
        popupAuthor,
        popupCharacteristic,
        popupEditForm,
        buttonSetCards,
        popupCards,
        popurCardsForm,
        popupCardsButtonClose,
        containerSection,
        popupImgButtonClose,
        elementsCards,
        VALIDATION_SELECTORS_CONFIG,
        initialCards,
        popupImg,
        popupEditButtonClose
        } from '../utils/constants.js'
import './index.css';



const cardsData = new UserInfo({name: ".profile__title", post: ".profile__subtitle"})


const popupCardsCreate = new PopupWithForm(
    popupCards,
    (data)=> {
        const card = new Cards(data.name, data.url, "#card", handleCardClick);
        const cardsElement = card.generateCard();
    
        cardsList.prependAddNewItem(cardsElement);
        popupCardsCreate.close();
    });
    popupCardsCreate.setEventListeners();

const editPopup = new PopupWithForm(
    popupEdit,
    (data) => {
        cardsData.setUserInfo(data)
    });
    
    editPopup.setEventListeners();

profileButton.addEventListener("click", () => {
    popupAuthor.value = cardsData.getUserInfo().popupProfileName;
    popupCharacteristic.value = cardsData.getUserInfo().popupProfilePost;
    editPopup.open(popupEdit)
    profileValidator.toggleFormState();  
});


buttonSetCards.addEventListener("click", () => {
    popupCardsCreate.open(popupCards)
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
    popupWithImg.setEventListeners();
})

const popupWithImg = new PopupWithImage(popupImg);

function handleCardClick (img, header){
    popupWithImg.open(img, header)
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

