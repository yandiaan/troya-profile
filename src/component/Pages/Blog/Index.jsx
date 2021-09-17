import React, { Component, Fragment } from "react";
import AKTHI from "./AKTHI";
import akthi from "../../../assets/logo-akthi.svg";
import Carousel from "./Carousel";
import { BiSearchAlt } from "react-icons/bi";
import ArticleCardGroup from "./ArticleCardGroup";

class Index extends Component {
  render() {
    return (
      <Fragment>
        <div className="flex justify-end w-11/12 mx-auto items-center group">
          <BiSearchAlt className="opacity-50 group-hover:opacity-100" />
          <input
            type="search"
            name="search"
            className="transition duration-500 focus:outline-none py-2 px-2 w-24 bg-black"
            placeholder="Search"
            id=""
          />
        </div>
        <img src={akthi} alt="" className="w-1/6 mt-8 mx-auto h-auto" />
        <h1 className="tracking-widest mt-4 text-center">
          APA KABAR TROYA HARI INI
        </h1>
        <Carousel />
        <AKTHI />
        <ArticleCardGroup />
      </Fragment>
    );
  }
}

export default Index;
