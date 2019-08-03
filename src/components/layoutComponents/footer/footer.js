import React from 'react'

import footerStyles from './footer.module.scss'
import Container from '../container/container'

const Footer = (props) => {
    return (
      <footer className={footerStyles.footer}>
        <Container>
          <p className={footerStyles.footer__text}>{props.localization.footerLable}</p>
        </Container>
      </footer>
    )
}

export default Footer
