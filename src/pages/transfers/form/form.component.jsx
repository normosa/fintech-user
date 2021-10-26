import React from 'react'
import { withRouter } from 'react-router-dom'
import './form.styles.scss'

const Form = (props) => {
    return (
        <form>
            <div className="inputs">
                <div className="row" id="accountName">
                    <div className="form-label">
                        <label>Beneficiary's Account Name</label>
                    </div>
                    <div className="form-input">
                        <input type="text" name="accountName" value={props.accountName} onChange={props.onChange} />
                        <span className="error">{props.errors.accountName}</span>
                    </div>
                </div>
                <div className="row" id="accountNumber">
                    <div className="form-label">
                        <label>Beneficiary's Account Number</label>
                    </div>
                    <div className="form-input">
                        <input type="text" name="accountNumber" value={props.accountNumber} onChange={props.onChange} />
                        <span className="error">{props.errors.accountNumber}</span>
                    </div>
                </div>
                <div className="row" id="routeNumber">
                    <div className="form-label">
                        <label>ABA Routing Number/IFSC Code</label>
                    </div>
                    <div className="form-input">
                        <input type="text" name="routeNumber" value={props.routeNumber} onChange={props.onChange} />
                        <span className="error">{props.errors.routeNumber}</span>
                    </div>
                </div>
                <div className="row" id="amount">
                    <div className="form-label">
                        <label>Amount($)</label>
                    </div>
                    <div className="form-input">
                        <input type="number" name="amount" value={props.amount} onChange={props.onChange} />
                        <span className="error">{props.errors.amount}</span>
                    </div>
                </div>
                {
                    !props.match.path.includes("same") && <div className="row" id="bank">
                        <div className="form-label">
                            <label>Beneficiary's Bank Name</label>
                        </div>
                        <div className="form-input">
                            <input type="text" name="bank" value={props.bank} onChange={props.onChange} />
                            <span className="error">{props.errors.bank}</span>
                        </div>
                    </div>
                }
                {
                    props.match.path.includes("international") && <>
                        <div className="row" id="address">
                            <div className="form-label">
                                <label>Beneficiary's Bank Address</label>
                            </div>
                            <div className="form-input">
                                <input type="text" name="address" value={props.address} onChange={props.onChange} />
                                <span className="error">{props.errors.address}</span>
                            </div>
                        </div>
                        <div className="row" id="sortCode">
                            <div className="form-label">
                                <label>BIC/ROUTING NO</label>
                            </div>
                            <div className="form-input">
                                <input type="text" name="sortCode" value={props.sortCode} onChange={props.onChange} />
                                <span className="error">{props.errors.sortCode}</span>
                            </div>
                        </div>
                        <div className="row" id="correspondingBank">
                            <div className="form-label">
                                <label>Corresponding Bank Name(if any)</label>
                            </div>
                            <div className="form-input">
                                <input type="text" name="correspondingBank" value={props.correspondingBank} onChange={props.onChange} />
                                <span className="error">{props.errors.correspondingBank}</span>
                            </div>
                        </div>
                        <div className="row" id="correspondingBankSwiftCode">
                            <div className="form-label">
                                <label>Corresponding Bank BIC/Swift/IFSC Code</label>
                            </div>
                            <div className="form-input">
                                <input type="text" name="correspondingBankSwiftCode" value={props.correspondingBankSwiftCode} onChange={props.onChange} />
                                <span className="error">{props.errors.correspondingBankSwiftCode}</span>
                            </div>
                        </div>
                    </>
                }
            </div>
            <div className="actions">
                <button type="reset" onClick={() => props.history.push('/')}>Cancel</button>
                <button type="submit" onClick={props.onSubmit}>Proceed</button>
            </div>
        </form>
    )
}

export default withRouter(Form)