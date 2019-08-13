import { handleActions, createActions } from 'redux-actions'
import * as CONST from './const'

// const fetchReducer = handleActions(
//   {
//     [CONST.STARTED]: state => ({
//       ...state,
//       isFetching: true,
//       isFetched: false
//     }),
//     [CONST.SUCCESS]: (state, { payload }) => ({
//       ...state,
//       isFetching: false,
//       isFetched: true,
//       payload
//     }),
//     [CONST.FAILURE]: (state, { payload }) => ({
//       ...state,
//       isFetching: false,
//       isFetched: true,
//       errorMessage: payload
//     }),
//     [CONST.CLEAR]: () => CONST.INITIAL_STATE
//   },
//   CONST.INITIAL_STATE
// )

// const getFetchActions = name => ({
//   started: createAction(CONST.STARTED, undefined, () => ({ name })),
//   success: createAction(CONST.SUCCESS, undefined, () => ({ name })),
//   failure: createAction(CONST.SUCCESS, undefined, () => ({ name })),
//   clear: createAction(CONST.SUCCESS, undefined, () => ({ name }))
// })

const counterReducer = handleActions(
  {
    INCREMENT: state => ({ ...state, counter: ++counter }),
    DECREMENT: state => ({ ...state, counter: --counter })
  },
  { counter: 0 }
)

const counterActions = createActions({
  INCREMENT: undefined,
  DECREMENT: undefined
})
