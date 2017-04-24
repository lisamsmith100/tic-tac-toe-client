'use strict'

const store = require('../store')
const gameEvents = require('./events')

const signUpSuccess = (data) => {
  store.user = data.user
  $('#sign-up-modal').modal('toggle')
  $('#sign-in-modal').modal('toggle')
  // $('.sign-up-button').hide()
  // $('.sign-out-button').hide()
  $('.navbar-brand').html('<p>You have successfully signed up! To play, sign in.</p>')
  $('#sign-up-modal').find('input:text, input:password, select, textarea').val('')
  // $('.change-password-button').hide()
}

const signUpFailure = (error) => {
  // $('.sign-out-button').hide()
  $('.change-password-button').hide()
  // $('#change-password-button-modal').hide()
  $('.navbar-brand').html('<p>Your signup was not successful! If email already used, try a new one.</p>')
  $('#sign-in-modal').find('input:text, input:password, select, textarea').val('')
}

const signInSuccess = (data) => {
  store.user = data.user
  $('#sign-in-modal').modal('toggle')
  $('.first-buttons').addClass('hiding')
  $('.logged-in-buttons').removeClass('hiding')
  // $('#sign-in-modal').find('input:text, input:password, select, textarea').val('')
  $('.navbar-brand').html('<p>Your signin was successful!  Choose Games > then Create Game to play.</p>')
  $('#sign-in-modal').find('input:text, input:password, select, textarea').val('')
}

const signInFailure = (error) => {
  $('#sign-out-button').hide()
  $('#change-password-button').hide()
  // $('#sign-in-modal').find('input:text, input:password, select, textarea').val('')
  $('.navbar-brand').html('<p>Your signin was not successful!</p>')
  $('#sign-in-modal').find('input:text, input:password, select, textarea').val('')
}

const signOutSuccess = () => {
  store.user = null
  $('#sign-out-modal').modal('toggle')
  $('.first-buttons').removeClass('hiding')
  $('.logged-in-buttons').addClass('hiding')
  $('.navbar-brand').html('<p>Your signout was successful!</p>')
  $('#sign-in-modal').find('input:text, input:password, select, textarea').val('')
}

const signOutFailure = (error) => {
  $('.navbar-brand').html('<p>Your signout was not successful!</p>')
  $('#sign-in-modal').find('input:text, input:password, select, textarea').val('')
  //  $('#sign-out-modal').modal('hide')
}

const changePasswordSuccess = (data) => {
  // store.user = data.user
  // console.log('change-password success ran.  and nothing was returned')
  // store.user = data.user
  // store.user.token = data.user.token
  $('.navbar-brand').html('You changed your password.')
  // $('#change-password-modal').toggle()
  // $('#change-password-modal').find('input:text, input:password, select, textarea').val('')
  // store.user = data.user
}

const changePasswordFailure = (error) => {
    // store.user = data.user
  $('.navbar-brand').html('<p>Password change was not successful.  Try again.</p>')
  // $('#sign-in-modal').find('input:text, input:password, select, textarea').val('')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
