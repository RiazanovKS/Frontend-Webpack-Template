import { handleActions, createAction } from 'redux-actions'

import { createReducer } from './utils'

import * as CONST from './const'

const fetchReducer = handleActions(
  {
    [CONST.STARTED]: state => ({
      ...state,
      isFetching: true,
      isFetched: false
    }),
    [CONST.SUCCESS]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      isFetched: true,
      payload
    }),
    [CONST.FAILURE]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      isFetched: true,
      errorMessage: payload
    }),
    [CONST.CLEAR]: () => CONST.INITIAL_STATE
  },
  CONST.INITIAL_STATE
)

const getFetchActions = name => ({
  started: createAction(CONST.STARTED, undefined, () => ({ name })),
  success: createAction(CONST.SUCCESS, undefined, () => ({ name })),
  failure: createAction(CONST.SUCCESS, undefined, () => ({ name })),
  clear: createAction(CONST.SUCCESS, undefined, () => ({ name }))
})

export const getFetchReducer = name => createReducer(fetchReducer, name)

function createReducer(state = initialState, handlers) {
  return function reducer(state, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state
    }
  }
}
