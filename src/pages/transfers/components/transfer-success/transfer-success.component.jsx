import React from 'react'
import './transfer-success.styles.scss'
import imageGood from '../../../../assets/images/good.png'

const TransferSuccess = props => {
    return (
        <div className="transfer-success">
            <h2>Transfer Successful</h2>
            <img src={imageGood} alt="" />
            <p>{props.desc}</p>
            <button onClick={props.onClose}>Okay</button>
        </div>
    )
}

export default TransferSuccess