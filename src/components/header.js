import * as React from "react";
import {Link} from "gatsby"
import logo from "../images/logo.png"

const logoStyle = {
    maxWidth: "15vh"
}

const navStyle = {
    paddingRight: "5%",
    paddingLeft: "5%"
}
const buttonStyles = {
 color: "white",
 border: '2px solid black'
}

function Header(props) {
    return (
        <nav className="navbar sticky-top navbar-expand-lg px-5 mx-5">
            <div className="container-fluid">
                <div className="col-2">
                    <Link to="/" className="">
                         <img className="img-fluid" src={logo} alt="Defense Unicorns Logo" style={logoStyle}/>
                    </Link>
                </div>


                <button style={buttonStyles} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                <ul className="navbar-nav text-end">
                    <li className="nav-item">
                        <Link to="/"><button className="btn navLink">TRAIN</button></Link>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle navLink" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        EQUIP
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><Link to="/info"><button className="btn .navLink-drop">info</button></Link></li>
                        <li><Link to="/blog"><button className="btn .navLink-drop">equip</button></Link></li>
                    </ul>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact"><button className="btn navLink">CONTACT</button></Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;