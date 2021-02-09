export const profileButton = document.querySelector(".profile__button");
export const popupEdit = document.querySelector(".popup-edit");
export const popupAuthor = document.querySelector(".popup__text_author");
export const popupCharacteristic = document.querySelector(".popup__text_characteristic");
export const popupEditButtonClose = document.querySelector(".popup-edit__button-close");
export const popupEditForm = document.querySelector(".popup-edit__container");
export const buttonSetCards = document.querySelector(".button");
export const popupCards = document.querySelector(".popup-cards");
export const popurCardsForm = document.querySelector(".popup-cards__container");
export const popupCardsButtonClose = document.querySelector(".popup-cards__button-close");
export const containerSection = document.querySelector(".elements")
export const popupImgButtonClose = document.querySelector(".popup-img__button-close")
export const elementsCards = document.querySelector(".elements");
export const popupImg = document.querySelector(".popup-img");

export const VALIDATION_SELECTORS_CONFIG = {
    formSelector: '.popup__container',
    inputSelector: '.popup__text',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__text_error',
    errorClass: 'error_active'
  };

  export const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];
