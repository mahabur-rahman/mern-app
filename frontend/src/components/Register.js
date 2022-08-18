import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <section id="register" className="py-5">
        <Container>
          <h3 className="text-center my-4 text-dark display-6 fw-bold">
            Sign Up
          </h3>
          <Row>
            <Col xl={10} className="mx-auto">
              <Row>
                <Col xl={6} className="mx-auto">
                  <Form method="POST">
                    <Form.Group className="mb-3" controlId="name">
                      <Form.Control type="text" placeholder="name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="email">
                      <Form.Control type="email" placeholder="email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="phone">
                      <Form.Control type="number" placeholder="phone" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="work">
                      <Form.Control type="text" placeholder="work" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="password">
                      <Form.Control type="password" placeholder="password" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="cpassword">
                      <Form.Control
                        type="password"
                        placeholder="confirm password"
                      />
                    </Form.Group>
                    <div className="text-end">
                      <Link to="/login">I am already register</Link>
                    </div>

                    {/* submit btn */}
                    <div>
                      <input
                        type="submit"
                        value="Register"
                        className="btn btn-success"
                      />
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

export default Register;
