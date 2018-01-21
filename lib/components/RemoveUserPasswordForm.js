import React from 'react'
import PropTypes from 'prop-types'

export class RemoveUserPasswordForm extends React.Component {
    render () {
        return (
            <div>
                <p>
                    The user can&rsquo;t login anymore, if you remove his or her password.
                </p>

                { this.props.isSubmitting && (
                    <p className="alert alert-info">
                        Removing password...
                    </p>
                )}

                { this.props.errorMessage && (
                    <p className="alert alert-danger">
                        {this.props.errorMessage}
                    </p>
                )}

                <p>
                    <button className="btn btn-danger" onClick={this.props.removePassword} disabled={this.props.isSubmitting}>Remove password</button>&nbsp;
                    <button className="btn btn-default" onClick={this.props.cancelRemovePassword} disabled={this.props.isSubmitting}>Cancel</button>
                </p>
            </div>
        )
    }
}

RemoveUserPasswordForm.propTypes = {
    removePassword: PropTypes.func.isRequired,
    cancelRemovePassword: PropTypes.func.isRequired,
    isSubmitting: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string
}
