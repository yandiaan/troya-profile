import React, { Component, Fragment } from "react";
import logoHitam from "../../assets/logo-ig.png";
import kudaPutih from "../../assets/Logo-kuda-putih.png";
// import bg from "../../assets/background/face-home.png";

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <section className="bg-hero-bg bg-no-repeat bg-right">
          <div className="hero mx-auto w-11/12 h-auto pt-20 pb-96 justify-center flex flex-col">
            <h1 className="text-hero text-6xl font-gbold">
              <img src={kudaPutih} className="max-w-full h-auto mb-3" alt="" />
              YOU'VE <span className="block text-primary">BEEN</span>{" "}
              ORCHESTRATED
            </h1>
            <div className="hero-caption max-w-md mt-6">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
                molestie elit aliquam massa, fusce neque nec. Volutpat placerat
                lacinia pulvinar vulputate.
              </p>
              <button className="transition ease-in mt-8 rounded-xl bg-primary hover:bg-blue-900 py-1 px-4">
                Company Profile
              </button>
            </div>
          </div>
        </section>
        <section className="mx-auto w-11/12 px-4 bg-body-bg bg-no-repeat">
          <h1 className="text-3xl font-gbold text-right my-24">
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
                  <h1 className="text-sm font-gbold">Troya Digital</h1>
                  <a
                    href="https://www.instagram.com/troya.digital/"
                    className="text-sm mt-4 bg-primary p-1 w-1/3 rounded-lg text-center"
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

          <h1 className="text-3xl font-gbold text-right my-24">
            RECENT <span className="text-primary">PROJECT</span>
          </h1>
        </section>
      </Fragment>
    );
  }
}
