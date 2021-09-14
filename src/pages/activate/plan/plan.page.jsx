import React from 'react'
import { withRouter } from 'react-router'
import './plan.styles.scss'

const Plan = props => {
    return (
        <div className="plan">
            <h3>Payment Info</h3>
            <div className="payment">
                <div>
                    <div>
                        <h3>{getPlanLabel(props)}</h3>
                        <h4>Bitcoin Address</h4>
                        <p>1JBnovbzyL74FveXAajxWfSUfueykqB5bc</p>
                        <br /><br />
                    </div>
                    <iframe title="pay" allowFullScreen={false} src="https://chart.googleapis.com/chart?chs=225x225&chld=L|2&cht=qr&chl=bitcoin:1JBnovbzyL74FveXAajxWfSUfueykqB5bc?label=blueoyster-fx.com%26message=Investment"></iframe>
                </div>
                <p>After payment, send receipt to crypto@blueoyster-fx.com</p>
            </div>
        </div>
    )
}

const getPlanLabel = props => {
    switch (props.match.params.plan) {
        case "bronze":
            return "Bronze ($500)"
        case "silver":
            return "Silver ($1,000)"
        case "gold":
            return "Gold ($2,500)"
        case "diamond":
            return "Diamond ($5,000)"
        case "premium":
            return "Premium ($10,000)"
        case "platinum":
            return "Platinum ($30,00)"
        default:
            return "Custom Plan"
    }
}

export default withRouter(Plan)