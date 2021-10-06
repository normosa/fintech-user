import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import './profile.scss'
import iconArrowDownDark from '../../../../assets/icons/arrow-down-dark.svg'
import iconNotification from '../../../../assets/icons/notification.svg'
import store from '../../../../redux/stores/store'
import { ASSET_ENDPOINT } from '../../../../config'

class Profile extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            show: false,
            showMenu: store.getState().menu.showMenu
        }
    }

    componentDidMount = () => {
        this.unsubscribe = store.subscribe(() => {
            if (this.state.showMenu !== store.getState().menu.showMenu) {
                this.setState({
                    ...this.state,
                    showMenu: store.getState().menu.showMenu
                })
            }
        })
    }

    componentWillUnmount = () => {
        this.unsubscribe()
    }

    getImage = () => ASSET_ENDPOINT + '/photos/' + this.props.auth.photo

    showDropdown = () => this.setState({
        ...this.state,
        show: true
    })

    hideDropdown = () => this.setState({
        ...this.state,
        show: false
    })

    onLogout = () => {
        sessionStorage.removeItem("authorization")
        window.location = '/auth/login'
    }

    render() {
        return (
            <div className={this.state.showMenu ? 'profile hide' : 'profile show'} onMouseLeave={this.hideDropdown}>
                <div onClick={this.showDropdown}>
                    <img src={iconNotification} alt="" />
                    <img src={this.getImage()} alt="" />
                    <strong>{this.props.auth.firstname} {this.props.auth.lastname}</strong>
                    <img className="arrow-down" src={iconArrowDownDark} alt="" />
                </div>
                <ul className={this.state.show ? 'show' : 'hide'}>
                    <li>
                        <span onClick={this.onLogout}>Logout</span>
                    </li>
                </ul>
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