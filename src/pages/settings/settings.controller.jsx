import React from 'react'
import { Switch, Route } from "react-router-dom"
import ChangePassword from './change-password/change-password.page'
import Profile from './profile/profile.page'

const SettingsController = () => {
    return (
        <div className="settings">
            <Switch>
                <Route path="/settings/profile" component={Profile} />
                <Route path="/settings/change-password" component={ChangePassword} />
            </Switch>
        </div>
    )
}

export default SettingsController