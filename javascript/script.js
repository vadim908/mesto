const profileButton = document.querySelector('.profile__button');
const popupEdit = document.querySelector('.popup-edit');
const profileAvatar = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle')
const popupAuthor = document.querySelector('.popup__text_author');
const popupCharacteristic = document.querySelector('.popup__text_characteristic');
const popupButtonClose = document.querySelector('.popup-edit__button-close');
const popupForm = document.querySelector('.popup__container');
const buttonSetCards = document.querySelector('.button');
const popupCards = document.querySelector('.popup-cards');
const popurCardsForm = document.querySelector('.popup-cards__container');
const popupCardsButtonClose = document.querySelector('.popup-cards__button-close');
const buttonSaveCard = document.querySelector('.popup-cards__button');
const elementsCards = document.querySelector('.elements');
const templateCards = document.querySelector('#card');
const newCardsElementName = document.querySelector('.popup-cards__text_name');
const newCardsElementImg = document.querySelector('.popup-cards__text_url');
const poopImg = document.querySelector('.popup-img');
const poopImgCon = document.querySelector('.popup-img__content');
const poopImgTitle = document.querySelector('.popup-img__title');
const poopImgButtonClosed = document.querySelector('.popup-img__button-close');

function formSave(evt){
    evt.preventDefault();
    const eventTarget = evt.target;
    if(eventTarget == popupForm){
        popupFormSave();
    }else if(eventTarget == popurCardsForm){
        addNewElement();
    }
}

function openPopup(event){
    const eventTarget = event.target;
    if(eventTarget == profileButton){
        popupEdit.classList.toggle('popup_opened');
    }else if(eventTarget == buttonSetCards){
        popupCards.classList.toggle('popup_opened');
    }
}

function closePopup(event){
    const eventTarget = event.target;
    if(eventTarget == popupButtonClose){
        popupEdit.classList.toggle('popup_opened');
        popupFormInfo();
    }else if(eventTarget == popupCardsButtonClose){
        popupCards.classList.toggle('popup_opened');
    }else if(eventTarget == poopImgButtonClosed){
        poopImg.classList.toggle('popup_opened');
    }
}


function popupFormInfo() {
    popupAuthor.value = profileAvatar.textContent;
    popupCharacteristic.value = profileSubtitle.textContent;
}

function popupFormSave(){
    profileAvatar.textContent = popupAuthor.value;
    profileSubtitle.textContent = popupCharacteristic.value;
    popupEdit.classList.toggle('popup_opened');
}

function rendreList(){
    const itemCards =  initialCards.map(createCard);
    elementsCards.append(...itemCards);
}

function createCard(item) {
    const newItem = templateCards.content.cloneNode(true); 
    const headerElement = newItem.querySelector('.element__title');
    const imgElement = newItem.querySelector('.element__img');
    headerElement.textContent = item.name;
    imgElement.src = item.link;
    const removeButton = newItem.querySelector('.element__trash');
    function openPoopImg(){
        poopImg.classList.toggle('popup_opened');
        poopImgCon.src = imgElement.src;
        poopImgTitle.textContent = headerElement.textContent;
    }
    removeButton.addEventListener('click', removeCard);
    imgElement.addEventListener('click', openPoopImg);
    newItem.querySelector('.element__heart').addEventListener('click', like);
    return newItem;
}

function like (evt) {
    evt.target.classList.toggle('element__heart_active');
}


function removeCard(event){
    const targetElement = event.target;
    const targetCards = targetElement.closest('.element');
    targetCards.remove();
}

function addNewElement(){
    const headerText = newCardsElementName.value;
    const imgSrc = newCardsElementImg.value;
    const newCards = createCard({ name: headerText , link: imgSrc });
    elementsCards.prepend(newCards);
    popupCards.classList.toggle('popup_opened');
}



profileButton.addEventListener('click', openPopup);
popupForm.addEventListener('submit', formSave);
buttonSetCards.addEventListener('click', openPopup);
popupButtonClose.addEventListener('click', closePopup);
popupCardsButtonClose.addEventListener('click', closePopup);
popurCardsForm.addEventListener('submit', formSave);
poopImg.addEventListener('click', closePopup);
rendreList();











