import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function RoomCard({ room, user }) {
  const renderEdit = () => {
    console.log(room, user);
    if (room.owner === user._id) {
      return (
        <Link to={`/edit_room/${room._id}`} className="ml-4">
          <Button variant="primary">Edit</Button>
        </Link>
      );
    }
  };

  return (
    <Card key={room._id} style={{ width: "18rem" }}>
      <Card.Img variant="top" src="http://dummyimage.com/100x80" />
      <Card.Body>
        <Card.Title>{room.name}</Card.Title>
        <Card.Text>{room.description}</Card.Text>
        <Link to={`/view_room/${room._id}`}>
          <Button variant="primary">View</Button>
        </Link>

        {renderEdit()}
      </Card.Body>
    </Card>
  );
}
