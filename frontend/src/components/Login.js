import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section id="login" className="py-5">
      <Container>
        <h3 className="text-center my-4 text-dark display-6 fw-bold">Login</h3>

        <Row>
          <Col xl={10} className="mx-auto">
            <Row>
              <Col xl={6} className="mx-auto">
                <Form method="POST">
                  <Form.Group className="mb-3" controlId="email">
                    <Form.Control type="email" placeholder="email" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="password">
                    <Form.Control type="password" placeholder="password" />
                  </Form.Group>

                  <div className="text-end">
                    <Link to="/registration">Create an account</Link>
                  </div>

                  {/* submit btn */}
                  <div>
                    <input
                      type="submit"
                      value="Log In"
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
  );
};

export default Login;
