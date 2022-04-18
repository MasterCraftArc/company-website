import { Link } from "gatsby";
import logo from "../images/logo.png";
import logoWhite from "../images/DU_logo_White.svg";
import logoColor from "../images/DU_logo_Color.svg";
import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { setRefClassName } from "../utilities/refHelpers";

const logoStyles = {
  maxWidth: "262px",
  maxHeight: "56px",
};

function Header(props) {
  const [navDrawerOpen, setNavDrawerOpen] = React.useState(false);
  const [logoStyle, setLogoStyle] = React.useState(logoWhite);
  const stickyHeader = React.createRef();
  const logoRef = React.createRef();
  const mobileRef = React.createRef();

  const handleScroll = () => {
    if (!props.background && window.scrollY <= 50) {
      setRefClassName(stickyHeader, "navClear");
      setRefClassName(mobileRef, "bi bi-list");
      setLogoStyle(logoWhite);
    } else {
      setRefClassName(stickyHeader, "navBg md:px-24");
      setRefClassName(mobileRef, "bi bi-list text-black");
      setLogoStyle(logoColor);
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
          left: "0",
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
                  src={logoStyle}
                  alt="Defense Unicorns Logo"
                  style={logoStyles}
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
            >
              <ul className="navMenu flex flex-col lg:flex-row list-none lg:ml-auto m-0 ">
                <li className="nav-item">
                  <Link
                    className="px-3 text-xl uppercase navLink"
                    to="/"
                    activeClassName="activeNav"
                  >
                    <span className="mt-2 ml-2">Home</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/blog"
                    className="text-xl flex uppercase navLink"
                    activeClassName="activeNav"
                    partiallyActive={true}
                  >
                    <span className="ml-5">Learn</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/about"
                    className="text-xl flex uppercase navLink"
                    activeClassName="activeNav"
                    partiallyActive={true}
                  >
                    <span className="ml-5">About</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="px-3 text-xl uppercase navLink"
                    to="/contact"
                    activeClassName="activeNav"
                    partiallyActive={true}
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
                style={logoStyles}
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
                    to="/blog"
                    className="text-4xl flex uppercase text-blue-900 navLink"
                  >
                    Learn
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
