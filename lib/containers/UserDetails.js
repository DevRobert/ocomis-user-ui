import { connect } from 'react-redux'
import UserDetailsComponent from '../components/UserDetails'
import { fetchUser, setPassword, openSetPassword, cancelSetPassword, removePassword, openRemovePassword, cancelRemovePassword } from '../actions'

function mapStateToProps (state) {
    return {
        id: state.users.details.id,
        name: state.users.details.name,
        hasPassword: state.users.details.hasPassword,
        isLoading: state.users.details.isLoading,
        errorMessage: state.users.details.errorMessage,

        isSetPasswordVisible: state.users.details.setPassword.isVisible,
        setPasswordIsSubmitting: state.users.details.setPassword.isSubmitting,
        setPasswordErrorMessage: state.users.details.setPassword.errorMessage,

        isRemovePasswordVisible: state.users.details.removePassword.isVisible,
        removePasswordIsSubmitting: state.users.details.removePassword.isSubmitting,
        removePasswordErrorMessage: state.users.details.removePassword.errorMessage
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

        removePassword: (userId) => {
            dispatch(removePassword(userId))
        },
        openRemovePassword: () => {
            dispatch(openRemovePassword())
        },
        cancelRemovePassword: () => {
            dispatch(cancelRemovePassword())
        }
    }
}

const UserDetails = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserDetailsComponent)

export default UserDetails
