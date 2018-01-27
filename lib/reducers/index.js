import { combineReducers } from 'redux'
import users from './users'
import registerUser from './registerUser'
import userDetails from './userDetails'
import { routerReducer } from 'react-router-redux'

const usersApp = combineReducers({
    users,
    registerUser,
    userDetails,
    router: routerReducer
})

export default usersApp
