import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import footerStyles from './footer.module.scss'

const Footer = () => {
    

    return (
        <footer className={footerStyles.footer}>
            <p>Here footer</p>
        </footer>
    )
}

export default Footer