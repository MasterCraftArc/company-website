import React from "react";
import { Link } from "gatsby";


const footerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "70vh",
};

const logoStyle = {
  width: "135px",
};

const linkColor = {
  fontSize: "14px",
};

function Footer({ background }) {
  const showBackground = background === undefined ? true : background;

  return (
    <footer
      className={`relative ${
        showBackground
          ? " footerBackgroundMobile sm:footerBackgroundDesktop"
          : ""
      }`}
      style={footerStyle}
    >
     
      <div className="h-5/6 md:h-2/5 flex md:flex-row flex-col mx-auto content-end items-start w-7/12 mt-16">
        <div className="flex flex-col w-full mx-auto mt-5 sm:mt-0 order-last sm:order-first">
          <div className="pl-3 md:text-left text-center text-xl text-white lineHeightBlog">
            <p className="mt-2 mb-0">Defense Unicorns</p>
            <p className="mt-2 mb-0">555 E Pikes Peak Ave</p>
            <p className="mt-2 mb-0">Colorado Springs, Co 80903</p>
            <a 
              className="mt-2 mb-0 hover:text-blue-400"
              href="mailto:hello@defenseunicorns.com"
              target="_blank"
              rel="noreferrer"
            >
                hello@defenseunicorns.com
            </a>
          </div>
          <div className="socialsBox text-white flex justify-center text-3xl  md:justify-start mt-12 sm:mt-6 ">
            <a
              aria-hidden="true"
              className="outboundLink"
              data-gtm-label="LinkedIn"
              href="https://www.linkedin.com/company/defense-unicorns"
            >
              <i className=" bi bi-linkedin hover:bg-white hover:text-red-500 text-white rounded-full transition-all px-3 py-2 "></i>
            </a>
            <a
              aria-hidden="true"
              className="outboundLink"
              data-gtm-label="Github"
              href="https://github.com/defenseunicorns"
            >
              <i className="bi bi-github hover:bg-white hover:text-red-500 text-white rounded-full transition-all px-3 py-2"></i>
            </a>
          </div>
        </div>

        <div className="flex flex-row md:mx-12 mx-auto text-white text-3xl w-full justify-around sm:mt-10 font-bold">
            <Link to="/" className="footerLink mr-2 " style={linkColor}>
              Home
            </Link>
            <Link to="/learn" className="footerLink mr-2 " style={linkColor}>
              Learn
            </Link>
            <Link to="/about" className="footerLink mr-2 " style={linkColor}>
              About
            </Link>
            <Link to="/contact" className="footerLink mr-2 " style={linkColor}>
              Contact
            </Link>
        </div>

      </div>
      <p className="mt-12 text-center absolute w-full text-white bottom-12 text-lg">
        Copyright © {new Date().getFullYear()} Defense Unicorns. All rights
        reserved.
      </p>
      <div className="flex absolute bottom-5 w-full justify-center">
        <Link to="/privacypolicy" className="text-white text-center text-lg hover:underline mr-2">
          <p className="text-center">Privacy Policy</p>
        </Link>
        <span className="border-r border-white "></span>
        <Link to="/termsofservice" className="text-white text-center text-lg hover:underline ml-2">
          <p className="text-center">Terms of Service</p>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
