import React from 'react'
import { connect } from 'react-redux'
import './dashboard.styles.scss'
import imageDashbord from '../../assets/icons/dashboard.svg'
import imageOrders from '../../assets/icons/payer.svg'
import imageSecurity from '../../assets/icons/security.svg'
import imageSettings from '../../assets/icons/config.svg'
import imageCards from '../../assets/images/cards.jpg'
import imageInvest from '../../assets/images/invest.jpg'
import { withRouter } from 'react-router-dom'
import AccountInfo from './account-info/acount-info.component'

const Dashboard = props => {
    return (
        <div className="dashboard">
            <AccountInfo />
            <div className="rates"><div><iframe title="rates" src="https://widget.coinlib.io/widget?type=horizontal_v2&theme=light&pref_coin_id=1505&invert_hover=no" width="100%" height="36px" scrolling="auto" marginwidth="0" marginheight="0" frameborder="0" border="0"></iframe></div></div>
            <div className="cards">
                <div className="card" onClick={() => props.history.push("/transactions/all")}>
                    <img alt="" src={imageDashbord} />
                    <h4>Transfer Fund</h4>
                </div>
                <div className="card history" onClick={() => props.history.push("/transactions/all")}>
                    <img alt="" src={imageDashbord} />
                    <h4>Transaction History</h4>
                </div>
                <div className="card loan" onClick={() => props.history.push("/settings/change-password")}>
                    <img alt="" src={imageOrders} />
                    <h4>Loan Request</h4>
                </div>
                <div className="card bills" onClick={() => props.history.push("/settings/change-password")}>
                    <img alt="" src={imageDashbord} />
                    <h4>Pay Bills</h4>
                </div>
                <div className="card profile" onClick={() => props.history.push("/settings/profile")}>
                    <img alt="" src={imageSettings} />
                    <h4>Update Profile</h4>
                </div>
                <div className="card password" onClick={() => props.history.push("/settings/change-password")}>
                    <img alt="" src={imageSecurity} />
                    <h4>Change Password</h4>
                </div>
            </div>
            <div className="ads">
                <img alt="" src={imageCards}/>
                <img alt="" src={imageInvest}/>
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