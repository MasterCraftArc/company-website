import * as React from "react";
import { Link } from "gatsby";
import SiteHelmet from "../components/SiteHelmet";
import Header from "../components/header";
import pc from "../images/pc.png";
import pcGear from "../images/pcGear.png";
import tech from "../images/tech.png";
import monolithic from "../images/blog1.png";

const pageStyles = {
  color: "black",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  width: "100vw",
  // background: {topBG}
};

const buttonStyle = {
  borderRadius: "0",
  height: "45px",
  width: "150px",
  fontSize: "15px",
};

const battleText = {
  // color: "#84b9ff", //for black background
  color: "#14498e",
  fontWeight: "normal",
};

const trainedCardStyle = {
  width: "255px",
  height: "380px",
  // borderRadius: '5px',
  // boxShadow: "0 0 20px rgba(65, 255, 255, 0.6)"
};

const trainedCardText = {
  fontSize: "15px",
};

const trainedCardTitle = {
  fontSize: "23px",
};

const trainedCardLink = {
  color: "red",
  textDecoration: "underline",
};

const Equip = () => {
  let cardRefs = [];
  let categoriesRef = React.createRef();
  for (let i = 1; i < 7; i++) {
    cardRefs[i] = React.createRef();
  }
  
  function updateCards(event){
    console.log(event, 'event')
    if (event.target.innerText === "All"){
      cardRefs.forEach( card => {
        card.current.style.display = 'block'
      })
    }

    else{
      for (let i = 1; i < 7; i++){
        // console.log('test', categoriesRef.current.childNodes)
        if (cardRefs[i].current.dataset.category === event.target.innerText){
          cardRefs[i].current.style.display = 'block'
        }else{
          cardRefs[i].current.style.display = 'none'
        }
      }
    }

    categoriesRef.current.childNodes.forEach((child) => {
      child.style.color = "#9CA3AF";
      child.style.fontWeight = "normal";
    });
    event.target.style.color = "#EF4444";
    event.target.style.fontWeight = "bold";
  }

  return (
    <div className="h-screen equip blog" style={pageStyles}>
      <SiteHelmet title="Blog" />

      <Header textColor="white" />
      <section className="hero flex flex-col justify-center">
        <div className="pl-12 pb-8" style={{ color: "red" }}>
          <p className="pb-8 text-white md:text-6xl text-5xl">
            The Defense Unicorns Blog
          </p>
          <div className="flex md:flex-row flex-col md:text-5xl text-4xl">
            <p className="pb-8">Translating thoughts into&nbsp;</p>
            <p className="pb-8 font-bold">action</p>
          </div>
          <p className="heroText md:text-3xl text-2xl md:w-1/2 w-full text-white">
            We believe every organization has the capacity for digital
            transformation and that continuous learning delivers improved
            outcomes when we feel comfortable applying what we’ve learned. This
            blog is your source for context-first guides, stories, and news on
            the people, process, and technology necessary to accelerate your
            mission.
          </p>
        </div>

        <div className="mt-8">
          <Link to="/contact" className="heroText w-50 pl-12">
            <button
              className="bg-blue-600 text-white hover:bg-blue-700"
              style={buttonStyle}
            >
              LEARN MORE
            </button>
          </Link>
        </div>
      </section>

      <section className="latestTrained min-h-screen mt-8 overflow-x-scroll md:overflow-auto">
        <div className="container h-75 mt-16 mx-auto relative">
        <div className="px-16 sticky top-0 bg-white">
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl" style={battleText}>Latest Posts</h2>
            <div ref={categoriesRef} className="font-black md:pl-20 text-2xl text-bold w-full border-b-2 border-solid border-gray-400 mt-16 mb-16">
              <button className="pr-4 md:pr-16 text-red-500 cursor-pointer hover:text-red-500" onClick={ (event) => updateCards(event) }>All</button>
              <button className="pr-4 md:pr-16 text-gray-400 cursor-pointer hover:text-red-500" onClick={ (event) => updateCards(event) }>Agile Acquisitions</button>
              <button className="pr-4 md:pr-16 text-gray-400 cursor-pointer hover:text-red-500" onClick={ (event) => updateCards(event) }>DevSecOps</button>
              <button className="pr-4 md:pr-16 text-gray-400 cursor-pointer hover:text-red-500" onClick={ (event) => updateCards(event) }>Case Studies</button>
            </div>
          </div>
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-rows-auto place-items-center w-full gap-y-3.5">
            {/* <Card imgDisplay={tech} ref={cardRefs[1]} data-category='People' category="aquisition" title="Aquisition New" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit."/>
            
            <Card imgDisplay={tech} ref={cardRefs[2]} data-category='Process' category="devSecOps" title="dev New" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit."/>

            <Card imgDisplay={tech} ref={cardRefs[3]} data-category='Culture' category="case-studies" title="other New" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit."/> */}
            
            <div className="card border-2 border-solid border-blue-400" style={trainedCardStyle} ref={cardRefs[1]} data-category='Agile Acquisitions'>
              <img src={tech} className="card-img-top" alt="unicorn under magnifying glass"/>
              <div className="card-body text-center">
                <div className="w-1/2 mx-auto bg-red-500 mr-0 text-white"> Agile Acquisitions</div>
                <h5 className="card-title mt-3 mb-5" style={trainedCardTitle}>Agile Acquisition 1</h5>
                <p className="card-text mb-3" style={trainedCardText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit.</p>
                <Link to="/blogpost" style={trainedCardLink} >READ MORE</Link>
              </div>
            </div>

            <div
              className="card border-2 border-solid border-blue-400"
              style={trainedCardStyle}
              data-category="DevSecOps"
              ref={cardRefs[2]}
            >
              <img
                src={monolithic}
                className="card-img-top"
                alt="unicorn under magnifying glass"
              />
              <div className="card-body text-center">
                <div className="w-1/2 mx-auto bg-red-500 mr-0 text-white">
                  DevSecOps
                </div>
                <h5
                  className="card-title text-lg px-1 mt-3 mb-5"
                  style={trainedCardTitle}
                >
                  Key Terms Cloud-Native Software Delivery: A Fact Sheet
                </h5>
                <p className="card-text mb-3" style={trainedCardText}>
                  Modern software is moving fast. While the associated lexicon
                  is continuously changing...
                </p>

                <Link to="/blogpost" style={trainedCardLink}>
                  READ MORE
                </Link>
              </div>
            </div>

            <div
              className="card border-2 border-solid border-blue-400"
              style={trainedCardStyle}
              data-category="Case Studies"
              ref={cardRefs[3]}
            >
              <img
                src={pc}
                className="card-img-top"
                alt="unicorn under magnifying glass"
              />
              <div className="card-body text-center">
                <div className="w-1/2 mx-auto bg-red-500 mr-0 text-white">
                  Case Studies
                </div>
                <h5 className="card-title mt-3 mb-5" style={trainedCardTitle}>
                  Case-Studies 1
                </h5>
                <p className="card-text mb-3" style={trainedCardText}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do. Lorem ipsum dolor sit.
                </p>
                <Link to="/blogpost" style={trainedCardLink}>
                  READ MORE
                </Link>
              </div>
            </div>

            <div
              className="card border-2 border-solid border-blue-400"
              style={trainedCardStyle}
              data-category="Case Studies"
              ref={cardRefs[4]}
            >
              <img
                src={pc}
                className="card-img-top"
                alt="unicorn under magnifying glass"
              />
              <div className="card-body text-center">
                <div className="w-1/2 mx-auto bg-red-500 mr-0 text-white">
                  Case Studies
                </div>
                <h5 className="card-title mt-3 mb-5" style={trainedCardTitle}>
                  Case-Studies 2
                </h5>
                <p className="card-text mb-3" style={trainedCardText}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do. Lorem ipsum dolor sit.
                </p>
                <Link to="/blogpost" style={trainedCardLink}>
                  READ MORE
                </Link>
              </div>
            </div>

            <div
              className="card border-2 border-solid border-blue-400"
              style={trainedCardStyle}
              data-category="Agile Acquisitions"
              ref={cardRefs[5]}
            >
              <img
                src={tech}
                className="card-img-top"
                alt="unicorn under magnifying glass"
              />
              <div className="card-body text-center">
                <div className="w-1/2 mx-auto bg-red-500 mr-0 text-white">
                  Agile Acquisitions
                </div>
                <h5 className="card-title mt-3 mb-5" style={trainedCardTitle}>
                  Acquisition 2
                </h5>
                <p className="card-text mb-3" style={trainedCardText}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do. Lorem ipsum dolor sit.
                </p>
                <Link to="/blogpost" style={trainedCardLink}>
                  READ MORE
                </Link>
              </div>
            </div>

            <div
              className="card border-2 border-solid border-blue-400"
              style={trainedCardStyle}
              data-category="DevSecOps"
              ref={cardRefs[6]}
            >
              <img
                src={pcGear}
                className="card-img-top"
                alt="unicorn under magnifying glass"
              />
              <div className="card-body text-center">
                <div className="w-1/2 mx-auto bg-red-500 mr-0 text-white">
                  DevSecOps
                </div>
                <h5 className="card-title mt-3 mb-5" style={trainedCardTitle}>
                  DevSecOps 2
                </h5>
                <p className="card-text mb-3" style={trainedCardText}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do. Lorem ipsum dolor sit.
                </p>

                <Link to="/blogpost" style={trainedCardLink}>
                  READ MORE
                </Link>
              </div>
            </div>
          </div>

          {/* <div className="row mt-5 d-flex justify-content-evenly align-items-center"> 


      <Footer />
          </div> */}
        </div>
      </section>

      <section className="min-h-screen ">
        <div className="h-1/4 px-16 md:px-32 lg:px-44 xl:px-56  mt-16 mb-16">
          <h2
            className="border-b-2 border-solid border-gray-400 text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
            style={battleText}
          >
            Defense Unicorns Learning Videos
          </h2>
        </div>

        <div className="h-3/4 px-16 md:px-56 w-full">
          {/* <img src={videos} className="xl:w-5/6 mx-auto"></img> */}
          <h1 className="text-center text-3xl font-bold text-blue-400">
            Coming Soon!
          </h1>
        </div>
      </section>

      {/* <Footer/> */}
    </div>
  );
};
export default Equip;
