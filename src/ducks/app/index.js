import { getFetchReducer } from 'ducks/shared/fetch'
import { combineReducers } from 'redux'
import * as CONST from './const'

export default combineReducers({
  data: getFetchReducer(CONST.DATA)
})
