import {
    FETCH_USERS_REQUESTED, FETCH_USERS_SUCCEEDED, FETCH_USERS_FAILED
} from '../actions/index'

const defaultState = {
    list: [],
    isLoading: false,
    errorMessage: undefined
}

const users = (state = defaultState, action) => {
    switch (action.type) {
    case FETCH_USERS_REQUESTED:
        return {
            ...state,
            isLoading: true
        }

    case FETCH_USERS_SUCCEEDED:
        return {
            ...state,
            isLoading: false,
            list: action.users
        }

    case FETCH_USERS_FAILED:
        return {
            ...state,
            isLoading: false,
            list: [],
            errorMessage: action.error.message
        }

    default:
        return state
    }
}

export default users
