import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function AllRooms() {
  return (
    <div>
      <h1>All rooms</h1>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="http://dummyimage.com/100x80" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>Description</Card.Text>
          <Link to="/view_room/33">
            <Button variant="primary">View</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}
