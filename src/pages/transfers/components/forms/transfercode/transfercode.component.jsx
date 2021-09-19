import React from 'react'
import { withRouter } from 'react-router-dom'
import './transfercode.styles.scss'

const Form = props => {
    return (
        <div className="transfercode card">
            <div className={"flag " + props.flag.type}>
                {props.flag.text}
            </div>
            <form>
                <div className="inputs">
                    <div className="row" id="transferCode">
                        <div className="form-label">
                            <label>Enter Code</label>
                        </div>
                        <div className="form-input">
                            <input type="text" name="transferCode" value={props.transferCode} onChange={props.onChange} />
                            <span className="error">{props.errors.transferCode}</span>
                        </div>
                    </div>
                </div>
                <div className="actions">
                    <button type="reset" onClick={() => props.history.push('/')}>Cancel</button>
                    <button type="submit" onClick={props.onSubmit}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default withRouter(Form)