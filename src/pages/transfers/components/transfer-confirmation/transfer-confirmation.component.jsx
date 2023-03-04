import React from 'react'
import NumberFormat from 'react-number-format'
import { CURRENCY } from '../../../../config'
import './transfer-confirmation.styles.scss'

const TransferConfirmation = props => {
    return (
        <div className="transfer-confirmation">
            <span onClick={props.onClose}>X</span>
            <h2>Confirm and Transfer</h2>
            
            <p>You are transfering<strong> <NumberFormat value={props.amount} displayType={'text'} thousandSeparator={true} renderText={value => <>{CURRENCY}{value}</>} /></strong> to <strong>{props.accountName} {props.accountNumber}</strong></p>
            <button onClick={props.onProceed}>Proceed</button>
        </div>
    )
}

export default TransferConfirmation