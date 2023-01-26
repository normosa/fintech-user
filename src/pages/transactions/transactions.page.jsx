import React from 'react'
import { withRouter } from 'react-router-dom'
import Dialog from '../../components/dialog/dialog.component'
import Loading from '../../components/loading/loading.component'
import { connect } from 'react-redux'
import Pagination from '../../components/pagination/pagination.component'
import './transactions.styles.scss'
import Service from './transactions.service'
import NumberFormat from 'react-number-format'
import imageDashbord from '../../assets/icons/dashboard.svg'
import { CURRENCY } from '../../config'

class Transactions extends React.Component {

    constructor(props) {
        super(props)
        this.service = Service(this)
        this.state = this.service.getDefaultState()
    }

    componentDidMount() {
        this.service.loadTransactions()
    }

    onPageChange = page => {
        this.setState({
            ...this.state,
            currentPage: page
        }, () => this.service.loadTransactions())
    }

    onFilterChange = e => {
        this.setState({
            ...this.state,
            filter: {
                ...this.state.filter,
                value: "",
                [e.target.name]: e.target.value
            }
        })
    }

    onFilterSubmit = e => {
        e.preventDefault()
        this.service.loadTransactions()
    }

    render() {
        return (
            <>
                {this.state.loading && <Dialog><Loading /></Dialog>}
                <div className="transactions">
                    {
                        !this.props.embedded &&
                        <div className="cards">
                            <div className="card balance">
                                <img alt="" src={imageDashbord} />
                                <h4>Balance <NumberFormat value={this.state.summary.balance} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value => value} /></h4>
                            </div>
                            <div className="card transfer" onClick={() => this.props.history.push("/transfers/international")}>
                                <img alt="" src={imageDashbord} />
                                <h4>Transfer Fund</h4>
                            </div>
                        </div>
                    }
                    <div className="header">
                        <h4>Transactions</h4>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Transaction Ref</th>
                                <th>Description</th>
                                <th>Credit</th>
                                <th>Debit</th>
                                <th>Date/Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.transactions.map((transaction, key) => <tr key={key}>
                                    <td>{transaction.ref}</td>
                                    <td>{transaction.description}</td>
                                    <td><NumberFormat value={transaction.credit} displayType={'text'} thousandSeparator={true} renderText={value => <p>{transaction.credit > 0 && CURRENCY}{value}</p>} /></td>
                                    <td><NumberFormat value={transaction.debit} displayType={'text'} thousandSeparator={true} renderText={value => <p>{transaction.debit > 0 && CURRENCY}{value}</p>} /></td>
                                    <td>{new Date(transaction.created * 1000).toString('dd MMM, yyyy HH:mm:ss')}</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                    {
                        !this.props.embedded && this.state.total > 0 && <Pagination totalItemsCount={this.state.total} currentIndex={this.state.currentPage} itemsPerPage={this.state.pageSize} onChange={this.onPageChange} />
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

export default connect(mapStateToProps)(withRouter(Transactions))