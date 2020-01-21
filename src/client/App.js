import React, { Component } from "react";
import "./app.css";
import ReactImage from "./react.png";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

function Test() {
  return <div>hello div</div>;
}

export default class App extends Component {
  state = { username: null };

  componentDidMount() {
    fetch("/api/getUsername")
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
  }

  render() {
    const { username } = this.state;
    return (
      <div>
        {username ? (
          <h1>{`Hello ${username}`}</h1>
        ) : (
          <h1>Loading.. please wait!</h1>
        )}
        <img src={ReactImage} alt="react" />
        <Router>
          <Switch>
            <Route path="/test" component={Test} />
          </Switch>
        </Router>
      </div>
    );
  }
}
