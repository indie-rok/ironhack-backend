import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function RoomCard({ room, user }) {
  let history = useHistory();

  const handleDelete = room_id => {
    axios
      .delete(`/api/rooms/${room_id}`)
      .then(() => {
        window.location.reload();
      })
      .catch(err => console.log(err));
  };

  const renderAdminButtons = () => {
    if (room.owner === user._id) {
      return (
        <>
          <Link to={`/edit_room/${room._id}`} className="ml-4">
            <Button variant="primary">Edit</Button>
          </Link>
          <Button onClick={() => handleDelete(room._id)} variant="danger">
            Delete
          </Button>
        </>
      );
    }
  };

  return (
    <Card key={room._id} style={{ width: "18rem" }}>
      <Card.Img variant="top" src={room.imageUrl} />
      <Card.Body>
        <Card.Title>{room.name}</Card.Title>
        <Card.Text>{room.description}</Card.Text>
        {renderAdminButtons()}
      </Card.Body>
    </Card>
  );
}
