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
import Footer from "../components/footer"

// styles
const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  // backgroundColor: "#121C2A",
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
  color: "red",
  fontWeight: "bold",
  fontSize: "60px"
}

const battleText = {
  // color: "#84b9ff", //for black background
  color: '#14498e',
  fontSize: "45px"
}

const cardStyle = {
  width: "245px",
  height: "380px",
  borderRadius: "25px",
  backgroundColor: "rgba(65, 255, 255, 0.6)",
  boxShadow: "0 0 20px rgba(65, 255, 255, 0.6)"
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
  fontSize: '18px',
  padding: '25px 150px 50px 0',
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
  fontSize: '18px',
  padding: '25px 150px 0px 0',
}

const trainedCardStyle = {
  width: "255px",
  height: "380px",
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
  color: 'red',
  textDecoration: 'underline'
}


// markup
const Train = () => {
  return (
    <main style={pageStyles} className="home">
      <SiteHelmet title="Train" description="Become a DevSecOps Hero with Defense Unicorns"/>
      <Header></Header>

      <section className="hero d-flex flex-column justify-content-center">
          <h1>The World Needs a Hero</h1>
          <h1 style={heroTextBold} >That hero is you.</h1>
          {/* <img className="img-fluid background" src={background} alt="background image" style={bgStyle}/> */}
      </section>

      <section className="trainForBattle">
        <h2 className="text-center" style={battleText}>Let us Train you for Battle</h2>

        <div className="container h-75 mt-5">

          <div className="row h-100 d-flex justify-content-around align-items-center">

            <div className="card col-4 align-self-end" style={cardStyle}>
              <div className="d-flex justify-content-center align-items-center w-100">
                <img src={heroes} style={magnifierStyle} className="card-img-top img-fluid" alt="unicorn under magnifying glass"/>
              </div>
              <div className="card-body text-center">
                <span className="card-text" style={cardText}>Case Studies</span>
                <h5 className="card-title mt-3 mb-5" style={cardTitle}>Heroes Like You</h5>
                <Link to="/contact"><img src={cardPin} style={pinStyle} alt="defense unicorns circular pin"/></Link>
              </div>
            </div>

            <div className="card col-4" style={cardStyle}>
              <div className="d-flex justify-content-center align-items-center w-100">
                <img src={aquisitions} style={cardImg} className="card-img-top img-fluid" alt="unicorn under magnifying glass"/>
              </div>
              <div className="card-body text-center">
                <span className="card-text" style={cardText}>Explore Learning</span>
                <p style={cardText}>Part 1:</p>
                <h5 className="card-title mt-3 mb-5" style={cardTitle}>Aquisitions</h5>
                <Link to="/contact"><img src={cardPin} style={pinStyle} alt="defense unicorns circular pin"/></Link>
              </div>
            </div>

            <div className="card col-4 align-self-start" style={cardStyle}>
              <div className="d-flex justify-content-center align-items-center w-100">
                <img src={devsecops} style={cardImg} className="card-img-top img-fluid" alt="unicorn under magnifying glass"/>
              </div>
              <div className="card-body text-center">
                <span className="card-text" style={cardText}>Explore Learning</span>
                <p style={cardText}>Part 1:</p>
                <h5 className="card-title mt-3 mb-5" style={cardTitle}>DevSecOps</h5>
                <Link to="/contact"><img src={cardPin} style={pinStyle} alt="defense unicorns circular pin"/></Link>
              </div>
            </div>

          </div>

        </div>
      </section>


      <section className="whoWeAre container">
        <div className="row px-5">
          <div className="col-6">
            <h2 style={altTitle}>Who we are</h2>
            <p className="" style={whoWeAreText}>We are defense innovators, software engineers, and veterans that believe the future wil belong to mission-driven organizations that can securely and continuously deploy new software solutions.</p>
            
            <div className="">
              <Link to="/equip"><button className="btn btn-primary me-5" style={buttonStyle}>LEARN MORE</button></Link>
              <Link to="/contact"><button className="btn btn-danger ms-5" style={buttonStyle}>CONTACT US</button></Link>
            </div>
          </div>
          <div className="col-6">
            <img src={whoWeAre} style={WhoWeAreStyle} className="img-fluid" alt="unicorn under magnifying glass"/>
          </div>
        </div>
      </section>


      <section className="caseStudies container">
        <div className="row px-5">
          <div className="col-6">
            <img src={caseStudies} style={WhoWeAreStyle} className="img-fluid" alt="unicorn under magnifying glass"/>
          </div>

          <div className="col-6">
            <h2 style={altTitle}>Case Studies</h2>
            <p className="" style={caseStudyText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet.</p>
            <img className="img-fluid w-50 py-5" src={keyPoints} alt="Case Study Icons for Objectives solutions and results"></img>

            <div className="">
              <Link to="/equip"><button className="btn btn-primary me-5" style={buttonStyle}>LEARN MORE</button></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="latestTrained">
        <h2 className="text-center" style={battleText}>Our latest trained.</h2>

        <div className="container h-75 mt-5">
          <div className="row h-100 d-flex justify-content-evenly align-items-center">

            <div className="card col-4" style={trainedCardStyle}>
              <img src={pc} className="card-img-top" alt="unicorn under magnifying glass"/>
              <div className="card-body text-center">
                <h5 className="card-title mt-3 mb-5" style={trainedCardTitle}>Card Title</h5>
                <p className="card-text" style={trainedCardText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit.</p>
                <Link to="/blog" style={trainedCardLink} >READ MORE</Link>
              </div>
            </div>

            <div className="card col-4" style={trainedCardStyle}>
              <img src={pcGear} className="card-img-top" alt="unicorn under magnifying glass"/>
              <div className="card-body text-center">
                <h5 className="card-title mt-3 mb-5" style={trainedCardTitle}>Card Title</h5>
                <p className="card-text" style={trainedCardText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit.</p>

                <Link to="/blog" style={trainedCardLink} >READ MORE</Link>
              </div>
            </div>

            <div className="card col-4" style={trainedCardStyle}>
              <img src={tech} className="card-img-top" alt="unicorn under magnifying glass"/>
              <div className="card-body text-center">
                <h5 className="card-title mt-3 mb-5" style={trainedCardTitle}>Card Title</h5>
                <p className="card-text" style={trainedCardText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit.</p>
                <Link to="/blog" style={trainedCardLink} >READ MORE</Link>
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
