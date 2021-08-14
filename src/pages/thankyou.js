import * as React from 'react';
import SiteHelmet from '../components/SiteHelmet';
// import Footer from '../components/footer';
import logo from "../images/logo.png"
import StyledBackgroundSection from '../components/contactBg'
import Button from '../components/button'
import contactBg from "../images/contact.png"

const Thankyou = () => {
  return (
    <StyledBackgroundSection className="min-h-screen flex flex-col md:pt-24 xl:pt-0 justify-center items-center">
        <SiteHelmet title="Thank You" /> 
        <img src={logo} alt="Defense Unicorns Logo" className="w-3/4 md:w-1/4 bg-white rounded-xl"></img>
        <h1 className="mt-16 text-5xl text-black text-center font-bold text-white"><span className="text-red-500">Thank you</span> for contacting us!</h1>
        <h1 className="mt-6 mb-10 text-5xl text-center font-bold text-blue-900 py-5">We'll be in touch shortly.</h1>
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