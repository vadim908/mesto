const button = document.querySelector('.profile__button');
const popup = document.querySelector('.popup');
const profileAvatar = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle')
const popupAuthor = document.querySelector('.popup__text_author');
const popupCharacteristic = document.querySelector('.popup__text_characteristic');
const popupButtonClose = document.querySelector('.popup__button-close');
const popupForm = document.querySelector('.popup__container');
const buttonSetCards = document.querySelector('.button');
const popupCards = document.querySelector('.popup-cards');
const popupCardsForm = document.querySelector('.popup-cards__container');
const popupCardsButtonClose = document.querySelector('.popup-cards__button-close');
const elementsCards = document.querySelector('.elements');
const templateCards = document.querySelector('#card');
const newCardsElementName = document.querySelector('.popup-cards__text_name');
const newCardsElementImg = document.querySelector('.popup-cards__text_url');
const poopImg = document.querySelector('.popup-img');



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

const initialCards = [
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

function rendreList(){
    const itemCards =  initialCards.map(consistItem);
    elementsCards.append(...itemCards);
}

function consistItem(item) {
    const newItem = templateCards.content.cloneNode(true); 
    const headerElement = newItem.querySelector('.element__title');
    const imgElement = newItem.querySelector('.element__img');
    headerElement.textContent = item.name;
    imgElement.src = item.link;
    newItem.querySelector('.element__heart').addEventListener('click', function (evt) {
        evt.target.classList.toggle('element__heart_active');
      });
    const removeButton = newItem.querySelector('.element__button');
    removeButton.addEventListener('click', removeCard);
    imgElement.addEventListener('click', openPoopImg)
    function openPoopImg(){
        const poopImgCon = document.querySelector('.popup-img__content');
        const poopImgTitle = document.querySelector('.popup-img__title');
        const poopImgButtonClosed = document.querySelector('.popup-img__button');
        poopImg.classList.toggle('popup-img_opened');
        poopImgCon.src = imgElement.src;
        poopImgTitle.textContent = headerElement.textContent;
        poopImgButtonClosed.addEventListener('click', closedPoopImg)
    }
    return newItem;
}

function closedPoopImg(){
    poopImg.classList.toggle('popup-img_opened');
}

function removeCard(event){
    const targetElement = event.target;
    const targetCards = targetElement.closest('.element');
    targetCards.remove();
}

function openPopupCards() {
    popupCards.classList.toggle('popup-cards_opened');
    popupCardsForm.addEventListener('submit', addNewElement)
}



function addNewElement(event){
    event.preventDefault();
    const headerText = newCardsElementName.value;
    const imgSrc = newCardsElementImg.value;
    
    const newCardsName = consistItem({ name: headerText , link: imgSrc });
    
    elementsCards.prepend(newCardsName);
    popupCards.classList.toggle('popup-cards_opened');
}

function buttonCardsClose(){
    popupCards.classList.toggle('popup-cards_opened');
}

function likeActive() {
    let elementHeart = document.querySelector('.element__heart');
    
    elementHeart.addEventListener('click', likeimg)
}

function likeimg() {
    const likeElement = document.querySelector('.element__like');
    likeElement.src = 'image/Vector.jpg';
}
buttonSetCards.addEventListener('click', openPopupCards);
popupCardsButtonClose.addEventListener('click', buttonCardsClose);
rendreList();

