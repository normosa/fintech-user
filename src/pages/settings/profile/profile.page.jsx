import React from 'react'
import Service from './profile.service'
import { Link, withRouter } from 'react-router-dom'
import Form from './form/form.component'
import FormHelper from '../../../utils/FormHelper'
import './profile.styles.scss'
import { connect } from 'react-redux'
import Dialog from '../../../components/dialog/dialog.component'
import Loading from '../../../components/loading/loading.component'
import iconPayer from '../../../assets/icons/payer.svg'

class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.service = Service(this)
        this.state = this.service.getDefaultState()
    }

    componentDidMount() {
        this.service.load()
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.service.isValid() && this.service.save()
    }

    render() {
        return (
            <div id="profile" className="profile">
                {(this.state.saving || this.state.loading) && <Dialog><Loading /></Dialog>}
                <div className="header">
                    <h4>My Info</h4>
                    <div className="buttons">
                        <Link className="btn" to="/"><img alt="" src={iconPayer} />Return</Link>
                    </div>
                </div>
                <div className="card">
                    <div className={"flag " + this.state.flag.type}>
                        {this.state.flag.text}
                    </div>
                    <Form {...this.state} onChange={FormHelper(this).onChange} onSubmit={this.onSubmit}/>
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

export default connect(mapStateToProps)(withRouter(Profile))