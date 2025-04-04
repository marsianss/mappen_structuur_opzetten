import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";

const showNotification = () => {
  toast.success("This is a success notification!", {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 3000,
  });
};

const Contact = () => {
  return (
    <Container>
      <header className="d-flex justify-content-between py-3 border-bottom">
        <h3>
          <span className="logo-icon">🏋️</span> <span className="logo-text">Powerlifting <span className="highlight">World</span></span>
        </h3>
        <nav>
          <a href="/home" className="mx-2">Home</a>
          <a href="/contact" className="mx-2">Contact</a>
        </nav>
      </header>

      <h2 className="mt-4">
        Get <span className="highlight">in touch</span>
      </h2>
      <p>
        Welcome to Powerlifting World’s contact page! We value your feedback and inquiries. Whether you’re an athlete seeking competition information, a sponsor interested in partnership opportunities, or an individual with questions about our events, we’re here to assist you. Please feel free to reach out to us via phone, email, or the contact form below. Our dedicated teams are ready to address your needs promptly and professionally. Thank you for choosing Powerlifting World as your trusted source for all things powerlifting.
      </p>

      <Row className="mt-4">
        <Col md={6}>
          <Form>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Your Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3">
              <Form.Label>Your Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
            </Form.Group>
            <Button variant="danger" onClick={() => toast.success("Thank you for your message")}>
              Submit
            </Button>
          </Form>
        </Col>
        <Col md={6} className="contact-info">
          <h5>Headquarters</h5>
          <p>Powerlifting World<br />123 Strength Street, New York, NY 10001</p>
          <p>Email: <a href="mailto:info@powerliftingworld.com">info@powerliftingworld.com</a></p>
          <p>Phone: +1 (555) 555-5555</p>

          <h5>For Media Inquiries:</h5>
          <p>Email: <a href="mailto:press@powerliftingworld.com">press@powerliftingworld.com</a></p>
          <p>Phone: +1 (555) 555-1234</p>

          <h5>For Sponsorships:</h5>
          <p>Email: <a href="mailto:sponsors@powerliftingworld.com">sponsors@powerliftingworld.com</a></p>
          <p>Phone: +1 (555) 555-5678</p>
        </Col>
      </Row>

      <div className="mb-5"></div>

      <footer className="text-center py-3 border-top">© Powerlifting World | All rights reserved.</footer>
    </Container>
  );
};

export default Contact;
