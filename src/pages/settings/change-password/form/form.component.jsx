import React from 'react'
import './form.styles.scss'

const Form = (props) => {
    return (
        <form>
            <div className="inputs">
                <div className="row">
                    <div className="form-label">
                        <label>Current Password</label>
                    </div>
                    <div className="form-input">
                        <input type="password" name="currentPassword" value={props.currentPassword} onChange={props.onChange} />
                        <span className="error">{props.errors.currentPassword}</span>
                    </div>
                </div>
                <div className="row">
                    <div className="form-label">
                        <label>New Password</label>
                    </div>
                    <div className="form-input">
                        <input type="password" name="password" value={props.password} onChange={props.onChange} />
                        <span className="error">{props.errors.password}</span>
                    </div>
                </div>
                <div className="row">
                    <div className="form-label">
                        <label>Password</label>
                    </div>
                    <div className="form-input">
                        <input type="password" name="password2" value={props.password2} onChange={props.onChange} />
                        <span className="error">{props.errors.password2}</span>
                    </div>
                </div>
            </div>
            <div className="actions">
                <button type="submit" onClick={props.onSubmit}>Save</button>
                <button type="reset" onClick={props.onCancel}>Cancel</button>
            </div>
        </form>
    )
}

export default Form