import { fetchData } from 'api'
import * as CONST from './const'

export const config = {
  name: CONST.DATA,
  apiMethod: fetchData,
  handleSuccess: () => {},
  handleError: () => {}
}
