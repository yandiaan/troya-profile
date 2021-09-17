import React, { Component, Fragment } from "react";

import Hero from "./Hero";
import Tribes from "./Tribes";
import AKTHI from "../Blog/AKTHI";
import CardStory from "../../items/CardStory";
import akthi from "../../../assets/logo-akthi.svg";

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <Hero />
        <Tribes />
        <img src={akthi} alt="" className="w-1/6 mt-24 mx-auto h-auto" />
        <h1 className="tracking-widest mt-4 text-center">
          APA KABAR TROYA HARI INI
        </h1>
        <AKTHI />
        <CardStory />
      </Fragment>
    );
  }
}
