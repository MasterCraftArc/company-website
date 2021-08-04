import { Link } from 'gatsby';
import * as React from 'react';

const trainedCardStyle = {
    width: "255px",
    Height: "380px",
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


const Card = React.forwardRef((props, ref) => (
        <div ref={ref} className="card border-2 border-solid border-blue-400" style={trainedCardStyle} data-category={props.category}>
            <img src={props.imgDisplay} className="card-img-top mx-auto" alt="blogpost thumbnail" style={ {maxHeight: '200px'}}/>
            <div className="card-body text-center">
            <div className="w-1/2 mx-auto bg-red-500 mr-0 text-white">{props.category}</div>
            <h5 className="card-title mt-1 mb-3" style={trainedCardTitle}>{props.title}</h5>
            <p className="card-text pb-2" style={trainedCardText}>{props.description}</p>
            <Link to={props.blogLink} style={trainedCardLink} className="pt-2" >READ MORE</Link>
            </div>
        </div>
  ));


export default Card;