import { connect } from 'react-redux'
import RegisterUserFormComponent from '../components/RegisterUserForm'
import { registerUser, resetRegisterUser } from '../actions'

const mapStateToProps = state => {
    return {
        name: state.users.create.name,
        isSubmitting: state.users.create.isSubmitting,
        errorMessage: state.users.create.errorMessage
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
