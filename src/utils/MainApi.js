// описание запросов к Api
import { checkResponse } from './checkResponse'

class MainApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl
    this._headers = headers
  }

  register(newUserData) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({
        name: newUserData.name,
        email: newUserData.email,
        password: newUserData.password,
      }),
    }).then(checkResponse)
  }

  login(userData) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({
        email: userData.email,
        password: userData.password,
      }),
    }).then(checkResponse)
    // .then((data) => {
    //   if (data.token) {
    //     return data
    //   }
    // })
  }
  signout() {
    return fetch(`${this._baseUrl}/signout`, {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
    }).then((res) => checkResponse(res))
  }

  checkToken() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: this._headers,
      credentials: 'include',
    }).then((res) => checkResponse(res))
    .then(userData => userData)
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: this._headers,
      credentials: 'include',
    }).then((res) => checkResponse(res))
  }


  getMyMovies() {
    return fetch(`${this._baseUrl}/movies/`, {
      method: 'GET',
      headers: this._headers,
      credentials: 'include',
    }).then((res) => checkResponse(res))
  }


}

const mainApi = new MainApi({
  // baseUrl: 'http://localhost:4200',
  baseUrl: 'https://api.movies-ex.nomoredomains.rocks',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  credentials: 'include'
})

// user


// movies base



export default mainApi

