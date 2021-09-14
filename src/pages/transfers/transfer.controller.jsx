import React from 'react'
import { Switch, Route } from "react-router-dom"
import Transfer from './transfer.page'

const TransferController = () => {
    return (
        <div className="transfers">
            <Switch>
                <Route path="/transfers/same" component={Transfer} />
                <Route path="/transfers/other" component={Transfer} />
                <Route path="/transfers/international" component={Transfer} />
            </Switch>
        </div>
    )
}

export default TransferController