import React from 'react'
import UserListRow from './UserListRow'

class UserList extends React.Component {
    render() {
        return (
            <div>
                <h3>User List React component</h3>

                <UserListRow/>
                <UserListRow/>
                <UserListRow/>
            </div>
        )
    }
}

export default UserList
