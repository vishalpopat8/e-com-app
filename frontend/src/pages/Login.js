import React, { useState } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function HandleSubmit() {}
  return (
    <Container>
      <Row>
        <Col md={6} className="login-form-container">
          <Form style={{ width: "100%" }}>
            <h1>Login to your Account</h1>
            <Form.Group>
              <Form.Label>Email Addresss</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                value={email}
                required
                onChange={(e)=>setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                value={password}
                required
                onChange={(e)=>setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Button type="submit">Login</Button>
            </Form.Group>
            <p>
              Don't have an account? <Link to="/signup">Create account</Link>
            </p>
          </Form>
        </Col>
        <Col md={6} className="login-image-container"></Col>
      </Row>
    </Container>
  );
};

export default Login;
