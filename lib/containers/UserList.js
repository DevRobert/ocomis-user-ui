import { connect } from 'react-redux'
import UserListComponent from '../components/UserList'

const mapStateToProps = state => {
    return {
        users: state.users.list,
        isLoading: state.users.isLoading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onUserClick: id => {
            window.alert('User clicked: ' + id)
        }
    }
}

const UserList = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserListComponent)

export default UserList
