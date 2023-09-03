import React from 'react';
import {
  Navbar, Nav, Image, Container
} from 'react-bootstrap';
import logo from '../src/img/ManixTinginLogo.jpg';
import Banner from './components/Banner';
import './index.css';
import { BsFillTelephoneOutboundFill } from 'react-icons/bs';
import AboutUs from './components/AboutUs';
import WorkPhotos from './components/WorkPhotos';
import RequestQuote from './components/RequestQuote';

const App = () => {
  return (
    <div className='app'>
      <Navbar style={{ backgroundColor: 'rgb(38,38,38)' }} data-bs-theme="dark" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="#home"><Image src={logo} height={'150px'} /></Navbar.Brand>
          <Nav>
              <Nav.Link className="d-sm-none" style={{ fontSize: '15px', fontWeight: 'bold', color: 'red' }} href="tel: +16787561826"><BsFillTelephoneOutboundFill/>  (678) 756-1826</Nav.Link>
            </Nav>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link style={{ fontSize: '28px', fontWeight: 'bold', color: 'white' }} className='m-3 custom-nav-link' href="#features">About Us</Nav.Link>
              <Nav.Link style={{ fontSize: '28px', fontWeight: 'bold', color: 'white' }} className='m-3' href="#pricing">Work Photos</Nav.Link>
              <Nav.Link style={{ fontSize: '28px', fontWeight: 'bold', color: 'white' }} className='m-3' href="#features">Request Quote</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link className="d-none d-sm-block" style={{ fontSize: '28px', fontWeight: 'bold', color: 'red' }} href="tel: +16787561826"><BsFillTelephoneOutboundFill/>  (678) 756-1826</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Banner />
      <AboutUs/>
      <WorkPhotos/>
      <RequestQuote />
    </div>
  )
}

export default App;
