let button = document.querySelector('.profile__button');
let popup = document.querySelector('.popup');
let popupButton = document.querySelector('.popup__button');
let profileAvatar = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle')
let popupAuthor = document.querySelector('.popup__text_author');
let popupCharacteristic = document.querySelector('.popup__text_characteristic');
let popupButtonClose = document.querySelector('.popup__button-close');

function openPopup(event){
    event.preventDefault();
    popup.classList.add('popup_opened');
    popupAuthor.value = profileAvatar.value;
    popupCharacteristic.value = profileSubtitle.value;
}

button.addEventListener('click', openPopup);

function ButtonClose(){
    
    popup.classList.remove('popup_opened');
}

popupButtonClose.addEventListener('click', ButtonClose);

function popupButtonSave(event){ 
    event.preventDefault()
    profileAvatar.value = popupAuthor.value;
    profileSubtitle.value = popupCharacteristic.value;
    popup.classList.remove('popup_opened');
}

popupButton.addEventListener('click', popupButtonSave);