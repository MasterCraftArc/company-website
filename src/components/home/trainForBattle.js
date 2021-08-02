import React from "react";
import { Link } from "gatsby";
import heroes from "../../images/card1.png";
import devsecops from "../../images/card3.png";
import cardPin from "../../images/cardPin.png";
import aquisitions from "../../images/card2.png";
import { battleText, TITLE_TEXT } from "./homeStyles";

const cardStyle = {
  width: "235px",
  height: "370px",
  borderRadius: "25px",
  backgroundColor: "rgba(65, 255, 255, 0.6)",
  boxShadow: "0 0 20px rgba(65, 255, 255, 0.6)",
};

const pinStyle = {
  width: "45%",
};

const cardText = {
  color: "white",
  fontSize: "15px",
};

const cardTitle = {
  color: "white",
  fontSize: "23px",
};

const cardImg = {
  maxWidth: "90%",
  paddingTop: "2%",
};

const magnifierStyle = {
  maxWidth: "95%",
  paddingLeft: "20%",
};

const TrainForBattle = () => {
  return (
    <section className="trainForBattle min-h-screen">
      <h2 className={`${TITLE_TEXT} text-center font-bold`} style={battleText}>
        Let us Train you for Battle
      </h2>

      <div className="flex lg:flex-row flex-col justify-evenly mt-16 lg:h-1/2 lg:w-4/5 mx-auto lg:items-stretch	 items-center">
        <div
          className="card lg:p-5 lg:w-full lg:h-full flex flex-col justify-evenly lg:my-0 my-8"
          style={cardStyle}
        >
          <div className="flex justify-center items-center w-full">
            <img
              src={heroes}
              style={magnifierStyle}
              className="card-img-top img-fluid"
              alt="unicorn under magnifying glass"
            />
          </div>
          <div className="card-body text-center">
            <span className="card-text" style={cardText}>
              Explore Learning
            </span>
            <p style={cardText}>Path 1:</p>
            <h5 className="card-title mt-3 mb-5" style={cardTitle}>
              Agile Acquisitions
            </h5>
            <Link to="/contact">
              <img
                className="mx-auto"
                src={cardPin}
                style={pinStyle}
                alt="defense unicorns circular pin"
              />
            </Link>
          </div>
        </div>

        <div
          className="card p-5 lg:w-full lg:h-full flex flex-col justify-evenly lg:my-0 my-8"
          style={cardStyle}
        >
          <div className="flex justify-center items-center w-full">
            <img
              src={aquisitions}
              style={cardImg}
              className="card-img-top img-fluid"
              alt="unicorn under magnifying glass"
            />
          </div>
          <div className="card-body text-center">
            <span className="card-text" style={cardText}>
              Explore Learning
            </span>
            <p style={cardText}>Path 2:</p>
            <h5 className="card-title mt-3 mb-5" style={cardTitle}>
              DevSecOps
            </h5>
            <Link to="/contact">
              <img
                className="mx-auto"
                src={cardPin}
                style={pinStyle}
                alt="defense unicorns circular pin"
              />
            </Link>
          </div>
        </div>

        <div
          className="card p-5 flex flex-col justify-evenly lg:my-0 my-8"
          style={cardStyle}
        >
          <div className="flex justify-center items-center w-full">
            <img
              src={devsecops}
              style={cardImg}
              className="card-img-top img-fluid"
              alt="unicorn under magnifying glass"
            />
          </div>
          <div className="card-body text-center">
            <span className="card-text" style={cardText}>
              Explore Learning
            </span>
            <p style={cardText}>Path 3:</p>
            <h5 className="card-title mt-3 mb-5" style={cardTitle}>
              Continuous Delivery
            </h5>
            <Link to="/contact">
              <img
                className="mx-auto"
                src={cardPin}
                style={pinStyle}
                alt="defense unicorns circular pin"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainForBattle;
