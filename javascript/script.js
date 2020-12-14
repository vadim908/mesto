const profileButton = document.querySelector('.profile__button');
const popupEdit = document.querySelector('.popup-edit');
const profileAvatar = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle')
const popupAuthor = document.querySelector('.popup__text_author');
const popupCharacteristic = document.querySelector('.popup__text_characteristic');
const popupButtonClose = document.querySelector('.popup-edit__button-close');
const popupForm = document.querySelector('.popup-edit__container');
const buttonSetCards = document.querySelector('.button');
const popupCards = document.querySelector('.popup-cards');
const popurCardsForm = document.querySelector('.popup-cards__container');
const popupCardsButtonClose = document.querySelector('.popup-cards__button-close');
const elementsCards = document.querySelector('.elements');
const templateCards = document.querySelector('#card');
const newCardsElementName = document.querySelector('.popup-cards__name');
const newCardsElementImg = document.querySelector('.popup-cards__url');
const poopImg = document.querySelector('.popup-img');
const poopImgCon = document.querySelector('.popup-img__content');
const poopImgTitle = document.querySelector('.popup-img__title');
const poopImgButtonClosed = document.querySelector('.popup-img__button-close');

function openAndClosePopup(data){
    data.classList.toggle('popup_opened');
}


function savePopupEditForm(evt){
    evt.preventDefault();
    profileAvatar.textContent = popupAuthor.value;
    profileSubtitle.textContent = popupCharacteristic.value;
    openAndClosePopup(popupEdit);
}

function rendreList(){
    const itemCards =  initialCards.map(createCards);
    elementsCards.append(...itemCards);
}

function createCards(item) {
    const newItem = templateCards.content.cloneNode(true); 
    const headerElement = newItem.querySelector('.element__title');
    const imgElement = newItem.querySelector('.element__img');
    headerElement.textContent = item.name;
    imgElement.src = item.link;
    const removeButton = newItem.querySelector('.element__trash');
    function openPoopImg(){
        openAndClosePopup(poopImg);
        poopImgCon.src = imgElement.src;
        poopImgTitle.textContent = headerElement.textContent;
    }
    removeButton.addEventListener('click', removeCard);
    imgElement.addEventListener('click', openPoopImg);
    newItem.querySelector('.element__heart').addEventListener('click', handleLikeButton);
    return newItem;
}

function handleLikeButton (evt) {
    evt.target.classList.toggle('element__heart_active');
}


function removeCard(event){
    const targetElement = event.target;
    const targetCards = targetElement.closest('.element');
    targetCards.remove();
}

function createNewCard(event){
    event.preventDefault();
    const headerText = newCardsElementName.value;
    const imgSrc = newCardsElementImg.value;
    const newCards = createCards({ name: headerText , link: imgSrc });
    elementsCards.prepend(newCards);
    openAndClosePopup(popupCards);
}


profileButton.addEventListener('click', ()  => openAndClosePopup(popupEdit));
buttonSetCards.addEventListener('click', ()  => openAndClosePopup(popupCards));

popupButtonClose.addEventListener('click', ()  => openAndClosePopup(popupEdit));
popupCardsButtonClose.addEventListener('click', ()  => openAndClosePopup(popupCards));
poopImg.addEventListener('click', ()  => openAndClosePopup(poopImg));

popupForm.addEventListener('submit', savePopupEditForm);
popurCardsForm.addEventListener('submit', createNewCard);

rendreList();











