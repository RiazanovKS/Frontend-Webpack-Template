import { useDispatch } from 'react-redux'
import { useCallback } from 'react'

const useBindedAction = action => {
  const dispatch = useDispatch()

  return useCallback((...args) => dispatch(action(...args)), [action, dispatch])
}

export default useBindedAction
