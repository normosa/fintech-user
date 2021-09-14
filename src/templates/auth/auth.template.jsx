import React from 'react'
import './auth.styles.scss'
import '../form.styles.scss'
import iconLogo from '../../assets/images/logo.png'

const AuthTemplate = (props) => {
    return (
        <section className="auth">
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

export default AuthTemplate