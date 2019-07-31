import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import footerStyles from './footer.module.scss'
import Container from '../container/container'

const Footer = () => {


    return (
        <footer className={footerStyles.footer}>
            <Container>
              <p className={footerStyles.footer__text}>Powered by React+Gatsby+Contentful TEAM12 for RS School</p>
            </Container>
        </footer>
    )
}

export default Footer
