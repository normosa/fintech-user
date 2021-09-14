import React from 'react'
import './form.styles.scss'
import Countries from '../../../../assets/data/countries'

const Form = (props) => {
    return (
        <form>
            <div className="inputs">
                <div className="fl-row">
                    <div className="col-50">
                        <div className="row" id="firstname">
                            <div className="form-label">
                                <label>Firstname</label>
                            </div>
                            <div className="form-input">
                                <input type="text" name="firstname" value={props.firstname} onChange={props.onChange} />
                                <span className="error">{props.errors.firstname}</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-50">
                        <div className="row" id="lastname">
                            <div className="form-label">
                                <label>Lastname</label>
                            </div>
                            <div className="form-input">
                                <input type="text" name="lastname" value={props.lastname} onChange={props.onChange} />
                                <span className="error">{props.errors.lastname}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fl-row">
                    <div className="col-50">
                        <div className="row" id="phone">
                            <div className="form-label">
                                <label>Phone</label>
                            </div>
                            <div className="form-input">
                                <input type="text" name="phone" value={props.phone} onChange={props.onChange} />
                                <span className="error">{props.errors.phone}</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-50">
                        <div className="row" id="email">
                            <div className="form-label">
                                <label>Email</label>
                            </div>
                            <div className="form-input">
                                <input type="text" name="email" disabled={true} value={props.email} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fl-row">
                    <div className="col-50">
                        <div className="row" id="address">
                            <div className="form-label">
                                <label>Address</label>
                            </div>
                            <div className="form-input">
                                <textarea type="text" name="address" value={props.address} onChange={props.onChange} />
                                <span className="error">{props.errors.address}</span>
                            </div>
                        </div>
                    </div>
                    <div className="row col-50" id="city">
                        <div className="form-label">
                            <label>City</label>
                        </div>
                        <div className="form-input">
                            <input type="text" name="city" value={props.city} onChange={props.onChange} />
                            <span className="error">{props.errors.city}</span>
                        </div>
                    </div>
                </div>
                <div className="fl-row">
                    <div className="row col-50" id="state">
                        <div className="form-label">
                            <label>State</label>
                        </div>
                        <div className="form-input">
                            <input type="text" name="state" value={props.state} onChange={props.onChange} />
                            <span className="error">{props.errors.state}</span>
                        </div>
                    </div>
                    <div className="row col-50" id="country">
                        <div className="form-label">
                            <label>Country</label>
                        </div>
                        <div className="form-input">
                            <select name="country" defaultValue={props.country} onChange={props.onChange}>
                                <option value=""></option>
                                {
                                    Countries.map((country, key) => <option key={key} value={country.name}>{country.name}</option>)
                                }
                            </select>
                            <span className="error">{props.errors.country}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="actions">
                <button type="submit" onClick={props.onSubmit}>Save</button>
            </div>
        </form>
    )
}

export default Form