import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Container fluid className='header'>
        <Row>
          <Col xs={3} className='header-brand'>Manix Tinting</Col>
          <Col xs={3} className='header-item'> Services</Col>
          <Col xs={3} className='header-item'>About Us</Col>
          <Col xs={3} className='header-item'>Appointment Booking</Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
