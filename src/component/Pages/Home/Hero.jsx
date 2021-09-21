import React from "react";

import kudaPutih from "../../../assets/Logo-kuda-putih.png";

const Hero = () => {
  return (
    <section className="bg-hero-bg bg-no-repeat bg-right">
      <div className="hero mx-auto w-11/12 h-auto pt-20 pb-96 justify-center flex flex-col">
        <h1 className="text-hero text-6xl font-bold">
          <img src={kudaPutih} className="max-w-full h-auto mb-3" alt="" />
          YOU'VE <span className="block text-primary">BEEN</span> ORCHESTRATED
        </h1>
        <div className="hero-caption font-light max-w-md mt-6">
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
  );
};

export default Hero;
