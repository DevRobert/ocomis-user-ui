import React from 'react'
import PropTypes from 'prop-types'

class UserListRow extends React.Component {
    render () {
        return (
            <tr>
                <td><b>Id</b>: {this.props.id}</td>
                <td><b>Name</b>: {this.props.name}</td>
                <td><button onClick={() => { this.props.onClick(this.props.id) }}>Open</button></td>
            </tr>
        )
    }
}

UserListRow.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default UserListRow
