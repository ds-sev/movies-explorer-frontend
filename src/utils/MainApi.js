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
   .then(this._checkResponse)
  }

  signout() {
    return fetch(`${this._baseUrl}/signout`, {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
    })
    .then(this._checkResponse)
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: this._headers,
      credentials: 'include',
    })
    .then(this._checkResponse)
    .then(userData => userData)
  }

  editUserInfo(newData) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({
        name: newData.userName,
        email: newData.userEmail,
      }),
    })
    .then(this._checkResponse)
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
    return fetch(`${this._baseUrl}/movies/${movieData._id}`, {
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

export default mainApi

