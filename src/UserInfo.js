export class UserInfo {
    constructor(data){
        this._profileName = document.querySelector(data.name);
        this._profileAboult = document.querySelector(data.post);
        this._popupAuthor = document.querySelector(".popup__text_author");
        this._popupCharacteristic = document.querySelector(".popup__text_characteristic");
    }

    getUserInfo(){
        return{
            popupProfileName: this._profileName.textContent,
            popupProfilePost: this._profileAboult.textContent
        }
    }
    
    setUserInfo(item){
        this._profileName.textContent = item.name;
        this._profileAboult.textContent = item.post;
    }

    openUserInfo(item){
        
        this._popupAuthor.value = item.popupProfileName;
        this._popupCharacteristic.value = item.popupProfilePost;

    }
}