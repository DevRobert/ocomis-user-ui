import {
    FETCH_USERS_REQUESTED, FETCH_USERS_SUCCEEDED, FETCH_USERS_FAILED,
    FETCH_USER_REQUESTED, FETCH_USER_SUCCEEDED, FETCH_USER_FAILED,
    REGISTER_USER_REQUESTED, REGISTER_USER_SUCCEEDED, REGISTER_USER_FAILED, RESET_REGISTER_USER, SET_PASSWORD_REQUESTED, SET_PASSWORD_SUCCEEDED, SET_PASSWORD_FAILED, OPEN_SET_PASSWORD, CANCEL_SET_PASSWORD, REMOVE_PASSWORD_REQUESTED, REMOVE_PASSWORD_SUCCEEDED, REMOVE_PASSWORD_FAILED, OPEN_REMOVE_PASSWORD, CANCEL_REMOVE_PASSWORD
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
                errorMessage: undefined,
                setPassword: {
                    ...state.details.setPassword,
                    isVisible: false
                },
                removePassword: {
                    ...state.details.removePassword,
                    isVisible: false
                }
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

    case RESET_REGISTER_USER:
        return {
            ...state,
            create: {
                ...state.create,
                errorMessage: undefined
            }
        }

    case SET_PASSWORD_REQUESTED:
        return {
            ...state,
            details: {
                ...state.details,
                setPassword: {
                    ...state.details.setPassword,
                    isSubmitting: true,
                    errorMessage: undefined
                }
            }
        }
    case SET_PASSWORD_SUCCEEDED:
        return {
            ...state,
            details: {
                ...state.details,
                setPassword: {
                    ...state.details.setPassword,
                    isSubmitting: false,
                    errorMessage: undefined,
                    isVisible: false
                },
                hasPassword: true
            }
        }

    case SET_PASSWORD_FAILED:
        return {
            ...state,
            details: {
                ...state.details,
                setPassword: {
                    ...state.details.setPassword,
                    isSubmitting: false,
                    errorMessage: action.error.message
                }
            }
        }

    case OPEN_SET_PASSWORD:
        return {
            ...state,
            details: {
                ...state.details,
                setPassword: {
                    ...state.details.setPassword,
                    isVisible: true,
                    errorMessage: undefined
                }
            }
        }

    case CANCEL_SET_PASSWORD:
        return {
            ...state,
            details: {
                ...state.details,
                setPassword: {
                    ...state.details.setPassword,
                    isVisible: false
                }
            }
        }

    case REMOVE_PASSWORD_REQUESTED:
        return {
            ...state,
            details: {
                ...state.details,
                removePassword: {
                    ...state.details.removePassword,
                    isSubmitting: true,
                    errorMessage: undefined
                }
            }
        }

    case REMOVE_PASSWORD_SUCCEEDED:
        return {
            ...state,
            details: {
                ...state.details,
                removePassword: {
                    ...state.details.removePassword,
                    isSubmitting: false,
                    errorMessage: undefined,
                    isVisible: false
                },
                hasPassword: false
            }
        }

    case REMOVE_PASSWORD_FAILED:
        return {
            ...state,
            details: {
                ...state.details,
                removePassword: {
                    ...state.details.removePassword,
                    isSubmitting: false,
                    errorMessage: action.error.message
                }
            }
        }

    case OPEN_REMOVE_PASSWORD:
        return {
            ...state,
            details: {
                ...state.details,
                removePassword: {
                    ...state.details.removePassword,
                    isVisible: true,
                    errorMessage: undefined
                }
            }
        }

    case CANCEL_REMOVE_PASSWORD:
        return {
            ...state,
            details: {
                ...state.details,
                removePassword: {
                    ...state.details.removePassword,
                    isVisible: false
                }
            }
        }

    default:
        return state
    }
}

export default users
