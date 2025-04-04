import React from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import '../index.scss';

const showNotification = () => {
  toast.success("This is a success notification!", {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 3000,
  });
};

const Home = () => {
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

      <Row className="mt-4">
        <Col md={8}>
          <Card className="mb-4">
            <Card.Img src="/pics/powerlifting.png" alt="Powerlifting" />
            <Card.Body>
              <Card.Title>Breaking Records: Powerlifting Champion Lifts 500kg!</Card.Title>
              <Card.Text>
                The powerlifting world is buzzing as a new record has been set in the deadlift category, showcasing the pinnacle of human strength.
              </Card.Text>
              <Button variant="danger" onClick={() => toast.success("Read more about this amazing feat!")}>
                Read more
              </Button>
            </Card.Body>
          </Card>
          <Row>
            <Col md={6}>
              <Card className="mb-4">
                <Card.Img src="/pics/training.png" alt="Training" />
                <Card.Body>
                  <Card.Title>Top 5 Training Tips for Powerlifting Beginners</Card.Title>
                  <Card.Text>
                    Learn the essential techniques and strategies to start your powerlifting journey the right way.
                  </Card.Text>
                  <Button variant="danger" onClick={() => toast.success("Check out these tips!")}>
                    Read more
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="mb-4">
                <Card.Img src="/pics/nutrition.png" alt="Nutrition" />
                <Card.Body>
                  <Card.Title>Nutrition for Strength: Fueling Your Powerlifting Goals</Card.Title>
                  <Card.Text>
                    Discover the best dietary practices to maximize your strength and recovery.
                  </Card.Text>
                  <Button variant="danger" onClick={() => toast.success("Learn more about nutrition!")}>
                    Read more
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col md={4}>
          <h5 className="section-title">Catch up on the latest powerlifting news</h5>
          <ul className="news-list">
            <li><strong>Competition:</strong> World Powerlifting Championship Results Announced</li>
            <li><strong>Training:</strong> New Techniques to Improve Your Squat</li>
            <li><strong className="live">LIVE:</strong> Watch the Bench Press Finals Now</li>
            <li><strong>Community:</strong> Powerlifting Gyms Expanding Across the Globe</li>
          </ul>
          <div className="newsletter mt-4">
            <h5>Stay up-to-date with the latest powerlifting news.</h5>
            <Form>
              <Form.Group controlId="formEmail">
                <Form.Control type="email" placeholder="Email address" />
              </Form.Group>
              <Button variant="dark" className="mt-2" onClick={() => toast.success("You will now receive our newsletter!")}>
                Sign up
              </Button>
            </Form>
          </div>
          <h5 className="section-title mt-4">Trending articles</h5>
          <ul className="news-list">
            <li><strong>Health:</strong> Recovery Techniques for Lifters</li>
            <li><strong>Gear:</strong> Best Powerlifting Belts of 2024</li>
            <li><strong>Science:</strong> The Physics Behind the Perfect Deadlift</li>
          </ul>
        </Col>
      </Row>
      <footer className="text-center py-3 border-top">© Powerlifting World | All rights reserved.</footer>
    </Container>
  );
};

export default Home;
