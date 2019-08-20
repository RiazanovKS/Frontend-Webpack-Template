import ReactDOM from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'

import store from 'utils/store'

import AppContainer from 'ui/App'

ReactDOM.render(
	<Provider store={store}>
		<AppContainer />
	</Provider>,
	document.getElementById('root'),
)
