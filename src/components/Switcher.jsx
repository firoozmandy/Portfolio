import { Link, animateScroll as scroll } from "react-scroll";
import React, { useEffect, useState } from "react";
import { FiMoon, FiSun, AiOutlineArrowUp } from "../assets/icons/vander";
// import { Link } from "react-router-dom";

const Switcher = () => {
  const [scrollTop, setScrollTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollTop(window.scrollY > 50);
    });
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: true,
    });
  };

  function changeMode(mode, event) {
    switch (mode) {
      case "mode":
        if (document.documentElement.className.includes("dark")) {
          document.documentElement.className = "light";
        } else {
          document.documentElement.className = "dark";
        }
        break;
      // rtl
      case "layout":
        if (event.target?.innerText === "LTR") {
          document.documentElement.dir = "ltr";
        } else {
          document.documentElement.dir = "rtl";
        }
        break;

      default:
        break;
    }
  }
  return (
    <>
      <div className="top-1/4 -right-2 z-3 fixed">
        <span className="inline-block relative rotate-90">
          <input
            type="checkbox"
            className="absolute opacity-0 checkbox"
            id="chk"
            onClick={(event) => changeMode("mode", event)}
          />
          {/* dark mode */}

          {/* <label
            className="flex justify-between items-center bg-slate-900 dark:bg-white shadow dark:shadow-gray-800 p-1 rounded-full w-14 h-8 cursor-pointer label"
            htmlFor="chk"
          >
            <FiMoon className="w-[18px] h-[18px] text-yellow-500" />
            <FiSun className="w-[18px] h-[18px] text-yellow-500" />

            <span className="top-[2px] left-[2px] absolute bg-white dark:bg-slate-900 rounded-full w-7 h-7 ball"></span>
          </label> */}
        </span>
      </div>

      {/*  scroll auto */}
      <Link
        to="#"
        onClick={scrollToTop}
        id="back-to-top"
        className={`${
          scrollTop
            ? "back-to-top fixed flex items-center justify-center text-lg rounded-xl z-10 bottom-5 end-5 h-8 w-8 text-center bg-yellow-300 hover:bg-orange-600 text-white leading-9 duration-500"
            : "none"
        } `}
      >
        <AiOutlineArrowUp className="w-[14px] h-[14px]" />
      </Link>
    </>
  );
};

export default Switcher;
