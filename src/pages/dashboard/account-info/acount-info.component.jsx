import React from 'react'
import { Link } from 'react-router-dom'
import iconAvatarGreen from '../../../assets/icons/dashboard-avatar-green.svg'
import iconAvatarRed from '../../../assets/icons/dashboard-avatar-red.svg'
import iconAvatarYellow from '../../../assets/icons/dashboard-avatar-yellow.svg'
import iconArrow from '../../../assets/icons/dashboard-card-arrow.svg'
import './account-info.styles.scss'
import NumberFormat from 'react-number-format'

const AccountInfo = props => {
    return (
        <div className="account-info">
            <div className="cards">
                <div className="_card green">
                    <div className="content">
                        <div>
                            <p>Account Balance</p>
                            <h3><NumberFormat value={props.summary.balance} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value => value} /></h3>
                        </div>
                        <img alt="" src={iconAvatarGreen} />
                    </div>
                    <div className="footer">
                        <Link to="/transfers/international">
                            <i>Transfer Fund</i>
                            <img alt="" src={iconArrow} />
                        </Link>
                    </div>
                </div>
                <div className="_card red">
                    <div className="content">
                        <div>
                            <p>All Deposits</p>
                            <h3><NumberFormat value={props.summary.credit} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value => value} /></h3>
                        </div>
                        <img alt="" src={iconAvatarRed} />
                    </div>
                    <div className="footer">
                        <Link to="/transactions/all">
                            <i>Transaction History</i>
                            <img alt="" src={iconArrow} />
                        </Link>
                    </div>
                </div>
                <div className="_card yellow">
                    <div className="content">
                        <div>
                            <p>Account Number</p>
                            <h3>0012467384</h3>
                        </div>
                        <img alt="" src={iconAvatarYellow} />
                    </div>
                    <div className="footer">
                        <Link to="#">
                            <i>Update Profile</i>
                            <img alt="" src={iconArrow} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountInfo