import React, { Component } from "react";
import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";
import { Switch, Route } from "react-router";
import Home from "./component/Pages/Home/Index";
import Blog from "./component/Pages/Blog/Index";

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/blog" component={Blog} />
          </Switch>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
