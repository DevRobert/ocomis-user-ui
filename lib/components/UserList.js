import React from 'react'
import UserListRow from './UserListRow'
import PropTypes from 'prop-types'

class UserList extends React.Component {
    render () {
        return (
            <div>
                <h2>Users</h2>

                {this.props.isLoading &&
                    <p className="alert alert-info">Loading users...</p>
                }

                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.users.map(user => <UserListRow key={user.id}id={user.id} name={user.name} onClick={this.props.onUserClick}/>)}
                    </tbody>
                </table>
            </div>
        )
    }
}

UserList.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    onUserClick: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired
}

export default UserList
