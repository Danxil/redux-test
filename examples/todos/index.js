import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import rootReducer from './reducers'
import App from './components/App'
import thunkMiddleware from 'redux-thunk'
import {fetchTodos} from './actions/todos'

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

store.dispatch(fetchTodos())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
