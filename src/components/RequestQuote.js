import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const  RequestQuote = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    carDetails: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    if (!formData.email && !formData.phone) {
      alert('Please provide either an email address or a phone number.');
    }
  };

  return (
    <>
    <Container className='mt-5'>
      <h3 style={{ color: 'white', textAlign: 'center' }}>Request a Quote</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label className='mt-2' style={{color:'white'}}>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required 
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label className='mt-2'  style={{color:'white'}}>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required 
          />
        </Form.Group>
        <Form.Group controlId="phoneNumber">
          <Form.Label className='mt-2'  style={{color:'white'}}>Phone Number</Form.Label>
          <Form.Control
            type="phone"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            required 
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label className='mt-2'  style={{color:'white'}}>Car Make and Model</Form.Label>
          <Form.Control
            type="textarea"
            name="carDetails"
            placeholder="Enter Car Make and Model"
            value={formData.carDetails}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="message">
          <Form.Label className='mt-2'  style={{color:'white'}}>Additional Info</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            name="message"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
          />
        </Form.Group>
        <Button className='mt-4' variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
    </>
  );
}

export default RequestQuote
