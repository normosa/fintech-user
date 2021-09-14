import React from 'react'

const Form = (props) => {
    return (
        <form onSubmit={props.onSubmit}>
            <div className="form-input">
                <label>New Password</label>
                <input type="password" name="password" value={props.password} onChange={props.onChange} />
                <span className="error">{props.errors.password}</span>
            </div>
            <div className="form-input">
                <label>Confirm Password</label>
                <input type="password" name="password2" value={props.password2} onChange={props.onChange} />
                <span className="error">{props.errors.password2}</span>
            </div>
            <div className="actions">
                <button>Save</button>
            </div>
        </form>
    )
}

export default Form