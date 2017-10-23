'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const events = require('./events')

$(() => {
  setAPIOrigin(location, config)
})

// API

$(() => {
  $('#new-user-form').on('submit', events.onSignUp)
  $('#sign-in-form').on('submit', events.onSignIn)
  $('#sign-in-form2').on('submit', events.onSignIn)
  $('#sign-out-button').on('click', events.onSignOut)
  $('#change-password-form').on('submit', events.onChangePassword)
})

// addLit

$(() => {
  $('#lit-input-form').on('submit', events.onAddToList)
})

// myLit

$(() => {
  $('#my-lit-button').on('click', events.returnMyLit)
})

// editLit

$(() => {
  $('.modalForm').on('submit', '#lit-update-form', events.editBook)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
