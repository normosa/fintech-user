import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class RequireActivation extends React.Component {

    componentDidMount() {
        this.props.auth.status !== 1 && this.props.history.push('/activate')
    }

    render() {
        if (this.props.auth.status !== 1) {
            return (
                <>
                </>
            )
        }
        return (
            <>
                {this.props.children}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(withRouter(RequireActivation))