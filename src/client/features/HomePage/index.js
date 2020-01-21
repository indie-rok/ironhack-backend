import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <Container>
      <h1>Welcome to Rooms Company</h1>

      <Row>
        <Col>
          <Button>
            <Link to="rooms">See all rooms</Link>
          </Button>
        </Col>
        <Col>
          <Link to="Login">Login</Link>
        </Col>
      </Row>
    </Container>
  );
}
