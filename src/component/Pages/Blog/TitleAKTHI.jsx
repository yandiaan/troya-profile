import React, { Fragment } from "react";
import akthi from "../../../assets/logo-akthi.svg";

export default function TitleAKTHI() {
  return (
    <Fragment>
      <img src={akthi} alt="" className="w-1/6 mx-auto h-auto" />
      <h1 className="tracking-widest mt-4">APA KABAR TROYA HARI INI</h1>
    </Fragment>
  );
}
