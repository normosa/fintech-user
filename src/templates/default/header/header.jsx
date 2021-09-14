import React from 'react'
import Brand from './brand/brand'
import './header.scss'
import Search from './search/search'
import Profile from './profile/profile'


const Header = (props) => {
    return (
        <header>
            <Brand/>
            <Search/>
            <Profile/>
        </header>
    )
}

export default Header