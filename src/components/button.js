import * as React from "react";
import { Link } from "gatsby";

function Button(props) {
  const buttonStyle = {
    borderRadius: "4px",
    height: `${props.height ? props.height : "40px"}`,
    minWidth: `${props.width ? props.width : "165px"}`,
    fontSize: "16px",
    fontWeight: "400",
    fontFamily: "poppins",
    width: "205px",
  };

  return (
    <Link to={props.linkTo} className={props.linkStyles}>
      <button
        style={buttonStyle}
        className={`${
          props.className
            ? props.className
            : "bg-red-500 text-white hover:text-white hover:font-medium hover:bg-red-700"
        } `}
      >
        {props.text}
      </button>
    </Link>
  );
}

export default Button;
