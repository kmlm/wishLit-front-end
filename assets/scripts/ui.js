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
  $('#landing-change-password').show()
  $('#sign-out-button').show()
  $('#landing-sign-in').hide()
  $('#landing-sign-up').hide()
  $('#hidden-until-sign-in').show()
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
  $('#landing-sign-in').show()
  $('#landing-sign-up').show()
  $('#landing-change-password').hide()
  $('#sign-out-button').hide()
  $('#hidden-until-sign-in').hide()
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

const addToListSuccess = function () {
  document.getElementById('lit-input-form').reset()
  $('#addLitMessage').text("")
  document.getElementById('add-lit-closure-button').click()
}

const addToListFailure = function () {
  $('#addLitMessage').text("There are some fields missing for your Lit!")
  // document.getElementById('lit-input-form').reset()
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  changePasswordSuccess,
  changePasswordFailure,
  addToListSuccess,
  addToListFailure
}
