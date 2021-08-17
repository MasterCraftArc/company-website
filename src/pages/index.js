import * as React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import HomeHero from "../components/home/hero";
import SiteHelmet from "../components/SiteHelmet";
import WhoWeAre from "../components/home/whoWeAre";
import CaseStudies from "../components/home/whatWeDo";
import TrainForBattle from "../components/home/trainForBattle";
import headerBackground from "../images/darkMain.jpg";

const pageStyles = {
  color: "#232129",
  fontFamily: "Poppins, Roboto, sans-serif, serif",
  width: "100vw",
};

const headerStyle = {
  background: `url(${headerBackground}) fixed no-repeat`,
  backgroundSize: 'cover'
};

// markup
class Train extends React.Component {

  handleScroll(e) {
    console.log('scrolling')
    const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) { 
      console.log('bottom!')
     }
  }

  render(){
    return (
      <div style={pageStyles} className="home flex flex-col bg-top" onScroll={(e) => this.handleScroll(e)}>
        <SiteHelmet
          title="Train"
          description="Become a DevSecOps Hero with Defense Unicorns"
        />
        <Header className="" background={headerBackground}/>
        <div style={headerStyle}>
          <HomeHero />
        </div>
        <TrainForBattle />
        <WhoWeAre />
        <CaseStudies />
        <Footer></Footer>
      </div>
    );
  }
};

export default Train;
