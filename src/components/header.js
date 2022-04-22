import { setRefClassName } from "../utilities/refHelpers";
import { motion, AnimatePresence } from "framer-motion";
import logoWhite from "../images/DU_logo_White.svg";
import logoColor from "../images/DU_logo_Color.svg";
import React, { useEffect } from "react";
import logo from "../images/logo.png";
import SocialsBox from "./socialsBox";
import { Link } from "gatsby";

const logoStyles = {
  maxWidth: "262px",
  maxHeight: "56px",
};

const DEFAULT_SOCIAL_ICON_STYLE = "text-white socialHover";
const SCROLLED_SOCIAL_ICON_STYLE = "text-blue-900 socialHover";
function Header(props) {
  const [navDrawerOpen, setNavDrawerOpen] = React.useState(false);
  const [logoStyle, setLogoStyle] = React.useState(logoWhite);
  const [socialIconClass, setSocialIconClass] = React.useState(
    DEFAULT_SOCIAL_ICON_STYLE
  );
  const logoRef = React.createRef();
  const mobileRef = React.createRef();
  const stickyHeader = React.createRef();

  const handleScroll = () => {
    if (!props.background && window.scrollY <= 50) {
      setLogoStyle(logoWhite);
      setRefClassName(mobileRef, "bi bi-list");
      setRefClassName(stickyHeader, "navClear");
      setSocialIconClass(DEFAULT_SOCIAL_ICON_STYLE);
    } else {
      setLogoStyle(logoColor);
      setRefClassName(mobileRef, "bi bi-list");
      setSocialIconClass(SCROLLED_SOCIAL_ICON_STYLE);
      setRefClassName(stickyHeader, "navBg md:px-24 text-blue-900");
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
                    className="text-xl uppercase navLink"
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
              <SocialsBox
                wrapperStyle="my-0 py-0 mt-0"
                githubStyle={`my-0 py-0 rounded-full text-3xl ${socialIconClass}`}
                linkedInStyle={`my-0 py-0 rounded-full text-3xl ${socialIconClass}`}
              />
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
              <div style={{ width: "50%" }} className="ml-auto mr-auto">
                <img src={logo} alt="Defense Unicorns Logo" />
              </div>
              <ul
                className=" text-white w-full flex flex-col justify-around list-none my-auto text-center font-bold pb-44"
                style={{ height: "45vh" }}
              >
                <li className="nav-item">
                  <Link
                    className="px-3 py-5 text-4xl uppercase text-blue-900 navLink"
                    to="/"
                    activeClassName="activeNav"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/blog"
                    className="text-4xl py-5 flex uppercase text-blue-900 navLink"
                    activeClassName="activeNav"
                    partiallyActive={true}
                  >
                    Learn
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/about"
                    className="text-4xl py-5 flex uppercase text-blue-900"
                    activeClassName="activeNav"
                    partiallyActive={true}
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="px-3 py-5 text-4xl uppercase text-blue-900"
                    to="/contact"
                    activeClassName="activeNav"
                    partiallyActive={true}
                  >
                    Contact
                  </Link>
                </li>
                <SocialsBox
                  wrapperStyle="mx-auto text-5xl justify-center mt-12 sm:mt-6"
                  githubStyle="text-blue-900 ml-3"
                  linkedInStyle="text-blue-900 mr-3"
                />
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}

export default Header;
