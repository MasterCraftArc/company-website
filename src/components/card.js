import { Link } from "gatsby";
import * as React from "react";

const trainedCardStyle = {
  width: "274px",
  Height: "412px",
  border: "2px solid #8ff3f3",
};

const trainedCardText = {
  fontSize: "13px",
  width: "87%",
  paddingTop: "5%",
  marginTop: "auto",
  marginBottom: "4%",
};

const trainedCardTitle = {
  fontSize: "14px",
  color: "black",
};

const trainedCardLink = {
  color: "red",
  textDecoration: "underline",
};

const Card = React.forwardRef((props, ref) => (
  <div
    ref={ref}
    className="borderRadius card border-2 border-solid border rounded-lg"
    style={trainedCardStyle}
    data-category={props.category}
  >
    <img
      src={props.imgDisplay}
      className="card-img-top mx-auto"
      alt="blogpost thumbnail"
      style={{ maxHeight: "170px" }}
    />
    <div className="blogCard card-body text-center">
      <div className="w-1/3 mx-auto bg-red-500 mr-0 text-white">
        {props.category}
      </div>
      <h5 className="card-title mt-3 mb-3 text-left ml-8" style={trainedCardTitle}>
        {props.title}
      </h5>
      <p className="card-text pb-2 text-gray-500 text-left ml-8 mt-8" style={trainedCardText}>
        {props.description}
      </p>
      <Link to={props.blogLink} style={trainedCardLink} className="readLink pt-2 text-left pr-10">
        READ MORE
      </Link>
    </div>
  </div>
));

export default Card;
