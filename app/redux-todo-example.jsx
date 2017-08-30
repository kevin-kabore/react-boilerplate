var redux = require('redux')

console.log('Starting redux-todo example');

var stateDefault = {
  searchText: '',
  showCompleted: false,
  todos: []
}

var reducer = (state = stateDefault, action) => {
  switch (action.type) {
    case 'CHANGE_SEARCH_TEXT':
      return {
        ...state,
        searchText: action.searchText
      }
    default:
      return state
  }
}


var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

console.log('currentState', store.getState())

var unsubscribe = store.subscribe(() => {
  var state = store.getState()
  console.log('Search text: ' , state.searchText)
  document.getElementById('app').innerHTML = state.searchText
})


store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'New searchText'
})

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'Second searchText'
})

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'Last searchText change'
})
// console.log('New State', store.getState())
