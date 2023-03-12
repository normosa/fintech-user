import React from 'react'
import './auth.styles.scss'
import '../form.styles.scss'
import imageLogo from '../../assets/images/logo.jpg'

const AuthTemplate = (props) => {
    return (
        <section className="auth">
            <div>
                <div className="container">
                    <header>
                        <img alt="" src={imageLogo} />
                    </header>
                    {props.children}
                    <footer>
                        <p>© 2023 {window.sitename}. All rights reserved.</p>
                    </footer>
                </div>
            </div>
            <div>
            </div>
        </section>
    )
}

export default AuthTemplate