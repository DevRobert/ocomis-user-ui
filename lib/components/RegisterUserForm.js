import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default class RegisterUserForm extends React.Component {
    constructor (props) {
        super(props)

        this.name = undefined
    }

    handleNameChanged (e) {
        this.name = e.target.value
    }

    registerUser () {
        const user = {
            name: this.name
        }

        console.log('USER COMES:::')
        console.log(user)

        this.props.registerUser(user)
    }

    render () {
        return (
            <div>
                <h2>Register user</h2>

                {this.props.isSubmitting ? (
                    <p className="alert alert-info">Registering user...</p>
                ) : undefined}

                {this.props.errorMessage ? (
                    <p className="alert alert-danger">{this.props.errorMessage}</p>
                ) : undefined}

                <div className="form-group">
                    <label htmlFor="NameTextBox">Name:</label>
                    <input type="text" className="form-control" id="NameNextBox" disabled={this.props.isSubmitting} onBlur={this.handleNameChanged.bind(this)} />
                </div>

                <p>
                    <button className="btn btn-success" onClick={() => this.registerUser()} disabled={this.props.isSubmitting}>Register user</button>&nbsp;
                    <Link className="btn btn-default" to="/user/Users" disabled={this.props.isSubmitting}>Cancel</Link>
                </p>
            </div>
        )
    }
}

RegisterUserForm.propTypes = {
    name: PropTypes.string,
    isSubmitting: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string,
    registerUser: PropTypes.func.isRequired
}
