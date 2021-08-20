import { navigate } from "gatsby";
import * as React from "react";

const trainedCardStyle = {
  width: "305px",
  height: "420px",
  backgroundColor: "#F3F3F3",
};

const trainedCardText = {
  fontSize: "12px",
  width: "87%",
  paddingTop: "5%",
  marginTop: "auto",
  marginBottom: "4%",
};

const trainedCardTitle = {
  fontSize: "15px",
};

const Card = React.forwardRef((props, ref) => (
  <div
    ref={ref}
    className="borderRadius card rounded-2xl md:mx-16 mt-10 shadow-xl border-1 border-gray-100 border-solid overflow-hidden"
    style={trainedCardStyle}
    data-category={props.category}
    onClick={ () => {navigate(props.cardLink)} } onKeyDown={ () => {navigate(props.cardLink)} }
  >
    <div 
      className="h-3/6 bg-gray-50"
    >
      <img
        src={props.imgDisplay}
        className="card-img-top mx-auto h-full"
        alt="blogpost thumbnail"
        // style={{ maxHeight: "170px" }}
      />
    </div>
    <div className="h-2/6 card-body text-center p-5">
      <div className="w-3/5 mx-auto bg-blue-900 mr-0 text-white">
        {props.category}
      </div>
      <h3 className="card-title mt-2 mb-3 text-left ml-8 font-bold text-blue-900" style={trainedCardTitle}>
        {props.title}
      </h3>
      <h4 className="mt-2 mb-3 text-left ml-8 text-gray-500">
        {props.date}
      </h4>
      <p className="card-text pb-2 text-gray-500 text-left ml-8 md:mt-5" style={trainedCardText}>
        {props.description}
      </p>
    </div>
  </div>
));

export default Card;
