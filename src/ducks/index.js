import { combineReducers } from 'redux'
import dataReducer from 'ducks/app'

export default combineReducers({
	data: dataReducer,
})
