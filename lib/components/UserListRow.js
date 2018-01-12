import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class UserListRow extends React.Component {
    render () {
        return (
            <tr>
                <td>{this.props.id}</td>
                <td>{this.props.name}</td>
                <td><Link className="btn btn-default" to={`/user/UserDetails/${this.props.id}`}>Open</Link></td>
            </tr>
        )
    }
}

UserListRow.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
}

export default UserListRow
