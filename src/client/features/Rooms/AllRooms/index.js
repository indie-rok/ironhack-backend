import React, { useEffect, useState } from "react";
import { Container, Row, Col, CardColumns, Alert } from "react-bootstrap";
import axios from "axios";

import RoomCard from "../../../components/RoomCard";

export default function AllRooms() {
  const [rooms, setRooms] = useState([]);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get("/api/rooms")
      .then(response => setRooms([...response.data.rooms]))
      .catch(err => setError(error + `error getting rooms ${err}`));

    axios
      .get("/api/user")
      .then(response => {
        setUser(response.data.user);
      })
      .catch(err => {
        console.log(`error while getting user ${err}`);
      });
  }, []);

  const drawRooms = () => {
    if (rooms.length === 0) {
      return <Alert variant="info">No rooms</Alert>;
    } else {
      return rooms.map(room => (
        <RoomCard room={room} key={room._id} user={user} />
      ));
    }
  };

  const drawErrors = () => {
    return error ? (
      <Alert variant="danger">Error getting rooms {error}</Alert>
    ) : (
      ""
    );
  };

  return (
    <Container>
      <Row>
        <h1>All rooms</h1>
      </Row>
      <Row>
        <Col>{drawErrors()}</Col>
      </Row>
      <Row>
        <Col>{drawRooms()}</Col>
      </Row>
    </Container>
  );
}
