import React from 'react'
import './progressbar.styles.scss'

const ProgressBar = props => {
    return (
        <div className="progressbar-wrapper">
            <h2>Transferring...</h2>
            <div className="progressbar">
                <div className="spinner"></div>
                <div className="progress">{props.progress}%</div>
            </div>
        </div>
    )
}

export default ProgressBar