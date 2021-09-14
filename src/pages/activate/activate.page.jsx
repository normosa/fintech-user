import React from 'react'
import './activate.styles.scss'
import { DEBUG } from '../../config'

const Activate = () => {
    return (
        <div className="login">
            <h3>Activate Account</h3>
            <div className="signup">
                <button onClick={() => window.location = DEBUG ? "http://localhost:8000/#plans" : "https://blueoyster-fx.com/#plans"}>Choose Plan</button>
            </div>
        </div>
    )
}

export default Activate