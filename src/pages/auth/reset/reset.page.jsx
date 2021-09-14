import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Form from './form.page'
import FormHelper from '../../../utils/FormHelper'
import './reset.styles.scss'
import Worker from './worker'
import Dialog from '../../../components/dialog/dialog.component'
import Loading from '../../../components/loading/loading.component'

class Reset extends React.Component {

    constructor(props) {
        super(props)
        this.worker = Worker(this)
        this.state = this.worker.getDefaultState()
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.worker.isValid() && this.worker.reset()
    }

    render() {
        return (
            <div className="card login">
                {this.state.processing && <Dialog><Loading/></Dialog>}
                <h3>Reset Password</h3>
                <div className={"flag " + this.state.flag.type}>
                    {this.state.flag.text}
                </div>
                <Form onSubmit={this.onSubmit} onChange={FormHelper(this).onChange} {...this.state} />
            </div>
        )
    }
}

export default connect(null)(withRouter(Reset))