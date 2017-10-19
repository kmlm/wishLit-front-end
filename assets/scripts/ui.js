const store = require('./store')

const signUpSuccess = function (data) {
  store.user = data.user
  console.log(data)
  console.log(data.user)
  document.getElementById('sign-up-close-button').click()
  $('#sign-up-message').text('')
}

const signUpFailure = function () {
  $('#sign-up-message').text('Unable to sign up with that information')
  document.getElementById('new-user-form').reset()
}

const signInSuccess = function (data) {
  console.log('ui success')
  store.user = data.user
  console.log(data)
  console.log(data.user)
  document.getElementById('sign-in-form').reset()
  document.getElementById('sign-up-close-button').click()
  document.getElementById('sign-in-close-button').click()
  $('#sign-in-message').text('')
}

const signInFailure = function () {
  $('#sign-in-message').text('Invalid Password / Username')
  document.getElementById('sign-in-form').reset()
}

const signOutSuccess = function () {
  console.log('ui success')
  console.log(store.user)
  store.user = null
  console.log(store.user)
}

const changePasswordSuccess = function (data) {
  console.log('ui success')
  document.getElementById('change-password-form').reset()
  document.getElementById('change-password-close-button').click()
  $('#password-change-message').text('')
}

const changePasswordFailure = function () {
  $('#password-change-message').text('Unable to change password. Please verify your current password.')
  document.getElementById('change-password-form').reset()
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  changePasswordSuccess,
  changePasswordFailure
}
