import React from "react"
import { Link  } from "gatsby"

import { Container, Navbar, Nav} from "react-bootstrap"

import NavbarStyles from '../styles/navbar.module.scss'

const CustomNavbar = ({ pageInfo  }) => {
  return (
    <div className={`${NavbarStyles.myNavbar} mx-auto`}>
      <Navbar bg="dark" variant="dark" expand="sm">
        <Container className='px-0'> 
          <Link to="/" className={NavbarStyles.linkNoStyle}>
            <Navbar.Brand as="span">drumm.sh</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto" activeKey={pageInfo && pageInfo.pageName}>
              <Link to="/" className={NavbarStyles.linkNoStyle}>
                <Nav.Link as="span">
                  Home
                </Nav.Link>
              </Link>
              <Link to="/blog" className={NavbarStyles.linkNoStyle}>
                <Nav.Link as="span">
                  Blog
                </Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container> 
      </Navbar>
    </div>
  )

}

export default CustomNavbar
