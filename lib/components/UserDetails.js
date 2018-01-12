import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default class UserDetails extends React.Component {
    componentWillMount () {
        this.props.init(this.props.match.params.userId)
    }

    render () {
        if (this.props.isLoading) {
            return (
                <p className="alert alert-info">
                    Loading user #{this.props.id}...
                </p>
            )
        }

        if (this.props.errorMessage) {
            return (
                <p className="alert alert-danger">
                    The user could not be loaded:<br/>
                    {this.props.errorMessage}
                </p>
            )
        }

        return (
            <div>
                <h2>{this.props.name}</h2>

                <table className="table">
                    <tbody>
                        <tr>
                            <th>ID:</th>
                            <td>{this.props.id}</td>
                        </tr>
                        <tr>
                            <th>Name:</th>
                            <td>{this.props.name}</td>
                        </tr>
                        <tr>
                            <th>Password:</th>
                            <td>
                                {this.props.hasPassword ? (
                                    <p>
                                        Password set
                                    </p>
                                ) : (
                                    <p>
                                        No password set
                                    </p>
                                )}

                                <p>
                                    <a className="btn btn-default">Set password</a>&nbsp;
                                    {this.props.hasPassword ? (
                                        <a className="btn btn-default">Remove</a>
                                    ) : null}
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <p>
                    <a className="btn btn-default">Edit</a>&nbsp;
                    <Link to="/user/Users/" className="btn btn-default">Back</Link>
                </p>
            </div>
        )
    }
}

UserDetails.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string,
    hasPassword: PropTypes.bool,
    isLoading: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string,
    init: PropTypes.func.isRequired,
    match: PropTypes.shape({
        params: PropTypes.shape({
            userId: PropTypes.string.isRequired
        })
    })
}
