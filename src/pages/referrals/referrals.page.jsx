import React from 'react'
import {  withRouter } from 'react-router-dom'
import Dialog from '../../components/dialog/dialog.component'
import Loading from '../../components/loading/loading.component'
import { connect } from 'react-redux'
import Pagination from '../../components/pagination/pagination.component'
import './referrals.styles.scss'
import Service from './referrals.service'

class Referrals extends React.Component {

    constructor(props) {
        super(props)
        this.service = Service(this)
        this.state = this.service.getDefaultState()
    }

    componentDidMount() {
        this.service.loadReferrals()
    }

    onPageChange = page => {
        this.setState({
            ...this.state,
            currentPage: page
        }, () => this.service.loadReferrals())
    }

    render() {
        return (
            <>
                {this.state.loading && <Dialog><Loading /></Dialog>}
                <div className="referrals">
                    <div className="header">
                        <h4>Referrals</h4>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Username</th>
                                <th>Firstname</th>
                                <th>Lastname</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.referrals.map((referral, key) => <tr key={key}>
                                    <td>{referral.account.username}</td>
                                    <td>{referral.account.firstname}</td>
                                    <td>{referral.account.lastname}</td>
                                    <td>{new Date(referral.createdAt).toString('dd MMM, yyyy')}</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                    {
                        this.state.total > 0 && <Pagination totalItemsCount={this.state.total} currentIndex={this.state.currentPage} itemsPerPage={this.state.pageSize} onChange={this.onPageChange} />
                    }
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(withRouter(Referrals))