import { RECEIVE_USERS, REQUEST_USERS } from '../actions/index'

const defaultState = {
    list: [],
    isLoading: false
}

const users = (state = defaultState, action) => {
    switch (action.type) {
    case REQUEST_USERS:
        return {
            ...state,
            isLoading: true
        }

    case RECEIVE_USERS:
        return {
            ...state,
            isLoading: false,
            list: action.users
        }

    default:
        return state
    }
}

export default users
