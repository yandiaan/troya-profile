import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

import { carouselData } from "../../../data/carouselData";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} opacity-20 group-hover:opacity-100`}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} opacity-20 group-hover:opacity-100`}
      onClick={onClick}
    />
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
      <div className="w-9/12 mx-auto mt-14 mb-24 group">
        <Slider {...settings}>
          {carouselData.map((data) => {
            return (
              <div className="relative">
                <img
                  src={data.img}
                  alt={data.alt}
                  className="rounded-2xl relative"
                />
                <div className="caption opacity-0 group-hover:opacity-100 absolute z-20 transition ease-in-out duration-500 bg-grt w-full h-full top-0 text-black">
                  <div className="absolute bottom-10 z-30 left-10 text-white w-11/12">
                    <h1 className="text-xl font-bold mb-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </h1>
                    <p className="text-sm mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vitae ultrices praesent mauris eu amet. Porttitor eget
                      mattis neque eu. Facilisis ultrices eget ultrices
                      pellentesque pretium............
                    </p>
                    <Link
                      to="blog"
                      className="text-primary hover:text-indigo-900 transition-all duration-500"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
