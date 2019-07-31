import React from 'react'

import footerStyles from './footer.module.scss'
import Container from '../container/container'

const Footer = () => {


    return (
        <footer className={footerStyles.footer}>
            <Container>
              <p className={footerStyles.footer__text}>Powered by React+Gatsby+Contentful/Netlify TEAM12 for RS School</p>
            </Container>
        </footer>
    )
}

export default Footer
