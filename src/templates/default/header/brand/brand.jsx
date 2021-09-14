import React from 'react'
import { connect } from 'react-redux'
import { MENU_TOGGLE } from '../../../../redux/reducers/menu/action-types'
import './brand.scss'

const Brand = (props) => {
    const onClick = () => {
        props.dispatch({
            type: MENU_TOGGLE,
            payload: {}
        })
    }
    return (
        <div className="brand">
            <div className="toggler" onClick={onClick}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

export default connect()(Brand)