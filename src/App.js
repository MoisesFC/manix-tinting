import React from 'react';
import {
  Navbar, Nav, Image, Container} from 'react-bootstrap';
import logo from '../src/img/ManixTinginLogo.jpg';
import Banner from './components/Banner';


const App = () => {
  return (
    <div>
      <Navbar style={{ backgroundColor: 'rgb(38,38,38)' }} data-bs-theme="dark" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="#home"><Image src={logo} height={'150px'} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link className='m-3 custom-nav-link' href="#features">About Us</Nav.Link>
              <Nav.Link className='m-3' href="#pricing">Portfolio</Nav.Link>
              <Nav.Link className='m-3' href="#features">Request Quote</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="tel: +16787561826">Call: (678) 756-1826</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    <Banner/>
    </div>
  )
}

export default App;
