import React, { useEffect } from "react";
import { Link } from "gatsby";
import logo from "../images/logo.png";
import { motion } from "framer-motion";

const logoStyle = {
  maxWidth: "16vh",
};

const popUpStyle = {
}


const setRefFilter = (ref, filter) => {
  if (ref.current) {
    ref.current.style.filter = filter;
  }
};

const setRefClassName = (ref, className) => {
  if (ref.current) {
    ref.current.className = className;
  }
};

function Header(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const stickyHeader = React.createRef();
  const logoRef = React.createRef();

  const handleScroll = () => {
    if (!props.background && window.scrollY < 50) {
      setRefClassName(stickyHeader, "navClear");
      setRefFilter(logoRef, "drop-shadow(2px 2px 2px black)");
    } else {
      setRefClassName(stickyHeader, "navBg md:px-24");
      setRefFilter(logoRef, "none");
    }
  };

  useEffect(() => {
    setRefClassName(stickyHeader, "navClear");
    window.addEventListener("scroll", () => handleScroll());
  });

  return (
    //https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/react/navbars
    <>
      <nav
        className=""
        style={{
          zIndex: "100",
          width: "100%",
          top: "0",
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
                className="text-white cursor-pointer text-4xl leading-none px-1 py-0 rounded bg-transparent block lg:hidden outline-none focus:outline-none z-20"
                type="button"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <i className="bi bi-list"></i>
              </button>
            </div>
            <div
              className={
                "hidden lg:flex flex-grow items-center bg-white rounded-xl lg:bg-transparent py-2" 
                
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
                    <span className="mt-2 ml-2 ">Train</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/equip"
                    className="text-xl flex uppercase hover:text-red-600"
                  >
                    <span className="ml-5">Equip</span>
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

        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: "spring",
            delay: 0.5,
            default: { duration: 2.5 },
          }}
          className={"z-10 min-h-screen w-screen bg-blue-900 float-left absolute mt-0" }
          // + (navbarOpen ? " flex" : " hidden")}
        >

        </motion.div> */}
      </nav>
    </>
  );
}

export default Header;
