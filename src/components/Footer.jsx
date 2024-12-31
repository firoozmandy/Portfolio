import {
  FiLinkedin,
  FiInstagram,
  FiTwitter,
  FiMail,
} from "../assets/icons/vander";
import { Link } from "react-scroll";

import FooterSocial from "./FooterSocial";

const Data = [
  {
    id: 2,
    Http: "https://www.linkedin.com/in/marya-firoozmandi/",
    icons: <FiLinkedin />,
  },

  {
    id: 4,
    Http: "https://www.instagram.com/mary_firoozmandi",
    icons: <FiInstagram />,
  },
  {
    id: 5,
    Http: "https://www.threads.net/@mary_firoozmandi",
    icons: <FiTwitter />,
  },
  {
    id: 6,
    Http: "mailto:marya.firooz.1380@gmail.com",
    icons: <FiMail />,
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-gray-900 overflow-hidden">
      <div className="border-slate-800 px-0 py-1 border-t">
        <div className="relative mx-auto text-center container">
          <div className="items-center grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12">
            <div className="lg:col-span-3 text-center md:text-start">
              <Link to="#" className="text-[20px] focus:outline-none">
                <p className="mx-auto w-24 md:me-auto md:ms-0 text-yellow-500">
                  {" "}
                  About me
                </p>
              </Link>
            </div>

            <div className="lg:col-span-5 mt-6 md:mt-0 text-center">
              <p className="mb-0 text-gray-400">
                {/* © {new Date().getFullYear()} Muvico. Design with{" "} */}
                Copyright @ 2024 Maryam .All Rights Reserved
                <i className="text-red-600 mdi mdi-heart"></i>
                by{" "}
                <Link
                  to="https://github.com/firoozmandy"
                  target="_blank"
                  className="text-reset"
                >
                  Maryam
                </Link>
                .
              </p>
            </div>
            <ul className="space-x-1 lg:col-span-4 mt-6 md:mt-0 text-center md:text-end list-none">
              {/* **********   map  ********** */}

              {Data.map((items, index) => (
                <div className="inline-flex justify-center items-center border-gray-800 hover:border-orange-500 dark:hover:border-yellow-500 dark:border-slate-800 hover:bg-yellow-500 dark:hover:bg-yellow-500 border rounded-xl w-8 h-8 text-[15px] text-center text-slate-300 hover:text-white tracking-wide duration-500 align-middle">
                  {
                    <FooterSocial
                      Http={items.Http}
                      icons={items.icons}
                      key={index.id}
                    />
                  }
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
