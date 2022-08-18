import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

const Contact = () => {
  const [userData, setUserData] = useState({});

  const callContactPage = async () => {
    try {
      const res = await fetch(`/getData`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      console.log(data);
      setUserData(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    callContactPage();
  }, []);
  return (
    <div>
      <section id="contact" className="py-5">
        <Container>
          <Row className="mb-3">
            <Col xl={4} className="border border-1">
              <h5>Phone</h5>
              <p>{userData.phone}</p>
            </Col>
            <Col xl={4} className="border border-1">
              <h5>Email</h5>
              <p>{userData.email}</p>
            </Col>
            <Col xl={4} className="border border-1">
              <h5>Address</h5>
              <p>{userData?.address || "Dhaka, Bangladesh"}</p>
            </Col>
          </Row>

          <Row>
            <Col xl={10} className="mx-auto">
              <Row>
                <h2 className="text-dark my-4 text-center">Get In Touch</h2>
                <Col xl={6} className="mx-auto">
                  <Form method="POST">
                    <Form.Group className="mb-3" controlId="name">
                      <Form.Control
                        type="name"
                        id="name"
                        placeholder={userData.name}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="email">
                      <Form.Control
                        type="email"
                        id="email"
                        placeholder={userData.email}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="phone">
                      <Form.Control
                        type="number"
                        id="phone"
                        placeholder={userData.phone}
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
