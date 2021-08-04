import * as React from "react";
import { Link } from "gatsby";
import logo from "../images/logo.png";
import background from "../images/BG_Banner.jpg";

const logoStyle = {
  maxWidth: "15vh",
  filter: "drop-shadow(1px 1px 2px lightgray)",
};

const navbarStyle = {
  // backgroundColor: "rgba(65, 255, 255, 0.6)",
  boxShadow: "0 0 20px rgba(65, 255, 255, 0.6)",
  background:
    "linear-gradient(-45deg, rgba(148, 65, 250, 1), rgb(18, 203, 196))",
};

function Header() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    //https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/react/navbars
    <>
      <nav
        className="sticky top-0 z-100"
        style={{
          background: `url(${background})`,
          zIndex: 100,
        }}
      >
        <div className="w-full" style={navbarStyle}>
          <div className="flex flex-wrap items-center justify-between mx-16">
            <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
              <Link
                className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                to="/"
              >
                <img
                  className="img-fluid"
                  src={logo}
                  alt="Defense Unicorns Logo"
                  style={logoStyle}
                />
              </Link>
              <button
                className="text-white cursor-pointer text-4xl leading-none px-1 py-0 outline-none rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <i className="bi bi-list"></i>
              </button>
            </div>
            <div
              className={
                "lg:flex flex-grow items-center bg-white rounded-xl lg:bg-transparent py-2" +
                (navbarOpen ? " flex" : " hidden")
              }
              id="example-navbar-danger"
            >
              <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                <li className="nav-item">
                  <Link
                    className="px-3  text-lg  uppercase text-black lg:text-white hover:text-red-400"
                    to="/"
                  >
                    <span className="ml-2">Train</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/equip"
                    className="text-lg flex uppercase text-black lg:text-white hover:text-red-400 border-1 border-solid border-red-300"
                  >
                    <span className="ml-5">Equip</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="px-3  text-lg  uppercase text-black lg:text-white hover:text-red-400"
                    to="/contact"
                  >
                    <span className="ml-2">Contact</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
