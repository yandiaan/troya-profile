import React from "react";
import tap from "../../../assets/logo/logo-tap.svg";
import troyacare from "../../../assets/logo/logo-troyacare.svg";
import creatortroya from "../../../assets/logo/logo-creatortroya.svg";
import troyagang from "../../../assets/logo/logo-troyagang.svg";
import troyameancreative from "../../../assets/logo/logo-troyameancreative.svg";

export default function Brand() {
  return (
    <div className="flex justify-around w-11/12 mx-auto my-28">
      <img
        src={tap}
        alt=""
        className="transform hover:scale-110 transition-all duration-500"
      />
      <img
        src={troyacare}
        alt=""
        className="transform hover:scale-110 transition-all duration-500"
      />
      <img
        src={creatortroya}
        alt=""
        className="transform hover:scale-110 transition-all duration-500"
      />
      <img
        src={troyagang}
        alt=""
        className="transform hover:scale-110 transition-all duration-500"
      />
      <img
        src={troyameancreative}
        alt=""
        className="transform hover:scale-110 transition-all duration-500"
      />
    </div>
  );
}
