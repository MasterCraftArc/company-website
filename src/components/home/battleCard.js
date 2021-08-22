import * as React from "react";
import { navigate } from "gatsby";

const cardStyle = {
  maxWidth: "355px",
  height: "450px",
  borderRadius: "25px",
  backgroundColor: "#F3F3F3",
};

const cardTitle = {
  fontSize: "19px",
};

const cardImg = {
  maxWidth: "98%",
  paddingTop: "3%",
};

const BattleCard = (props) => {
  return (
    <div
      className="flex mx-2"
      aria-hidden="true"
      onClick={() => {
        navigate(props.cardLink);
      }}
      onKeyDown={() => {
        navigate(props.cardLink);
      }}
    >
      <div
        className="card 
          flex flex-col justify-evenly mx-auto p-12"
        style={cardStyle}
      >
        <div className="flex justify-center items-center w-full">
          <img
            src={props.image}
            style={cardImg}
            className="card-img-top img-fluid"
            alt={props.altText}
          />
        </div>

        <div className="card-body text-center text-blue-900">
          <h3 className="text-center mt-8 text-3xl">{props.heading}</h3>
          <h5 className="card-title mt-3 mb-5 font-bold" style={cardTitle}>
            {props.mainText}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default BattleCard;
