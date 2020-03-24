import React from 'react'
import { Navbar, Nav, Form } from 'react-bootstrap';
import SvgVirus from '../../../svg/reactSvg/svgrVirus';

export default function Header() {

  const themeSwitch = document.getElementsByClassName('switch-theme');
  let darkThemeSelected
  if (themeSwitch) {
    darkThemeSelected = (localStorage.getItem('switch-theme') !== null && localStorage.getItem('switch-theme') === 'dark');
    // update checkbox
    themeSwitch.checked = darkThemeSelected;
    // update body data-theme attribute
    darkThemeSelected ? document.body.setAttribute('data-theme', 'dark') : document.body.removeAttribute('data-theme');
  }
  const switchTheme = (e) => {
    if (e.target.checked) {
      document.body.setAttribute('data-theme', 'dark');
      localStorage.setItem('switch-theme', 'dark'); // save theme selection 
    } else {
      document.body.removeAttribute('data-theme');
      localStorage.removeItem('switch-theme'); // reset theme selection 
    }

  }

  return (
    <Navbar collapseOnSelect expand="lg" className="header-nav">
      <Navbar.Brand className="nav-brand"> <SvgVirus className="svgVirus" /> Corona Map</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/map">Map</Nav.Link>
        </Nav>
        <Nav>
          <Form inline>
            <Form.Check
              defaultChecked={darkThemeSelected}
              onChange={switchTheme}
              className="switch-theme"
              type="switch"
              id="custom-switch"
              label="Theme (Dark/Light)"
            />
          </Form>
          <Nav.Link href="/github">GitHub Link</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar >
  )
}
