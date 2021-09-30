import { navigate } from "gatsby";
import * as React from "react";
import categoryPin from "../images/blog/categoryPin.png"

const trainedCardStyle = {
height: '620px',
backgroundColor: "#F3F3F3",
};

const trainedCardText = {
  fontSize: "12px",
  width: "87%",
  paddingTop: "2%",
  marginTop: "auto",
  marginBottom: "4%",
};

const trainedCardTitle = {
  // fontSize: "22px",
  fontWeight: "600",
  color: "#154A8F",
  paddingTop: "4%",
};

const textStyle = {

}

const Card = React.forwardRef((props, ref) => (
  <div
    role="none"
    ref={ref}
    className="borderRadius card rounded-2xl mt-10 sm:mx-5 shadow-xl border-1 border-gray-100 border-solid overflow-hidden"
    style={trainedCardStyle}
    data-category={props.category}
    onClick={() => {
      navigate(props.cardLink);
    }}
    onKeyDown={() => {
      navigate(props.cardLink);
    }}
  >
    <div className="h-4/6 bg-gray-50 w-full flex justify-center items-center">
      <img
        src={props.imgDisplay}
        className="card-img-top mx-auto object-cover py-2"
        alt="blogpost thumbnail"
      />
    </div>
    <div className="h-1/3 card-body text-center relative"
    style={textStyle}>
      <h3
        className="card-title mt-2 mb-3 tracking-wide font-semibold text-left ml-8 text-2xl"
        style={trainedCardTitle}
      >
        {props.title}
      </h3>
      <h4 className="sm:mt-2 sm:mb-3 text-left ml-8 text-sm text-gray-500">{props.date}</h4>
      <p
        className="card-text text-sm pb-2 text-gray-500 text-left ml-8 md:mt-5"
        style={trainedCardText}
      >
        {props.description}
      </p>
      <div className="w-3/5 ml-8 absolute bottom-6 flex items-center">
        <img
          className="w-24 mr-2 background-transparent"
          src={categoryPin}
          alt="Doug circle pin"
          style={ {width: '30px'} }
        />
        {props.category}
      </div>
    </div>
  </div>
));

export default Card;
