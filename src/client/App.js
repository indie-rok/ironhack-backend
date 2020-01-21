import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import SignIn from "./features/Auth/SignIn";
import SignUp from "./features/Auth/SignUP";
import AllRooms from "./features/Rooms/AllRooms";
import Menu from "./components/Menu";

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
            <Menu />
            <LoggedInContainer />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

const LoggedInContainer = () => (
  <>
    {/* <PrivateRoute path="/films" component={AllMoviesScreen} /> */}
    <Route path="/rooms" component={AllRooms} />
  </>
);
