import React from 'react'
import { connect } from 'react-redux'
import './dashboard.styles.scss'
import imageDashbord from '../../assets/icons/dashboard.svg'
import imageOrders from '../../assets/icons/payer.svg'
import imageSecurity from '../../assets/icons/security.svg'
import imageSettings from '../../assets/icons/config.svg'
import { withRouter } from 'react-router-dom'

const Dashboard = props => {
    return (
        <div className="dashboard">
            <div className="cards">
                <div className="card membership" onClick={() => props.history.push("/transactions/all")}>
                    <div>
                        <img alt="" src={imageDashbord} />
                    </div>
                    <div>
                        <strong>Account Balance</strong>
                        <span>${props.auth.balance}</span>
                    </div>
                </div>
                <div className="card applications" onClick={() => props.history.push("/transactions/all")}>
                    <div>
                        <img alt="" src={imageOrders} />
                    </div>
                    <div>
                        <strong>Transactions</strong>
                        <span>view</span>
                    </div>
                </div>
                <div className="card program" onClick={() => props.history.push("/settings/profile")}>
                    <div>
                        <img alt="" src={imageSettings} />
                    </div>
                    <div>
                        <strong>Profile</strong>
                        <span>update</span>
                    </div>
                </div>
                <div className="card points" onClick={() => props.history.push("/settings/change-password")}>
                    <div>
                        <img alt="" src={imageSecurity} />
                    </div>
                    <div>
                        <strong>Account</strong>
                        <span>change password</span>
                    </div>
                </div>
                <div className="card applications" onClick={() => props.history.push("/referrals/link")}>
                    <div>
                        <img alt="" src={imageOrders} />
                    </div>
                    <div>
                        <strong>My Referral Link</strong>
                        <a target="_blank" rel="noopener noreferrer" href={"https://platform.blueoyster-fx.com/auth/register/" + props.auth.referralCode}>https://platform.blueoyster-fx.com/auth/register/{props.auth.referralCode}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(withRouter(Dashboard))