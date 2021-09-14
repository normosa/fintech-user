import React from 'react'
import './simple-filter.styles.scss'

const Filter = props => {
    return (
        <div className="filter">
            <label>{props.title}</label>
            <div>
                <select name={props.name + 'Opr'} defaultValue={props.operator} onChange={props.onChange}>
                    {
                        props.operators.map((operator, key) => <option key={key} value={operator.value}>{operator.label}</option>)
                    }
                </select>
            </div>
            <div>
                {
                    renderFilterInput(props)
                }
            </div>
        </div>
    )
}
const renderFilterInput = props => {
    switch (props.type) {
        case 'date':
            return <input type="date" name={props.name} value={props.value} onChange={props.onChange}/>
        case 'number':
            return <input type="number" name={props.name} value={props.value}  onChange={props.onChange}/>
        case 'dropdown':
            return <select name={props.name} defaultValue={props.value} onChange={props.onChange}>
                <option value=""></option>
                {
                    props.options.map((option, key) => <option key={key} value={typeof option === 'object'?option.value:option}>{typeof option === 'object'?option.label:option}</option>)
                }
            </select>
        default:
            return <input type="text" name={props.name} value={props.value} onChange={props.onChange} />
    }
}

export default Filter