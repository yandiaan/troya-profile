import React, { Component } from "react";

class CardAKTHI extends Component {
  render() {
    return (
      <div className="relative bg-white text-black mx-12 p-6 transition-all duration-500 transform hover:-translate-y-1">
        <img
          src={this.props.img}
          className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-24"
          alt=""
        />
        <h1 className="font-gbold mt-16 font-bold">{this.props.title}</h1>
        <p className="mt-4 mb-8 after:bg-primary text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu et
          scelerisque habitant in vel vulputate mauris, elementum. Eget in in
          adipiscing tempus volutpat scelerisque.
        </p>
        <a
          href="#read"
          className="text-primary font-medium transition-all duration-500 hover:text-indigo-900 hover:underline border-primary"
        >
          Read Article
        </a>
      </div>
    );
  }
}

export default CardAKTHI;
