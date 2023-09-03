
import Accordion from 'react-bootstrap/Accordion';
import { Container } from 'react-bootstrap';

const AboutUs = () => {
    return(
        <>
<Container className='pt-2'>
      <hr />
      <Accordion defaultActiveKey={['0']} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header className="accordion-header"><strong>About Us</strong></Accordion.Header>
          <Accordion.Body className="accordion-body">
            At Manix Tinting, we're passionate about enhancing your driving experience and ensuring the privacy, comfort, and protection of your vehicle. With our expertise in the car tinting industry, we have become a trusted name in North Atlanta for all your window tinting needs.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header className="accordion-header"><strong>Our Mission</strong></Accordion.Header>
          <Accordion.Body className="accordion-body">
            Our mission is simple: to provide high-quality window tinting services that exceed your expectations. We aim to transform your vehicle with the perfect balance of style, function, and performance. We take pride in delivering top-notch craftsmanship and unparalleled customer service.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header className="accordion-header"><strong>Why Choose Us?</strong></Accordion.Header>
          <Accordion.Body className="accordion-body">
            <ul>
              <li><strong>Expertise:</strong> Our team consists of highly skilled and experienced technicians who are dedicated to delivering precision tinting solutions. We stay up-to-date with the latest industry trends and techniques to ensure your vehicle gets the best treatment. </li>
              <li><strong>Quality Materials:</strong> We use only the finest window tinting films that are known for their durability, heat rejection, UV protection, and optical clarity. Your satisfaction and long-term comfort are our top priorities. </li>
              <li><strong>Customization:</strong> We understand that every vehicle and customer is unique. That's why we offer a wide range of tint shades and options, allowing you to personalize your vehicle's appearance while enjoying the benefits of tinted windows. </li>
              <li><strong>Affordability:</strong> Quality doesn't have to break the bank. We offer competitive pricing to make our premium tinting services accessible to everyone in North Atlanta. </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
      </>
    )
}

export default AboutUs;