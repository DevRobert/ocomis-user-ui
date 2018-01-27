import {
    FETCH_USER_REQUESTED, FETCH_USER_SUCCEEDED, FETCH_USER_FAILED,
    SET_PASSWORD_REQUESTED, SET_PASSWORD_SUCCEEDED, SET_PASSWORD_FAILED, OPEN_SET_PASSWORD, CANCEL_SET_PASSWORD,
    REMOVE_PASSWORD_REQUESTED, REMOVE_PASSWORD_SUCCEEDED, REMOVE_PASSWORD_FAILED, OPEN_REMOVE_PASSWORD, CANCEL_REMOVE_PASSWORD
} from '../actions/index'

const defaultState = {
    id: undefined,
    name: undefined,
    hasPassword: undefined,
    isLoading: false,
    errorMessage: undefined,
    setPassword: {
        isVisible: false,
        isSubmitting: false,
        errorMessage: undefined
    },
    removePassword: {
        isVisible: false,
        isSubmitting: false,
        errorMessage: undefined
    }
}

const userDetails = (state = defaultState, action) => {
    switch (action.type) {
    case FETCH_USER_REQUESTED:
        return {
            ...state,
            isLoading: true,
            id: action.userId,
            errorMessage: undefined,
            setPassword: {
                ...state.setPassword,
                isVisible: false
            },
            removePassword: {
                ...state.removePassword,
                isVisible: false
            }
        }

    case FETCH_USER_SUCCEEDED:
        return {
            ...state,
            isLoading: false,
            name: action.user.name,
            hasPassword: action.user.hasPassword,
            errorMessage: undefined
        }

    case FETCH_USER_FAILED:
        return {
            ...state,
            isLoading: false,
            name: undefined,
            hasPassword: undefined,
            errorMessage: action.error.message
        }

    case SET_PASSWORD_REQUESTED:
        return {
            ...state,
            setPassword: {
                ...state.setPassword,
                isSubmitting: true,
                errorMessage: undefined
            }
        }

    case SET_PASSWORD_SUCCEEDED:
        return {
            ...state,
            setPassword: {
                ...state.setPassword,
                isSubmitting: false,
                errorMessage: undefined,
                isVisible: false
            },
            hasPassword: true
        }

    case SET_PASSWORD_FAILED:
        return {
            ...state,
            setPassword: {
                ...state.setPassword,
                isSubmitting: false,
                errorMessage: action.error.message
            }
        }

    case OPEN_SET_PASSWORD:
        return {
            ...state,
            setPassword: {
                ...state.setPassword,
                isVisible: true,
                errorMessage: undefined
            }
        }

    case CANCEL_SET_PASSWORD:
        return {
            ...state,
            setPassword: {
                ...state.setPassword,
                isVisible: false
            }
        }

    case REMOVE_PASSWORD_REQUESTED:
        return {
            ...state,
            removePassword: {
                ...state.removePassword,
                isSubmitting: true,
                errorMessage: undefined
            }
        }

    case REMOVE_PASSWORD_SUCCEEDED:
        return {
            ...state,
            removePassword: {
                ...state.removePassword,
                isSubmitting: false,
                errorMessage: undefined,
                isVisible: false
            },
            hasPassword: false
        }

    case REMOVE_PASSWORD_FAILED:
        return {
            ...state,
            removePassword: {
                ...state.removePassword,
                isSubmitting: false,
                errorMessage: action.error.message
            }
        }

    case OPEN_REMOVE_PASSWORD:
        return {
            ...state,
            removePassword: {
                ...state.removePassword,
                isVisible: true,
                errorMessage: undefined
            }
        }

    case CANCEL_REMOVE_PASSWORD:
        return {
            ...state,
            removePassword: {
                ...state.removePassword,
                isVisible: false
            }
        }

    default:
        return state
    }
}

export default userDetails
