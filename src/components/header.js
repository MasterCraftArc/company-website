import * as React from "react";
import {Link} from "gatsby"

function Header(props) {
    return (
        <header className="mainHeader navbar navbar-expand{-sm|-md|-lg|-xl|-xxl}">
            <div className="container-fluid">
            <Link to="/" className="navbar-brand"><img className="img-fluid" src="../images/logo.png"></img></Link>
            <div>
            <Link to="/"><button className="btn btn-primary">Train</button></Link>
            <Link to="/equip"><button className="btn btn-primary">Equip</button></Link>
            <Link to="/contact"><button className="btn btn-primary">Contact</button></Link>
            </div>
            </div>
        </header>
    );
};

export default Header;