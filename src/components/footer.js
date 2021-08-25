import React from "react";
import { Link } from "gatsby";
import verticalLogo from "../images/home/logoV.png";
import footerBackground from "../images/footer.png";

const footerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background: `url(${footerBackground}) no-repeat`,
  backgroundSize: "cover",
  height: "70vh",
};

const logoStyle = {
  width: "135px",
};

const socialsBox = {
  color: 'white',
};

// const menuBox = {
// };

const linkColor = {
  fontSize: "14px",
};

const menu = {
};

const addressBox = {
}

// const copyRight = {
//   top: '81%',
// }

function Footer({ background }) {
  const showBackground = background === undefined ? true : background;

  return (
    <footer
      className='relative'
      style={{
        ...footerStyle,
        background: showBackground ? footerStyle.background : "",
      }}
      >
        <img
        className="bg-no-repeat bg-cover absolute bottom-32 centerLogo sm:rightLogo"
        src={verticalLogo}
        style={logoStyle}
        alt="Defense Unicorns logo"
      />
      <div 
        className="h-full md:h-2/5 flex md:flex-row flex-col mx-auto content-end items-start w-6/12 mt-16"
      >
            <div className="flex flex-col w-full mx-auto order-last sm:order-first">
              <div className="md:text-left text-center text-xl text-white"
                    style={addressBox}>
                <p className="mt-2">Defense Unicorns</p>
                <p className="mt-2">555 E Pikes Peak Ave</p>
                <p className="mt-2">Colorado Springs, Co 80903</p>
              </div>
              <div style={socialsBox} className="socialsBox mt-6 flex justify-center text-2xl  sm:justify-start">
            <button aria-hidden="true" className="">
              <i className="bi bi-twitter mr-3 hover:bg-white hover:text-red-500 text-white rounded-full p-2 transition-all"></i>
            </button>
            <a
              aria-hidden="true"
              className=""
              href="https://www.linkedin.com/company/leapfrog-ai/about/"
            >
              <i className="bi bi-linkedin ml-1 mr-3 hover:bg-white hover:text-red-500 text-white rounded-full p-2 transition-all"></i>
            </a>
            <button className="">
              <i className="bi bi-facebook mr-3 hover:bg-white hover:text-red-500 text-white rounded-full p-2 transition-all"></i>
            </button>
          </div>
            </div>
          
        
        <div className="flex flex-row md:mx-12 mx-auto text-white text-2xl w-full justify-around sm:mt-10">
              <Link to="/" className="footerLink" style={linkColor}>
                <p style={menu}>Train</p>
              </Link>
              <Link to="/equip" className="footerLink" style={linkColor}>
                <p style={menu}>Equip</p>
              </Link>
              <Link to="/contact" className="footerLink" style={linkColor}>
                <p style={menu}>Contact</p>
              </Link>
        </div>
      </div>
      <p className="mt-12 text-center absolute w-full text-white bottom-7">
              Copyright © {new Date().getFullYear()} Defense Unicorns. All
              rights reserved.
            </p>
    </footer>
  );
}

export default Footer;
