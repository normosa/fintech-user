import React from 'react'
import { Switch, Route } from "react-router-dom"
import NewTransaction from './new-transaction/new-transaction.page'
import Transactions from './transactions.page'
import RequireActivation from '../../components/require-activation/require-activation.component'

const TransactionController = () => {
    return (
        <Switch>
            <Route path="/transactions/new-transaction" component={() => <RequireActivation><NewTransaction/></RequireActivation>} />
            <Route path="/transactions/all" component={Transactions} />
        </Switch>
    )
}

export default TransactionController