import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import './setup.styles.scss'
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
            <div className="card login">
                {this.state.saving && <Dialog><Loading /></Dialog>}
                <h3>Complete Registration</h3>
                <div className={"flag " + this.state.flag.type}>
                    {this.state.flag.text}
                </div>
                <Form onSubmit={this.onSubmit} onChange={FormHelper(this).onChange} {...this.state} />
            </div>
        )
    }
}

export default connect(null)(withRouter(Setup))