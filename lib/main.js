import 'babel-polyfill'
import UserList from './containers/UserList'
import { render } from 'react-dom'
import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import { fetchUsers } from './actions'
import thunkMiddleware from 'redux-thunk'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css'

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

store.dispatch(fetchUsers())

document.addEventListener('DOMContentLoaded', () => {
    render(
        <Provider store={store}>
            <UserList/>
        </Provider>,
        document.getElementById('mount')
    )
})
