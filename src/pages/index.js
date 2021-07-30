import * as React from "react"
import SiteHelmet from "../components/SiteHelmet"
import Header from "../components/header"
import {Link} from "gatsby"
import background from "../images/bgWhite.png"
import heroes from "../images/card1.png"
import aquisitions from "../images/card2.png"
import devsecops from "../images/card3.png"
import cardPin from "../images/cardPin.png"
import whoWeAre from "../images/whoWeAre.png"
import caseStudies from "../images/caseStudies.png"
import keyPoints from "../images/keyPointsLight.png"
import pc from "../images/pc.png"
import pcGear from "../images/pcGear.png"
import tech from "../images/tech.png"
import loadingBG from "../images/loading.png"
import Footer from "../components/footer"
import Flip from "../components/textFlip"
import { motion } from "framer-motion"
import TextLoop from "react-text-loop";
import Typist from "react-typist"
import ReactRotatingText from 'react-rotating-text' //https://reactjsexample.com/a-simple-component-to-create-a-typewriter-effect/
// import { useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"
import { data } from "browserslist"

// import { BodyText } from "./ui";

// styles
const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  // backgroundColor: "#121C2A",
  width: '100vw'
}

const bgStyle = {
  position: "absolute",
  top: 0,
}

const heroTextThin = {
  color: "red",
  fontWeight: "thin",
  fontSize: "55px"
}

const heroTextBold = {
  // color: "red",
  // fontWeight: "bold",
  // fontSize: "60px"
}

const battleText = {
  // color: "#84b9ff", //for black background
  color: '#14498e',
  // color: 'red',
  fontSize: "45px",
  
}

const cardStyle = {
  width: "235px",
  maxWidth: "30%",
  height: "370px",
  maxHeight: '100%',
  borderRadius: "25px",
  backgroundColor: "rgba(65, 255, 255, 0.6)",
  boxShadow: "0 0 20px rgba(65, 255, 255, 0.6)",
}

const pinStyle = {
  width: "45%"
}

const cardText = {
  color: 'white',
  fontSize: '15px',
}

const cardTitle = {
  color: 'white',
  fontSize: "23px"
}

const cardImg = {
  maxWidth: '90%',
  paddingTop: '2%'
}

const magnifierStyle = {
  maxWidth: '95%',
  paddingLeft: '20%',
}

// const WhoWeAreStyle = {
//   maxWidth: '80%',
// }

// 14498f button blue
const buttonStyle = {
  borderRadius: '0',
  height: '45px',
  width: '150px',
  fontSize: '15px',
  borderRadius: '25px'
}

const trainedCardStyle = {
  // width: "56%",
  // height: "100%",
  width: "235px",
  height: "370px",
  borderRadius: 0,
  // boxShadow: "0 0 20px rgba(65, 255, 255, 0.6)"
}

const trainedCardText = {
  fontSize: '15px',
}

const trainedCardTitle = {
  fontSize: "23px",
}

const trainedCardLink = {
  position: 'relative',
  bottom: '0',
  color: 'red',
  textDecoration: 'underline'
}

const sentenceAnim = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.3,
      staggerChildren: 0.2,
    },
  },
}

const letter = {
  hidden: { opacity: 0, y: 50},
  visible: {
    opacity: 1,
    y: 0,
  },
}

const tagLine = "That hero is "


function testScroll(){
  console.log('yay')
}

