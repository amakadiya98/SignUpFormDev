import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button } from 'react-bootstrap';
import logo from '../images/logo.png';
import Vector from '../images/Vector.png';
import Flag from '../images/flag.png';
import '../css/header.css';

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Navbar.Brand href="#home" className='mobile'><img src={logo} alt="logo" /></Navbar.Brand>
      <div className="mobileRightPart">
        <div className="dropdown">
          <img src={Flag} alt="flag" />
          <NavDropdown title="EN" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          </NavDropdown>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </div>
      <Navbar.Collapse id="basic-navbar-nav" >
        <Nav>
        <Navbar.Brand href="#home" className='desktop'><img src={logo} alt="logo" /></Navbar.Brand>
          <div className="center">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="Contact">Contact</Nav.Link>
            <Nav.Link href="#">NEW TO FLATSHARING?</Nav.Link>
          </div>
          <div className="right">
            <div className="dropdown desktop">
              <img src={Flag} alt="flag" />
              <NavDropdown title="EN" id="basic-nav-dropdown" className='country-dropdown'>
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              </NavDropdown>
            </div>
            <Nav.Link href="/signup" className='signup-link'>Sign Up</Nav.Link>
            <Button className='Btn'><img src={Vector} alt="" /> Login</Button>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;