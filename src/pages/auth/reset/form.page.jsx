import React from 'react'

const Form = (props) => {
    return (
        <form onSubmit={props.onSubmit}>
            <div className="form-input">
                <label>Username</label>
                <input type="email" name="username" value={props.username} onChange={props.onChange} />
                <span className="error">{props.errors.username}</span>
            </div>
            <div className="actions">
                <button>Reset</button>
            </div>
        </form>
    )
}

export default Form