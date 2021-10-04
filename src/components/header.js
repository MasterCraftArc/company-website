import React, { useEffect } from "react";
import { Link } from "gatsby";
import logo from "../images/logo.png";
import { motion, AnimatePresence } from "framer-motion";
import {setRefClassName} from "../utilities/refHelpers";
const logoStyle = {
  maxWidth: "16vh",
};

const popUpStyle = {};

const setRefFilter = (ref, filter) => {
  if (ref.current) {
    ref.current.style.filter = filter;
  }
};

function Header(props) {
  const [navDrawerOpen, setNavDrawerOpen] = React.useState(false);
  const stickyHeader = React.createRef();
  const logoRef = React.createRef();
  const mobileRef = React.createRef();

  const handleScroll = () => {
    if (!props.background && window.scrollY < 50) {
      setRefClassName(stickyHeader, "navClear");
      setRefFilter(logoRef, "drop-shadow(2px 2px 2px black)");
      setRefClassName(mobileRef, "bi bi-list");
    } else {
      setRefClassName(stickyHeader, "navBg md:px-24");
      setRefFilter(logoRef, "none");
      setRefClassName(mobileRef, "bi bi-list text-black");
    }
  };

  useEffect(() => {
    setRefClassName(stickyHeader, "navClear");
    window.addEventListener("scroll", () => handleScroll());
  });

  useEffect(() => {
    if (navDrawerOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [navDrawerOpen]);

  return (
    //https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/react/navbars
    <>
      <nav
        className=""
        style={{
          zIndex: "15",
          width: "100%",
          top: "0",
          left: '0',
          position: "fixed",
        }}
      >
        <div className="w-full" ref={stickyHeader}>
          <div className="flex flex-wrap items-center justify-between mx-16">
            <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
              <Link
                className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                to="/"
              >
                <img
                  className="logoShadow"
                  src={logo}
                  alt="Defense Unicorns Logo"
                  style={logoStyle}
                  ref={logoRef}
                />
              </Link>
              <button
                className="text-white cursor-pointer text-4xl leading-none px-1 py-0 rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => setNavDrawerOpen(!navDrawerOpen)}
              >
                <i className="bi bi-list" ref={mobileRef}></i>
              </button>
            </div>
            <div
              className={
                "hidden lg:flex flex-grow items-center lg:bg-transparent py-2"
              }
              id="example-navbar-danger"
              style={popUpStyle}
            >
              <ul className="navMenu flex flex-col lg:flex-row list-none lg:ml-auto m-0 ">
                <li className="nav-item">
                  <Link
                    className="px-3 text-xl uppercase hover:text-red-600"
                    to="/"
                  >
                    <span className="mt-2 ml-2 ">Home</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/train"
                    className="text-xl flex uppercase hover:text-red-600"
                  >
                    <span className="ml-5">Train</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/about"
                    className="text-xl flex uppercase hover:text-red-600"
                  >
                    <span className="ml-5">About</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="px-3 text-xl uppercase hover:text-red-600"
                    to="/contact"
                  >
                    <span className="ml-2">Contact</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {navDrawerOpen && (
            <motion.div
              initial={{ x: -1000 }}
              animate={{ x: 0 }}
              transition={{
                type: "tween",
              }}
              exit={{ x: -1000 }}
              className={
                "z-20 min-h-screen w-screen bg-white fixed top-0 left-0 overflow-y-hidden" +
                (navDrawerOpen ? " flex flex-col" : " hidden")
              }
            >
              <button
                className="text-blue-900 cursor-pointer text-3xl leading-none px-1 py-0 rounded bg-transparent block lg:hidden outline-none focus:outline-none z-30 absolute top-10 right-10"
                type="button"
                onClick={() => setNavDrawerOpen(!navDrawerOpen)}
              >
                <i className="bi bi-x-lg"></i>
              </button>
              <img
                className="mt-4 ml-16"
                src={logo}
                alt="Defense Unicorns Logo"
                style={logoStyle}
                // ref={logoRef}
              />

              <ul
                className=" text-white w-full flex flex-col justify-around list-none my-auto text-center font-bold pb-44"
                style={{ height: "45vh" }}
              >
                <li className="nav-item">
                  <Link
                    className="px-3 text-4xl uppercase text-blue-900 navLink"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/train"
                    className="text-4xl flex uppercase text-blue-900 navLink"
                  >
                    Train
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/about"
                    className="text-4xl flex uppercase text-blue-900"
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="px-3 text-4xl uppercase text-blue-900"
                    to="/contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}

export default Header;
