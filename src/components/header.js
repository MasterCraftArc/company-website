import * as React from "react";
import { Link } from "gatsby";
import logo from "../images/logo.png";
import background from "../images/BG_Banner.jpg";

const logoStyle = {
  maxWidth: "16vh",
  filter: "drop-shadow(2px 2px 2px black)",
};

const navbarStyle = {
  // boxShadow: "0 0 20px rgba(38, 18, 117, 0.2)",       
};

function Header(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    //https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/react/navbars
    <>
      <nav
        className="fixed top-0 z-100 w-full"
        style={{
          background: `url(${props.background ? props.background : background}) no-repeat fixed`,
          backgroundSize: 'cover',
          backgroundPosition: '0% 1%',
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
                    className="px-3  text-xl  uppercase text-black lg:text-white hover:text-red-600"
                    to="/"
                  >
                    <span className="ml-2">Train</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/equip"
                    className="text-xl flex uppercase text-black lg:text-white hover:text-red-600"
                  >
                    <span className="ml-5">Equip</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="px-3  text-xl  uppercase text-black lg:text-white hover:text-red-600"
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
