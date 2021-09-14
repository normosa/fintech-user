import React from 'react'
import { Switch, Route } from "react-router-dom"
import UserController from './users/user.controller'
import RoleController from './roles/role.controller'

const SecurityController = () => {
    return (
        <div className="security">
            <Switch>
                <Route path="/security/roles" component={RoleController} />
                <Route path="/security/users" component={UserController} />
            </Switch>
        </div>
    )
}

export default SecurityController