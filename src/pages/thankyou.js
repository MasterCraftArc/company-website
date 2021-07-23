import * as React from 'react';
import { Link } from 'gatsby';
import SiteHelmet from '../components/SiteHelmet';
import Footer from '../components/footer';
import Header from '../components/header';
import logo from "../images/logo.png"

const buttonStyle = {
  borderRadius: '0',
  height: '45px',
  width: '150px',
  fontSize: '15px',
}

const Thankyou = () => {
  return (
    <div className="min-h-screen contact  flex  flex-col md:pt-24 xl:pt-0 xl:justify-center items-center">
      <SiteHelmet title="Thank You" /> 
   
      <img src={logo} alt="Defense Unicorns Logo" className="w-1/4"></img>
      <h1 className="mt-16 text-5xl text-black text-center">Thank you for sending us a message!</h1>
      <h1 className="mt-6 mb-10 text-5xl text-black text-center">We will reach out at our first convenience.</h1>
      <Link to="/"><button className="bg-blue-500 hover:bg-blue-400 text-white mr-5 mb-5" style={buttonStyle}>Home</button></Link>

    </div>
  );
}

export default Thankyou;