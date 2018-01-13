import { getUsers, getUser, registerUser as apiRegisterUser } from '../models/user_api'
import { push } from 'react-router-redux'

export const FETCH_USERS_REQUESTED = 'LIST_USERS_REQUESTED'
export const FETCH_USERS_SUCCEEDED = 'LIST_USERS_SUCCEEDED'
export const FETCH_USERS_FAILED = 'LIST_USERS_FAILED'

export const FETCH_USER_REQUESTED = 'FETCH_USER_REQUESTED'
export const FETCH_USER_SUCCEEDED = 'FETCH_USER_SUCCEEDED'
export const FETCH_USER_FAILED = 'FETCH_USER_FAILED'

export const REGISTER_USER_REQUESTED = 'REGISTER_USER_REQUESTED'
export const REGISTER_USER_SUCCEEDED = 'REGISTER_USER_SUCCEEDED'
export const REGISTER_USER_FAILED = 'REGISTER_USER_FAILED'

function fetchUsersRequested () {
    return {
        type: FETCH_USERS_REQUESTED
    }
}

function fetchUsersSucceeded (users) {
    return {
        type: FETCH_USERS_SUCCEEDED,
        users
    }
}

function fetchUsersFailed (error) {
    return {
        type: FETCH_USERS_FAILED,
        error
    }
}

export function fetchUsers () {
    return function (dispatch) {
        dispatch(fetchUsersRequested())

        return getUsers().then(users => {
            dispatch(fetchUsersSucceeded(users))
        }).catch(error => {
            dispatch(fetchUsersFailed(error))
        })
    }
}

function fetchUserRequested (userId) {
    return {
        type: FETCH_USER_REQUESTED,
        userId
    }
}

function fetchUserSucceeded (user) {
    return {
        type: FETCH_USER_SUCCEEDED,
        user
    }
}

function fetchUserFailed (error) {
    return {
        type: FETCH_USER_FAILED,
        error
    }
}

export function fetchUser (userIdString) {
    const userId = parseInt(userIdString)

    return function (dispatch) {
        dispatch(fetchUserRequested(userId))

        return getUser(userId).then(user => {
            dispatch(fetchUserSucceeded(user))
        }).catch(error => {
            dispatch(fetchUserFailed(error))
        })
    }
}

function registerUserRequested () {
    return {
        type: REGISTER_USER_REQUESTED
    }
}

function registerUserSucceeded (userId) {
    return {
        type: REGISTER_USER_SUCCEEDED,
        userId
    }
}

function registerUserFailed (error) {
    return {
        type: REGISTER_USER_FAILED,
        errorMessage: error.message
    }
}

export function registerUser (user) {
    return function (dispatch, getState) {
        dispatch(registerUserRequested())

        /*
        const createState = getState().users.create

        const todo = {
            name: createState.name
        }
        */

        return apiRegisterUser(user).then(userId => {
            dispatch(registerUserSucceeded(userId))
            dispatch(push('/user/UserDetails/' + userId))
        }).catch(error => {
            dispatch(registerUserFailed(error))
        })
    }
}
