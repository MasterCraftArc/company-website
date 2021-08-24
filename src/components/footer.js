import React, { useEffect } from "react";
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
  left: '75%',

};

const socialsBox = {
  // paddingTop: "4%",
  // paddingRight: "17%",
  color: 'white',
  marginLeft: '-99%',
  marginTop: '-18%',
};

const menuBox = {
};

const linkColor = {
  fontSize: "14px",
};

const menu = {
  display: "flex",
  marginTop: '-11',
};

const addressBox = {
  marginLeft: '-69%',
  marginTop: '43%',
}

const copyRight = {
  top: '81%',
}

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
        className="bg-no-repeat bg-cover absolute bottom-11"
        src={verticalLogo}
        style={logoStyle}
        alt="Defense Unicorns logo"
      />
      <div 
        className="h-full md:h-3/6 flex md:flex-row flex-col mx-auto"
      >
        <div className="flex flex-col md:w-2/5 xs:w-full">
          <div className="flex md:flex-row flex-col h-4/6 xs:w-full">
            
            <div className="flex flex-col w-full mx-auto mt-2 ml-6">
              <div className="md:text-left text-center text-xl mt-9 text-white"
                    style={addressBox}>
                <p className="mt-2">Defense Unicorns</p>
                <p className="mt-2">555 E Pikes Peak Ave</p>
                <p className="mt-2">Colorado Springs, Co 80903</p>
              </div>
              <div style={socialsBox} className="socialsBox w-1/5 flex justify-items-center text-3xl">
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
        </div>
        <div className="flex flex-row md:mx-12 mx-auto text-white items-center text-2xl w-full justify-around top-15">
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
      </div>
      <p className="mt-12 text-center absolute w-full text-white bottom-7">
              Copyright © {new Date().getFullYear()} Defense Unicorns. All
              rights reserved.
            </p>
    </footer>
  );
}

export default Footer;
