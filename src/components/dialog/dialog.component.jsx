import React from 'react'
import './dialog.styles.scss'

const Dialog = props => {
    return (
        <div className="dialog">
            <div className="shade"></div>
            <div>{props.children}</div>
        </div>
    )
}

export default Dialog