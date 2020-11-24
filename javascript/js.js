let button = document.querySelector('.profile__button');
let popup = document.querySelector('.popup');
let popupButton = document.querySelector('.popup__button');
let profileAvatar = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle')
let popupAuthor = document.querySelector('.popup__author');
let popupCharacteristic = document.querySelector('.popup__characteristic');
let popupButtonClose = document.querySelector('.popup__button-close');

button.addEventListener('click', function(){
    popup.classList.add('popup__opened');
})

popupButtonClose.addEventListener('click', function(){
    popup.classList.remove('popup__opened');
})

popupButton.addEventListener('click', function(){ 
    
    profileAvatar.value = popupAuthor.value;
    profileSubtitle.value = popupCharacteristic.value;
    popup.classList.remove('popup__opened');
})