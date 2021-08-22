import React, { useEffect } from "react";
import { Link } from "gatsby";
import verticalLogo from "../images/logo-vertical.png";
import footerBackground from "../images/footer.png";

const footerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background: `url(${footerBackground}) no-repeat`,
  backgroundSize: "cover",
  height: "50vh",
};

const logoStyle = {
  width: "37%",
};

const socialsBox = {
  marginRight: "23%",
  paddingTop: "4%",
  paddingRight: "17%",
};

const menuBox = {
  marginLeft: "initial",
};

const linkColor = {
  fontSize: "14px",
  fontWeight: "bold",
};

const menu = {
  display: "flex",
  justifyContent: "right",
  marginTop: "10px",
};

function Footer({ background }) {
  const showBackground = background === undefined ? true : background;

  return (
    <footer
      style={{
        ...footerStyle,
        background: showBackground ? footerStyle.background : "",
      }}
    >
      <div className="container md:h-3/6 flex md:flex-row flex-col mr-7 mx-auto">
        <div className="flex flex-col md:w-2/5 xs:w-full">
          <div className="flex md:flex-row flex-col h-4/6 xs:w-full">
            <div className="w-full">
              <img
                className="mx-auto"
                src={verticalLogo}
                style={logoStyle}
                alt="Defense Unicorns logo"
              />
            </div>
            <div className="flex w-full mx-auto">
              <div className="mx-auto md:text-left text-center text-2xl mt-16 text-white">
                <i className="bi bi-house-door-fill text-red-600 inline-block"></i>
                <p className="mt-2 inline-block ml-2">Defense Unicorns</p>
                <p className="mt-2 ml-6">555 E Pikes Peak Ave</p>
                <p className="mt-2 ml-6">Colorado Springs, Co 80903</p>
              </div>
            </div>
          </div>
          <div className="w-full md:text-left text-center flex-grow h-2/6 text-gray-300 text-lg">
            <p className="border-solid md:border-t-2 mt-12 md:ml-32">
              Copyright © {new Date().getFullYear()} Defense Unicorns. All
              rights reserved.
            </p>
          </div>
        </div>
        <div className="flex flex-row md:mx-12 mx-auto">
          <div
            className="text-3xl border-black w-1/5 flex flex-col justify-center items-center self-start text-blue-900 mx-auto mt-12"
            style={menuBox}
          >
            <Link to="/train" className="footerLink" style={linkColor}>
              <p style={menu}>Train</p>
            </Link>
            <Link to="/equip" className="footerLink" style={linkColor}>
              <p style={menu}>Equip</p>
            </Link>
            <Link to="/contact" className="footerLink" style={linkColor}>
              <p style={menu}>Contact</p>
            </Link>
          </div>
          <div style={socialsBox} className="socialsBox w-1/6 flex text-3xl">
            <button aria-hidden="true" className="mt-14 h-5 ml-12">
              <i className="bi bi-twitter me-3 hover:bg-white hover:text-red-500 text-white rounded-full p-2 transition-all"></i>
            </button>
            <a
              aria-hidden="true"
              className="mt-14 h-5"
              href="https://www.linkedin.com/company/leapfrog-ai/about/"
            >
              <i className="bi bi-linkedin ms-1 me-3 hover:bg-white hover:text-red-500 text-white rounded-full p-2 transition-all"></i>
            </a>
            <button className="mt-14 h-5">
              <i className="bi bi-facebook me-3 hover:bg-white hover:text-red-500 text-white rounded-full p-2 transition-all"></i>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
