import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from '../components/Section.js';
import { Popup } from '../components/Popup.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import {
    profileButton,
    popupEdit,
    popupAuthor,
    popupCharacteristic,
    popupEditForm,
    buttonSetCards,
    popupCards,
    popurCardsForm,
    popupCardsButtonClose,
    containerSection,
    popupImgButtonClose,
    elementsCards,
    VALIDATION_SELECTORS_CONFIG,
    popupImg,
    popupEditButtonClose,
    delPopup,
    inputCardName,
    inputCardUrl,
    popupAvatar,
    inputAvatar,
    profileAvatar
} from '../utils/constants.js'
import './index.css';
import { Api } from '../components/Api.js'
import { PopupDelForm } from '../components/PopupDelForm.js'


const api = new Api({
    url: 'https://mesto.nomoreparties.co/v1/cohort-20/',
    header: {
        "content-type": "aplication/json",
        authorization: 'cf958a2d-c555-45eb-b9ce-4e48b9f4e768'
    }
})

api.getInfoProfile()
    .then((result) => {
        cardsData.setUserId(result._id);
        cardsData.setUserInfo(result)
    })
    .catch((err)=> console.log(err));


const popupCardsCreate = new PopupWithForm(
    popupCards,
    (data) => {
        renderLoading('.popup-cards', true)
        api.addCards(data)
            .then((res) => {
                cardsList.prependAddNewItem(createNewCard(res))
                renderLoading('.popup-cards', false)
            })
            .catch((err)=> console.log(err));
            popupCardsCreate.close()
    }
);
popupCardsCreate.setEventListeners()


const cardsData = new UserInfo({ name: ".profile__title", post: ".profile__subtitle", avatar: ".profile__avatar" })



const cardsList = new Section((item) => {
        cardsList.addItem(createNewCard(item));
    },
    containerSection)

api.getCards()
    .then(res => {
        cardsList.renderItems(res);
        console.log(res)
    })
    .catch((err)=> console.log(err));

const editPopup = new PopupWithForm(
    popupEdit,
    (data) => {
        renderLoading('.popup-edit', true)
        api.setInfoProfile(data)
            .then(res => {
                cardsData.setUserInfo(res)
                editPopup.close()
                renderLoading('.popup-edit', false)
            })
            .catch((err)=> console.log(err));
            editPopup.close()
    })
    editPopup.setEventListeners();



profileButton.addEventListener("click", () => {
    popupAuthor.value = cardsData.getUserInfo().popupProfileName;
    popupCharacteristic.value = cardsData.getUserInfo().popupProfilePost;
    editPopup.open(popupEdit)
    profileValidator.toggleFormState();

});


buttonSetCards.addEventListener("click", () => {
    popupCardsCreate.open(popupCards)
    cardsValidator.toggleFormState();

});

const popupWithImg = new PopupWithImage(popupImg);
popupWithImg.setEventListeners();

function handleCardClick(img, header) {
    popupWithImg.open(img, header)
}

const buttonDel = new PopupDelForm(delPopup)

function cardDelById(card) {
    
    return () => {
        api.delCards(card.returnCardsId())
        .then((res) => {
            buttonDel.close();
            console.log(card);
            card.removeCard();
            
        })
        .catch((err) => {
            console.log(err)
        })
    }
    
}



function createNewCard({ name, link, _id, likes, owner }) {
    const card = new Card({ name, link, _id, likes, owner, userId: cardsData.returnUserId() }, "#card", handleCardClick, () => {
            buttonDel.open();
            buttonDel.setEventListeners(cardDelById(card))
            
        },
        () => {
            api.addLike(_id)
                .then(res =>
                    card.likeCounter(res.likes.length)
                )
                .catch((err)=> console.log(err));
        }, () => {
            api.removeLike(_id)
                .then(res =>
                    card.likeCounter(res.likes.length)
                )
                .catch((err)=> console.log(err));
        }
    )
    return card.generateCard();
}


const avatar = new PopupWithForm(
    popupAvatar,
    (data) => {
        renderLoading('.popup-avatar', true)
        api.setAvatar(data)
            .then(res => cardsData.setUserInfo(res))
            .catch((err)=> console.log(err));
            renderLoading('.popup-avatar', false)
            avatar.close()
    }
)
avatar.setEventListeners();

profileAvatar.addEventListener('click', () => {
    avatar.open(); 
})

const profileValidator = new FormValidator(VALIDATION_SELECTORS_CONFIG, popupEditForm);
profileValidator.enableValidation();

const cardsValidator = new FormValidator(VALIDATION_SELECTORS_CONFIG, popurCardsForm);
cardsValidator.enableValidation();

function renderLoading(popupSelector, isLoading) {
    const buttonElement = document.querySelector(popupSelector).querySelector('.popup__button');
    if (isLoading) {
        buttonElement.textContent = 'Сохранение...';
    } else {
        if (popupSelector === '.popup_gallery') {
            buttonElement.textContent = 'Создать';

        } else {
            buttonElement.textContent = 'Сохранить';

        }
    }
}
