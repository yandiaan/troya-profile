import React from "react";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="flex-col flex w-11/12 mx-auto my-8">
      <span className="text-xs font-light">Feel free to reach us on :</span>
      <div className="flex justify-between mt-5">
        <div className="button flex">
          <a
            href="https://www.facebook.com/Troyadigitalmesail1"
            className="mx-2 text-xl transition-all duration-500 transform hover:-translate-y-2"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://www.instagram.com/troya.digital/"
            className="mx-2 text-xl transition-all duration-500 transform hover:-translate-y-2"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.instagram.com/troya.digital/"
            className="mx-2 text-xl transition-all duration-500 transform hover:-translate-y-2"
          >
            <FaWhatsapp />
          </a>
        </div>

        <span className="text-xs font-light">
          Copyright 2021 PT. Troya Digital Mesail. All Rights Reserved
        </span>
      </div>
    </div>
  );
}
