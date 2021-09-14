import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import store from '../../redux/stores/store'
import { AUTH_SAVE } from '../../redux/reducers/auth/action-types'

class RequireLogin extends React.Component {

    componentDidMount() {
        !sessionStorage.getItem('auth') && this.props.history.push('/auth/login')

    }

    render() {
        if (!sessionStorage.getItem('auth')) {
            return (
                <>
                </>
            )
        }
        if (!store.getState().auth || !store.getState().auth.authorization) {
            this.props.dispatch({
                type: AUTH_SAVE,
                payload: JSON.parse(sessionStorage.getItem('auth'))
            })
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

export default connect(mapStateToProps)(withRouter(RequireLogin))