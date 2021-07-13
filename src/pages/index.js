import * as React from "react"
import SiteHelmet from "../components/SiteHelmet"
import Header from "../components/header"
import background from "../images/bgBlankHD.png"
import heroes from "../images/card1.png"
import aquisitions from "../images/card2.png"
import devsecops from "../images/card3.png"

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
  width: "300px",
  height: "450px",
  borderRadius: "25px"
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
        <h2 className="text-center" style={battleText}>Let us train you for battle</h2>
        <div className="container">

          <div className="card" style={cardStyle}>
            <div>
              <img src={heroes} className="card-img-top" alt="..."/>
            </div>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>

        </div>
      </section>
    </main>
  )
}

export default Train
