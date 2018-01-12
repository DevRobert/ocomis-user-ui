import { getUsers, getUser, registerUser as apiRegisterUser } from '../models/user_api'

export const REQUEST_USERS = 'REQUEST_USERS'
export const RECEIVE_USERS = 'RECEIVE_USERS'

export const REQUEST_USER = 'REQUEST_USER'
export const RECEIVE_USER = 'RECEIVE_USER'

export const REGISTER_USER_REQUESTED = 'REGISTER_USER_REQUESTED'
export const REGISTER_USER_SUCCEEDED = 'REGISTER_USER_SUCCEEDED'
export const REGISTER_USER_FAILED = 'REGISTER_USER_FAILED'

function requestUsers () {
    return {
        type: REQUEST_USERS
    }
}

function receiveUsers (users) {
    return {
        type: RECEIVE_USERS,
        users
    }
}

export function fetchUsers () {
    return function (dispatch) {
        dispatch(requestUsers())

        return getUsers().then(users => {
            dispatch(receiveUsers(users))
        })
    }
}

function requestUser (userId) {
    return {
        type: REQUEST_USER,
        userId: userId
    }
}

function receiveUser (user, error) {
    return {
        type: RECEIVE_USER,
        user: user,
        error: error
    }
}

export function fetchUser (userIdString) {
    const userId = parseInt(userIdString)

    return function (dispatch) {
        dispatch(requestUser(userId))

        return getUser(userId).then(user => {
            dispatch(receiveUser(user))
        }).catch(error => {
            dispatch(receiveUser(undefined, error))
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
        }).catch(error => {
            dispatch(registerUserFailed(error))
        })
    }
}
