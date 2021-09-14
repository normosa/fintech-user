import React from 'react'
import './simple-filter.styles.scss'

const SimpleFilter = props => {
    let selectedColumn = getSelectedColumn(props.columns, props.column)
    return (
        <form className="filter" onSubmit={props.onSubmit}>
            <div className="wrapper">
                <div>
                    <select name="column" defaultValue={props.operator} onChange={props.onChange}>
                        <option value="">Search Filter</option>
                        {
                            props.columns.map((column, key) => <option key={key} value={column.name}>{column.label}</option>)
                        }
                    </select>
                </div>
                <div>
                    {
                        renderFilterInput(props, selectedColumn)
                    }
                </div>
                <div>
                    <button>Search</button>
                </div>
            </div>
        </form>
    )
}
const renderFilterInput = (props, selectedColumn) => {
    if (selectedColumn == null) {
        return <input type="text" name="value" value={props.value} onChange={props.onChange} />
    }
    switch (selectedColumn.type) {
        case 'D':
            return <input type="date" name="value" value={props.value} onChange={props.onChange} />
        case 'N':
            return <input type="number" name="value" value={props.value} onChange={props.onChange} />
        case 'C':
            return <select name="value" defaultValue={props.value} onChange={props.onChange}>
                <option value=""></option>
                {
                    selectedColumn.options.map((option, key) => <option key={key} value={typeof option === 'object' ? option.value : option}>{typeof option === 'object' ? option.label : option}</option>)
                }
            </select>
        default:
            return <input type="text" name="value" value={props.value} onChange={props.onChange} />
    }
}

const getSelectedColumn = (columns, column) => {
    let columnConfig = columns.filter(col => col.name === column)
    if (columnConfig.length > 0) {
        return columnConfig[0]
    }
    return null
}

export default SimpleFilter