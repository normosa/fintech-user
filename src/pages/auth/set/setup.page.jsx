import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Worker from './worker'
import Dialog from '../../../components/dialog/dialog.component'
import Loading from '../../../components/loading/loading.component'
import Form from './form.page'
import FormHelper from '../../../utils/FormHelper'

class Setup extends React.Component {

    constructor(props) {
        super(props)
        this.worker = Worker(this)
        this.state = this.worker.getDefaultState()
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.worker.isValid() && this.worker.save()
    }

    render() {
        return (
            <div className="card setup">
                {this.state.saving && <Dialog><Loading /></Dialog>}
                <h1><span>Update Password</span> <span>or <b onClick={() => this.props.history.push("/auth/login")}>Login</b></span></h1>
                <div className={"flag " + this.state.flag.type}>
                    {this.state.flag.text}
                </div>
                <Form onSubmit={this.onSubmit} onChange={FormHelper(this).onChange} {...this.state} />
            </div>
        )
    }
}

export default connect(null)(withRouter(Setup))