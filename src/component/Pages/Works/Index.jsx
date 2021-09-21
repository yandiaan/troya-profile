import React, { Component, Fragment } from "react";
import Brand from "./Brand";
import Carousel from "./Carousel";
import Title from "./Title";

class Works extends Component {
  render() {
    return (
      <Fragment>
        <h1 className="font-gbold text-center text-4xl my-12">
          WE BUILD <br /> A GREAT{" "}
          <span className="text-primary">COMMUNITY</span>
        </h1>
        <Title />
        <Brand />
        <Carousel />
      </Fragment>
    );
  }
}

export default Works;
