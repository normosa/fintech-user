import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import store from './redux/stores/store'
import { Provider } from 'react-redux'
import './app.styles.scss'
import DashboardPage from './pages/dashboard/dashboard.page'
import RequireLogin from './components/require-login/require-login.component'
import DefaultTemplate from './templates/default/default.template'
import AuthTemplate from './templates/auth/auth.template'
import AuthController from './pages/auth/auth.controller'
import TransactionController from './pages/transactions/transaction.controller'
import SettingsController from './pages/settings/settings.controller'
import RequireActivation from './components/require-activation/require-activation.component'
import ActivateController from './pages/activate/activate.controller'
import ActivateTemplate from './templates/activate/activate.template'
import TransferController from './pages/transfers/transfer.controller'

const AppController = () => {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path="/auth" component={() => <AuthTemplate><AuthController /></AuthTemplate>} />
                    <Route path="/transactions" component={() => <RequireLogin><RequireActivation><DefaultTemplate><TransactionController /></DefaultTemplate></RequireActivation></RequireLogin>} />
                    <Route path="/activate" component={() => <RequireLogin><ActivateTemplate><ActivateController /></ActivateTemplate></RequireLogin>} />
                    <Route path="/transfers" component={() => <RequireLogin><DefaultTemplate><TransferController /></DefaultTemplate></RequireLogin>} />
                    <Route path="/settings" component={() => <RequireLogin><RequireActivation><DefaultTemplate><SettingsController /></DefaultTemplate></RequireActivation></RequireLogin>} />
                    <Route path="/" component={() => <RequireLogin><RequireActivation><DefaultTemplate><DashboardPage /></DefaultTemplate></RequireActivation></RequireLogin>} />
                </Switch>
            </Router>
        </Provider>
    )
}

export default AppController