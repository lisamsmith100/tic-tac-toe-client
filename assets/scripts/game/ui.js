'use strict'

const store = require('../store')
const gameStore = require('../gameStore')

const createGameSuccess = (data) => {
  console.log(data)
  console.log('game has been created')
  $('#createGame').modal('hide')
  gameStore.game = data.game
}

const createGameFailure = (error) => {
  console.error(error)
}

const clearGameSuccess = (data) => {
  console.log(data)
  console.log('game has been cleared')
  $('#clearGame').modal('hide')
//  store.game = data.game
}

const clearGameFailure = (error) => {
  console.error(error)
}

const totalGamesSuccess = (data) => {
  console.log(data)
  store.games = data.games
  const userGames = store.games.length
  const userGameArray = JSON.stringify(store.games)
  console.log(store.games.length, 'games have been retrieved')
  $('h1').html('<p>User played' + userGames + ' games.  Wow.' + userGameArray + '</p>')
  $('#totalGamesbyUser').modal('hide')
}

const totalGamesFailure = (error) => {
  console.error(error)
}

const updateGameSuccess = (data) => {
  console.log('update game success ran.  data is : ', data)
  store.game = data.game
}

const updateGameFailure = (error) => {
  console.error('update game failure ran.  error is: ', error)
}

const displayOneGameSuccess = () => {
  console.log(data)
  store.games = data.games
  const userGameArray = JSON.stringify(store.games)
  console.log('game has been game:  ' + userGameArray + '</p>')
  $('#display-one-game-modal').modal('hide')
}

const displayOneGameFailure = (error) => {
  console.error('display-one-game-modal ran.  error is: ', error)
//  $('#display-one-game-modal').modal('hide')
}

module.exports = {
  createGameSuccess,
  createGameFailure,
  clearGameSuccess,
  clearGameFailure,
  totalGamesSuccess,
  totalGamesFailure,
  updateGameSuccess,
  updateGameFailure,
  displayOneGameSuccess,
  displayOneGameFailure
}
