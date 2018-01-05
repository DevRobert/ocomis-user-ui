import React from 'react'
import PropTypes from 'prop-types'

class UserListRow extends React.Component {
    render () {
        return (
            <tr>
                <td>{this.props.id}</td>
                <td>{this.props.name}</td>
                <td><button className="btn btn-default" onClick={() => { this.props.onClick(this.props.id) }}>Open</button></td>
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
