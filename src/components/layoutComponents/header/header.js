import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Navbar, Nav } from 'react-bootstrap';

import Container from '../container/container'
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
      <Container>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand as={Link} to='/'>
                {data.site.siteMetadata.title}
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link activeStyle={{ color: "#ffffff" }} as={Link} to='/'>
                    Home
            </Nav.Link>
            <Nav.Link activeStyle={{ color: "#ffffff" }} as={Link} to='/directors'>
                    Theatre directors
            </Nav.Link>
            <Nav.Link activeStyle={{ color: "#ffffff" }} as={Link} to='/developers'>
                    Developers
            </Nav.Link>
          </Nav>
        </Navbar>
      </Container>
    </header>
  )
}

export default Header
