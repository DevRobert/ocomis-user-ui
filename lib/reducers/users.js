import {
    REQUEST_USERS, RECEIVE_USERS,
    REQUEST_USER, RECEIVE_USER,
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

    case REQUEST_USER:
        return {
            ...state,
            details: {
                ...state.details,
                isLoading: true,
                id: action.userId,
                errorMessage: undefined
            }
        }

    case RECEIVE_USER:
        if (action.error) {
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
        }

        return {
            ...state,
            details: {
                ...state.details,
                isLoading: false,
                name: action.user.name,
                hasPassword: action.user.hasPassword,
                errorMessage: action.errorMessage
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
