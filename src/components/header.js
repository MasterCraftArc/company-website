import * as React from "react";
import {Link} from "gatsby"
import logo from "../images/logo.png"

const logoStyle = {
    width: "80%"
}

const navStyle = {
    paddingRight: "5%",
    paddingLeft: "5%"
}
const navLinkStyle = {
 color: ""
}

function Header(props) {
    return (
        // <nav className="mainHeader navbar navbar-expand{-sm|-md|-lg|-xl|-xxl}" style={navStyle}>
        //     <div className="container-fluid">
        //         <div className="col-2">
        //             <Link to="/" className="">
        //                 <img className="img-fluid" src={logo} alt="Defense Unicorns Logo" style={logoStyle}/>
        //             </Link>
        //         </div>
        //         <div className="col-10 border" style={navLinkStyle}>
        //             <div className="collapse navbar-collapse">
        //                 <ul className="navbar-nav">
        //                     <li className="nav-item">
        //                     <Link to="/"><button className="btn">Train</button></Link>

        //                     </li>
        //                     <li>
        //                     <Link to="/equip"><button className="btn">Equip</button></Link>
                                
        //                         </li>
        //                     <li>
        //                         <Link to="/contact"><button className="btn ">Contact</button></Link>
        //                     </li>
        //                 </ul>

        //             </div>
        //         </div>
        //     </div>
        // </nav>
        <nav class="navbar navbar-expand-lg navbar-light bg-light px-5">
            <div class="container-fluid">
                <div className="col-2">
                    <Link to="/" className="">
                         <img className="img-fluid" src={logo} alt="Defense Unicorns Logo" style={logoStyle}/>
                    </Link>
                </div>


                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                {/* <div className="d-flex justify-content-end"> */}

                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav justify-content-end">
                    <li class="nav-item">
                        <Link to="/"><button className="btn">Train</button></Link>
                    </li>
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Equip
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                    </li>
                    <li class="nav-item">
                        <Link to="/contact"><button className="btn ">Contact</button></Link>
                    </li>
                </ul>
                </div>
                {/* </div> */}
            </div>
        </nav>
    );
};

export default Header;