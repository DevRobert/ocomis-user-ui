import { getUsers } from '../models/user_api'

export const REQUEST_USERS = 'REQUEST_USERS'

function requestUsers () {
    return {
        type: REQUEST_USERS
    }
}

export const RECEIVE_USERS = 'RECEIVE_USERS'

function receiveUsers (users) {
    return {
        type: RECEIVE_USERS,
        users
    }
}

export function fetchUsers () {
    return function (dispatch) {
        dispatch(requestUsers())

        return getUsers().then((users) => {
            dispatch(receiveUsers(users))
        })
    }
}
