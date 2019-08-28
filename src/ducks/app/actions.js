import * as api from 'api'
import { fetchData } from 'ducks/shared/fetch'
import * as CONST from './const'
/* eslint-disable */
export const fetchMyData = () => dispatch => {
  const config = {
    name: CONST.DATA,
    apiMethod: api.fetchData,
  }

  dispatch(fetchData(config))
}
