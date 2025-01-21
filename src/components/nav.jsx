import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './nav.css';
import Imagecomp from './imagecomp';
import AboutUs from './aboutus';
import { NavLink } from 'react-router-dom';

function OverlayNav() {
  return (
    <>
      <Navbar className="overlay-navbar" expand="lg">
        {/* <Navbar.Brand >Brand</Navbar.Brand> */}
        <img src="../assets/logo3.png"/>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link" >Home</NavLink>
            <NavLink to="/AboutUs" className="nav-link" >About Us</NavLink>
            <NavLink to="/Menu" className="nav-link" >Menu</NavLink>
            <NavLink to="/Booknow" className="nav-link">Book Now</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
 
    </>
  );
}

export default OverlayNav;