// markup
const Train = () => {
  return (
    <main style={pageStyles} className="home flex flex-col" onScroll={ () => testScroll()}>
      {/* <Img fluid={images.file.GatsbyImageSharp.fluid} alt="defense unicorns background" /> */}
      <SiteHelmet title="Train" description="Become a DevSecOps Hero with Defense Unicorns"/>
      {/* <motion.div 
      initial={ {opacity: 1, scale: 5} }
      animate={ {scale: 0, opacity: 0} }
      transition={
        {
          type: 'spring',
          stiffness: 260,
          damping: 20,
          delay: 2
        }
      }
      style={loadingStyle} 
      className="loading w-50 h-50"
      /> */}
      {/* <div className="heroContainer w-full"> */}
        <section className="hero min-h-screen flex flex-col justify-center relative">
        {/* <Header textColor="white" className="absolute top-0"/> */}
            <h1 className='text-5xl md:text-5xl xl:text-5xl 2xl:text-6xl pl-24'>The World Needs a Hero...</h1>

          {/* <Flip initial="Hero" change="Friend, Developer, DevSecOps Engineer"/> */}

            <motion.h1 variants={sentenceAnim} initial='hidden' animate='visible' className="pl-24 lg:text-6xl xl:pl-24 xl:text-6xl 2xl:text-7xl text-red-500 font-bold" style={heroTextBold}>{
              tagLine.split('').map((char, index) => {
                return (
                  <motion.span key={char + '-' + index} variants={letter}>
                    {char}
                  </motion.span>
                )
              })
            }
            
            <motion.span 
                initial={ {opacity: 0} }
                animate={ {opacity: 1} }
                transition={
                  {
                    delay: 2.5
                  }
                }
            > 
                <ReactRotatingText items={[' You.', ' a Program Manager', ' an Entrepreneur', ' an Innovator', ' an Operator']} />
              </motion.span>
            </motion.h1>
            
            {/* <img className="img-fluid background" src={background} alt="background image" style={bgStyle}/> */}
            
        </section>

        <section className="trainForBattle min-h-screen md:h-screen">
          <h2 className="text-center lg:mt-16 font-bold" style={battleText}>Let us Train you for Battle</h2>

          <div className="flex justify-evenly mt-16 mx-auto h-1/2 lg:w-4/5">

            <div className="card lg:p-5 lg:w-full lg:h-full flex flex-col justify-evenly" style={cardStyle}>
              <div className="flex justify-center items-center w-full">
                <img src={heroes} style={magnifierStyle} className="card-img-top img-fluid" alt="unicorn under magnifying glass"/>
              </div>
              <div className="card-body text-center">
              <span className="card-text" style={cardText}>Explore Learning</span>
                <p style={cardText}>Path 1:</p>
                <h5 className="card-title mt-3 mb-5" style={cardTitle}>Agile Acquisitions</h5>
                <Link to="/contact" ><img className="mx-auto" src={cardPin} style={pinStyle} alt="defense unicorns circular pin"/></Link>
              </div>
            </div>

            <div className="card lg:p-5 lg:w-full lg:h-full flex flex-col justify-evenly" style={cardStyle}>
              <div className="flex justify-center items-center w-full">
                <img src={aquisitions} style={cardImg} className="card-img-top img-fluid" alt="unicorn under magnifying glass"/>
              </div>
              <div className="card-body text-center">
                <span className="card-text" style={cardText}>Explore Learning</span>
                <p style={cardText}>Path 2:</p>
                <h5 className="card-title mt-3 mb-5" style={cardTitle}>DevSecOps</h5>
                <Link to="/contact"><img className="mx-auto" src={cardPin} style={pinStyle} alt="defense unicorns circular pin"/></Link>
              </div>
            </div>

            <div className="card lg:p-5 flex flex-col justify-evenly" style={cardStyle}>
              <div className="flex justify-center items-center w-full">
                <img src={devsecops} style={cardImg} className="card-img-top img-fluid" alt="unicorn under magnifying glass"/>
              </div>
              <div className="card-body text-center">
                <span className="card-text" style={cardText}>Explore Learning</span>
                <p style={cardText}>Path 3:</p>
                <h5 className="card-title mt-3 mb-5" style={cardTitle}>Continuous Delivery</h5>
                <Link to="/contact"><img className="mx-auto" src={cardPin} style={pinStyle} alt="defense unicorns circular pin"/></Link>
              </div>
            </div>

          </div>
        </section>





        <section className="whoWeAre min-h-screen mt-16 lg:pr-0 xl:pr-20 xl:pb-20 w-full">
          <div className="flex w-full px-0 sm:px-8 md:px-24 lg:px-44 lg:pl-8 lg:pt-32 lg:pr-16 xl:pr-0 2xl:px-56">
            <div className="2xl:p-5 w-2/6 xl:w-3/6">
              <img src={whoWeAre} className="object-cover sm:w-full lg:w-full xl:p-16 " alt="unicorn under magnifying glass"/>
            </div>
            <div className="flex flex-col justify-center px-5 w-4/6">
              <h2 className="text-5xl md:text-6xl lg:text-7xl ">Who we are</h2>
              <p className="pt-5 pb-5 lg:pt-10 lg:pb-16 lg:pr-5 xl:pr-8 text-2xl md:text-3xl lg:text-4xl 2xl:pb-16 font-light" >We are innovators, software engineers, and veterans with decades of experience delivering technology programs across DoD and the broader federal market. Defense Unicorns exists to accelerate the impact of digital warriors inside and outside the government - enabling their transformation from unicorn to hero.</p>
              <div className="">
                <Link to="/equip"><button className="bg-red-500 hover:bg-red-700 text-white mr-5 mb-5" style={buttonStyle}>LEARN MORE</button></Link>
                <Link to="/contact"><button className="bg-blue-500 hover:bg-blue-700 text-white xl:ml-5" style={buttonStyle}>CONTACT US</button></Link>
              </div>
            </div>
          </div>
        </section>





      <section className="caseStudies min-h-screen xl:pt-44 xl:p-10 ">
        <div className="w-full flex sm:px-8 md:px-24 lg:px-44 lg:pl-8 lg:pt-44 2xl:px-56">
          <div className="flex flex-col justify-center px-10 w-4/6">
            <h2 className="text-5xl md:text-6xl lg:text-7xl ">What We Do</h2>
            <p className="pt-5 pb-5 lg:pt-10 lg:pb-16 lg:pr-5 xl:pr-8 text-2xl md:text-3xl lg:text-4xl 2xl:pb-16 font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet.</p>
            <img className="w-3/4 xl:w-1/2 py-5 pt-10" src={keyPoints} alt="Case Study Icons for Objectives solutions and results"></img>

            <div className="pt-7">
              <Link to="/equip"><button className="bg-blue-500 hover:bg-blue-700 text-white" style={buttonStyle}>LEARN MORE</button></Link>
            </div>
          </div>
          <div className="2xl:p-5 w-2/6 xl:w-3/6">
            <img src={caseStudies} className="object-cover sm:w-full lg:w-full lg:p-5 xl:p-16 pr-5" alt="unicorn under magnifying glass"/>
          </div>
        </div>
      </section>


      {/* <section className="min-h-screen"> */}
        <Footer ></Footer>
      {/* </section> */}
    </main>
  )
}

export default Train


// export const query = graphql`
//   query MyQuery {
//     file(relativePath: { eq: "images/bgWhite.png" }) {
//       childImageSharp {
//         # Specify the image processing specifications right in the query.
//         fluid {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `