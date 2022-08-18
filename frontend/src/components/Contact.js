import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

const Contact = () => {
  return (
    <div>
      <section id="contact" className="py-5">
        <Container>
          <Row className="mb-3">
            <Col xl={4} className="border border-1">
              <h5>Phone</h5>
              <p>254252542</p>
            </Col>
            <Col xl={4} className="border border-1">
              <h5>Email</h5>
              <p>annur@gmail.com</p>
            </Col>
            <Col xl={4} className="border border-1">
              <h5>Address</h5>
              <p>Dhaka, Bangladesh</p>
            </Col>
          </Row>

          <Row>
            <Col xl={10} className="mx-auto">
              <Row>
                <h2 className="text-dark my-4 text-center">Get In Touch</h2>
                <Col xl={6} className="mx-auto">
                  <Form method="POST">
                    <Form.Group className="mb-3" controlId="name">
                      <Form.Control type="name" id="name" placeholder="name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="email">
                      <Form.Control
                        type="email"
                        id="email"
                        placeholder="email"
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="phone">
                      <Form.Control
                        type="number"
                        id="phone"
                        placeholder="phone"
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="phone">
                      <textarea
                        rows="5"
                        placeholder="message...."
                        className="form-control"
                        name="message"
                      ></textarea>
                    </Form.Group>

                    {/* submit btn */}
                    <div className="text-center">
                      <button className="btn btn-primary" type="submit">
                        Contact Now
                      </button>
                    </div>
                  </Form>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Contact;
