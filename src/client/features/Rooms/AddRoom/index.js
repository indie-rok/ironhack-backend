import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import axios from "axios";

export default function AddRoom() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [errors, setErrors] = useState(null);

  const handleSubmit = () => {
    axios
      .post("/api/rooms", { name, description, imageUrl })
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        setErrors(`Error creating the room  ${err}`);
      });
  };

  const renderErrors = () => {
    if (errors) {
      return <Alert variant="danger">{errors}</Alert>;
    }
  };

  return (
    <Container>
      <Row>
        <Col>{renderErrors()}</Col>
      </Row>
      <Row>
        <Col>
          <Form>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={event => setName(event.target.value)}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter description"
                value={description}
                onChange={event => setDescription(event.target.value)}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Image Url</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Image Url"
                value={imageUrl}
                onChange={event => setImageUrl(event.target.value)}
              />
            </Form.Group>

            <Button variant="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
