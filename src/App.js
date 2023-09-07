import React from 'react';
import {
  Navbar, Nav, Image, Container, Row, Col
} from 'react-bootstrap';
import logo from '../src/img/ManixTinginLogo.jpg';
import Banner from './components/Banner';
import './index.css';
import { BiMessageDetail } from 'react-icons/bi';
import { GiHamburgerMenu } from 'react-icons/gi';
import AboutUs from './components/AboutUs';
import WorkPhotos from './components/WorkPhotos';
import RequestQuote from './components/RequestQuote';
import Footer from './components/Footer';
import { Link } from 'react-scroll';
import { BsInstagram, BsFacebook, BsTiktok } from 'react-icons/bs';


const App = () => {
  return (
    <div className='app'>
      <Navbar style={{ backgroundColor: 'rgb(38,38,38)' }} data-bs-theme="dark" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="#home"><Image style={{ borderRadius: '50%' }} src={logo} height={'150px'} /></Navbar.Brand>
          <Nav>
            <Nav.Link className="d-sm-none" style={{ fontSize: '14px', fontWeight: 'bold', color: 'red' }} href="sms: +16787561826"><BiMessageDetail />  (678) 756-1826</Nav.Link>
          </Nav>
          <Navbar.Toggle style={{outline: "none"}} class="navToggler" aria-controls="responsive-navbar-nav">
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link><Link to="aboutUs" smooth={true} duration={200} style={{ fontSize: '28px', fontWeight: 'bold', color: 'white', textDecoration: 'none' }} className='m-3'>
                About Us
              </Link></Nav.Link>
              <Nav.Link><Link to="workPhotos" smooth={true} duration={200} style={{ fontSize: '28px', fontWeight: 'bold', color: 'white', textDecoration: 'none' }} className='m-3'>
                Work Photos
              </Link></Nav.Link>
              <Nav.Link><Link to="requestQuoteForm" smooth={true} duration={200} style={{ fontSize: '28px', fontWeight: 'bold', color: 'white', textDecoration: 'none' }} className='m-3'>
                Request Quote
              </Link></Nav.Link>
              <hr style={{color: 'white'}}/>
              <Row className="d-sm-none p-3">
                            <Col>
                                <a href="https://www.instagram.com/manixtinting/" target="_blank" style={{ marginLeft: '10px', textDecoration: 'none'}}>
                                    <BsInstagram /> Instagram
                                </a>
                            </Col>
                            <Col>
                                <a href="https://www.facebook.com/profile.php?id=100071066764316" target="_blank" style={{ marginLeft: '10px', textDecoration: 'none'}}>
                                    <BsFacebook style={{}}/> Facebook
                                </a>
                            </Col>
                            <Col>
                                <a href="https://www.tiktok.com/@manixtinting" target="_blank" style={{marginLeft: '10px', textDecoration: 'none'}}>
                                    <BsTiktok style={{}}/> TikTok
                                </a>
                            </Col>
                        </Row>
            </Nav>
            <Nav>
              <Nav.Link className="d-none d-sm-block" style={{ fontSize: '25px', fontWeight: 'bold', color: 'red' }} href="sms: +16787561826"><BiMessageDetail />  (678) 756-1826</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Banner />
      <span id="aboutUs"></span>
      <AboutUs />
      <span id="workPhotos"></span>
      <WorkPhotos />
      <span id="requestQuoteForm"><RequestQuote id="requestQuoteForm" /></span>
      <Footer />
    </div>
  )
}

export default App;
