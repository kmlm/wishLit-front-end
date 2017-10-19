const store = require('./store')

const signUpSuccess = function (data) {
  store.user = data.user
  console.log(data)
  console.log(data.user)
}

// const signUpFailure = function () {
//   $('#successMessage').text('Unable to sign up with that information')
//   document.getElementById('new-user-form').reset()
// }
//
const signInSuccess = function (data) {
  console.log('ui success')
  store.user = data.user
  console.log(data)
  console.log(data.user)
  // document.getElementById('sign-in-form').reset()
  // document.getElementById('create-game-button').click() // triggers new game button to ensure that createGame runs on sign in
}
//
// const signInFailure = function () {
//   $('#successMessage').text('Invalid Password / Username')
//   document.getElementById('sign-in-form').reset()
// }
//
const signOutSuccess = function () {
  console.log('ui success')
  console.log(store.user)
  store.user = null
  console.log(store.user)
}

const changePasswordSuccess = function (data) {
  console.log('ui success')
  document.getElementById('change-password-form').reset()
}
//
// const changePasswordFailure = function () {
//   $('#password-change-message').show()
//   $('#successMessage').text('')
//   $('#password-change-message').text('Unable to change password. Please verify your current password.')
//   document.getElementById('change-password-form').reset()
// }
//
// const createGameSuccess = function (data) {
//   $('.userMessage').text('X goes first so click a square to begin')
//   store.game = data
// }
//
// const createGameFailure = function () {
// }
//
// const addToGameSuccess = function (data) {
//   store.game = data
// }
//
// const addToGameFailure = function () {
// }
//
// const showAllGamesSuccess = function (data) {
//   $('#numGames-message').show()
//   $('#numGames-message').text('You have played ' + data.games.length + ' games!')
// }
//
// const showAllGamesFailure = function () {
// }

module.exports = {
  signUpSuccess,
  // signUpFailure,
  signInSuccess,
  // signInFailure,
  signOutSuccess,
  changePasswordSuccess
  // changePasswordFailure,
  // createGameSuccess,
  // createGameFailure,
  // addToGameSuccess,
  // addToGameFailure,
  // showAllGamesSuccess,
  // showAllGamesFailure
}
