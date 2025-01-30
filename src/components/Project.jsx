import pic1 from "../assets/pic/p1.png";
import pic2 from "../assets/pic/p2.png";
import pic3 from "../assets/pic/p3.png";
import pic4 from "../assets/pic/p4.png";
import pic5 from "../assets/pic/p5.png";
import pic6 from "../assets/pic/p6.png";
import pic7 from "../assets/pic/p7.png";
import pic8 from "../assets/pic/p8.png";
import pic9 from "../assets/pic/p9.png";
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
    LiveDemo: (
      <Link to="https://learn-marfa-english.netlify.app/" target="_blank">
        Live Demo
      </Link>
    ),
  },
  {
    id: 7,
    pic: pic7,
    title: "Portfolio",
    Github: (
      <Link
        className="flex justify-around items-center w-full h-full text-gray-800 hover:text-white transition"
        to="https://github.com/firoozmandy/Portfolio"
        target="_blank"
      >
        Github
        <FaGithub size={30} />
      </Link>
    ),
    LiveDemo: (
      <Link to="https://maryamportfoliooo.netlify.app/" target="_blank">
        Live Demo
      </Link>
    ),
  },

  {
    id: 3,
    pic: pic3,
    title: "FitnessAvaDesign",
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
    LiveDemo: (
      <Link to="https://fitness-avadesign-project.netlify.app/" target="_blank">
        Live Demo
      </Link>
    ),
  },
  {
    id: 4,
    pic: pic4,
    title: "theAtomicBlog",
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
    LiveDemo: (
      <Link to="https://atomic-blog-webmarfa.netlify.app/" target="_blank">
        Live Demo
      </Link>
    ),
  
  },

  {
    id: 5,
    pic: pic5,
    title: "ShappingCart",
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
    LiveDemo: (
      <Link to="https://shapping-marfa-project.netlify.app/" target="_blank">
        Live Demo
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
    LiveDemo: (
      <Link to="https://usepopcorn-marfa.netlify.app/" target="_blank">
        Live Demo
      </Link>
    ),
  },
  {
    id: 2,
    pic: pic2,
    title: "FitnessMe",
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
    LiveDemo: (
      <Link to="https://fitness-app-me.netlify.app/" target="_blank">
        Live Demo
      </Link>
    ),
  },
  {
    id: 8,
    pic: pic8,
    title: "Security",
    Github: (
      <Link
        className="flex justify-around items-center w-full h-full text-gray-800 hover:text-white transition"
        to="https://github.com/firoozmandy/Security-web"
        target="_blank"
      >
        Github
        <FaGithub size={30} />
      </Link>
    ),
    LiveDemo: (
      <Link to="https://security-marfa.netlify.app/" target="_blank">
        Live Demo
      </Link>
    ),
  },
  {
    id: 9,
    pic: pic9,
    title: "MarfaWeb",
    Github: (
      <Link
        className="flex justify-around items-center w-full h-full text-gray-800 hover:text-white transition"
        to="https://github.com/firoozmandy/marfa-web"
        target="_blank"
      >
        Github
        <FaGithub size={30} />
      </Link>
    ),
    LiveDemo: (
      <Link to="https://marfa-web.netlify.app/#" target="_blank">
        Live Demo
      </Link>
    ),
  },
];

export default function Project() {
  return (
    <div name="projects" className="p-5 md:p-20 text-center">
      <div className="pt-2 text-gray-500 text-lg">Browse my recent</div>
      <div className="py-5 font-bold text-5xl text-yellow-500">projects</div>
      <div className="gap-3 md:gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:py-10 p-10">
        {/* map */}
        {data.map((item, index) => (
          <ProjectItems
            pic={item.pic}
            title={item.title}
            Github={item.Github}
            LiveDemo={item.LiveDemo}
            key={index.id}
          />
        ))}
      </div>
    </div>
  );
}
