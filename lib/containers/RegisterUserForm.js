import { connect } from 'react-redux'
import RegisterUserFormComponent from '../components/RegisterUserForm'
import { registerUser, resetRegisterUser } from '../actions'

const mapStateToProps = state => {
    const registerUser = state.registerUser

    return {
        name: registerUser.name,
        isSubmitting: registerUser.isSubmitting,
        errorMessage: registerUser.errorMessage
    }
}

const mapDispatchToProps = dispatch => {
    return {
        registerUser: user => {
            dispatch(registerUser(user))
        },
        init: () => {
            dispatch(resetRegisterUser())
        }
    }
}

const RegisterUserForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(RegisterUserFormComponent)

export default RegisterUserForm
