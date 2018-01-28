import { getUsers, getUser, registerUser as apiRegisterUser, updatePassword, deletePassword } from '../models/user_api'
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
export const RESET_REGISTER_USER = 'RESET_REGISTER_USER'

export const SET_PASSWORD_REQUESTED = 'SET_PASSWORD_REQUESTED'
export const SET_PASSWORD_SUCCEEDED = 'SET_PASSWORD_SUCCEEDED'
export const SET_PASSWORD_FAILED = 'SET_PASSWORD_FAILED'

export const OPEN_SET_PASSWORD = 'OPEN_SET_PASSWORD'
export const CANCEL_SET_PASSWORD = 'CANCEL_SET_PASSWORD'

export const REMOVE_PASSWORD_REQUESTED = 'REMOVE_PASSWORD_REQUESTED'
export const REMOVE_PASSWORD_SUCCEEDED = 'REMOVE_PASSWORD_SUCCEEDED'
export const REMOVE_PASSWORD_FAILED = 'REMOVE_PASSWORD_FAILED'

export const OPEN_REMOVE_PASSWORD = 'OPEN_REMOVE_PASSWORD'
export const CANCEL_REMOVE_PASSWORD = 'CANCEL_REMOVE_PASSWORD'

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
            if (error.isAuthenticationError) {
                window.location = 'http://localhost/authentication/?referrer=' + encodeURIComponent(window.location)
            } else {
                dispatch(fetchUsersFailed(error))
            }
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

        return apiRegisterUser(user).then(userId => {
            dispatch(registerUserSucceeded(userId))
            dispatch(push('/user/UserDetails/' + userId))
        }).catch(error => {
            dispatch(registerUserFailed(error))
        })
    }
}

export function resetRegisterUser () {
    return {
        type: RESET_REGISTER_USER
    }
}

function setPasswordRequested () {
    return {
        type: SET_PASSWORD_REQUESTED
    }
}

function setPasswordSucceeded () {
    return {
        type: SET_PASSWORD_SUCCEEDED
    }
}

function setPasswordFailed (error) {
    return {
        type: SET_PASSWORD_FAILED,
        error
    }
}

export function setPassword (userId, password, repeatPassword) {
    return dispatch => {
        dispatch(setPasswordRequested())

        updatePassword(userId, password, repeatPassword).then(() => {
            dispatch(setPasswordSucceeded())
        }).catch(error => {
            dispatch(setPasswordFailed(error))
        })
    }
}

export function openSetPassword () {
    return {
        type: OPEN_SET_PASSWORD
    }
}

export function cancelSetPassword () {
    return {
        type: CANCEL_SET_PASSWORD
    }
}

function removePasswordRequested () {
    return {
        type: REMOVE_PASSWORD_REQUESTED
    }
}

function removePasswordSucceeded () {
    return {
        type: REMOVE_PASSWORD_SUCCEEDED
    }
}

function removePasswordFailed (error) {
    return {
        type: REMOVE_PASSWORD_FAILED,
        error
    }
}

export function removePassword (userId) {
    return dispatch => {
        dispatch(removePasswordRequested())

        deletePassword(userId).then(() => {
            dispatch(removePasswordSucceeded())
        }).catch(error => {
            dispatch(removePasswordFailed(error))
        })
    }
}

export function openRemovePassword () {
    return {
        type: OPEN_REMOVE_PASSWORD
    }
}

export function cancelRemovePassword () {
    return {
        type: CANCEL_REMOVE_PASSWORD
    }
}
