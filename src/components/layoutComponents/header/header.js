import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import { Navbar, Nav } from 'react-bootstrap';

import Container from '../container/container'
import headerStyles from "./header.module.scss"
import 'bootstrap/dist/css/bootstrap.css';

import SwitchLanguage from '../switchLanguage/switchLanguage'

class Header extends React.Component {

render(){
  return (
    <header className={headerStyles.header}>
      <Container>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand as={Link} to='/'>
            {this.props.localization.brand}
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link activeStyle={{ color: "#ffffff" }} as={Link} to='/'>
                {this.props.localization.home}
            </Nav.Link>
            <Nav.Link activeStyle={{ color: "#ffffff" }} as={Link} to='/directors'>
             {this.props.localization.theatreDirectors}
            </Nav.Link>
            <Nav.Link activeStyle={{ color: "#ffffff" }} as={Link} to='/developers'>
              {this.props.localization.developers}
            </Nav.Link>
          </Nav>
        </Navbar>
        <SwitchLanguage  changeLanguage={this.props.changeLanguage}/>
      </Container>
    </header>
  )
}
}

export default Header
