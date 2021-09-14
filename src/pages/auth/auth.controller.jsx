import React from 'react'
import { Switch, Route } from "react-router-dom"
import Login from './login/login.page'
import Register from './register/register.page'
import Verify from './verify/verify.page'
import Setup from './setup/setup.page'
import Set from './set/setup.page'
import Reset from './reset/reset.page'

const AuthController = () => {
    return (
        <div className="">
            <Switch>
                <Route path="/auth/set/:id/:hash" component={Set} />
                <Route path="/auth/verify/:id/:hash" component={Verify} />
                <Route path="/auth/register/:referralCode" component={Register} />
                <Route path="/auth/register" component={Register} />
                <Route path="/auth/setup" component={Setup} />
                <Route path="/auth/reset" component={Reset} />
                <Route path="/auth" component={Login} />
            </Switch>
        </div>
    )
}

export default AuthController