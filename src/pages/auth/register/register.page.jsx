import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Form from './form.page'
import FormHelper from '../../../utils/FormHelper'
import './register.styles.scss'
import Service from './create.service'
import Dialog from '../../../components/dialog/dialog.component'
import Loading from '../../../components/loading/loading.component'

class Register extends React.Component {

    constructor(props) {
        super(props)
        this.service = Service(this)
        this.state = this.service.getDefaultState()
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.service.isValid() && this.service.create()
    }

    render() {
        return (
            <div className="card register">
                {this.state.creating && <Dialog><Loading/></Dialog>}
                <h3>Register</h3>
                <div className={"flag " + this.state.flag.type}>
                    {this.state.flag.text}
                </div>
                <Form onSubmit={this.onSubmit} onChange={FormHelper(this).onChange} {...this.state} />
            </div>
        )
    }
}

export default connect(null)(withRouter(Register))