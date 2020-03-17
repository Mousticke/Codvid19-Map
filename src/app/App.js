import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';

import Dashboard from './Dashboard';

function App() {
  


  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          Corona Map
      </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#maps">Map</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#github">GitHub Link</Nav.Link>
        </Nav>
      </Navbar>
      <Dashboard />
      
    </div>
  );
}

export default App;
