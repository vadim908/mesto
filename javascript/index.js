const profileButton = document.querySelector('.profile__button');
const popupEdit = document.querySelector('.popup-edit');
const profileAvatar = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle')
const popupAuthor = document.querySelector('.popup__text_author');
const popupCharacteristic = document.querySelector('.popup__text_characteristic');
const popupEditButtonClose = document.querySelector('.popup-edit__button-close');
const popupEditForm = document.querySelector('.popup-edit__container');
const buttonSetCards = document.querySelector('.button');
const popupCards = document.querySelector('.popup-cards');
const popurCardsForm = document.querySelector('.popup-cards__container');
const popupCardsButtonClose = document.querySelector('.popup-cards__button-close');
const poopImg = document.querySelector('.popup-img');

const templateCards = document.querySelector('#card');
const elementsCards = document.querySelector('.elements');


const newCardsElementName = document.querySelector('.popup-cards__name');
const newCardsElementImg = document.querySelector('.popup-cards__url');

const closePopupKeyEscape = (evt) => {
    
    const popurOpen = document.querySelector('.popup_opened');
    if (evt.key === 'Escape' && popurOpen != null) {
        closePopup(popurOpen);
      };
}



const closeOverlay = (evt) => {
    const popurOpen = document.querySelector('.popup_opened');
        if(evt.target === popurOpen){
            closePopup(popurOpen);
        };
}

function openPopup(data){
    data.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupKeyEscape);
    document.addEventListener('mousedown', closeOverlay);

}

function addInfoPopupEdit () {
    popupAuthor.value = profileAvatar.textContent;
    popupCharacteristic.value = profileSubtitle.textContent;
    
}

function savePopupEditForm(evt){
    evt.preventDefault();
    profileAvatar.textContent = popupAuthor.value;
    profileSubtitle.textContent = popupCharacteristic.value;
    closePopup(popupEdit);
}



 export function openPoopImg (img, header) {
    openPopup(poopImg);
    const poopImgCon = document.querySelector('.popup-img__content');
    const poopImgTitle = document.querySelector('.popup-img__title');
    poopImgCon.src = img.src;
    poopImgCon.alt = header.textContent;
    poopImgTitle.textContent = header.textContent;
}

function  handleNewCard(event){
    event.preventDefault();
    
    const headerText = newCardsElementName.value;
    const imgSrc = newCardsElementImg.value;
    
   
    const card = new Cards (headerText, imgSrc);
    const cardsElement = card._generateCard();
    
    elementsCards.prepend(cardsElement);
    closePopup(popupCards)
    popurCardsForm.reset();
    
}



function closePopup(data){
    data.classList.remove('popup_opened');
    
}

profileButton.addEventListener('click', ()  => {
    openPopup(popupEdit)
    addInfoPopupEdit();

    const profileValidator = new FormValidator(VALIDATION_SELECTORS_CONFIG, popupEditForm);
    profileValidator.toggleFormState();

});

buttonSetCards.addEventListener('click', ()  =>{ 
    openPopup(popupCards);
    const cardsValidator = new FormValidator(VALIDATION_SELECTORS_CONFIG, popurCardsForm);
    cardsValidator.toggleFormState();

});



popupEditButtonClose.addEventListener('click', ()  => closePopup(popupEdit));
popupCardsButtonClose.addEventListener('click', ()  => closePopup(popupCards));
poopImg.addEventListener('click', ()  => closePopup(poopImg));

popupEditForm.addEventListener('submit', savePopupEditForm);
popurCardsForm.addEventListener('submit',  handleNewCard);


import {Cards} from './card.js';
import {FormValidator} from './FormValidator.js';
import {VALIDATION_SELECTORS_CONFIG} from './validationConfig.js';