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

