var redux = require('redux')

console.log('Starting redux example');

// Name reducer and action generators
// ----------------------------------

var nameReducer = (state = 'Anonymous', action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return action.name
    default:
      return state
  }
}
var changeName = (name) => {
  return {
    type: 'CHANGE_NAME',
    name
  }
}


// Hobbies reducer and action generators
// -------------------------------------
var nextHobbyId = 1
var hobbiesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_HOBBY':
      return [
        ...state,
        {
          id: nextHobbyId++,
          hobby: action.hobby
        }
      ]
    case 'REMOVE_HOBBY':
      return state.filter((hobby) => hobby.id !== action.id)
    default:
      return state
  }
}

var addhobby = (hobby) => {
  return {
    type: 'ADD_HOBBY',
    hobby
  }
}

var removeHobby  = (id) => {
  return {
    type: 'REMOVE_HOBBY',
    id
  }
}
// Monies reducer and action generators
// -------------------------------------
var nextMovieId = 1
var moviesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      return [
        ...state,
        {
          id: nextMovieId++,
          movie: action.movie,
          genre: action.genre
        }
      ]
    case 'REMOVE_MOVIE':
      return state.filter((movie) => movie.id !== action.id)
    default:
      return state
  }
}

var addMovie = (movie, genre) => {
  return {
    type: 'ADD_MOVIE',
    movie,
    genre
  }
}

var removeMovie = (id) => {
  return {
    type: 'REMOVE_MOVIE',
    id
  }
}

var reducer = redux.combineReducers({
  name: nameReducer,
  hobbies: hobbiesReducer,
  movies: moviesReducer
})

var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

// Subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState()

  console.log('Name is ', state.name)
  document.getElementById('app').innerHTML = state.name

  console.log('New State ', store.getState())

})
// unsubscribe()

var currentState = store.getState()
console.log('currentState', currentState)

store.dispatch(changeName('Kevin'))

store.dispatch(addhobby('Running'))
// store.dispatch({
//   type: 'ADD_HOBBY',
//   hobby: 'Running'
// })
store.dispatch(addhobby('Walking'))
// store.dispatch({
//   type: 'ADD_HOBBY',
//   hobby: 'Walking'
// })
store.dispatch(removeHobby('2'))

// store.dispatch({
//   type: 'REMOVE_HOBBY',
//   id: 2
// })

store.dispatch(changeName('Cynthia'))

store.dispatch(addMovie('Hitman', 'Action'))
// store.dispatch({
//   type: 'ADD_MOVIE',
//   title: 'Hitman',
//   genre: 'Action'
// })

store.dispatch(addMovie('Stranger Things', 'Horror'))
// store.dispatch({
//   type: 'ADD_MOVIE',
//   title: 'Stranger Things',
//   genre: 'Horror'
// })

store.dispatch(removeMovie(2))
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
