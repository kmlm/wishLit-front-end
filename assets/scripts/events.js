const getFormFields = require('/Users/n0252667/wdi/projects/kevin-tic-tac-toe/lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('./store')

const resetModals = function (event) {
  event.preventDefault()
  console.log('resetModals runs')
  $('#sign-up-message').text('')
  $('#password-change-message').text('')
  $('#addLitMessage').text('')
  $('#editLitMessage').text('')
  $('#sign-in-message').text('')
}

const onSignUp = function (event) {
  event.preventDefault()
  console.log('onSignUp runs')
  const data = getFormFields(this)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  console.log('event success')
  const data = getFormFields(this)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  console.log('event success')
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  console.log('event success')
  const data = getFormFields(this)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onAddToList = function (event) {
  event.preventDefault()
  console.log('event success')
  const data = getFormFields(this)
  api.addToList(data)
    .then(ui.addToListSuccess)
    .catch(ui.addToListFailure)
}

const returnMyLit = function (event) {
  event.preventDefault()
  console.log('event success')
  api.returnLit()
    .then(ui.returnLitSuccess)
    .then(removeModal)
    .then(removeBook)
    .then(openEditModal)
    .then(editBook)
    .catch(ui.returnLitFailure)
}

const removeModal = function () {
  $('.remove').on('click', function () {
    console.log(this)
    const id = $(this).parent().attr('data-id')
    console.log(id)
    removeBook(id)
  })
}

const removeBook = function (data) {
  // event.preventDefault()
  console.log('remove Ran')
  $('#destroy-modal-yes-button').on('click', function () {
    api.destroyBook(data)
      .then(ui.destroyBookSuccess)
      .catch(ui.destroyFailure)
  })
}

const openEditModal = function () {
  console.log('open edit ran')
  $('.edit-lit-button').on('click', function () {
    console.log($(this).parent().attr('data-id'))
    store.id = $(this).parent().attr('data-id')
    const id = $(this).parent().attr('data-id')
    console.log(id)
    api.fillForm(id)
      .then(ui.openEditModalSuccess)
      .then(editBook)
      .catch(ui.openEditModalFailure)
  })
}

const editBook = function (event) {
  event.preventDefault()
  console.log('edit book Ran')
  console.log(this)
  const data = getFormFields(this)
  api.updateBook(data)
    .then(ui.updateBookSuccess)
    .catch(ui.updateBookFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onAddToList,
  onChangePassword,
  returnMyLit,
  removeBook,
  openEditModal,
  editBook,
  removeModal,
  resetModals
}
