import React from 'react'
import PropTypes from 'prop-types'

export class SetUserPasswordForm extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            password: undefined,
            repeatPassword: undefined
        }

        this.passwordChanged = this.passwordChanged.bind(this)
        this.repeatPasswordChanged = this.repeatPasswordChanged.bind(this)
        this.submit = this.submit.bind(this)
    }

    passwordChanged (e) {
        this.setState({
            password: e.target.value
        })
    }

    repeatPasswordChanged (e) {
        this.setState({
            repeatPassword: e.target.value
        })
    }

    submit () {
        this.props.setPassword(
            this.state.password,
            this.state.repeatPassword
        )
    }

    render () {
        return (
            <div>
                { this.props.isSubmitting && (
                    <p className="alert alert-info">
                        Changing password...
                    </p>
                )}

                { this.props.errorMessage && (
                    <p className="alert alert-danger">
                        {this.props.errorMessage}
                    </p>
                )}

                <div className="form-group">
                    <label htmlFor="PasswordTextBox">
                        Password:
                    </label>

                    <input id="PasswordTextBox" type="password" className="form-control" onChange={this.passwordChanged} disabled={this.props.isSubmitting}/>
                </div>

                <div className="form-group">
                    <label htmlFor="RepeatPasswordTextBox">
                        Repeat password:
                    </label>

                    <input id="RepeatPasswordTextBox" type="password" className="form-control" onChange={this.repeatPasswordChanged} disabled={this.props.isSubmitting}/>
                </div>

                <div>
                    <button className="btn btn-success" onClick={this.submit} disabled={this.props.isSubmitting}>Set password</button>&nbsp;
                    <button className="btn btn-default" onClick={this.props.cancelSetPassword} disabled={this.props.isSubmitting}>Cancel</button>
                </div>
            </div>
        )
    }
}

SetUserPasswordForm.propTypes = {
    setPassword: PropTypes.func.isRequired,
    cancelSetPassword: PropTypes.func.isRequired,
    isSubmitting: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string
}
