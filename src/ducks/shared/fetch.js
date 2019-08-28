import * as _ from 'utils/lodash'
import { handleActions, createAction } from 'redux-actions'

import createNamedWrapperReducer from './utils'

import * as CONST from './const'

const fetchReducer = handleActions(
  {
    [CONST.STARTED]: state => ({
      ...state,
      isFetching: true,
      isFetched: false,
    }),
    [CONST.SUCCESS]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      isFetched: true,
      payload,
    }),
    [CONST.FAILURE]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      isFetched: true,
      errorMessage: payload,
    }),
    [CONST.CLEAR]: () => CONST.INITIAL_STATE,
  },
  CONST.INITIAL_STATE,
)

export const getFetchReducer = name =>
  createNamedWrapperReducer(fetchReducer, name)

export const getFetchActions = name => ({
  started: createAction(CONST.STARTED, undefined, () => ({ name })),
  success: createAction(CONST.SUCCESS, undefined, () => ({ name })),
  failure: createAction(CONST.FAILURE, undefined, () => ({ name })),
  clear: createAction(CONST.CLEAR, undefined, () => ({ name })),
})

const mirrorData = data => data

const getHandlerForm = (initialHandler, alertHandler = mirrorData) =>
  typeof initialHandler === 'function' ? initialHandler : alertHandler

export const fetchData = config => async (dispatch, getState) => {
  const { name = true } = config
  const actions = getFetchActions(name)
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
      dispatch,
    )(response.data)
  } catch (error) {
    _.flow(
      handleError,
      actions.failure,
      dispatch,
    )(error)
  }

  return response
}
