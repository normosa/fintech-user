import React from 'react'
import FormHelper from '../../../utils/FormHelper'
import Service from './change-password.service'
import Form from './form/form.component'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Dialog from '../../../components/dialog/dialog.component'
import Loading from '../../../components/loading/loading.component'
import iconPayer from '../../../assets/icons/payer.svg'
import './change-password.styles.scss'

class ChangePassword extends React.Component {

    constructor(props) {
        super(props)
        this.service = Service(this)
        this.state = this.service.getDefaultState()
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.service.isValid() && this.service.chanegPassword()
    }

    onCancel = () => {
        this.props.history.push('/')
    }

    render() {
        return (
            <div className="change-password">
                {this.state.saving && <Dialog><Loading /></Dialog>}
                <div className="header">
                    <h4>Change Password</h4>
                    <div className="buttons">
                        <Link className="btn" to="/"><img alt="" src={iconPayer} />Return</Link>
                    </div>
                </div>
                <div className="card">
                    <div className={"flag " + this.state.flag.type}>
                        {this.state.flag.text}
                    </div>
                    <Form {...this.state} onChange={FormHelper(this).onChange} onSubmit={this.onSubmit} onCancel={this.onCancel}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(withRouter(ChangePassword))