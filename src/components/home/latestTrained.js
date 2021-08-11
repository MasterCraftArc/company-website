import React from "react";
import { Link } from "gatsby";
import { battleText, TITLE_TEXT } from "./homeStyles";
import pc from "../../images/pc.png";
import pcGear from "../../images/pcGear.png";
import tech from "../../images/tech.png";

const trainedCardStyle = {
  width: "235px",
  height: "370px",
  borderRadius: 0,
};

const trainedCardText = {
  fontSize: "15px",
};

const trainedCardTitle = {
  fontSize: "23px",
};

const trainedCardLink = {
  position: "relative",
  bottom: "0",
  color: "red",
  textDecoration: "underline",
};

export const LatestTrained = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center">
      <h2 className={`text-center ${TITLE_TEXT}`} style={battleText}>
        Our latest trained.
      </h2>

      <div className="h-full mt-1">
        <div className="h-3/4 w-full lg:w-3/4 mx-auto mt-10 grid md:grid-cols-3 xs:grid-cols-1 place-items-center">
          <div className="card md:my-0 xs:my-8" style={trainedCardStyle}>
            <img
              src={pc}
              className="card-img-top self-start"
              alt="unicorn under magnifying glass"
            />
            <div className="card-body text-center">
              <h5 className="card-title mt-3 mb-5" style={trainedCardTitle}>
                Card Title
              </h5>
              <p className="card-text mb-5 p-1" style={trainedCardText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
                Lorem ipsum dolor sit.
              </p>
              <Link to="/blog" className="" style={trainedCardLink}>
                READ MORE
              </Link>
            </div>
          </div>

          <div className="card md:my-0 xs:my-8" style={trainedCardStyle}>
            <img
              src={pcGear}
              className="card-img-top"
              alt="unicorn under magnifying glass"
            />
            <div className="card-body text-center">
              <h5 className="card-title mt-3 mb-5" style={trainedCardTitle}>
                Card Title
              </h5>
              <p className="card-text mb-5 p-1" style={trainedCardText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
                Lorem ipsum dolor sit.
              </p>

              <Link to="/blog" className="" style={trainedCardLink}>
                READ MORE
              </Link>
            </div>
          </div>
          <div className="card md:my-0 xs:my-8" style={trainedCardStyle}>
            <img
              src={tech}
              className="card-img-top"
              alt="unicorn under magnifying glass"
            />
            <div className="card-body text-center">
              <h5 className="card-title mt-3 mb-5" style={trainedCardTitle}>
                Card Title
              </h5>
              <p className="card-text mb-5 p-1" style={trainedCardText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
                Lorem ipsum dolor sit.
              </p>
              <Link to="/blog" className="" style={trainedCardLink}>
                READ MORE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestTrained;
