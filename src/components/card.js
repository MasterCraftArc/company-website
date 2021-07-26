import { Link } from 'gatsby';
import * as React from 'react';

const trainedCardStyle = {
    width: "255px",
    height: "380px",
    borderRadius: 0,
    // boxShadow: "0 0 20px rgba(65, 255, 255, 0.6)"
  }
  
  const trainedCardText = {
    fontSize: '15px',
  }
  
  const trainedCardTitle = {
    fontSize: "23px",
  }
  
  const trainedCardLink = {
    color: 'red',
    textDecoration: 'underline'
  }

function Card(props) {
    const buttonStyle = {
        borderRadius: '0',
        height: '45px',
        width: '150px',
        fontSize: '15px',
      }

    return (
        <div className="card rounded-3" style={trainedCardStyle} data-category={props.category}>
            <img src={props.imgDisplay} className="card-img-top" alt="unicorn under magnifying glass"/>
            <div className="card-body text-center">
            <h5 className="card-title mt-3 mb-5" style={trainedCardTitle}>{props.title}</h5>
            <p className="card-text pb-2" style={trainedCardText}>{props.description}</p>
            <Link to="/blog" style={trainedCardLink} className="pt-2" >READ MORE</Link>
            </div>
        </div>
    );
};

export default Card;