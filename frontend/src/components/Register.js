import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const history = useHistory();

  const [info, setInfo] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });

  // handleChange
  const handleChange = (e) => {
    let name, value;
    name = e.target.name;
    value = e.target.value;

    setInfo({ ...info, [name]: value });
  };

  // handleClick

  const handleClick = async (e) => {
    e.preventDefault();

    const { name, email, work, phone, password, cpassword } = info;
    try {
      const res = await axios.post("/register", {
        name,
        email,
        work,
        phone,
        password,
        cpassword,
      });

      history.push("/login");

      // console.log(res);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  // using JS FETCH METHOD

  // const handleClick = async (e) => {
  //   e.preventDefault();

  //   const { name, email, work, phone, password, cpassword } = info;

  //   try {
  //     const res = await fetch(`/register`, {
  //       method: "post",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         name,
  //         email,
  //         work,
  //         phone,
  //         password,
  //         cpassword,
  //       }),
  //     });

  //     const data = await res.json();

  //     if (data.status === 422 || !data || data.error) {
  //       alert("something wrong");
  //     }

  //     console.log(data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

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
                      <Form.Control
                        type="text"
                        placeholder="name"
                        name="name"
                        value={info.name}
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="email">
                      <Form.Control
                        type="email"
                        placeholder="email"
                        name="email"
                        value={info.email}
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="phone">
                      <Form.Control
                        type="number"
                        placeholder="phone"
                        name="phone"
                        value={info.phone}
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="work">
                      <Form.Control
                        type="text"
                        placeholder="work"
                        name="work"
                        value={info.work}
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="password">
                      <Form.Control
                        type="password"
                        placeholder="password"
                        name="password"
                        value={info.password}
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="cpassword">
                      <Form.Control
                        type="password"
                        placeholder="confirm password"
                        name="cpassword"
                        value={info.cpassword}
                        onChange={handleChange}
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
                        onClick={handleClick}
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
