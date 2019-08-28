import * as _ from 'utils/lodash'

const createNamedWrapperReducer = (reducerFunction, reducerName) => (
  state,
  action,
) => {
  const isInitializationCall = state === undefined

  const name = _.get(action, 'meta.name')

  if (name !== reducerName && !isInitializationCall) return state

  return reducerFunction(state, action)
}

export default createNamedWrapperReducer
