import React from 'react'
import Countries from '../../../assets/data/countries'

const Form = (props) => {
    return (
        <form onSubmit={props.onSubmit}>
            <div className="form-input">
                <label>Verification Code</label>
                <input type="number" name="code" value={props.code} onChange={props.onChange} />
                <span className="error">{props.errors.code}</span>
            </div>
            <div className="form-input">
                <label>Phone</label>
                <input type="text" name="phone" value={props.phone} onChange={props.onChange} />
                <span className="error">{props.errors.phone}</span>
            </div>
            <div className="form-input">
                <label>Address</label>
                <input type="text" name="address" value={props.address} onChange={props.onChange} />
                <span className="error">{props.errors.address}</span>
            </div>
            <div className="form-input">
                <label>City</label>
                <input type="text" name="city" value={props.city} onChange={props.onChange} />
                <span className="error">{props.errors.city}</span>
            </div>
            <div className="form-input">
                <label>State</label>
                <input type="text" name="state" value={props.state} onChange={props.onChange} />
                <span className="error">{props.errors.state}</span>
            </div>
            <div className="form-input">
                <label>Country</label>
                <select name="country" defaultValue={props.country} onChange={props.onChange}>
                    <option value=""></option>
                    {
                        Countries.map((country, key) => <option key={key} value={country.name}>{country.name}</option>)
                    }
                </select>
                <span className="error">{props.errors.country}</span>
            </div>
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