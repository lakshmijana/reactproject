import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './footer.css'; 

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={4}>
            <h5>TastyBites</h5>
            <p>Delicious food, fast delivery, and an unforgettable dining experience.</p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/Menu">Menu</a></li>
              <li><a href="/AboutUs">About Us</a></li>
              <li><a href="/Booknow">Book Now</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <p>Email: contact@tastybites.com</p>
            <p>Phone: +123 456 7890</p>
            <p>Address: 123 Food Street, City, Country</p>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <p>&copy; 2024 TastyBites. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
