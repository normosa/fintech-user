import React from 'react'
import iconSearch from '../../../../assets/icons/search.svg'
import './search.scss'

const Search = () => {
    return (
        <div className="search">
            <input name="search" autoComplete="off" />
            <img src={iconSearch} alt="" />
        </div>
    )
}

export default Search