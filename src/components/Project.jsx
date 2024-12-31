import React from "react";
import pic1 from "../assets/pic/p1.png";
import pic2 from "../assets/pic/p2.png";
import pic3 from "../assets/pic/p3.png";
import pic4 from "../assets/pic/p4.png";
import pic5 from "../assets/pic/p5.png";
import pic6 from "../assets/pic/p6.png";
import ProjectItems from "./ProjectItems";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

// data
const data = [
  {
    id: 1,
    pic: pic1,
    title: "learningEnglish",
    Github: (
      <Link
        className="flex justify-around items-center w-full h-full text-gray-800 hover:text-white transition"
        to="https://github.com/firoozmandy/learningEnglish"
        target="_blank"
      >
        Github
        <FaGithub size={30} />
      </Link>
    ),
  },
  {
    id: 2,
    pic: pic2,
    title: "Fitness-me",
    Github: (
      <Link
        className="flex justify-around items-center w-full h-full text-gray-800 hover:text-white transition"
        to="https://github.com/firoozmandy/Fitness-me"
        target="_blank"
      >
        Github
        <FaGithub size={30} />
      </Link>
    ),
  },
  {
    id: 3,
    pic: pic3,
    title: "Fitness-Ava-Design",
    Github: (
      <Link
        className="flex justify-around items-center w-full h-full text-gray-800 hover:text-white transition"
        to="https://github.com/firoozmandy/Fitness-Ava-Design"
        target="_blank"
      >
        Github
        <FaGithub size={30} />
      </Link>
    ),
  },
  {
    id: 4,
    pic: pic4,
    title: "the-atomic-blog",
    Github: (
      <Link
        className="flex justify-around items-center w-full h-full text-gray-800 hover:text-white transition"
        to="https://github.com/firoozmandy/the-atomic-blog"
        target="_blank"
      >
        Github
        <FaGithub size={30} />
      </Link>
    ),
  },

  {
    id: 5,
    pic: pic5,
    title: "Shapping-Cart",
    Github: (
      <Link
        className="flex justify-around items-center w-full h-full text-gray-800 hover:text-white transition"
        to="https://github.com/firoozmandy/ShappingCart"
        target="_blank"
      >
        Github
        <FaGithub size={30} />
      </Link>
    ),
  },
  {
    id: 6,
    pic: pic6,
    title: "usePopcorn",
    Github: (
      <Link
        className="flex justify-around items-center w-full h-full text-gray-800 hover:text-white transition"
        to="https://github.com/firoozmandy/usePopcorn"
        target="_blank"
      >
        Github
        <FaGithub size={30} />
      </Link>
    ),
  },
];

export default function Project() {
  return (
    <div name="projects" className="p-5 md:p-20 text-center">
      <div className="pt-2 text-gray-500 text-lg">Browse my recent</div>
      <div className="py-5 font-bold text-5xl text-yellow-500">projects</div>
      <div className="gap-3 md:gap-5 grid grid-cols-1 md:grid-cols-3 md:py-10 p-10">
        {/* map */}
        {data.map((item, index) => (
          <ProjectItems
            pic={item.pic}
            title={item.title}
            Github={item.Github}
            key={index.id}
          />
        ))}
      </div>
    </div>
  );
}
