import React from 'react'
import { Link } from 'react-router-dom'
import iconArrow from '../../../assets/icons/dashboard-card-arrow.svg'
import imageWallet from '../../../assets/images/wallet.png'
import imageUser from '../../../assets/images/user.png'
import imageBanknotes from '../../../assets/images/banknotes.png'
import imageCard1 from '../../../assets/images/master-card.png'
import imageCard2 from '../../../assets/images/visa.png'
import imageCard3 from '../../../assets/images/credit-card.png'
import './account-info.styles.scss'
import NumberFormat from 'react-number-format'

const AccountInfo = props => {
    return (
        <div className="account-info">
            <div className="cards">
                <div className="_card green">
                    <div className="content">
                        <div>
                            <p>
                                <span>Account Balance</span>
                                <img alt="" src={imageWallet} />
                            </p>
                            <h3><NumberFormat value={props.summary.balance} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value => value} /></h3>
                        </div>
                    </div>
                    <div className="footer">
                        <Link to="/transfers/international">
                            <i>Transfer Fund</i>
                            <img alt="" src={iconArrow} />
                        </Link>
                    </div>
                </div>
                <div className="_card yellow">
                    <div className="content">
                        <div>
                            <p>
                                <span>Account Number</span>
                                <img alt="" src={imageUser} />
                            </p>
                            <h3>0012467384</h3>
                        </div>
                    </div>
                    <div className="footer">
                        <Link to="#">
                            <i>Update Profile</i>
                            <img alt="" src={iconArrow} />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="cards">
                <div className="_card blue">
                    <div className="content">
                        <div>
                            <p>
                                <span>Cards</span>
                            </p>
                            <div className="debit-cards">
                                <img alt="" src={imageCard1} />
                                <img alt="" src={imageCard2} />
                                <img alt="" src={imageCard3} />
                            </div>
                        </div>
                    </div>
                    <div className="footer">
                        <Link to="">
                            <i>Credit & Debit Cards</i>
                            <img alt="" src={iconArrow} />
                        </Link>
                    </div>
                </div>
                <div className="_card red">
                    <div className="content">
                        <div>
                            <p>
                                <span>All Deposits</span>
                                <img alt="" src={imageBanknotes} />
                            </p>
                            <h3><NumberFormat value={props.summary.credit} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value => value} /></h3>
                        </div>
                    </div>
                    <div className="footer">
                        <Link to="/transactions/all">
                            <i>Transaction History</i>
                            <img alt="" src={iconArrow} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountInfo