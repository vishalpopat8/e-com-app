import React, { useState } from "react";
import { Col, Container, Row, Form, Button,Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SignUp.css";
import { useSignupMutation } from "../services/appApi";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [signup, { error, isLoadig, isError }] = useSignupMutation(); 

  function handleSignup(e) {
    e.preventDefault()
    signup({name,email,password})
  }

  return (
    <Container>
      <Row>
        <Col md={6} className="signup-form-container">
          <Form style={{ width: "100%" }} onSubmit={handleSignup}>
            <h1>Create an Account</h1>
            {isError && <Alert variant="danger">{error.data}</Alert>}
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email Addresss</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Button type="submit" disabled={isLoadig}>Sign Up</Button>
            </Form.Group>
            <p>
              Have an account? <Link to="/login">Login</Link>
            </p>
          </Form>
        </Col>
        <Col
          md={6}
          className="signup-image-container"
          style={{ backgroundImage: "url(images/signup.jpg)" }}
        ></Col>
      </Row>
    </Container>
  );
};

export default SignUp;
