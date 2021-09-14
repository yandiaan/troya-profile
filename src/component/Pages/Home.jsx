import React, { Component } from "react";
import kudaPutih from "../../assets/Logo-kuda-putih.png";

export default class Home extends Component {
  render() {
    return (
      <section className="mx-auto w-11/12">
        <img src={kudaPutih} className="" alt="" />
        <div className="text-hero text-6xl font-gbold">
          <h1>
            YOU'VE <span className="block text-primary">BEEN</span> ORCHESTRATED
          </h1>
        </div>
      </section>
    );
  }
}
