import { handleActions, createAction } from 'redux-actions'

import { createReducer } from './utils'

import * as _ from 'utils/lodash'

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

const mirrorData = data => data

const getHandlerForm = (initialHandler, alertHandler = mirrorData) =>
  typeof initialHandler === 'function' ? initialHandler : alertHandler

export const getFetchReducer = name => createReducer(fetchReducer, name)

export const fetchData = config => async (dispatch, getState) => {
  const { name = true } = config
  const actions = handleActions(name)
  const handleSuccess = getHandlerForm(config.handleSuccess)
  const handleError = getHandlerForm(config.handleError)
  const selector = getHandlerForm(config.selector)
  const payload = selector(getState())

  let response = {}

  try {
    dispatch(actions.started())

    response = await config.apiMethod(payload)

    _.flow(
      handleSuccess,
      actions.success,
      dispatch
    )(response.data)
  } catch (error) {
    _.flow(
      handleError,
      actions.failure,
      dispatch
    )(error)
  }

  return response
}
