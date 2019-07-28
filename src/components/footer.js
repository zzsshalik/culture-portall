import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import footerStyles from './footer.module.scss'

const Footer = () => {


    return (
        <footer className={footerStyles.footer}>
            <p>Powered by React+Gatsby+Contentful TEAM12 for RS School</p>
        </footer>
    )
}

export default Footer
