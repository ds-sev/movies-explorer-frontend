// описание запросов к Api
// import { checkResponse } from './checkResponse'

class MainApi {
  constructor({ baseUrl, filmsBaseUrl, headers }) {
    this._baseUrl = baseUrl
    this._filmsBaseUrl = filmsBaseUrl
    this._headers = headers
  }

  async _checkResponse(res) {
    const response = await res.json()
    return res.ok ? response : Promise.reject(response.message)
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
    })
    .then(this._checkResponse)
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
    })
    // .then(checkResponse)
   //
   //  .then((res) => {
   //    // const response = res.body.toString()
   //    // if (res.ok) {
   //    //   return res.json()
   //    // }
   //    // return Promise.reject(`Ошибка ${res.status}`)
   //    //
   .then(this._checkResponse)
   //  })
  }

  signout() {
    return fetch(`${this._baseUrl}/signout`, {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
    })
    .then(this._checkResponse)
  }

  // checkToken() {
  //   return fetch(`${this._baseUrl}/users/me`, {
  //     method: 'GET',
  //     headers: this._headers,
  //     credentials: 'include',
  //   }).then((res) => checkResponse(res))
  //   .then(userData => userData)
  // }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: this._headers,
      credentials: 'include',
    })
    .then(this._checkResponse)
    .then(userData => userData)
  }


  getMyMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'GET',
      headers: this._headers,
      credentials: 'include',
    })
    .then(this._checkResponse)
  }

  addMovie(movieData) {
    return fetch(`${this._baseUrl}/movies/`, {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({
        id: movieData.id,
        nameRU: movieData.nameRU,
        nameEN: movieData.nameEN,
        director: movieData.director,
        country: movieData.country,
        year: movieData.year,
        duration: movieData.duration,
        description: movieData.description,
        trailerLink: movieData.trailerLink,
        image: `${this._filmsBaseUrl}${movieData.image.url}`,
        thumbnail: `${this._filmsBaseUrl}${movieData.image.url}`,
      }),
    })
    .then(this._checkResponse)
  }

  removeMovie(movieData) {
    return fetch(`${this._baseUrl}/movies/${movieData.id}`, {
      method: 'DELETE',
      headers: this._headers,
      credentials: 'include',
    })
    .then(this._checkResponse)
  }




}

const mainApi = new MainApi({
  // baseUrl: 'http://localhost:4200',
  baseUrl: 'https://api.movies-ex.nomoredomains.rocks',
  filmsBaseUrl: 'https://api.nomoreparties.co',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  credentials: 'include'
})

// user


// movies base



export default mainApi
