import React from 'react'
import { connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import store from '../../../redux/stores/store'
import './menu.scss'
import Item from './item/item.component'
import { MENU_ACTIVE_ITEM, MENU_TOGGLE } from '../../../redux/reducers/menu/action-types'
import iconLogo from '../../../assets/images/logo.png'

class Menu extends React.Component {

    constructor(props){
        super(props)
        this.state = {...props.menu}
    }

    componentDidMount = () => {
        this.unsubscribe = store.subscribe(() => {
            this.setState(store.getState().menu)
        })
        this.setActiveItem()
    }

    onItemClick = (key) => {
        key === 0 && this.props.history.push('/')
        this.props.dispatch({
            type: MENU_ACTIVE_ITEM,
            payload: {
                key: key
            }
        })
    }

    setActiveItem = () => {
        this.state.items.forEach((item, key) => {
            item.subItems.forEach(subItem => {
                subItem.url === this.props.location.pathname.substring(0, subItem.url.length) && key !== this.state.activeItem && this.onItemClick(key)
            })
        })
    }

    onToggleMenu = () => {
        this.props.dispatch({
            type: MENU_TOGGLE,
            payload:{}
        })
    }

    componentWillUnmount = () => {
        this.unsubscribe()
    }

    render(){
        return(
            <div className={this.state.showMenu? 'menu active': 'menu'}>
                <h1>
                    <img src={iconLogo} alt=""/>
                    {window.sitename}
                </h1>
                <div className="space"></div>
                <ul>
                    {
                        this.props.menu.items.map(
                            (menu, key) => <Item key={key} active={(this.state.activeItem === key)} onClick={() => this.onItemClick(key)} onSubItemClick={this.onToggleMenu} {...menu}/>
                        )
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        menu: state.menu
    }
}

export default connect(mapStateToProps)(withRouter(Menu))