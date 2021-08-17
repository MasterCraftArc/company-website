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
  
  
  const cardTitle = {
    color: "white",
    fontSize: "19px",
  };
  
  const cardImg = {
    maxWidth: "98%",
    paddingTop: "3%",
  };
  
  
const BattleCard = (props) => {
    return(
        <div aria-hidden="true" onClick={ () => {navigate(props.cardLink)} } onKeyDown={ () => {navigate(props.cardLink)} }>
            
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
            
            <div className="card-body text-center ">
                <h3 className="text-center mt-8 text-white text-3xl">{props.heading}</h3>
                <h5 className="card-title mt-3 mb-5 font-bold" style={cardTitle}>
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