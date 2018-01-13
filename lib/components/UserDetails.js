import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { SetUserPasswordForm } from './SetUserPasswordForm'

export default class UserDetails extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            showSetPasswordForm: false
        }
    }

    componentWillMount () {
        this.props.init(this.props.match.params.userId)
    }

    showSetPasswordForm () {
        this.setState({
            showSetPasswordForm: true
        })
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
                                { !this.state.showSetPasswordForm && (
                                    <p>
                                        {this.props.hasPassword ? 'Password set' : 'No password set'}
                                    </p>
                                )}

                                { !this.state.showSetPasswordForm && (
                                    <p>
                                        <a className="btn btn-default" onClick={this.showSetPasswordForm.bind(this)}>Set password</a>
                                    </p>
                                )}

                                { this.state.showSetPasswordForm && (
                                    <SetUserPasswordForm setPassword={(password, repeatPassword) => {
                                        this.props.setPassword(this.props.id, password, repeatPassword)
                                    }} errorMessage={this.props.setPasswordErrorMessage} isSubmitting={this.props.setPasswordIsSubmitting}/>
                                )}

                                {this.props.hasPassword ? (
                                    <a className="btn btn-default">Remove</a>
                                ) : null}
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
    setPassword: PropTypes.func.isRequired,
    setPasswordErrorMessage: PropTypes.string,
    setPasswordIsSubmitting: PropTypes.bool.isRequired
}
