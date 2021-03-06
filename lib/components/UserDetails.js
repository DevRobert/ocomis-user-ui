import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { SetUserPasswordForm } from './SetUserPasswordForm'
import { RemoveUserPasswordForm } from './RemoveUserPasswordForm'

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
                                { !this.props.isSetPasswordVisible && !this.props.isRemovePasswordVisible && (
                                    <div>
                                        <p>
                                            {this.props.hasPassword ? '●●●●●●' : 'No password set'}
                                        </p>

                                        <p>
                                            <button className="btn btn-default" onClick={this.props.openSetPassword}>Set password</button>&nbsp;

                                            {this.props.hasPassword && (
                                                <button className="btn btn-default" onClick={this.props.openRemovePassword}>Remove password</button>
                                            )}
                                        </p>
                                    </div>
                                )}

                                { this.props.isSetPasswordVisible && (
                                    <SetUserPasswordForm
                                        setPassword={(password, repeatPassword) => {
                                            this.props.setPassword(this.props.id, password, repeatPassword)
                                        }}
                                        cancelSetPassword={this.props.cancelSetPassword}
                                        errorMessage={this.props.setPasswordErrorMessage}
                                        isSubmitting={this.props.setPasswordIsSubmitting}/>
                                )}

                                { this.props.isRemovePasswordVisible && (
                                    <RemoveUserPasswordForm
                                        removePassword={() => {
                                            this.props.removePassword(this.props.id)
                                        }}
                                        cancelRemovePassword={this.props.cancelRemovePassword}
                                        errorMessage={this.props.removePasswordErrorMessage}
                                        isSubmitting={this.props.removePasswordIsSubmitting}/>
                                )}
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
    id: PropTypes.number,
    name: PropTypes.string,
    hasPassword: PropTypes.bool,
    isLoading: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string,
    init: PropTypes.func.isRequired,
    match: PropTypes.shape({
        params: PropTypes.shape({
            userId: PropTypes.string.isRequired
        })
    }),

    isSetPasswordVisible: PropTypes.bool.isRequired,
    openSetPassword: PropTypes.func.isRequired,
    setPassword: PropTypes.func.isRequired,
    cancelSetPassword: PropTypes.func.isRequired,
    setPasswordErrorMessage: PropTypes.string,
    setPasswordIsSubmitting: PropTypes.bool.isRequired,

    isRemovePasswordVisible: PropTypes.bool.isRequired,
    openRemovePassword: PropTypes.func.isRequired,
    removePassword: PropTypes.func.isRequired,
    cancelRemovePassword: PropTypes.func.isRequired,
    removePasswordErrorMessage: PropTypes.string,
    removePasswordIsSubmitting: PropTypes.bool.isRequired
}
