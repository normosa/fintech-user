import React from 'react'
import './checkbox.styles.scss'

const Checkbox = ({ name, text, checked, onChange }) => {
    return (
        <div className="checkbox">
            <div>
                <span onClick={() => onChange(name, !checked)} className={checked? "checked": ""}><i></i></span>
                {text}
            </div>
            <input type="checkbox" defaultChecked={checked} name={name} />
        </div>
    )
}

export default Checkbox