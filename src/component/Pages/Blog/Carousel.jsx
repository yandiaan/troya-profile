import React, { Component } from "react";
import Slider from "react-slick";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

import { carouselData } from "../../../data/carouselData";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <button
      className="absolute top-2/4 right-0 transform -translate-y-2/4 opacity-50 hover:opacity-100"
      onClick={onClick}
    >
      <MdKeyboardArrowRight className="text-7xl" />
    </button>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      className="absolute top-2/4 left-0 transform z-20 -translate-y-2/4 opacity-50 hover:opacity-100"
      onClick={onClick}
    >
      <MdKeyboardArrowLeft className="text-7xl" />
    </button>
  );
}

export default class Carousel extends Component {
  render() {
    const settings = {
      lazyLoad: true,
      infinite: true,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 2,
      autoplay: true,
      autoplaySpeed: 5000,
      pauseOnHover: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <div className="w-9/12 mx-auto mt-14 mb-24">
        <Slider {...settings}>
          {carouselData.map((data) => {
            return (
              <div>
                <img src={data.img} alt={data.alt} className="rounded-2xl" />
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
