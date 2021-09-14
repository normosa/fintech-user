import React from 'react'
import './activate.styles.scss'
import '../form.styles.scss'
import iconLogo from '../../assets/images/logo.png'

const ActivateTemplate = (props) => {
    return (
        <section className="activate">
            <div>
                <div className="container">
                    <header>
                        <img alt="" src={iconLogo} />
                        <h1>{window.sitename}</h1>
                    </header>
                    {props.children}
                    <footer>
                        <p>© 2021 {window.sitename}. All rights reserved.</p>
                    </footer>
                </div>
            </div>
            <div>
            </div>
        </section>
    )
}

export default ActivateTemplate