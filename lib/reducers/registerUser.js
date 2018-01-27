import {
    REGISTER_USER_REQUESTED, REGISTER_USER_SUCCEEDED, REGISTER_USER_FAILED, RESET_REGISTER_USER
} from '../actions/index'

const defaultState = {
    name: undefined,
    isSubmitting: false,
    errorMessage: undefined
}

const registerUser = (state = defaultState, action) => {
    switch (action.type) {
    case REGISTER_USER_REQUESTED:
        return {
            ...state,
            isSubmitting: true,
            errorMessage: undefined
        }

    case REGISTER_USER_SUCCEEDED:
        return {
            ...state,
            isSubmitting: false
        }

    case REGISTER_USER_FAILED:
        return {
            ...state,
            isSubmitting: false,
            errorMessage: action.errorMessage
        }

    case RESET_REGISTER_USER:
        return {
            ...state,
            errorMessage: undefined
        }

    default:
        return state
    }
}

export default registerUser
