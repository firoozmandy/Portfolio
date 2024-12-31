import React from "react";
import Email from "../assets/pic/email.png";
import linkedin from "../assets/pic/in.png";
// import { Link } from "react-scroll";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div name="contact" className="p-5 md:p-32 pb-0 text-center about">
      <div className="text-gray-500 text-lg">to</div>
      <div className="font-bold text-5xl text-yellow-500">Contact</div>
      <div className="justify-center items-center p-10 flax">
        <div className="flex md:flex-row flex-col md:justify-around gap-10 bg-gray-100 p-10 rounded-3xl ring-1">
          <div className="flex justify-center items-center gap-3">
            <img src={Email} className="h-5 md:h-5" />
            <Link
              to="mailto:marya.firooz.1380@gmail.com"
              target="_blank"
              className="text-semi-bold text-xl md:text-xl hover:text-yellow-500 transition hover:cursor-pointer"
            >
              marya.firooz.1380@gmail.com
            </Link>
          </div>
          <div className="flex justify-center items-center gap-3 ">
            <img src={linkedin} className="h-5 md:h-7" />
            <Link
              to="https://www.linkedin.com/in/marya-firoozmandi/"
              target="_blank"
              className="text-semi-bold text-xl md:text-xl hover:text-yellow-500 transition hover:cursor-pointer"
            >
              www.linkedin.com/in/marya-firoozmandi
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
