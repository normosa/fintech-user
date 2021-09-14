import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import './verify.styles.scss'
import Worker from './worker'
import Dialog from '../../../components/dialog/dialog.component'
import Loading from '../../../components/loading/loading.component'

class Verify extends React.Component {

    constructor(props) {
        super(props)
        this.worker = Worker(this)
        this.state = this.worker.getDefaultState()
    }

    componentDidMount(){
        this.worker.verify()
    }

    render() {
        return (
            <div className="verify">
                {this.state.verifying && <Dialog><Loading/></Dialog>}
            </div>
        )
    }
}

export default connect(null)(withRouter(Verify))