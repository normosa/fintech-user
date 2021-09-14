import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import iconArrowDown from '../../../../assets/icons/arrow-down-light.svg'

export const Item = (props) => {
    return (
        <li className={props.active ? 'item active' : 'item'} onClick={props.onClick}>
            <span>
                <img src={props.icon} alt="" />
                <b>{props.text}</b>
                {
                    props.subItems.length > 0 && <img src={iconArrowDown} alt="" />
                }
            </span>
            <ul>
                {
                    props.subItems.map(
                        (menu, key) => <li key={key} className={props.location.pathname.substring(0, menu.url.length) === menu.url?'active':''}><Link onClick={props.onSubItemClick} to={menu.url}>{menu.text}</Link></li>
                    )
                }
            </ul>
        </li>
    )
}

export default withRouter(Item)