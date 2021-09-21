import React, { Component } from "react";
import ArticleItem from "../../items/ArticleItem";

class ArticleCardGroup extends Component {
  render() {
    return (
      <div className="mx-auto w-11/12">
        <h1 className="text-2xl tracking-normal font-bold">All Article</h1>
        <div className="flex flex-wrap justify-around w-full">
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
        </div>
      </div>
    );
  }
}

export default ArticleCardGroup;
