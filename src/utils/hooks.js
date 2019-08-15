import { useDispatch } from 'react-redux'
import { useCallback } from 'react'

export const useBindActions = action => {
  const dispatch = useDispatch()

  return useCallback((...args) => dispatch(action(...args)), [dispatch])
}
