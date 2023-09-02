import React from 'react';
import {
  Navbar, Nav,
  Container, Row, Col
} from 'react-bootstrap';
import logo from '../src/img/ManixTinginLogo.jpg'

const App = () => {
  return (
    <div className='header'>
      <Navbar bg="ligt" variant="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home"><img src={logo} style={{height: "145px"}}></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="m-auto">
            <Row>
            <Col><Nav.Link className="mr-3" href="#home">Home</Nav.Link></Col>
            <Col><Nav.Link className="mr-3" href="#about">About</Nav.Link></Col>
            <Col><Nav.Link className="m-auto" href="#services">Services</Nav.Link></Col>
            <Col><Nav.Link className="m-auto" href="#contact">Contact</Nav.Link></Col>
            </Row>
          </Nav> 
         </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default App;
