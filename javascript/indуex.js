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
const elementsCards = document.querySelector('.elements');
const templateCards = document.querySelector('#card');
const newCardsElementName = document.querySelector('.popup-cards__name');
const newCardsElementImg = document.querySelector('.popup-cards__url');
const poopImg = document.querySelector('.popup-img');
const poopImgCon = document.querySelector('.popup-img__content');
const poopImgTitle = document.querySelector('.popup-img__title');
const poopImgButtonClosed = document.querySelector('.popup-img__button-close');



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

function closePopup(data){
    data.classList.remove('popup_opened');
    
}


function savePopupEditForm(evt){
    evt.preventDefault();
    profileAvatar.textContent = popupAuthor.value;
    profileSubtitle.textContent = popupCharacteristic.value;
    closePopup(popupEdit);
}

function rendrList(){
    const itemCards =  initialCards.map(createCards);
    elementsCards.append(...itemCards);
}

function createCards(item) {
    const newItem = templateCards.content.cloneNode(true); 
    const headerElement = newItem.querySelector('.element__title');
    const imgElement = newItem.querySelector('.element__img');
    headerElement.textContent = item.name;
    imgElement.src = item.link;
    imgElement.alt = item.name;
    const removeButton = newItem.querySelector('.element__trash');
    
    removeButton.addEventListener('click', removeCard);
    imgElement.addEventListener('click', () => openPoopImg(imgElement, headerElement));
    newItem.querySelector('.element__heart').addEventListener('click', handleLikeButton);
    return newItem;
}

function  handleNewCard(event){
    event.preventDefault();
    const headerText = newCardsElementName.value;
    const imgSrc = newCardsElementImg.value;
    const newCards = createCards({ name: headerText , link: imgSrc });
    elementsCards.prepend(newCards);
    closePopup(popupCards);
}

export function openPoopImg(img, header){
    openPopup(poopImg);
    poopImgCon.src = img.src;
    poopImgCon.alt = header.textContent;
    poopImgTitle.textContent = header.textContent;
}

function handleLikeButton (evt) {
    evt.target.classList.toggle('element__heart_active');
}



function removeCard(event){
    event.target.closest('.element').remove()
}




profileButton.addEventListener('click', ()  => {
    openPopup(popupEdit)
    addInfoPopupEdit();
    toggleFormState(popupEditForm, VALIDATION_SELECTORS_CONFIG);

});

buttonSetCards.addEventListener('click', ()  =>{ 
    popurCardsForm.reset()
    openPopup(popupCards);
    toggleFormState(popupEditForm, VALIDATION_SELECTORS_CONFIG);
 
});



popupEditButtonClose.addEventListener('click', ()  => closePopup(popupEdit));
popupCardsButtonClose.addEventListener('click', ()  => closePopup(popupCards));
poopImg.addEventListener('click', ()  => closePopup(poopImg));

popupEditForm.addEventListener('submit', savePopupEditForm);
popurCardsForm.addEventListener('submit',  handleNewCard);

rendrList();










