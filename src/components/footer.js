import * as React from 'react';
import { Link } from 'gatsby';
import verticalLogo from "../images/logo-vertical.png";


const footerStyle = {
    height: "80vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}

const footerBox = {
    height: "50%",
    width: "30%",
    display: "flex",
    flexDirection: "column",
}

const logoBox = {
    height: "50%",
    border: "1px solid black",
    width: "100%",
    display: "flex",
    justifyContent: "center",

}

const logoStyle = {
    height: "100%",
    
}

const middleBox = {
    height: "40%",
    border: "1px solid black",
    width: "100%",

}

const socialsBox = {
    height: "10%",
    border: "1px solid black",
    width: "100%",
    color: 'white',
    fontSize: '20px',
}

const addressBox = {
    height: "100%",
    width: "60%",
    border: "1px solid black",
}

const addressFont = {
    color: 'white',
}

const menuBox = {
    height: "100%",
    width: "40%",
    border: "1px solid black",
}

const linkColor = {
    color: 'white',
    fontSize: '11px',
    fontFamily: ''

}

function Footer() {
    return (
    <footer className="footer" style = {footerStyle}> 
        <div className="container" style = {footerBox}>

          <div style = {logoBox}>
            <img src = {verticalLogo} style = {logoStyle}/>
          </div>

          <div style = {middleBox}>
            <div style = {addressFont}>
                <p>Defense Unicorns</p>
                <p>555 E Pikes Peak Ave</p>
                <p>Colorado Springs, Co 80903</p>
            </div>
            <div>
                <Link to="/train" style={linkColor}>
                    <p>Train</p>

                </Link>
                <Link to="/equip" style={linkColor}>
                    <p>Equip</p>
                    
                </Link>
                <Link to="/train" style={linkColor}>
                
                    <p>Contact</p>
                </Link>
            </div>
          </div>

          <div style = {socialsBox} className= 'socialsBox'>
            <a href= 'https://www.linkedin.com/company/leapfrog-ai/about/'>
                <i className="bi bi-linkedin ms-1 me-3"></i>
            </a>
            <a href= '#'>
                <i className="bi bi-twitter me-3"></i>
            </a>
            <a href= '#'>
                <i className="bi bi-facebook me-3"></i>
            </a> 
          </div>

        </div>
    </footer>

    )
}

export default Footer


