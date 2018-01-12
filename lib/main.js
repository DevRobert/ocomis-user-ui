import 'babel-polyfill'
import { render } from 'react-dom'
import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import { fetchUsers } from './actions'
import thunkMiddleware from 'redux-thunk'
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import UserList from './containers/UserList'
import RegisterUserForm from './containers/RegisterUserForm'
import UserDetails from './containers/UserDetails'

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(fetchUsers())

document.addEventListener('DOMContentLoaded', () => {
    render(
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact path="/user/Users" component={UserList}></Route>
                    <Route exact path="/user/Register" component={RegisterUserForm}></Route>
                    <Route exact path="/user/UserDetails/:userId" component={UserDetails}></Route>
                </Switch>
            </Router>
        </Provider>,
        document.getElementById('mount')
    )
})
