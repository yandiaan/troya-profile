import React, { Component } from "react";
import { Fragment } from "react";
import sample from "../../assets/sample.svg";

export default class CardProject extends Component {
  render() {
    return (
      <div className="block text-center w-64 ">
        <h1 className="text-2xl font-gbold">{this.props.title}</h1>
        <img src={sample} className="mx-auto my-6" alt="" />
        <p className="text-xs font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi nunc, eu
          facilisis aliquam molestie dolor erat.
        </p>
      </div>
    );
  }
}
