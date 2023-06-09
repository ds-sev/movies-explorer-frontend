import { checkResponse } from './checkResponse'

const BASE_URL = 'https://api.nomoreparties.co/beatfilm-movies'

export function getMovies() {
  return fetch(BASE_URL, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
    // credentials: 'include',
  })
  .then((res) => checkResponse(res))
  .then(data => data)
  .catch(err => console.log(err))
}