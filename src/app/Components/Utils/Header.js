import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';

export default function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="header-nav" bg="primary" variant="dark">
      <Navbar.Brand>Corona Map</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#maps">Map</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#github">GitHub Link</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
