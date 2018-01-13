import {
    FETCH_USERS_REQUESTED, FETCH_USERS_SUCCEEDED, FETCH_USERS_FAILED,
    FETCH_USER_REQUESTED, FETCH_USER_SUCCEEDED, FETCH_USER_FAILED,
    REGISTER_USER_REQUESTED, REGISTER_USER_SUCCEEDED, REGISTER_USER_FAILED
} from '../actions/index'

const defaultState = {
    list: [],
    isLoading: false,
    errorMessage: undefined,
    details: {
        id: undefined,
        name: undefined,
        hasPassword: undefined,
        isLoading: false,
        errorMessage: undefined
    },
    create: {
        name: undefined,
        isSubmitting: false,
        errorMessage: undefined
    }
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

    case FETCH_USER_REQUESTED:
        return {
            ...state,
            details: {
                ...state.details,
                isLoading: true,
                id: action.userId,
                errorMessage: undefined
            }
        }

    case FETCH_USER_SUCCEEDED:
        return {
            ...state,
            details: {
                ...state.details,
                isLoading: false,
                name: action.user.name,
                hasPassword: action.user.hasPassword,
                errorMessage: undefined
            }
        }

    case FETCH_USER_FAILED:
        return {
            ...state,
            details: {
                ...state.details,
                isLoading: false,
                name: undefined,
                hasPassword: undefined,
                errorMessage: action.error.message
            }
        }

    case REGISTER_USER_REQUESTED:
        return {
            ...state,
            create: {
                ...state.create,
                isSubmitting: true,
                errorMessage: undefined
            }
        }

    case REGISTER_USER_SUCCEEDED:
        return {
            ...state,
            create: {
                ...state.create,
                isSubmitting: false
            }
        }

    case REGISTER_USER_FAILED:
        return {
            ...state,
            create: {
                ...state.create,
                isSubmitting: false,
                errorMessage: action.errorMessage
            }
        }
    default:
        return state
    }
}

export default users
