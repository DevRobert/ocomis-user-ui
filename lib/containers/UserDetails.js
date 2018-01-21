import { connect } from 'react-redux'
import UserDetailsComponent from '../components/UserDetails'
import { fetchUser, setPassword, openSetPassword, cancelSetPassword } from '../actions'

function mapStateToProps (state) {
    return {
        id: state.users.details.id,
        name: state.users.details.name,
        hasPassword: state.users.details.hasPassword,
        isLoading: state.users.details.isLoading,
        errorMessage: state.users.details.errorMessage,
        setPasswordIsSubmitting: state.users.details.setPassword.isSubmitting,
        setPasswordErrorMessage: state.users.details.setPassword.errorMessage,
        isSetPasswordVisible: state.users.details.setPassword.isVisible
    }
}

function mapDispatchToProps (dispatch) {
    return {
        init: userId => {
            dispatch(fetchUser(userId))
        },
        setPassword: (userId, password, repeatPassword) => {
            dispatch(setPassword(userId, password, repeatPassword))
        },
        openSetPassword: () => {
            dispatch(openSetPassword())
        },
        cancelSetPassword: () => {
            dispatch(cancelSetPassword())
        },
        removePassword: () => {
            alert('Not implemented, yet.')
        }
    }
}

const UserDetails = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserDetailsComponent)

export default UserDetails
