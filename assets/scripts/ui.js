const store = require('./store')
const showBooksTemplate = require('./templates/book-index.handlebars')

const signUpSuccess = function (data) {
  store.user = data.user
  console.log(data)
  console.log(data.user)
  document.getElementById('new-user-form').reset()
  $('#sign-up-message').text('Thanks, now please sign in below!')
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
  document.getElementById('sign-in-form2').reset()
  document.getElementById('sign-up-close-button').click()
  document.getElementById('sign-in-close-button').click()
  $('#sign-in-message').text('')
  $('#sign-up-message').text('')
  $('#landing-change-password').show()
  $('#sign-out-button').show()
  $('#landing-sign-in').hide()
  $('#landing-sign-up').hide()
  $('#hidden-until-sign-in').show()
  $('#logged-in-as').text('You are logged in as "' + data.user.email + '"!')
  $('.imageDiv').hide()
  $('.spaceUnderLanding').css('height', '50px')
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
  $('.content').hide()
  $('#logged-in-as').text('')
  $('.spaceUnderLanding').css('height', '250px')
  $('.imageDiv').show()
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
  $('#addLitMessage').text('')
  document.getElementById('add-lit-closure-button').click()
  document.getElementById('my-lit-button').click()
}

const addToListFailure = function () {
  $('#addLitMessage').text('There are some fields missing for your Lit!')
  // document.getElementById('lit-input-form').reset()
}

const returnLitSuccess = function (data) {
  console.log('ui success')
  console.log(data)
  $('.content').show()
  const renderBooks = showBooksTemplate({ books: data.books })
  $('.content').html(renderBooks)
  console.log(data.books)
}

const destroyBookSuccess = function (data) {
  console.log(data)
  console.log('ui ran')
}

const destroyBookFailure = function (error) {
  console.log(error)
}

const updateBookSuccess = function (data) {
  console.log(data)
  console.log('ui ran')
  document.getElementById('update-lit-closure-button').click()
  document.getElementById('lit-update-form').reset()
  document.getElementById('my-lit-button').click()
  store.id = null
  console.log(store.id)
}

const updateBookFailure = function (error) {
  console.log(error)
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
  addToListFailure,
  returnLitSuccess,
  destroyBookSuccess,
  destroyBookFailure,
  updateBookSuccess,
  updateBookFailure
}
