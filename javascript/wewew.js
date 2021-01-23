/* Это валидация */

const showInputError = (formElement, inputElement, errorMessage, config) => {
    
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(config.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(config.errorClass);
  };

  const hideInputError = (formElement, inputElement, config) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(config.inputErrorClass);
    errorElement.classList.remove(config.errorClass);

    errorElement.textContent = '';
  };

  const isValid = (formElement, inputElement, config) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage, config);
    } else {
      hideInputError(formElement, inputElement, config);
    }
  }; 

  const setEventListeners = (formElement, config) => {

    
    
    const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  const buttonElement = formElement.querySelector(config.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, config);

    inputList.forEach((inputElement) => {

      inputElement.addEventListener('input', () => {

        isValid(formElement, inputElement, config);
        toggleButtonState(inputList, buttonElement, config);
      });
    });
  }; 

  const enableValidation = (config) => {

    const formList = Array.from(document.querySelectorAll(config.formSelector));


    formList.forEach((formElement) => {
      formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
      });
      setEventListeners(formElement, config);
    });
  };
  
  const hasInvalidInput = (inputList, config) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  }; 


  const toggleButtonState = (inputList, buttonElement, config) => {

    if (hasInvalidInput(inputList, config)) {
      buttonElement.classList.add(config.inactiveButtonClass);
      buttonElement.disabled = 'disabled';
    } else {

      buttonElement.classList.remove(config.inactiveButtonClass);
      buttonElement.disabled = '';
    }
  }; 
  
  
  const toggleFormState = (formElement, config) => {
    const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
    const buttonElement = formElement.querySelector(config.submitButtonSelector);
    
    toggleButtonState(inputList, buttonElement, config);
  }; 


  const VALIDATION_SELECTORS_CONFIG = {
    formSelector: '.popup__container',
    inputSelector: '.popup__text',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__form_error',
    errorClass: 'popup__text-error_active'
  };

  enableValidation(VALIDATION_SELECTORS_CONFIG); 


/* функционал popup */

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
    if (popupEdit != null){
        popupAuthor.value = profileAvatar.textContent;
        popupCharacteristic.value = profileSubtitle.textContent;
        toggleFormState(popupEditForm, VALIDATION_SELECTORS_CONFIG);
    }
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

function openPoopImg(img, header){
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

function  handleNewCard(event){
    event.preventDefault();
    const headerText = newCardsElementName.value;
    const imgSrc = newCardsElementImg.value;
    const newCards = createCards({ name: headerText , link: imgSrc });
    elementsCards.prepend(newCards);
    closePopup(popupCards);
}


profileButton.addEventListener('click', ()  => {
    openPopup(popupEdit)
    addInfoPopupEdit();

});
buttonSetCards.addEventListener('click', ()  =>{ 
    popurCardsForm.reset()
    openPopup(popupCards);

 
});

popupEditButtonClose.addEventListener('click', ()  => closePopup(popupEdit));
popupCardsButtonClose.addEventListener('click', ()  => closePopup(popupCards));
poopImg.addEventListener('click', ()  => closePopup(poopImg));

popupEditForm.addEventListener('submit', savePopupEditForm);
popurCardsForm.addEventListener('submit',  handleNewCard);

// rendrList();


// test test test


setTimeout(() => {
	addInfoPopupEdit()
}, 2000)
