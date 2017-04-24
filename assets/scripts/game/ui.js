'use strict'

const store = require('../store')

const createGameSuccess = (data) => {
  store.game = data.game
  $('.navbar-brand').html('<p>You are signed in and you created a game.</p>')
}

const createGameFailure = (error) => {
}

const clearGameSuccess = (data) => {
  $('#clearGame').modal('hide')
}

const clearGameFailure = (error) => {
}

const totalGamesSuccess = (data) => {
  store.games = data.games
  const userGames = store.games.length
  const userGameArray = JSON.stringify(store.games)
  $('h1').html('<p>User played ' + userGames + ' game(s).')
  $('#totalGamesByUser').modal('hide')
}

const totalGamesFailure = (error) => {
}

const updateGameSuccess = (data) => {
  store.game = data.game
}

const updateGameFailure = (error) => {
}

module.exports = {
  createGameSuccess,
  createGameFailure,
  clearGameSuccess,
  clearGameFailure,
  totalGamesSuccess,
  totalGamesFailure,
  updateGameSuccess,
  updateGameFailure
}
