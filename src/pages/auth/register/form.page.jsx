import React from 'react'
import { withRouter } from 'react-router-dom'

const LoginForm = (props) => {
    return (
        <form onSubmit={props.onSubmit}>
            <div className="form-input" id="firstname">
                <label>Firstname</label>
                <input type="text" name="firstname" value={props.firstname} onChange={props.onChange} />
                <span className="error">{props.errors.firstname}</span>
            </div>
            <div className="form-input" id="lastname">
                <label>Lastname</label>
                <input type="text" name="lastname" value={props.lastname} onChange={props.onChange} />
                <span className="error">{props.errors.lastname}</span>
            </div>
            <div className="form-input" id="email">
                <label>Email</label>
                <input type="email" name="email" value={props.email} onChange={props.onChange} />
                <span className="error">{props.errors.email}</span>
            </div>
            <div className="form-input" id="email2">
                <label>Retype Email</label>
                <input type="email" name="email2" value={props.email2} onChange={props.onChange} />
                <span className="error">{props.errors.email2}</span>
            </div>
            <div className="actions">
                <button>Register</button>
            </div>
        </form>
    )
}

export default withRouter(LoginForm)