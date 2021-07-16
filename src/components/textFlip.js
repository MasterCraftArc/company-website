import * as React from 'react';
// import { Link } from 'gatsby';
// import verticalLogo from "../images/logo-vertical.png";
import { motion } from "framer-motion"

const icon = {
    hidden: {
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)"
    },
    visible: {
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)"
    }
  }

  
function Flip(props) {
      
        //   constructor(){  

//         super();  
//         this.state = {  
//             message: "my friend (from state)!"  
//         };  
//         this.updateMessage = this.updateMessage.bind(this);   
//    }

//    updateMessage() {  
//         this.setState({  
//             message: "my friend (from changed state)!"  
//         });  
//     }

//     componentDidMount() {
//         setTimeout(function() { //Start the timer
//             this.setState({render: true}) //After 1 second, set render to true
//         }.bind(this), 1000)
//       }

    // render(){
  
    return ( 
            <span>{this.state.message}</span> 

            )
    // }
}

export default Flip


