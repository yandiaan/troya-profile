import React, { Component } from "react";
import Navbar from "./component/Navbar/Navbar";
import { Switch, Route } from "react-router";
import Home from "./component/Pages/Home";

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/blog" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
