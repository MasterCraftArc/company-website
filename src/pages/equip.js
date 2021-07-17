import * as React from 'react';
import { Link } from 'gatsby';
import SiteHelmet from '../components/SiteHelmet';
import Header from '../components/header'
import Footer from '../components/footer'
import topBG from '../images/Segmented Background Images/Top_W.jpg'
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
import {useRef} from 'react'

const pageStyles = {
  color: 'black',
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  // background: {topBG}
}

const textBold = {
  color: "red",
  fontWeight: "bold",
  fontSize: "60px"
}

const buttonStyle = {
  borderRadius: '0',
  height: '45px',
  width: '150px',
  fontSize: '15px',
}

const showcase = {
  fontSize: '35px',
  fontWeight: '200'
}

const topic = {
  fontSize: '65px',
  fontWeight: '100',
  color: 'red'
}

const heroText = {
  fontSize: '20px',
  paddingRight: '45%',
  marginTop: '1%'
}

const battleText = {
  // color: "#84b9ff", //for black background
  color: '#14498e',
  fontSize: "45px"
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

const latestTrained = {
  height: '110vh'
}

const selectStyles = {
  color: 'black',
  position: 'absolute',
  right: 375,
  top: 5,
  width: '200px',
  height: '40px',
  fontSize: '15px'
}

const Equip = () => {
  let cardRefs = []
  let selectRef = React.createRef();
  for (let i = 1; i < 7; i++){
    cardRefs[i] = React.createRef();
  }
  
  function updateCards(){
    if (selectRef.current.value == 'All Categories'){
      cardRefs.forEach( card => {
        card.current.style.display = 'block'
      })
    }
    else{
      for (let i = 1; i < 7; i++){
        console.log(cardRefs[i].current)
        if (cardRefs[i].current.dataset.category == selectRef.current.value){
          cardRefs[i].current.style.display = 'block'
        }else{
          cardRefs[i].current.style.display = 'none'
        }
      }
    }

  }

  return (
    <div className="container-fluid equip blog" style={pageStyles}>
      <SiteHelmet title="Blog" /> 
      <Header />

      <section className="hero d-flex flex-column justify-content-center">
          <h1>
            <p style={showcase}>Showcase your thought</p>
            <p style={topic}>provoking topic and</p>
            <p style={textBold}>ideas</p>
          </h1>

          <p className = 'heroText' style={heroText}>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consecutar adijecps temper test incidunt kibore; Lorem ipsum dolor sit amet, consecutar adijecps temper test incidunt kibore.</p>
          
          <div>
            <Link to="/contact" className='mt-3 heroText w-50'><button className="btn btn-primary" style={buttonStyle}>LEARN MORE</button></Link>
          </div>

      </section>

      <section className="latestTrained" style={latestTrained}>
        
        <div className='position-relative'>
        <h2 className="text-center" style={battleText}>Our latest trained.</h2>
        <select className="form-select" aria-label="Default select example" style={selectStyles} ref={selectRef} onChange={() => updateCards()}>
          <option defaultValue>All Categories</option>
          <option value="aquisition">Aquisition</option>
          <option value="devSecOps">DevSecOps</option>
          <option value="case-studies">Case-Studies</option>
        </select>
        </div>

        <div className="container h-75 mt-5 d-flex justify-content-center">
          
          <div className="row h-100 w-75 d-flex justify-content-between">

            <div className="card rounded-3" style={trainedCardStyle} data-category='aquisition' ref={cardRefs[1]}>
              <img src={tech} className="card-img-top" alt="unicorn under magnifying glass"/>
              <div className="card-body text-center">
                <h5 className="card-title mt-3 mb-5" style={trainedCardTitle}>Aquisition 1</h5>
                <p className="card-text" style={trainedCardText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit.</p>
                <Link to="/blog" style={trainedCardLink} >READ MORE</Link>
              </div>
            </div>

            <div className="card rounded-3" style={trainedCardStyle} data-category='devSecOps' ref={cardRefs[2]}>
              <img src={pcGear} className="card-img-top" alt="unicorn under magnifying glass"/>
              <div className="card-body text-center">
                <h5 className="card-title mt-3 mb-5" style={trainedCardTitle}>DevSecOps 1</h5>
                <p className="card-text" style={trainedCardText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit.</p>

                <Link to="/blog" style={trainedCardLink} >READ MORE</Link>
              </div>
            </div>


            <div className="card rounded-3" style={trainedCardStyle} data-category='case-studies' ref={cardRefs[3]}>
              <img src={pc} className="card-img-top" alt="unicorn under magnifying glass"/>
              <div className="card-body text-center">
                <h5 className="card-title mt-3 mb-5" style={trainedCardTitle}>Case-Studies 1</h5>
                <p className="card-text" style={trainedCardText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit.</p>
                <Link to="/blog" style={trainedCardLink} >READ MORE</Link>
              </div>
            </div>

            <div className="card rounded-3" style={trainedCardStyle} data-category='case-studies' ref={cardRefs[4]}>
              <img src={pc} className="card-img-top" alt="unicorn under magnifying glass"/>
              <div className="card-body text-center">
                <h5 className="card-title mt-3 mb-5" style={trainedCardTitle}>Case-Studies 2</h5>
                <p className="card-text" style={trainedCardText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit.</p>
                <Link to="/blog" style={trainedCardLink} >READ MORE</Link>
              </div>
            </div>

            <div className="card rounded-3" style={trainedCardStyle} data-category='aquisition' ref={cardRefs[5]}>
              <img src={tech} className="card-img-top" alt="unicorn under magnifying glass"/>
              <div className="card-body text-center">
                <h5 className="card-title mt-3 mb-5" style={trainedCardTitle}>Aquisition 2</h5>
                <p className="card-text" style={trainedCardText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit.</p>
                <Link to="/blog" style={trainedCardLink} >READ MORE</Link>
              </div>
            </div>

            <div className="card rounded-3" style={trainedCardStyle} data-category='devSecOps' ref={cardRefs[6]}>
              <img src={pcGear} className="card-img-top" alt="unicorn under magnifying glass"/>
              <div className="card-body text-center">
                <h5 className="card-title mt-3 mb-5" style={trainedCardTitle}>DevSecOps 2</h5>
                <p className="card-text" style={trainedCardText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit.</p>

                <Link to="/blog" style={trainedCardLink} >READ MORE</Link>
              </div>
            </div>
          </div>

          {/* <div className="row mt-5 d-flex justify-content-evenly align-items-center">



      <Footer />
          </div> */}

        </div>
      </section>

    </div>
  );
}
export default Equip;
