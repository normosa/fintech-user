import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const LoginForm = (props) => {
    return (
        <form onSubmit={props.onSubmit}>
            <div className="form-input">
                <label>Username</label>
                <input type="text" name="username" value={props.username} onChange={props.onChange} />
                <span className="error">{props.errors.username}</span>
            </div>
            <div className="form-input">
                <label>Password</label>
                <input type="password" name="password" value={props.password} onChange={props.onChange} />
                <span className="error">{props.errors.password}</span>
            </div>
            <div className="extras">
                <Link to="/auth/reset">Reset password</Link>
            </div>
            <div className="actions">
                <button className={props.processing ? 'disabled' : ''}>Sign in</button>
            </div>
        </form>
    )
}

export default withRouter(LoginForm)