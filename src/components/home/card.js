import * as React from 'react'
import { navigate } from 'gatsby'
import cardPin from "../../images/cardPin.png";

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
    fontSize: "20px",
  };
  
  const cardImg = {
    maxWidth: "90%",
    paddingTop: "2%",
  };
  
  
const BattleCard = (props) => {
    return(
        <div onClick={ () => {navigate(props.cardLink)} }>
            <h3 className="text-center mb-8 font-bold text-red-500 text-3xl">{props.heading}</h3>
            <div
            className="card flex flex-col justify-evenly mx-auto p-5"
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
            
            <div className="card-body text-center">
                <span className="card-text" style={cardText}>
                    {props.title}
                </span>
                <p style={cardText}>{props.subtitle}</p>
                <h5 className="card-title mt-3 mb-5" style={cardTitle}>
                    {props.mainText}
                </h5>
                <img
                    className="mx-auto"
                    src={cardPin}
                    style={pinStyle}
                    alt="defense unicorns circular pin"
                />
            </div>
        </div>
      </div>
    )
}

export default BattleCard