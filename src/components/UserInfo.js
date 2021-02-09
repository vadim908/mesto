export class UserInfo {
    constructor(data){
        this._profileName = document.querySelector(data.name);
        this._profileAboult = document.querySelector(data.post);
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
}