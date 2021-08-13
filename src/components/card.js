import { Link } from "gatsby";
import * as React from "react";

const trainedCardStyle = {
  width: "255px",
  Height: "412px",
};

const trainedCardText = {
  fontSize: "13px",
  width: "87%",
  paddingTop: "9%",
};

const trainedCardTitle = {
  fontSize: "18px",
  color: "black",
};

const trainedCardLink = {
  color: "red",
  textDecoration: "underline",
};

const Card = React.forwardRef((props, ref) => (
  <div
    ref={ref}
    className="card --tw-border-opacity: 1;
    border-color: rgba(80, 249, 255, var(--tw-border-opacity))"
    style={trainedCardStyle}
    data-category={props.category}
  >
    <img
      src={props.imgDisplay}
      className="card-img-top mx-auto"
      alt="blogpost thumbnail"
      style={{ maxHeight: "170px" }}
    />
    <div className="card-body text-center">
      <div className="w-1/2 mx-auto bg-red-500 mr-0 text-white">
        {props.category}
      </div>
      <h5 className="card-title mt-1 mb-3" style={trainedCardTitle}>
        {props.title}
      </h5>
      <p className="card-text pb-2" style={trainedCardText}>
        {props.description}
      </p>
      <Link to={props.blogLink} style={trainedCardLink} className="pt-2">
        READ MORE
      </Link>
    </div>
  </div>
));

export default Card;
