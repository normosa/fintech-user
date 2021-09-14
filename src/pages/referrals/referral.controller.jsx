import React from 'react'
import { Switch, Route } from "react-router-dom"
import Referrals from './referrals.page'

const ReferralController = () => {
    return (
        <Switch>
            <Route path="/referrals/all" component={Referrals} />
        </Switch>
    )
}

export default ReferralController