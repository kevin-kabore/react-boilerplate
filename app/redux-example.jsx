var redux = require('redux')
// import axios from 'axios';
console.log('Starting redux example');

var actions = require('./actions/index')
var store = require('./store/configureStore').configure()



// Subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState()

  console.log('New State ', store.getState())

  if (state.map.isFetching) {
    document.getElementById('app').innerHTML = 'Loading...'
  } else if (state.map.url) {
    document.getElementById('app').innerHTML =  '<a href="'+ state.map.url +'" target="_blank">View Location</a>'
  }
})
// unsubscribe()

var currentState = store.getState()
console.log('currentState', currentState)

store.dispatch(actions.fetchLocation())

store.dispatch(actions.changeName('Kevin'))

store.dispatch(actions.addhobby('Running'))
store.dispatch(actions.addhobby('Walking'))
store.dispatch(actions.removeHobby('2'))

store.dispatch(actions.changeName('Cynthia'))

store.dispatch(actions.addMovie('Hitman', 'Action'))
store.dispatch(actions.addMovie('Stranger Things', 'Horror'))
store.dispatch(actions.removeMovie(2))

// store.dispatch({
//   type: 'ADD_HOBBY',
//   hobby: 'Running'
// })
// store.dispatch({
//   type: 'ADD_HOBBY',
//   hobby: 'Walking'
// })
// store.dispatch({
//   type: 'REMOVE_HOBBY',
//   id: 2
// })
// store.dispatch({
//   type: 'ADD_MOVIE',
//   title: 'Hitman',
//   genre: 'Action'
// })
// store.dispatch({
//   type: 'ADD_MOVIE',
//   title: 'Stranger Things',
//   genre: 'Horror'
// })
// store.dispatch({
//   type:'REMOVE_MOVIE',
//   id: 2
// })


// var oldReducer = (state = stateDefault, action) => {
//   // console.log('New action', action);
//   switch (action.type) {
//     case 'CHANGE_NAME':
//       return {
//         ...state,
//         name: action.name
//       }
//       // take everything from state,
//       // add everything from hobbies array with new hobby =
//     case 'ADD_HOBBY':
//       return {
//         ...state,
//         hobbies: [
//           ...state.hobbies,
//           {
//             id: nextHobbyId++,
//             hobby: action.hobby
//           }
//         ]
//       }
//     case 'REMOVE_HOBBY':
//       return {
//         ...state,
//         hobbies: state.hobbies.filter((hobby) => hobby.id !== action.id)
//       }
//     case 'ADD_MOVIE':
//       return {
//         ...state,
//         movies: [
//           ...state.movies,
//           {
//             id: nextMovieId++,
//             movie: action.movie,
//             genre: action.genre
//           }
//         ]
//       }
//     case 'REMOVE_MOVIE':
//       return {
//         ...state,
//         movies: state.movies.filter((movie) => movie.id !== action.id)
//       }
//     default:
//       return state
//   }
// }
