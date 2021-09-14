import React from 'react'
import Filter from '../../components/filter/simple/simple-filter.component'

const Filters = props => {
    return (
        <Filter columns={columns} onChange={props.onChange} onSubmit={props.onSubmit} {...props.filter} />
    )
}

const columns = [
    {
        name: "createdAt",
        label: "Date",
        type: "D"
    },
    {
        name: "transactionRef",
        label: "Transaction Ref",
        type: "S"
    }
]

export default Filters