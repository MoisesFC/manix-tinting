import React from 'react';
import {
  Navbar, Nav, Image,
  Container, Row, Col
} from 'react-bootstrap';
import logo from '../src/img/ManixTinginLogo.jpg'

const App = () => {
//   return (
//     <div className='header'>
//  <Navbar variant="dark" expand="lg" style={{ backgroundColor: 'rgb(38, 38, 38)' }}>
//       <Container>
//         <Navbar.Brand href="#home"><Image src={logo} height={130} alt="Logo" /></Navbar.Brand>
//         <div style={{color: 'white', paddingLeft: '100px'}} className="d-flex justify-content-center">
//           <span>666 666 6666</span>
//         </div>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse>
//           <Nav className="m-auto">
//             <Row className='mt-5'></Row>
//             <Row>
//               <Col><Nav.Link href="#home">Home</Nav.Link></Col>
//               <Col><Nav.Link href="#about">About</Nav.Link></Col>
//               <Col><Nav.Link href="#services">Services</Nav.Link></Col>
//               <Col><Nav.Link href="#contact">Contact</Nav.Link></Col>
//             </Row>
//             <Row className='mt-5'></Row>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//       <div className='bannerdiv'>

//       </div>
//     </div>
//   );
return(
<nav style={navbarStyle}>
<div style={containerStyle}>
  <a href="#home" style={brandStyle}>Logo</a>
  <ul style={navListStyle}>
    <li style={navItemStyle}><a href="#home" style={navLinkStyle}>Home</a></li>
    <li style={navItemStyle}><a href="#about" style={navLinkStyle}>About</a></li>
    <li style={navItemStyle}><a href="#services" style={navLinkStyle}>Services</a></li>
    <li style={navItemStyle}><a href="#contact" style={navLinkStyle}>Contact</a></li>
  </ul>
  <div style={phoneNumberStyle}>666 666 6666</div>
</div>
</nav>
)
}
const navbarStyle = {
  backgroundColor: 'rgb(38, 38, 38)',
  color: 'white',
  padding: '10px 0',
};

const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 20px',
};

const brandStyle = {
  textDecoration: 'none',
  fontSize: '24px',
  color: 'white',
};

const navListStyle = {
  listStyle: 'none',
  display: 'flex',
  gap: '20px',
  margin: '0',
  padding: '0',
};

const navItemStyle = {
  margin: '0',
  padding: '0',
};

const navLinkStyle = {
  textDecoration: 'none',
  color: 'white',
  fontSize: '18px',
};

const phoneNumberStyle = {
  fontSize: '18px',
  color: 'white',}

export default App;
