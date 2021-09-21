import React, { Component } from "react";
import logoHitam from "../../../assets/logo-ig.png";
import CardProject from "../../items/CardProject";
import { HiArrowRight } from "react-icons/hi";

class Tribes extends Component {
  render() {
    return (
      <section className="mx-auto w-11/12 px-4 bg-body-bg bg-no-repeat">
        <h1 className="text-3xl font-bold text-right my-24">
          TROYA <span className="text-primary">TRIBES</span>
        </h1>
        <div className="flex">
          <iframe
            src="https://open.spotify.com/embed/show/6JuuNihDOOdx0buZ3iGdMp?theme=0"
            width="100%"
            height="232"
            frameBorder="0"
            title="Spotify"
            className="flex-1"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
          <iframe
            width="100%"
            height="232"
            src="https://www.youtube.com/embed/D_9Bh5Rnn2k"
            title="YouTube video player"
            className="mx-12"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div className="bg-secondary w-auto h-auto flex-initial flex flex-col rounded-xl py-6 px-5">
            <div className="title flex">
              <img
                src={logoHitam}
                className="flex-1 rounded-full w-1/4 h-5/6"
                alt=""
              />
              <div className="flex flex-grow flex-col self-center w-64 ml-4">
                <h1 className="text-sm font-bold">Troya Digital</h1>
                <a
                  href="https://www.instagram.com/troya.digital/"
                  className="text-sm mt-4 bg-primary p-1 w-1/3 rounded-lg text-center hover:bg-indigo-900 transition-all duration-500"
                >
                  Follow
                </a>
              </div>
            </div>
            <div className="bio mt-6">
              <p className="text-sm">
                Hello, Welcome to The Tribes! A place where crazy ideas of
                semi-talented humans grow
              </p>
              <p className="text-sm mt-2">
                <a
                  href="https://www.instagram.com/troyacare/"
                  className="text-primary"
                >
                  @troyacare
                </a>{" "}
                |{" "}
                <a
                  href="https://www.instagram.com/creator.troya/"
                  className="text-primary"
                >
                  @creator.troya
                </a>{" "}
                |{" "}
                <a
                  href="https://www.instagram.com/tap.idn/"
                  className="text-primary"
                >
                  @tap.idn
                </a>
              </p>
            </div>
          </div>
        </div>

        <h1 className="text-3xl font-bold text-right mt-48 mb-24">
          RECENT <span className="text-primary">PROJECT</span>
        </h1>
        <div className="flex justify-between">
          <CardProject title="TAP" />
          <CardProject title="TAP" />
          <CardProject title="TAP" />
          <CardProject title="TAP" />
        </div>
        <div className="justify-end group text-primary self-center my-10 text-lg flex items-center">
          <a
            href="/"
            className="transition ease-in transform group-hover:-translate-y-1"
          >
            See More
          </a>
          <HiArrowRight className="mt-1 ml-2 transition ease-in transform group-hover:translate-x-2 group-hover:-translate-y-1" />
        </div>
      </section>
    );
  }
}

export default Tribes;
