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
  fontSize: "45px"
}

const cardStyle = {
  maxWidth: "235px",
  maxHeight: "370px",
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

const WhoWeAreStyle = {
  maxWidth: '80%',
}

const altTitle = {
  // color: "#589af0", //dark color
  fontSize: "50px"
}

const whoWeAreText = {
  // fontSize: '18px',
  // padding: '25px 150px 50px 0',
}

// 14498f button blue
const buttonStyle = {
  borderRadius: '0',
  height: '45px',
  width: '150px',
  fontSize: '15px',
}

const caseStudyText = {
  // color: 'white',
  // fontSize: '18px',
  padding: '25px 150px 0px 0',
}

const trainedCardStyle = {
  // width: "56%",
  // height: "100%",
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


const loadingStyle = {
  background: {loadingBG},
  position: 'fixed',
  left: '60%',
  top: '22%'
}


function testScroll(){
  console.log('yay')
}

// markup
const Train = () => {
  return (
    <main style={pageStyles} className="home flex flex-col" onScroll={ testScroll()}>
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
        <Header></Header>
        <section className="hero min-h-screen flex flex-col justify-center border">
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
                  <TextLoop interval='1000' springConfig={{ stiffness: 180, damping: 8 }} delay='2000'>
                      <span sty> You.</span>
                      <Link to="/"> a Developer.</Link>
                      <span> a Frog &#128056;</span>
                      <Link to="/"> a Unicorn. &#129412;</Link>
                  </TextLoop>{" "}
              </motion.span>
            </motion.h1>
            
            {/* <img className="img-fluid background" src={background} alt="background image" style={bgStyle}/> */}
            
        </section>
      {/* </div> */}

      {/* <div className="mid border-2 border-red-50 m-0"> */}
        <section className="trainForBattle h-screen border">
          <h2 className="text-center lg:mt-44" style={battleText}>Let us Train you for Battle</h2>

        <div className="grid grid-cols-3 place-items-center mt-5 mx-auto lg:w-4/5 h-3/4 p-20 m:p-0">

            
            <div className="card place-self-end md:p-15 md:w-4/5 md:h-3/4 lg:p-5 lg:w-full lg:h-full flex flex-col justify-evenly" style={cardStyle}>
              <div className="flex justify-center items-center w-full">
                <img src={heroes} style={magnifierStyle} className="card-img-top img-fluid" alt="unicorn under magnifying glass"/>
              </div>
              <div className="card-body text-center">
                <span className="card-text" style={cardText}>Case Studies</span>
                <h5 className="card-title mt-3 mb-5" style={cardTitle}>Heroes Like You</h5>
                <Link to="/contact" ><img className="mx-auto" src={cardPin} style={pinStyle} alt="defense unicorns circular pin"/></Link>
              </div>
            </div>

            <div className="card place-self-center md:p-15 md:w-4/5 md:h-3/4 lg:p-5 lg:w-full lg:h-full flex flex-col justify-evenly" style={cardStyle}>
              <div className="flex justify-center items-center w-full">
                <img src={aquisitions} style={cardImg} className="card-img-top img-fluid" alt="unicorn under magnifying glass"/>
              </div>
              <div className="card-body text-center">
                <span className="card-text" style={cardText}>Explore Learning</span>
                <p style={cardText}>Part 1:</p>
                <h5 className="card-title mt-3 mb-5" style={cardTitle}>Aquisitions</h5>
                <Link to="/contact"><img className="mx-auto" src={cardPin} style={pinStyle} alt="defense unicorns circular pin"/></Link>
              </div>
            </div>

            <div className="card place-self-start md:p-15 md:w-4/5 md:h-3/4 lg:p-5 lg:w-full lg:h-full flex flex-col justify-evenly" style={cardStyle}>
              <div className="flex justify-center items-center w-full">
                <img src={devsecops} style={cardImg} className="card-img-top img-fluid" alt="unicorn under magnifying glass"/>
              </div>
              <div className="card-body text-center">
                <span className="card-text" style={cardText}>Explore Learning</span>
                <p style={cardText}>Part 1:</p>
                <h5 className="card-title mt-3 mb-5" style={cardTitle}>DevSecOps</h5>
                <Link to="/contact"><img className="mx-auto" src={cardPin} style={pinStyle} alt="defense unicorns circular pin"/></Link>
              </div>
          </div>

          </div>
        </section>


        <section className="whoWeAre pl-56 pt-56 lg:pl-44 lg:pt-64 lg:pr-0 xl:pr-20 xl:pb-20 border">
          <div className="px-5 lg:pl-44 grid grid-cols-2">
            <div className="">
              <h2 style={altTitle}>Who we are</h2>
              <p className="lg:pt-10 lg:pb-32 lg:pr-40 xl:pr-8 text-3xl xl:pb-16 font-light" style={whoWeAreText}>We are defense innovators, software engineers, and veterans that believe the future wil belong to mission-driven organizations that can securely and continuously deploy new software solutions.</p>
              
              <div className="">
                <Link to="/equip"><button className="bg-red-500 hover:bg-red-700 text-white mr-5 mb-5" style={buttonStyle}>LEARN MORE</button></Link>
                <Link to="/contact"><button className="bg-blue-500 hover:bg-blue-700 text-white lg:ml-5" style={buttonStyle}>CONTACT US</button></Link>
              </div>
            </div>
            <div className="object-cover">
              <img src={whoWeAre} style={WhoWeAreStyle} className="" alt="unicorn under magnifying glass"/>
            </div>
          </div>
        </section>

      {/* </div> */}




      <section className="caseStudies border mt-32 xl:p-10">
        <div className="grid grid-cols-2 px-5">
          <div className="p-16 pt-0 object-cover">
            <img src={caseStudies} style={WhoWeAreStyle} className="img-fluid" alt="unicorn under magnifying glass"/>
          </div>

          <div className="">
            <h2 style={altTitle}>Case Studies</h2>
            <p className="2xl:pr-56 text-3xl" style={caseStudyText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet.</p>
            <img className="w-1/2 py-5 pt-10" src={keyPoints} alt="Case Study Icons for Objectives solutions and results"></img>

            <div className="pt-7">
              <Link to="/equip"><button className="bg-blue-500 hover:bg-blue-700 text-white" style={buttonStyle}>LEARN MORE</button></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="latestTrained">
        <h2 className="text-center" style={battleText}>Our latest trained.</h2>

        <div className="h-full mt-5">
          <div className="h-full w-3/4 mx-auto mt-10 grid grid-cols-3 place-items-center">

            <div className="card h-3/6 md:w-4/5 md:h-4/6 lg:w-5/6 lg:h-4/6 xl:h-4/5 xl:w-4/6 2xl:h-3/5" style={trainedCardStyle}>
              <img src={pc} className="card-img-top self-start" alt="unicorn under magnifying glass"/>
              <div className="card-body text-center">
                <h5 className="card-title mt-3 mb-5" style={trainedCardTitle}>Card Title</h5>
                <p className="card-text mb-5 p-1" style={trainedCardText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit.</p>
                <Link to="/blog" className="" style={trainedCardLink} >READ MORE</Link>
              </div>
            </div>

            <div className="card h-3/6 md:w-4/5 md:h-4/6 lg:w-5/6 lg:h-4/6 xl:h-4/5 xl:w-4/6 2xl:h-3/5" style={trainedCardStyle}>
              <img src={pcGear} className="card-img-top" alt="unicorn under magnifying glass"/>
              <div className="card-body text-center">
                <h5 className="card-title mt-3 mb-5" style={trainedCardTitle}>Card Title</h5>
                <p className="card-text mb-5 p-1" style={trainedCardText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit.</p>

                <Link to="/blog" className="" style={trainedCardLink} >READ MORE</Link>
              </div>
            </div>

            <div className="card h-3/6 md:w-4/5 md:h-4/6 lg:w-5/6 lg:h-4/6 xl:h-4/5 xl:w-4/6 2xl:h-3/5" style={trainedCardStyle}>
              <img src={tech} className="card-img-top" alt="unicorn under magnifying glass"/>
              <div className="card-body text-center">
                <h5 className="card-title mt-3 mb-5" style={trainedCardTitle}>Card Title</h5>
                <p className="card-text mb-5 p-1" style={trainedCardText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit.</p>
                <Link to="/blog" className="" style={trainedCardLink} >READ MORE</Link>
              </div>
            </div>

          </div>

        </div>
      </section>
    <Footer></Footer>
    </main>
  )
}

export default Train
