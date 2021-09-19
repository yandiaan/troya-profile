import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Title() {
  return (
    <Fragment>
      <div className="w-11/12 mx-auto my-4 text-center flex divide-x-4 divide-primary">
        <div className="px-12 py-6">
          <h1 className="font-bold mb-4 text-2xl capitalize">
            we create our own works
          </h1>
          <p className="font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
            volutpat eget velit vehicula arcu quisque sagittis eleifend. Laoreet
            vitae turpis lobortis egestas et.
          </p>
        </div>
        <div className="px-12 py-6">
          <h1 className="font-bold mb-4 text-2xl capitalize">
            we collaborate with the community
          </h1>
          <p className="font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
            volutpat eget velit vehicula arcu quisque sagittis eleifend. Laoreet
            vitae turpis lobortis egestas et.
          </p>
        </div>
      </div>
      <h1 className="text-primary text-center mt-16 group">
        <button>
          Scroll Down{" "}
          <MdKeyboardArrowDown className="mx-auto text-2xl animate-bounce group-hover:animate-none" />
        </button>
      </h1>
    </Fragment>
  );
}
