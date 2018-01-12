import { combineReducers } from 'redux'
import users from './users'
import { routerReducer } from 'react-router-redux'

const usersApp = combineReducers({
    users,
    router: routerReducer
})

export default usersApp
