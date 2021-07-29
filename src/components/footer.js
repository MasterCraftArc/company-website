import * as React from 'react';
import { Link } from 'gatsby';
import verticalLogo from "../images/logo-vertical.png";


const footerStyle = {
    height: "100vh",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
}

const footerBox = {
    height: "30%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    


}

const logoBox = {
    height: "50%",
    width: "100%",
    display: "flex",
    justifyContent: "front-end",
    alignItems: "baseline",
    

}

const logoStyle = {
    height: "100%",
    
}

const middleBox = {
    height: "35%",
    width: "100%",
    display: 'flex',

}

const socialsBox = {
    height: "10%",
    width: "100%",
    color: 'white',
    fontSize: '20px',
    paddingLeft: '10%',
}

const addressBox = {
    height: "100%",
    width: "60%",
    color: 'white',
    lineHeight: '1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: '10%',
}

const menuBox = {
    height: "100%",
    width: "40%",
    lineHeight: '1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: '5%'
,    
}

const linkColor = {
    color: 'white',
    fontSize: '14px',
    fontFamily: '',
}

const menu = {
    display: 'flex',
    justifyContent: 'right',
}

function Footer() {
    return (
    <footer className="footer" style = {footerStyle}> 
        <div className="container" style = {footerBox}>

          <div style = {logoBox}>
            <img src = {verticalLogo} style = {logoStyle}/>
          </div>

          <div style = {middleBox}>
            <div style= {addressBox}>
                <p>Defense Unicorns</p>
                <p>555 E Pikes Peak Ave</p>
                <p>Colorado Springs, Co 80903</p>
            </div>
            <div style= {menuBox}>
                <Link to="/train" className='footerLink' style={linkColor}>
                    <p style= {menu}>Train</p>
                </Link>
                <Link to="/equip" className='footerLink' style={linkColor}>
                    <p style= {menu}>Equip</p>
                </Link>
                <Link to="/contact" className='footerLink' style={linkColor}>
                    <p style= {menu}>Contact</p>
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


