import React, { Component } from "react";
import Slider from "react-slick";
import CardProject from "../../items/CardProject";

export default class Carousel extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "0px",
      slidesToShow: 3,
      speed: 500,
    };
    return (
      <div className="text-center w-3/5 mx-auto">
        <h1 className="text-xl font-bold font-bold mb-1">Recent project</h1>
        <p className="text-sm font-extralight mb-16">
          we always make innovative work every time Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. In id ut nullam posuere massa
          pellentesque nisi condimentum. Eget vel, nulla risus metus.
        </p>
        <Slider {...settings}>
          <div>
            <CardProject title="TAP" />
          </div>
          <div>
            <CardProject title="TAP" />
          </div>
          <div>
            <CardProject title="TAP" />
          </div>
          <div>
            <CardProject title="TAP" />
          </div>
          <div>
            <CardProject title="TAP" />
          </div>
          <div>
            <CardProject title="TAP" />
          </div>
        </Slider>
      </div>
    );
  }
}
