import React from "react"
import { Link } from "gatsby"
import { Navbar, Nav } from 'react-bootstrap';

import Container from '../container/container'
import headerStyles from "./header.module.scss"
import 'bootstrap/dist/css/bootstrap.css';

import SwitchLanguage from '../../SwitchLanguage/SwitchLanguage'

import localization from '../../../localization/localization'

const Header = ({ language,ru }) => (

  <header className={headerStyles.header}>
    <Container>
      <Navbar bg="dark" variant="dark" className={headerStyles.navBar}>
        <Navbar.Brand as={Link} to='/' className={headerStyles.logo}>
          {localization[language].brand}
        </Navbar.Brand>
        <Nav>
          <Nav.Link activeStyle={{ color: "#ffffff" }} as={Link} to='/'>
            {localization[language].home}
          </Nav.Link>
          <Nav.Link activeStyle={{ color: "#ffffff" }} as={Link} to='/directors'>
            {localization[language].theatreDirectors}
          </Nav.Link>
          <Nav.Link activeStyle={{ color: "#ffffff" }} as={Link} to='/developers'>
            {localization[language].developers}
          </Nav.Link>
        </Nav>
        <SwitchLanguage changeLanguage={ru} />
      </Navbar>
    </Container>
  </header>
  )

export default Header
