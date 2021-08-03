import * as React from "react";
import { Link } from 'gatsby';

function Button(props) {
    const buttonStyle = {
        borderRadius: '12px',
        height: '45px',
        minWidth: '150px',
        fontSize: '15px',
        fontWeight: '600'
      }

    return (
        <Link to={props.linkTo} className={props.linkStyles}><button style={buttonStyle} className={props.className} >{props.text}</button></Link>
    );
};

export default Button;

