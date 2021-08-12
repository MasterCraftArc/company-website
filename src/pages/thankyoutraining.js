import * as React from 'react';
import SiteHelmet from '../components/SiteHelmet';
// import Footer from '../components/footer';
import logo from "../images/logo.png"
import StyledBackgroundSection from '../components/contactBg'
import Button from '../components/button'

const Thankyou = () => {
  return (
    <StyledBackgroundSection className="min-h-screen flex flex-col md:pt-24 xl:pt-0 justify-center items-center">
        <SiteHelmet title="Thank You" /> 
        <img src={logo} alt="Defense Unicorns Logo" className="w-3/4 md:w-1/4 bg-white rounded-xl"></img>
        <h1 className="mt-16 text-6xl text-black text-center font-bold text-white"><span className="text-red-500">Thank you</span> for contacting us!</h1>
        <h1 className="w-11/12 rounded-2xl mt-24 mb-10 text-4xl md:text-5xl px-3 py-5 font-bold text-center text-blue-900 bg-white">
          Thank you for indicating your interest in attending the Defense Unicorns DevSecOps training day. 
          We are currently confirming dates for fall 2021 and will be in touch shortly.
        </h1>
        <Button 
          linkTo="/" 
          className="bg-blue-500 hover:bg-blue-400 text-white mr-5 mb-5"
          text="Home"
        />
        {/* <Footer/> */}
    </StyledBackgroundSection>
  );
}

export default Thankyou;