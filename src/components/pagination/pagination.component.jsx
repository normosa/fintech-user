import React from 'react'
import iconLeft from '../../assets/icons/arrow-left-dark.svg'
import iconRight from '../../assets/icons/arrow-right-dark.svg'
import './pagination.styles.scss'

const Pagination = props => {
    let total = getTotalPages(props)
    let pages = []
    for(let i = 1; i <= total; i++){
        pages.push(i)
    }
    return (
        <div className="pagination">
            <h4>Page {props.currentIndex} of {props.totalItemsCount} Items</h4>
            <ul>
                <li onClick={() => props.onChange(getPreviousIndex(props))}><img alt="" src={iconLeft} /></li>
                <select name="page" value={props.currentIndex} onChange={
                    e => {
                        props.onChange(Number(e.target.value))
                    }
                }>
                    {
                        pages.map((page, key) => <option key={key} value={page}>Page {page}</option>)
                    }
                </select>
                <li onClick={() => props.onChange(getNextIndex(props))}><img alt="" src={iconRight} /></li>
            </ul>
        </div>
    )
}
const getTotalPages = props => {
    if (props.totalItemsCount === 0) {
        return 0
    }
    if (props.totalItemsCount < props.itemsPerPage) {
        return 1
    }
    return Math.ceil(props.totalItemsCount / props.itemsPerPage)
}
const getPreviousIndex = props => {
    return (props.currentIndex > 1) ? props.currentIndex - 1 : 1
}
const getNextIndex = props => {
    return (props.currentIndex < getTotalPages(props)) ? props.currentIndex + 1 : props.currentIndex
}
export default Pagination