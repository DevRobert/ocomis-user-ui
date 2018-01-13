import { connect } from 'react-redux'
import UserDetailsComponent from '../components/UserDetails'
import { fetchUser, setPassword } from '../actions'

function mapStateToProps (state) {
    return {
        id: state.users.details.id,
        name: state.users.details.name,
        hasPassword: state.users.details.hasPassword,
        isLoading: state.users.details.isLoading,
        errorMessage: state.users.details.errorMessage,
        setPasswordIsSubmitting: state.users.details.setPassword.isSubmitting,
        setPasswordErrorMessage: state.users.details.setPassword.errorMessage
    }
}

function mapDispatchToProps (dispatch) {
    return {
        init: userId => {
            dispatch(fetchUser(userId))
        },
        setPassword: (userId, password, repeatPassword) => {
            dispatch(setPassword(userId, password, repeatPassword))
        }
    }
}

const UserDetails = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserDetailsComponent)

export default UserDetails
