import React from 'react'
import { Switch, Route } from "react-router-dom"
import Activate from './activate.page'
import Plan from './plan/plan.page'

const ActivateController = () => {
    return (
        <div className="">
            <Switch>
                <Route path="/activate/:plan" component={Plan} />
                <Route path="/activate" component={Activate} />
            </Switch>
        </div>
    )
}

export default ActivateController