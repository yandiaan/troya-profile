import React, { Component } from "react";
import CardAKTHI from "../../items/CardAKTHI";

import sampleArticle from "../../../assets/article/sample.svg";
import { HiArrowRight } from "react-icons/hi";

class AKTHI extends Component {
  render() {
    return (
      <section className="flex flex-col text-center w-11/12 mx-auto mb-24">
        <div className="flex mx-auto mt-36 justify-between bg-pattern1 bg-center bg-repeat-x">
          <CardAKTHI img={sampleArticle} title="lorem ipsum dolor sit amet" />
          <CardAKTHI img={sampleArticle} title="lorem ipsum dolor sit amet" />
          <CardAKTHI img={sampleArticle} title="lorem ipsum dolor sit amet" />
        </div>
        <div className="justify-end group text-primary my-10 text-lg flex items-center">
          <a
            href="/"
            className="transition ease-in transform group-hover:-translate-y-1"
          >
            See More
          </a>
          <HiArrowRight className="mt-1 ml-2 transition ease-in transform group-hover:translate-x-2 group-hover:-translate-y-1" />
        </div>
      </section>
    );
  }
}

export default AKTHI;
