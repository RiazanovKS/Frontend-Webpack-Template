import * as api from 'api'
import * as CONST from './const'
import { fetchData } from 'ducks/shared/fetch'

export const fetchMyData = () => dispatch => {
	const config = {
		name: CONST.DATA,
		apiMethod: api.fetchData,
	}

	dispatch(fetchData(config))
}
