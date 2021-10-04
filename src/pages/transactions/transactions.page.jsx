import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import Dialog from '../../components/dialog/dialog.component'
import Loading from '../../components/loading/loading.component'
import { connect } from 'react-redux'
import iconNew from '../../assets/icons/new-light.svg'
import Filters from './filters.component'
import Pagination from '../../components/pagination/pagination.component'
import './transactions.styles.scss'
import Service from './transactions.service'
import NumberFormat from 'react-number-format'

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
                    <div className="header">
                        <h4>Transactions</h4>
                        <div className="buttons">
                            <Link className="btn" to="/transactions/all"><img alt="" src={iconNew} />Deposit Fund</Link>
                            <Filters filter={this.state.filter} onSubmit={this.onFilterSubmit} onChange={this.onFilterChange} />
                        </div>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Transaction Ref</th>
                                <th>Description</th>
                                <th>Credit</th>
                                <th>Debit</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.transactions.map((transaction, key) => <tr key={key}>
                                    <td>{transaction.ref}</td>
                                    <td>{transaction.description}</td>
                                    <td><NumberFormat value={transaction.credit} displayType={'text'} thousandSeparator={true} renderText={value => value} /></td>
                                    <td><NumberFormat value={transaction.debit} displayType={'text'} thousandSeparator={true} renderText={value => value} /></td>
                                    <td>{new Date(transaction.created*1000).toString('dd MMM, yyyy')}</td>
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

export default connect(mapStateToProps)(withRouter(Transactions))