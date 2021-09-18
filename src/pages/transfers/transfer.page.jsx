import React from 'react'
import Service from './transfer.service'
import { withRouter } from 'react-router-dom'
import Form from './form/form.component'
import FormHelper from '../../utils/FormHelper'
import './transfer.styles.scss'
import { connect } from 'react-redux'
import Dialog from '../../components/dialog/dialog.component'
import Loading from '../../components/loading/loading.component'
import ProgressBar from '../../components/progressbar/progressbar.component'

class Transfer extends React.Component {
    constructor(props) {
        super(props)
        this.service = Service(this)
        this.state = this.service.getDefaultState()
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.service.transfer()
    }

    startCountDown = percent => {
        let interval = setInterval(() => {
            if (this.state.progress === percent) {
                clearInterval(interval)
                this.onCountDownCompleted()
            }
            else {
                this.setState({
                    ...this.state,
                    progress: this.state.progress + 1
                })
            }
        }, 300);
    }

    onCountDownCompleted = () => {
        let flag = {}
        if(this.state.transferResult.status === 1){
            flag.type = "success"
            flag.text = "#"+ this.state.transferResult.ref + " Transaction Completed"
        }
        this.setState({
            ...this.state,
            transferring: false,
            flag: flag
        })
    }

    getTypeLabel = () => {
        if (this.props.match.path.includes("same")) {
            return "Same"
        }
        else if (this.props.match.path.includes("other")) {
            return "Other"
        }
        else if (this.props.match.path.includes("international")) {
            return "International"
        }
        else {
            return "Unknown"
        }
    }

    render() {
        return (
            <div id="transfer" className="transfer">
                {this.state.saving && <Dialog><Loading /></Dialog>}
                {this.state.transferring && <Dialog><ProgressBar progress={this.state.progress} /></Dialog>}
                <div className="header">
                    <h4>{this.getTypeLabel()} Bank Transfer</h4>
                </div>
                <div className="card">
                    <div className={"flag " + this.state.flag.type}>
                        {this.state.flag.text}
                    </div>
                    <Form {...this.state} onChange={FormHelper(this).onChange} onSubmit={this.onSubmit} />
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

export default connect(mapStateToProps)(withRouter(Transfer))