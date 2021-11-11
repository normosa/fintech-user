import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import LoginForm from './form.page'
import FormHelper from '../../../utils/FormHelper'
import './login.styles.scss'
import Worker from './worker'
import Dialog from '../../../components/dialog/dialog.component'
import Loading from '../../../components/loading/loading.component'

class Login extends React.Component {

    constructor(props) {
        super(props)
        this.worker = Worker(this)
        this.state = this.worker.getDefaultState()
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.worker.isValid() && this.worker.authenticate()
    }

    render() {
        return (
            <div className="login">
                {this.state.authenticating && <Dialog><Loading /></Dialog>}
                <h3>Login</h3>
                <div className={"flag " + this.state.flag.type}>
                    {this.state.flag.text}
                </div>
                <LoginForm onSubmit={this.onSubmit} onChange={FormHelper(this).onChange} onRememberMeChange={this.onRememberMeChange} {...this.state} />
            </div>
        )
    }
}

export default connect(null)(withRouter(Login))