import React from "react";

export default function CardStory() {
  return (
    <div className="bg-white p-16 w-11/12 mx-auto rounded-3xl text-black">
      <h1 className="font-bold text-2xl mb-1">
        Hey, Troya wanna hear your story!
      </h1>
      <span className="font-medium">Let's Tell Us</span>
      <p className="mt-4 text-md">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum sem
        tempor massa a facilisis turpis amet. Eu eu quis leo nibh. Scelerisque
        at nisi, enim eros, lectus amet cras lorem.
      </p>
      <button className="transition ease-in duration-100 mt-6 bg-primary text-xs transform hover:translate-y-0.5 hover:shadow-none shadow-xl rounded-lg hover:bg-indigo-900 text-white px-4 py-2">
        Share Your Story
      </button>
    </div>
  );
}
