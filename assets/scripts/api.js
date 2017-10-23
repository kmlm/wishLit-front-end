const config = require('./config')
const store = require('./store')

const signUp = function (data) {
  console.log('api runs')
  return $.ajax({
    url: config.apiOrigin + 'sign-up',
    method: 'POST',
    data
  })
}

const signIn = function (data) {
  console.log('api runs')
  return $.ajax({
    url: config.apiOrigin + 'sign-in',
    method: 'POST',
    data
  })
}

const signOut = function () {
  console.log('api sucess')
  return $.ajax({
    url: config.apiOrigin + 'sign-out/' + store.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const changePassword = function (data) {
  console.log('api sucess')
  return $.ajax({
    url: config.apiOrigin + 'change-password/' + store.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const addToList = function (data) {
  console.log('api sucess')
  console.log(data)
  return $.ajax({
    url: config.apiOrigin + 'books/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const returnLit = function () {
  console.log('api sucess')
  return $.ajax({
    url: config.apiOrigin + 'books/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const destroyBook = function (data) {
  console.log('api success')
  console.log(data)
  return $.ajax({
    url: config.apiOrigin + 'books/' + data,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateBook = function (data) {
  console.log('api success')
  console.log(data)
  console.log(store.id)
  return $.ajax({
    url: config.apiOrigin + 'books/' + store.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const fillForm = function (data) {
  console.log(data)
  return $.ajax({
    url: config.apiOrigin + 'books/' + data,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  addToList,
  returnLit,
  destroyBook,
  updateBook,
  fillForm
}
