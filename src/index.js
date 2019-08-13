import ReactDOM from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'
import store from 'utils/store'
import App from 'ui/App'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
