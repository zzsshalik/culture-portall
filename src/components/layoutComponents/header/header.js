import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Navbar, Nav } from 'react-bootstrap';

import headerStyles from "./header.module.scss"
import 'bootstrap/dist/css/bootstrap.css';

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className={headerStyles.header}>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand as={Link} to='/'>
              {data.site.siteMetadata.title}
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to='/' activeClassName={headerStyles.activeNavItem}>
                  Home
          </Nav.Link>
          <Nav.Link as={Link} to='/directors'>
                  Theatre directors
          </Nav.Link>
          <Nav.Link as={Link} to='/developers'>
                  Developers
          </Nav.Link>
        </Nav>
      </Navbar>
    </header>
  )
}

export default Header
