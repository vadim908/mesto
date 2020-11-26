let button = document.querySelector('.profile__button');
let popup = document.querySelector('.popup');
let profileAvatar = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle')
let popupAuthor = document.querySelector('.popup__text_author');
let popupCharacteristic = document.querySelector('.popup__text_characteristic');
let popupButtonClose = document.querySelector('.popup__button-close');
let popupForm = document.querySelector('.popup__container');

function openPopup(event){
    event.preventDefault();
    popup.classList.add('popup_opened');
    popupAuthor.value = profileAvatar.textContent;
    popupCharacteristic.value = profileSubtitle.textContent;
}

function buttonClose(){
    popup.classList.remove('popup_opened');
}

function popupFormSave(evt){ 
    evt.preventDefault();
    profileAvatar.textContent = popupAuthor.value;
    profileSubtitle.textContent = popupCharacteristic.value;
    popup.classList.remove('popup_opened');
}

button.addEventListener('click', openPopup);
popupButtonClose.addEventListener('click', buttonClose);
popupForm.addEventListener('submit', popupFormSave);
