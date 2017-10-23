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
  $('#sign-up-message').text('Invalid Password / Username')
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
  $('#my-list-title').text('Click below to see your list')
  $('#add-card-title').text('Add a title to your list!')
  $('#add-message').text('')
  $('#my-lit-button').show()
  $('#editLitMessage').text('')
  $('.cards').css('height', '220px')
}

const changePasswordSuccess = function (data) {
  console.log('ui success')
  document.getElementById('change-password-form').reset()
  document.getElementById('change-password-close-button').click()
  $('#password-change-message').text('')
  $('#add-message').text('Password Changed Successfully!'
  )
}

const changePasswordFailure = function () {
  $('#password-change-message').text('Unable to change password. Please verify your current password.')
  document.getElementById('change-password-form').reset()
}

const addToListSuccess = function (data) {
  document.getElementById('lit-input-form').reset()
  $('#add-message').text(data.book.title + ' has been added to your list!')
  $('#addLitMessage').text('')
  $('#add-card-title').text('')
  document.getElementById('add-lit-closure-button').click()
  document.getElementById('my-lit-button').click()
}

const addToListFailure = function () {
  $('#addLitMessage').text('Make sure you have provided a title!')
  // document.getElementById('lit-input-form').reset()
}

const returnLitSuccess = function (data) {
  console.log('ui success')
  console.log(data)
  $('#my-lit-button').hide()
  $('#my-list-title').text('')
  $('.content').show()
  const renderBooks = showBooksTemplate({ books: data.books })
  $('.content').html(renderBooks)
  console.log(data.books)
  $('.cards').css('height', '50px')
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
  $('#editLitMessage').text('')
  console.log(store.id)
}

const updateBookFailure = function (error) {
  console.log(error)
  $('#editLitMessage').text('Make sure you have included the title!')
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
