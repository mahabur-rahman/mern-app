import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  // handleLogin
  // const handleLogin = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const res = await axios.post("/login", { email, password });

  //     console.log("res : ", res.data);

  //     history.push("/");
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // #### login using fetch method ####

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    // main data

    const data = await res.json();

    // console.log("data : ", data);

    if (res.status === 400 || !data) {
      alert("Login fail!");
    } else {
      alert("Login Successful");
      history.push("/");
    }
  };

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
                    <Form.Control
                      type="email"
                      placeholder="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="password">
                    <Form.Control
                      type="password"
                      placeholder="password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
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
                      onClick={handleLogin}
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
