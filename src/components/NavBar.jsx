import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import Social from "./Social";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handelClick = () => setNav(!nav);

  // scroll
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    activateMenu();
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 80);
    });
  }, []);

  const getClosest = (elem, selector) => {
    if (!Element.prototype.matches) {
      Element.prototype.matches =
        Element.prototype.matchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector ||
        Element.prototype.oMatchesSelector ||
        // Element.prototype.webkitMatchesSelector ||
        function (s) {
          var matches = (this.document || this.ownerDocument).querySelectorAll(
              s
            ),
            i = matches.length;
          return i > -1;
        };
    }

    for (; elem && elem !== document; elem = elem.parentNode) {
      if (elem.matches(selector)) return elem;
    }
    return null;
  };

  const activateMenu = () => {
    var menuItems = document.getElementsByClassName("sub-menu-item");
    if (menuItems) {
      var matchingMenuItem = null;
      for (var idx = 0; idx < menuItems.length; idx++) {
        if (menuItems[idx].href === window.location.href) {
          matchingMenuItem = menuItems[idx];
        }
      }

      if (matchingMenuItem) {
        matchingMenuItem.classList.add("active");

        var immediateParent = getClosest(matchingMenuItem, "li");

        if (immediateParent) {
          immediateParent.classList.add("active");
        }

        var parent = getClosest(immediateParent, ".child-menu-item");
        if (parent) {
          parent.classList.add("active");
        }

        if (parent) {
          parent.classList.add("active");

          var parentMenuitem = parent.querySelector(".menu-item");
          if (parentMenuitem) {
            parentMenuitem.classList.add("active");
          }

          var parentOfParent = getClosest(parent, ".parent-parent-menu-item");
          if (parentOfParent) {
            parentOfParent.classList.add("active");
          }
        } else {
          if (parentOfParent) {
            parentOfParent.classList.add("active");
          }
        }
      }
    }
  };

  return (
    <div
      className={`${
        scroll ? " bg-white h-20 border border-gray-200  " : "bg-transparent"
      } defaultscroll is-sticky
       w-screen z-[999] fixed flex justify-between items-center  px-4 text-gray-700`}
    >
      <div className="mx-20 ">
        <span className="flex flex-row gap-1 text-gray-700 text-2xl my-10 font-bold">
          About <p className="text-yellow-300">Me</p>
        </span>
      </div>
      {/* // menu */}
      <ul className="md:flex gap-10 hidden mx-20 font-bold">
        <li className="hover:text-yellow-300 transition hover:cursor-pointer">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="hover:text-yellow-300 transition hover:cursor-pointer">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="hover:text-yellow-300 transition hover:cursor-pointer">
          <Link to="skill" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="hover:text-yellow-300 transition hover:cursor-pointer">
          <Link to="projects" smooth={true} duration={500}>
            projects
          </Link>
        </li>
        <li className="hover:text-yellow-300 transition hover:cursor-pointer">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/* Hamburger */}
      <div onClick={handelClick} className="z-10 md:hidden">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* mobil menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute rounded-l-2xl duration-500 top-0 right-0 w-[50%] h-[700px] md:hidden  bg-orange-100  flex flex-col justify-center  items-center  text-slate-800"
        }
      >
        <li className="py-6 text-4xl hover:text-orange-600 transition hover:cursor-pointer">
          <Link onClick={handelClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl hover:text-orange-600 transition hover:cursor-pointer">
          <Link onClick={handelClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>

        <li className="py-6 text-4xl hover:text-orange-600 transition hover:cursor-pointer">
          <Link onClick={handelClick} to="skill" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl hover:text-orange-600 transition hover:cursor-pointer">
          <Link
            onClick={handelClick}
            to="projects"
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li className="py-6 text-4xl hover:text-orange-600 transition hover:cursor-pointer">
          {""}
          <Link onClick={handelClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/* Social icons */}
      <Social />
    </div>
  );
};

export default NavBar;
