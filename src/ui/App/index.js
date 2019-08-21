import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { useBindedAction } from 'utils/hooks'
import { fetchMyData } from 'ducks/app/actions'
import { getData } from 'ducks/app/selectors'

import App from './App'

const useBindedActions = () => ({
	fetchData: useBindedAction(fetchMyData),
})

const useDataFromStore = () => ({
	data: useSelector(getData),
})

const AppContainer = () => {
	const { data } = useDataFromStore()
	const [counter, setCounter] = useState(0)
	const { fetchData } = useBindedActions()

	useEffect(fetchData, [])

	console.log({ data })
	return <App setCounter={() => setCounter(counter + 1)} counter={counter} />
}

export default AppContainer
