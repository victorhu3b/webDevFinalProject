import React from 'react';
import { Navbar , Nav, NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./navBody.css"


class NavBar extends React.Component {

    
  render() {

    return (
      <>
        <div className="outer">

        <Navbar collapseOnSelect expand="lg" variant="dark">

          {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" style={{"align-self": "center"}}>
          <Nav className="text-to-right">
            <Nav.Link className="text-to-right" href="#login">Login</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#whower">Who We Are</Nav.Link>
          </Nav>
          </Navbar.Collapse>

        </Navbar>
        </div>

    </>
    
    );
  }
}
export default NavBar;
