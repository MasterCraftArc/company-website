import * as React from "react";
import { Link } from "gatsby";
import verticalLogo from "../images/logo-vertical.png";
import footerBackground from "../images/footerClean.png";
const footerStyle = {
  height: "100vh",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background: `url(${footerBackground}) 100% 100% fixed`,
};

const footerBox = {
  // marginTop: "35vh",
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
  color: "white",
  fontSize: "14px",
  fontFamily: "",
};

const menu = {
  display: "flex",
  justifyContent: "right",
  marginTop: "10px",
};

function Footer() {
  return (
    <footer className="footer min-h-screen" style={footerStyle}>
      <div
        className="container md:h-2/6 w-full flex md:flex-row flex-col mx-auto mr-7"
        style={footerBox}
      >
        <div className="flex flex-col md:w-2/5 xs:w-full">
          <div className="flex md:flex-row flex-col h-4/6 xs:w-full">
            <div className="w-full">
              <img
                className="mx-auto mt-12 justify-self-start"
                src={verticalLogo}
                style={logoStyle}
                alt="Defense Unicorns logo"
              />
            </div>
            <div className="flex w-full mx-auto">
              <div className="mx-auto md:text-left text-center text-2xl mt-16 text-white">
                <i class="bi bi-house-door-fill text-red-600 inline-block"></i>
                <p className="mt-2 inline-block ml-2">Defense Unicorns</p>
                <p className="mt-2 ml-6">555 E Pikes Peak Ave</p>
                <p className="mt-2 ml-6">Colorado Springs, Co 80903</p>
              </div>
            </div>
          </div>
          <div className="w-full md:text-left text-center flex-grow h-2/6 text-gray-400 text-lg">
            <p className="border-solid border-danger md:border-t-2 mt-12 md:ml-32">
              Copyright ©2021. All rights reserved.
            </p>
          </div>
        </div>
        <div className="flex flex-row md:mx-12 mx-auto">
          <div
            className="text-3xl border-black w-1/5 flex flex-col justify-center items-center self-start text-white mx-auto mt-12"
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
            <a className="mt-14 h-5 ml-12" href="#">
              <i className="bi bi-twitter me-3 hover:bg-white hover:text-red-500 text-white rounded-full p-2 transition-all"></i>
            </a>
            <a
              className="mt-14 h-5"
              href="https://www.linkedin.com/company/leapfrog-ai/about/"
            >
              <i className="bi bi-linkedin ms-1 me-3 hover:bg-white hover:text-red-500 text-white rounded-full p-2 transition-all"></i>
            </a>
            <a className="mt-14 h-5" href="#">
              <i className="bi bi-facebook me-3 hover:bg-white hover:text-red-500 text-white rounded-full p-2 transition-all"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
