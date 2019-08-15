// import ReactDOM from 'react-dom'
// import React from 'react'
// import { Provider } from 'react-redux'
// import store from 'utils/store'
// import App from 'ui/App'

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// )
import * as _ from 'utils/lodash'

const initialState = []

const createReducer = (handlers, initialState) => (
  state = initialState,
  action
) => {
  if (handlers.hasOwnProperty(action.type)) {
    return handlers[action.type](state, action)
  } else {
    return state
  }
}

const combineReducers = reducersMap => (state, action) => {
  const nextState = {}

  Object.entries(reducersMap).forEach(([key, reducer]) => {
    nextState[key] = reducer(state[key], action)
  })

  return nextState
}

const createNamedReducer = (reducerName, reducerFunction) => (
  state,
  action
) => {
  const name = _.get(action, 'meta.name')
  const isInitialCall = state === undefined

  if (name !== reducerName && !isInitialCall) {
    return state
  }

  return reducerFunction(state, action)
}

const reducer = createReducer(
  {
    ADD_TODO: (state, action) => [...state, action.payload]
  },
  initialState
)

const getFetchReducer = name => createNamedReducer(name, reducer)

const namedReducer = getFetchReducer('a', reducer)
const namedReducer2 = getFetchReducer('b', reducer)

const reducers = combineReducers({ do: namedReducer, do2: namedReducer2 })

const createStore = (reducer, initialState) => {
  let state = initialState

  return {
    dispatch: action => (state = reducer(state, action)),
    getState: () => state
  }
}

const createTodo = (name, text) => ({
  type: 'ADD_TODO',
  payload: text,
  meta: {
    name
  }
})

const createStoreWithMiddleWare = middleWare => createStore => (...args) => {
  const store = createStore(...args)

  return {
    getState: store.getState,
    dispatch: action => middleWare(store.dispatch, action)
  }
}

const middleWare = (dispatch, action) => {
  dispatch(action)
}

const store = createStoreWithMiddleWare(middleWare)(createStore)(
  reducers,
  initialState
)

store.dispatch(createTodo('a', 'Hello'))
store.dispatch(createTodo('b', 'GO to market'))
console.log(store.getState())
