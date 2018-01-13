import React from 'react'
import UserListRow from './UserListRow'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class UserList extends React.Component {
    componentWillMount () {
        this.props.init()
    }

    render () {
        return (
            <div>
                <h2>Users</h2>

                {this.props.isLoading &&
                    <p className="alert alert-info">Loading users...</p>
                }

                {this.props.errorMessage &&
                    <p className="alert alert-danger">
                        The user list could not be loaded:<br/>
                        {this.props.errorMessage}
                    </p>
                }

                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.users.map(user => <UserListRow key={user.id}id={user.id} name={user.name} />)}
                    </tbody>
                </table>

                <p>
                    <Link to="/user/Register" className="btn btn-success">Register user</Link>
                </p>
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
    isLoading: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string,
    init: PropTypes.func.isRequired
}

export default UserList
