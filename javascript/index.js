const profileButton = document.querySelector(".profile__button");
const popupEdit = document.querySelector(".popup-edit");
const profileAvatar = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const popupAuthor = document.querySelector(".popup__text_author");
const popupCharacteristic = document.querySelector(".popup__text_characteristic");
const popupEditButtonClose = document.querySelector(".popup-edit__button-close");
const popupEditForm = document.querySelector(".popup-edit__container");
const buttonSetCards = document.querySelector(".button");
const popupCards = document.querySelector(".popup-cards");
const popurCardsForm = document.querySelector(".popup-cards__container");
const popupCardsButtonClose = document.querySelector(".popup-cards__button-close");
const poopImg = document.querySelector(".popup-img");

const elementsCards = document.querySelector(".elements");

const newCardsElementName = document.querySelector(".popup-cards__name");
const newCardsElementImg = document.querySelector(".popup-cards__url");

const closePopupKeyEscape = (evt) => {
    const popurOpen = document.querySelector(".popup_opened");
    if (evt.key === "Escape" && popurOpen != null) {
        closePopup(popurOpen);
    }
};

const closeOverlay = (evt) => {
    const popurOpen = document.querySelector(".popup_opened");
    if (evt.target === popurOpen) {
        closePopup(popurOpen);
    }
};

function openPopup(data) {
    data.classList.add("popup_opened");
    document.addEventListener("keydown", closePopupKeyEscape);
    document.addEventListener("mousedown", closeOverlay);
}

function addInfoPopupEdit() {
    popupAuthor.value = profileAvatar.textContent;
    popupCharacteristic.value = profileSubtitle.textContent;
}

function savePopupEditForm(evt) {
    evt.preventDefault();
    profileAvatar.textContent = popupAuthor.value;
    profileSubtitle.textContent = popupCharacteristic.value;
    closePopup(popupEdit);
}

const openPoopImg = (img, header) => {
    openPopup(poopImg);
    const poopImgCon = document.querySelector(".popup-img__content");

    const poopImgTitle = document.querySelector(".popup-img__title");
    poopImgCon.src = img.src;
    poopImgTitle.textContent = header.textContent;
    poopImgCon.alt = header.textContent;
};

function handleNewCard(event) {
    event.preventDefault();

    const headerText = newCardsElementName.value;
    const imgSrc = newCardsElementImg.value;

    const card = new Cards(headerText, imgSrc, "#card", openPoopImg);
    const cardsElement = card.generateCard();

    elementsCards.prepend(cardsElement);
    closePopup(popupCards);
    popurCardsForm.reset();
}

function closePopup(data) {
    data.classList.remove("popup_opened");
}

profileButton.addEventListener("click", (evt) => {
    openPopup(popupEdit);
    addInfoPopupEdit();
});

buttonSetCards.addEventListener("click", () => {
    openPopup(popupCards);
});

popupEditButtonClose.addEventListener("click", () => closePopup(popupEdit));
popupCardsButtonClose.addEventListener("click", () => closePopup(popupCards));
poopImg.addEventListener("click", () => closePopup(poopImg));

popupEditForm.addEventListener("submit", savePopupEditForm);
popurCardsForm.addEventListener("submit", handleNewCard);

const newCard = () => {
    initialCards.forEach((item) => {
        // Создадим экземпляр карточки

        const card = new Cards(item.name, item.link, "#card", openPoopImg);
        // Создаём карточку и возвращаем наружу
        const cardElement = card.generateCard();

        // Добавляем в DOM
        document.querySelector(".elements").append(cardElement);
    });
};
newCard();

const profileValidator = new FormValidator(VALIDATION_SELECTORS_CONFIG, popupEditForm);
profileValidator.toggleFormState();
profileValidator.enableValidation();

const cardsValidator = new FormValidator(VALIDATION_SELECTORS_CONFIG, popurCardsForm);
cardsValidator.toggleFormState();
cardsValidator.enableValidation();

import { initialCards } from "./initialCards.js";
import { Cards } from "./card.js";
import { FormValidator } from "./FormValidator.js";
import { VALIDATION_SELECTORS_CONFIG } from "./validationConfig.js";
