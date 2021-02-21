export class Api{
    constructor(options){
        this._url = options.url;
        this._header = options.header;
    }

    getInfoProfile(){
      return  fetch(`${this._url}users/me`, {
      headers: this._header})
      .then(res => {
        return res.json()
    })
    }

    setInfoProfile({name, post}){
      return  fetch(`${this._url}users/me`, {
        method: 'PATCH',
        headers: {
          authorization: 'cf958a2d-c555-45eb-b9ce-4e48b9f4e768' ,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          about: post,
        })
      })
      .then((res) => {
        if(res.ok){
          return res.json();
        }
          return Promise.reject(`Ошибка: ${res.status}`);
      })
    }

    getCards(){
      return  fetch(`${this._url}cards`, {
    headers: this._header
  })
    .then(res => {
        return res.json()
    })}

    setAvatar(avatar){
      return  fetch(`${this._url}users/me/avatar`, {
        method: 'PATCH',
        headers: {
          authorization: 'cf958a2d-c555-45eb-b9ce-4e48b9f4e768' ,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({avatar: avatar})

      })
      .then(res => this._checkResult(res))
      .catch(err =>this._showError(err));
        
    }

    addCards({name, link}){
        return  fetch(`${this._url}cards`, {
            method: 'POST',
            headers: {
              authorization: 'cf958a2d-c555-45eb-b9ce-4e48b9f4e768' ,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: name,
              link: link,
            })

          })
          .then(res => this._checkResult(res))
          .catch(err =>this._showError(err));
            }
    
            addLike(cardId) {
              return fetch(`${this._url}cards/likes/${cardId}`, {
                method: 'PUT',
                headers: this._header,
      
            })
            .then(res => this._checkResult(res))
            .catch(err =>this._showError(err));
      }

            removeLike(cardId) {
              return fetch(`${this._url}cards/likes/${cardId}`, {
                      method: 'DELETE',
                      headers: this._header,
            
                  })
                  .then(res => this._checkResult(res))
                  .catch(err =>this._showError(err));
            }
            
            _checkResult(res) {
              if (res.ok) {
                  return res.json();
              }
              return Promise.reject(`Ошибка: ${res.status}`);
            };
            
            _showError(err) {
              console.log(err);
              return Promise.reject(err);
            };

            delCards(cardId){
              return fetch(`${this._url}cards/${cardId}`, {
                method: 'DELETE',
                headers: this._header,
      
            })
            .then(res => this._checkResult(res))
            .catch(err =>this._showError(err));
            }


}




