import React from 'react'
import './default.styles.scss'
import '../form.styles.scss'
import Header from './header/header'
import Content from './content/content'
import Menu from './menu/menu'

const DefaultTemplate = (props) => {
    return (
        <div className="default-template">
            <Menu />
            <section>
                <Header />
                <Content>{props.children}</Content>
            </section>
        </div>
    )
}

export default DefaultTemplate