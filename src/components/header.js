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
    fontSize: '30px',
//  color: "blue",
 border: '1px solid black',
 outline: 'none'
}

function Header(props) {
    return (
        <div style={ { background: props.background }}>
            <nav className="navbar sticky-top navbar-expand-lg px-5 mx-5">
                <div className="container-fluid">
                    <div className="col-2">
                        <Link to="/" className="">
                            <img className="img-fluid" src={logo} alt="Defense Unicorns Logo" style={logoStyle}/>
                        </Link>
                    </div>


                    <button style={buttonStyles} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="bi bi-list"></i>
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
                            <li><Link to="/equip"><button className="btn .navLink-drop">equip</button></Link></li>
                        </ul>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact"><button className="btn navLink">CONTACT</button></Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Header;