import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

export default function AddRoom() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  return (
    <Container>
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

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
