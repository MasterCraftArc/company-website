import * as React from "react"
import SiteHelmet from "../components/SiteHelmet"
import Header from "../components/header"
import {Link} from "gatsby"
import background from "../images/bgBlankHD.png"
import heroes from "../images/card1.png"
import aquisitions from "../images/card2.png"
import devsecops from "../images/card3.png"
import cardPin from "../images/cardPin.png"

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
  color: "#84b9ff",
  fontSize: "40px"
}

const cardStyle = {
  width: "250px",
  height: "400px",
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
  maxWidth: '95%',
  paddingLeft: '20%',
}

// markup
const Train = () => {
  return (
    <main style={pageStyles} className="home">
      <SiteHelmet title="Train" description="Become a DevSecOps Hero with Defense Unicorns"/>
      <Header></Header>

      <section className="hero d-flex flex-column justify-content-center">
          <h1>The World Needs a Hero</h1>
          <h1 style={heroTextThin}>We think</h1>
          <h1 style={heroTextBold} >that hero is you</h1>
      <img className="img-fluid background" src={background} alt="background image" style={bgStyle}/>
      </section>

      <section className="trainForBattle border">
        <h2 className="text-center" style={battleText}>Let us Train you for Battle</h2>

        <div className="border container h-75 w-50 mt-5 align-self-start">
          <div className="row h-100 d-flex justify-content-around align-items-center">

            <div className="card col-4 align-self-end" style={cardStyle}>
              <div className="d-flex justify-content-center align-items-center w-100">
                <img src={heroes} style={cardImg} className="card-img-top img-fluid" alt="unicorn under magnifying glass"/>
              </div>
              <div className="card-body text-center">
                <span className="card-text" style={cardText}>Case Studies</span>
                <h5 className="card-title mt-3 mb-5" style={cardTitle}>Heroes Like You</h5>
                <Link to="/contact"><img src={cardPin} style={pinStyle}/></Link>
              </div>
            </div>

            <div className="card col-4" style={cardStyle}>
              <div className="d-flex justify-content-center align-items-center w-100">
                <img src={heroes} style={cardImg} className="card-img-top img-fluid" alt="unicorn under magnifying glass"/>
              </div>
              <div className="card-body text-center">
                <span className="card-text" style={cardText}>Explore Learning</span>
                <p style={cardText}>Part 1:</p>
                <h5 className="card-title mt-3 mb-5" style={cardTitle}>Aquisitions</h5>
                <Link to="/contact"><img src={cardPin} style={pinStyle}/></Link>
              </div>
            </div>

            <div className="card col-4 align-self-start" style={cardStyle}>
              <div className="d-flex justify-content-center align-items-center w-100">
                <img src={heroes} style={cardImg} className="card-img-top img-fluid" alt="unicorn under magnifying glass"/>
              </div>
              <div className="card-body text-center">
                <span className="card-text" style={cardText}>Explore Learning</span>
                <p style={cardText}>Part 1:</p>
                <h5 className="card-title mt-3 mb-5" style={cardTitle}>DevSecOps</h5>
                <Link to="/contact"><img src={cardPin} style={pinStyle}/></Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      <section className="trainForBattle border">
        <h2 className="text-center" style={battleText}>Our latest trained.</h2>

        <div className="border container h-75 w-50 mt-5 align-self-start">
          <div className="row h-100 d-flex justify-content-around align-items-center">

            <div className="card col-4" style={cardStyle}>
              <div className="d-flex justify-content-center align-items-center w-100">
                <img src={heroes} style={cardImg} className="card-img-top img-fluid" alt="unicorn under magnifying glass"/>
              </div>
              <div className="card-body text-center">
                <span className="card-text" style={cardText}>Case Studies</span>
                <h5 className="card-title mt-3 mb-5" style={cardTitle}>Heroes Like You</h5>
                <Link to="/contact"><img src={cardPin} style={pinStyle}/></Link>
              </div>
            </div>

            <div className="card col-4" style={cardStyle}>
              <div className="d-flex justify-content-center align-items-center w-100">
                <img src={heroes} style={cardImg} className="card-img-top img-fluid" alt="unicorn under magnifying glass"/>
              </div>
              <div className="card-body text-center">
                <span className="card-text" style={cardText}>Case Studies</span>
                <h5 className="card-title mt-3 mb-5" style={cardTitle}>Heroes Like You</h5>
                <Link to="/contact"><img src={cardPin} style={pinStyle}/></Link>
              </div>
            </div>

            <div className="card col-4" style={cardStyle}>
              <div className="d-flex justify-content-center align-items-center w-100">
                <img src={heroes} style={cardImg} className="card-img-top img-fluid" alt="unicorn under magnifying glass"/>
              </div>
              <div className="card-body text-center">
                <span className="card-text" style={cardText}>Case Studies</span>
                <h5 className="card-title mt-3 mb-5" style={cardTitle}>Heroes Like You</h5>
                <Link to="/contact"><img src={cardPin} style={pinStyle}/></Link>
              </div>
            </div>

          </div>

        </div>
      </section>
    </main>
  )
}

export default Train
