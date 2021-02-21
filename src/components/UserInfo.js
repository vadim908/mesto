export class UserInfo {
    constructor(data){
        this._profileName = document.querySelector(data.name);
        this._profileAboult = document.querySelector(data.post);
        this._imgProfile = document.querySelector('.profile__avatar');
    }

    getUserInfo(){
        return{
            popupProfileName: this._profileName.textContent,
            popupProfilePost: this._profileAboult.textContent
        }
    }
    
    setUserInfo(item){
        this._profileName.textContent = item.name;
        this._profileAboult.textContent = item.about;
        this._imgProfile.setAttribute('src' , item.avatar);
    }

    setUserId(Id){
        this._userId = Id;
    }

    returnUserId(){
        return this._userId;
    }
}