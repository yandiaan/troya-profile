import React, { Component } from "react";
import { Link } from "react-router-dom";
import sample from "../../assets/article/sample.svg";

export default class ArticleItem extends Component {
  render() {
    return (
      <div className="flex w-2/5 mt-8">
        <img src={sample} alt="" />
        <div className="flex flex-col px-2 py-2 self-start">
          <h1 className="font-bold mb-2 text-lg">
            Lorem ipsum dolor sit amet.
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            pellentesque egestas elit senectus vulputate................
          </p>
          <Link
            to="blog/1"
            className="mt-4 text-primary hover:text-indigo-900 transition-all duration-500 transform hover:translate-y-1"
          >
            Read More
          </Link>
        </div>
      </div>
    );
  }
}
