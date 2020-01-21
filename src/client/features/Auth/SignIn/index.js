import React, { useState } from "react";
import { Container, Col, Row, Form, Button, Alert } from "react-bootstrap";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";

export default function SignIn() {
  let history = useHistory();

  const [username, setUserName] = useState("user");
  const [password, setPassword] = useState("xd");
  const [error, setError] = useState(null);

  const handleSubmit = () => {
    axios
      .post("/api/user/login", {
        username,
        password
      })
      .then(response => {
        const { data } = response;
        history.push("/rooms");
      })
      .catch(err => {
        setError(`unable to log in with provided credentials: ${err.message}`);
      });
  };

  const renderError = () => {
    if (error) {
      return <Alert variant="danger">{error}</Alert>;
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          {renderError()}
          <h2>Sign In</h2>
          <Form>
            <Form.Group>
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="username"
                value={username}
                onChange={event => setUserName(event.target.value)}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={event => setPassword(event.target.value)}
              />
            </Form.Group>

            <Button onClick={handleSubmit}>Login</Button>
            <hr />
            <p>
              Don't have an account? <Link to="sign_up">Sign Up</Link>
            </p>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
