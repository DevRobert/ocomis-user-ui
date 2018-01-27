import { connect } from 'react-redux'
import UserDetailsComponent from '../components/UserDetails'
import { fetchUser, setPassword, openSetPassword, cancelSetPassword, removePassword, openRemovePassword, cancelRemovePassword } from '../actions'

function mapStateToProps (state) {
    const userDetails = state.userDetails

    return {
        id: userDetails.id,
        name: userDetails.name,
        hasPassword: userDetails.hasPassword,
        isLoading: userDetails.isLoading,
        errorMessage: userDetails.errorMessage,

        isSetPasswordVisible: userDetails.setPassword.isVisible,
        setPasswordIsSubmitting: userDetails.setPassword.isSubmitting,
        setPasswordErrorMessage: userDetails.setPassword.errorMessage,

        isRemovePasswordVisible: userDetails.removePassword.isVisible,
        removePasswordIsSubmitting: userDetails.removePassword.isSubmitting,
        removePasswordErrorMessage: userDetails.removePassword.errorMessage
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
