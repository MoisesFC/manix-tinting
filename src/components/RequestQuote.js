// import React, { useState } from 'react';
// import { Container, Form, Button } from 'react-bootstrap';

// const  RequestQuote = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     carDetails: '',
//     message: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your form submission logic here
//     if (!formData.email && !formData.phone) {
//       alert('Please provide either an email address or a phone number.');
//     }
//   };

//   return (
//     <>
//     <Container className='mt-5'>
//       <h3 style={{ color: 'white', textAlign: 'center' }}>Request a Quote</h3>
//       <Form onSubmit={handleSubmit}>
//         <Form.Group controlId="name">
//           <Form.Label className='mt-2' style={{color:'white'}}>Name</Form.Label>
//           <Form.Control
//             type="text"
//             name="name"
//             placeholder="Enter your name"
//             value={formData.name}
//             onChange={handleChange}
//             required 
//           />
//         </Form.Group>
//         <Form.Group controlId="email">
//           <Form.Label className='mt-2'  style={{color:'white'}}>Email</Form.Label>
//           <Form.Control
//             type="email"
//             name="email"
//             placeholder="Enter your email"
//             value={formData.email}
//             onChange={handleChange}
//             required 
//           />
//         </Form.Group>
//         <Form.Group controlId="phoneNumber">
//           <Form.Label className='mt-2'  style={{color:'white'}}>Phone Number</Form.Label>
//           <Form.Control
//             type="phone"
//             name="phone"
//             placeholder="Enter your phone number"
//             value={formData.phone}
//             onChange={handleChange}
//             required 
//           />
//         </Form.Group>
//         <Form.Group controlId="email">
//           <Form.Label className='mt-2'  style={{color:'white'}}>Car Make and Model</Form.Label>
//           <Form.Control
//             type="textarea"
//             name="carDetails"
//             placeholder="Enter Car Make and Model"
//             value={formData.carDetails}
//             onChange={handleChange}
//           />
//         </Form.Group>
//         <Form.Group controlId="message">
//           <Form.Label className='mt-2'  style={{color:'white'}}>Additional Info</Form.Label>
//           <Form.Control
//             as="textarea"
//             rows={4}
//             name="message"
//             placeholder="Enter your message"
//             value={formData.message}
//             onChange={handleChange}
//           />
//         </Form.Group>
//         <Button className='mt-4' variant="primary" type="submit">
//           Submit
//         </Button>
//       </Form>
//     </Container>
//     </>
//   );
// }

// export default RequestQuote

import React, { useRef, useState } from 'react';
import { Container, Modal, Button } from 'react-bootstrap'; // Import Modal and Button components
import emailjs from '@emailjs/browser';

const RequestQuote = () => {
  const form = useRef();
  const [showModal, setShowModal] = useState(false); // State to control the modal visibility

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_v5shoxz', 'template_07f6rnk', form.current, 'evvItdo30H67aKOLE')
      .then((result) => {
        console.log(result.text);
        resetForm();
        setShowModal(true); // Show the modal when the form is successfully submitted
      })
      .catch((error) => {
        console.error(error.text);
      });
  };

  const resetForm = () => {
    const formElements = form.current.elements;
    for (let i = 0; i < formElements.length; i++) {
      if (formElements[i].type !== 'submit') {
        formElements[i].value = '';
      }
    }
  };
  return (
    <>
      <Container className='mt-5'>
        <h3 style={{ color: 'white', textAlign: 'center', textDecoration: "underline", marginBottom: "20px" }}>Request a Quote</h3>
        <form ref={form} onSubmit={sendEmail}>
          <label style={{ color: 'white', textAlign: 'center' }}>Name</label>
          <input required type="text" name="user_name" />
          <label required style={{ color: 'white', textAlign: 'center' }}>Email</label>
          <input type="email" name="user_email" />
          <label required style={{ color: 'white', textAlign: 'center' }}>Phone</label>
          <input type="phone" name="user_phone" />
          <label style={{ color: 'white', textAlign: 'center' }}>Car Make and Model</label>
          <input type="text" name="car_details" />
          <label style={{ color: 'white', textAlign: 'center' }}>Message</label>
          <textarea name="message" />
          <input className='mt-3' type="submit" value="Send" />
        </form>

        <Modal show={showModal} onHide={() => setShowModal(false)} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Form Submitted</Modal.Title>
        </Modal.Header>
        <Modal.Body><strong>Thank You!</strong> <br/>Your quote request has been successfully sumbmitted<br/> We will reach out to you soon.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </Container>
    </>
  );
}

export default RequestQuote

