import React from 'react'

import footerStyles from './footer.module.scss'
import Container from '../container/container'

import localization from '../../../localization/localization'

const Footer = ({language}) => {
    return (
      <footer className={footerStyles.footer}>
        <Container>
          <p className={footerStyles.footer__text}>{localization[language].footerLable}</p>
        </Container>
      </footer>
    )
}

export default Footer
