// import React from "react";
// import { FaGithub, FaLinkedin } from "react-icons/fa";
// import { HiOutlineMail } from "react-icons/hi";
// import { BsFillPersonLinesFill } from "react-icons/bs";

import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-router-dom";
// import { Link } from "react-scroll";
const Social = () => {
  return (
    <div className="top-[35%] left-1 fixed md:flex flex-col hidden">
      <ul>
        <li className="flex justify-between items-center bg-yellow-500 hover:bg-blue-600 mb-1 ml-[-100px] hover:ml-[-10px] rounded-md w-[160px] h-[60px] duration-300">
          <Link
            to="https://www.linkedin.com/in/marya-firoozmandi/"
            target="_blank"
            className="flex justify-around items-center w-full text-gray-300"
            href=""
          >
            linkedin <FaLinkedin size={30} />
          </Link>
        </li>
        <li className="flex justify-between items-center bg-yellow-500 hover:bg-[#333333] mb-1 ml-[-100px] hover:ml-[-10px] rounded-md w-[160px] h-[60px] duration-300">
          <Link
            className="flex justify-around items-center w-full text-gray-300"
            to="https://github.com/firoozmandy"
            target="_blank"
          >
            Github <FaGithub size={30} />
          </Link>
        </li>
        <li className="flex justify-between items-center bg-yellow-500 hover:bg-[#59e0c3] mb-1 ml-[-100px] hover:ml-[-10px] rounded-md w-[160px] h-[60px] duration-300">
          <Link
            to="https://mail.google.com/mail/u/0/#inbox"
            target="_blank"
            className="flex justify-around items-center w-full h-full text-gray-300 hover:text-slate-900"
          >
            Email <HiOutlineMail size={30} />
          </Link>
        </li>
        <li className="flex justify-between items-center bg-yellow-500 hover:bg-[#214772] ml-[-100px] hover:ml-[-10px] rounded-md w-[160px] h-[60px] duration-300">
          <a
            className="flex justify-around items-center w-full text-gray-300"
            href=""
          >
            Resume <BsFillPersonLinesFill size={30} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Social;

// const Social = () => {
//   return (
//     <div className="top-[35%] left-2 fixed lg:flex flex-col hidden">
//       <ul className="">
//         <li className="flex justify-between items-center bg-blue-600 ml-[-100px] hover:ml-[-10px] rounded-md w-[160px] h-[60px] duration-300">
//           <a
//             className="flex justify-around items-center w-full text-gray-300"
//             href=""
//           >
//             linkedin <FaLinkedin size={30} />
//           </a>
//         </li>
//         <li className="flex justify-between items-center bg-[#333333] ml-[-100px] hover:ml-[-10px] rounded-md w-[160px] h-[60px] duration-300">
//           <a
//             className="flex justify-around items-center w-full text-gray-300"
//             href=""
//           >
//             Github <FaGithub size={30} />
//           </a>
//         </li>
//         <li className="flex justify-between items-center bg-[#6fc2b0] ml-[-100px] hover:ml-[-10px] rounded-md w-[160px] h-[60px] duration-300">
//           <a
//             className="flex justify-around items-center w-full text-gray-300"
//             href=""
//           >
//             Email <HiOutlineMail size={30} />
//           </a>
//         </li>
//         <li className="flex justify-between items-center bg-[#565f69] ml-[-100px] hover:ml-[-10px] rounded-md w-[160px] h-[60px] duration-300">
//           <a
//             className="flex justify-around items-center w-full text-gray-300"
//             href=""
//           >
//             Resume <BsFillPersonLinesFill size={30} />
//           </a>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Social;
