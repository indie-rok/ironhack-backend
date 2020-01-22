import React, { useState, useEffect } from "react";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

export default function EditRoom() {
  let history = useHistory();
  let { room_id } = useParams();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [errors, setErrors] = useState(null);

  const handleSubmit = room_id => {
    axios
      .patch(`/api/rooms/${room_id}`, { name, description, imageUrl })
      .then(response => {
        history.push("/rooms");
      })
      .catch(err => {
        setErrors(`Error editing the room  ${err}`);
      });
  };

  useEffect(() => {
    axios
      .get(`/api/rooms/${room_id}`)
      .then(response => {
        const { name, description, imageUrl } = response.data;
        setName(name);
        setDescription(description);
        setImageUrl(imageUrl);
      })
      .catch(err => setErrors(err.message));
  }, []);

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

            <Button
              variant="primary"
              onClick={() => {
                handleSubmit(room_id);
              }}
            >
              Edit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
