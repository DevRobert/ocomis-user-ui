import { connect } from 'react-redux'
import UserListComponent from '../components/UserList'
import { fetchUsers } from '../actions'

const mapStateToProps = state => {
    return {
        users: state.users.list,
        isLoading: state.users.isLoading,
        errorMessage: state.users.errorMessage
    }
}

const mapDispatchToProps = dispatch => {
    return {
        init: () => {
            dispatch(fetchUsers())
        }
    }
}

const UserList = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserListComponent)

export default UserList
