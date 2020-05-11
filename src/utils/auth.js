const Cookie = require('js-cookie')

export function getToken() {
  return Cookie.get('token')
}

export function setToken(token) {
  Cookie.set('token', token)
}

export function removeToken() {
  Cookie.remove('token')
}
