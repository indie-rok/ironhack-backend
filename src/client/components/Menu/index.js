import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">Cool Rooms</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/rooms">
            All Rooms
          </Nav.Link>
          <Nav.Link as={Link} to="/add_room">
            <Button>Add Room</Button>
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}
