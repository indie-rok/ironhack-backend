import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import SignIn from "./features/Auth/SignIn";
import SignUp from "./features/Auth/SignUP";
import AllRooms from "./features/Rooms/AllRooms";
import Menu from "./components/Menu";
import HomePage from "./features/HomePage";
import AddRoom from "./features/Rooms/AddRoom";
import EditRoom from "./features/Rooms/EditRoom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/sign_up" component={SignUp} />
          <Route path="/sign_in" component={SignIn} />
          <Route>
            <LoggedInContainer />
          </Route>

          <Route path="/" component={HomePage} />
        </Switch>
      </Router>
    </>
  );
}

const LoggedInContainer = () => (
  <>
    {/* <PrivateRoute path="/films" component={AllMoviesScreen} /> */}
    <Menu />
    <Route path="/rooms" component={AllRooms} />
    <Route path="/add_room" component={AddRoom} />
    <Route path="/edit_room/:room_id" component={EditRoom} />
  </>
);
