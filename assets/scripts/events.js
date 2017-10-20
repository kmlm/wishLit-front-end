const getFormFields = require('/Users/n0252667/wdi/projects/kevin-tic-tac-toe/lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('./store')

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
    .then(removeBook)
    .then(openEditModal)
    // .then(editBook)
    .catch(ui.returnLitFailure)
}

const removeBook = function (event) {
  // event.preventDefault()
  console.log('remove Ran')
  $('.remove').on('click', function () {
  $(this).parent().hide()
  console.log($(this).parent().attr('data-id'))
  api.destroyBook($(this).parent().attr('data-id'))
    .then(ui.destroyBookSuccess)
    .catch(ui.destroyFailure)
})
}


const openEditModal = function (){
  // $('.edit-lit-button').click()
  console.log('open edit ran')
  $('#edit-lit-button').on('click', function() {
    console.log($(this))
    console.log($(this).closest('div').attr('data-id'))
    store.id = $(this).closest('div').attr('data-id')
    console.log(store.id)
  })
}

// const editBook = function (event) {
//   event.preventDefault()
//   console.log('event Ran')
//   const data = getFormFields(this)
//   $('.remove').on('click', function () {
//   $(this).parent().hide()
//   console.log($(this).parent().attr('data-id'))
//   api.destroyBook($(this).parent().attr('data-id'))
//     .then(ui.destroyBookSuccess)
//     .catch(ui.destroyFailure)
// })
// }editBook

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onAddToList,
  onChangePassword,
  returnMyLit,
  removeBook,
  openEditModal
}
