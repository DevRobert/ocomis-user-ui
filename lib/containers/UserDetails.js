import { connect } from 'react-redux'
import UserDetailsComponent from '../components/UserDetails'
import { fetchUser } from '../actions'

function mapStateToProps (state) {
    return {
        id: state.users.details.id,
        name: state.users.details.name,
        hasPassword: state.users.details.hasPassword,
        isLoading: state.users.details.isLoading,
        errorMessage: state.users.details.errorMessage
    }
}

function mapDispatchToProps (dispatch) {
    return {
        init: userId => {
            dispatch(fetchUser(userId))
        }
    }
}

const UserDetails = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserDetailsComponent)

export default UserDetails
