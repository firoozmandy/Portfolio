import PicProfile from "../assets/freepik/35.png";
import git from "../assets/pic/git1.jfif";
import linkedin from "../assets/pic/link.png";
import { Link } from "react-router-dom";

function About() {
  return (
    <div
      className="items-center mx-auto md:px-32 py-10 p-20 text-center about grid grid-cols-1"
      id="about"
    >
      <div className="pt-2 text-gray-500 text-lg">Get to now</div>
      <div className="py-5 font-bold text-3xl md:text-5xl text-yellow-500">About me</div>
      <div className="flex md:flex-row flex-col md:justify-start md:items-center gap-5 md:gap-10 py-10">
        <img src={PicProfile} className="mb-36 rounded-2xl lg:w-[500px] md-w-40" alt="" />
        <div className="flex flex-col justify-center gap-10 px-32 p-20">
          <div className="-mx-32 gap-5 grid grid-cols-1 md:grid-cols-2">
            <div className="flex lg:hidden xl:flex flex-col justify-center items-center gap-3 md:p-10 p-4 mr-10 sm:mr-0 rounded-lg ring-1">
              <Link
                className="flex justify-around items-center w-full h-full text-gray-800 hover:text-white transition"
                to="https://github.com/firoozmandy"
                target="_blank"
              >
                <img src={git} className="hover:p-2 h-20" alt="" />
              </Link>
              <div className="font-bold text-3xl text-gray-900">Education</div>
              <div className="font-semibold text-gray-600 text-xl">
                2 Years Diploma
              </div>
              <div className="font-semibold text-gray-600 text-md">
                Frontend Development
              </div>
            </div>
            <div className="mr-10 sm:mr-0 flex flex-col justify-center items-center gap-3 lg:hidden xl:flex rounded-lg ring-1">
              <Link
                to="https://www.linkedin.com/in/marya-firoozmandi/"
                target="_blank"
                className="flex justify-around items-center"
                href=""
              >
                <img src={linkedin} className="hover:p-2 h-20" alt="" />
              </Link>
              <div className="font-bold text-3xl md:w-48 text-gray-900">
                Experience
              </div>
              <div className="font-semibold text-gray-600 text-xl">
                3 Years Diploma
              </div>
              <div className="font-semibold text-gray-600 text-md">
                Frontend Development
              </div>
            </div>
          </div>

          <div className="md:-mx-24 -mx-32 font-semibold md:p-1 text-base md:text-2xl text-gray-600 text-start">
           I`m Maryam Firoozmandi . I have been working as a programmer for three
            years. I worked in react and typescript, tailwind project. I would
            like to work with a stronger and more professional team. Remote work
            is my first priority. Good luck to everyone
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
