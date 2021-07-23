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

const linkStyles = {
    // color: 'white',
    fontSize: '3vw'
}

function Header(props) {
    return (
        // <div style={ { background: props.background }}>
        //     <nav className="navbar sticky-top navbar-expand-lg px-5 mx-5">
        //         <div className="container-fluid">
        //             <div className="col-2">
                        // <Link to="/" className="">
                        //     <img className="img-fluid" src={logo} alt="Defense Unicorns Logo" style={logoStyle}/>
                        // </Link>
        //             </div>


        //             <button style={buttonStyles} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        //                 <i className="bi bi-list"></i>
        //             </button>

        //             <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
        //             <ul className="navbar-nav text-end">
        //                 <li className="nav-item">
        //                     <Link to="/"><button className="btn navLink" styles={linkStyles}>TRAIN</button></Link>
        //                 </li>
        //                 <li className="nav-item dropdown">
        //                 <a styles={linkStyles} className="nav-link dropdown-toggle navLink" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        //                     EQUIP
        //                 </a>
        //                 <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        //                     <li><Link to="/info"><button className="btn .navLink-drop">info</button></Link></li>
        //                     <li><Link to="/equip"><button className="btn .navLink-drop">equip</button></Link></li>
        //                 </ul>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link to="/contact"><button className="btn navLink">CONTACT</button></Link>
        //                 </li>
        //             </ul>
        //             </div>
        //         </div>
        //     </nav>

        // </div>
        <div className="px-24 p-1">
            <nav style={ {color: props.textColor} } className="flex px-4 items-center relative font-normal text-xl">
                <div className="md:py-0 py-4">
                    <Link to="/" className="">
                            <img className="img-fluid" src={logo} alt="Defense Unicorns Logo" style={logoStyle}/>
                    </Link>
                </div>
                <ul className="md:px-2 ml-auto md:flex md:space-x-2 absolute md:relative top-full left-0 right-0">
                    <li>
                        <Link to='/' className="flex md:inline-flex p-4 items-center hover:text-red-300">
                            <span>Train</span>
                        </Link>
                    </li>
                    {/* <li>
                        <Link to='/equip' className="flex md:inline-flex p-4 items-center hover:bg-gray-50">
                            <span>Equip</span>
                        </Link>
                    </li> */}
                    <li className="relative parent">
                        <Link to='/equip' className="flex justify-between md:inline-flex p-4 items-center space-x-2 hover:text-red-300">
                            <span>Equip</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-current pt-1" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg>
                        </Link>
                        <ul className="child transition duration-300 md:absolute top-full right-0 md:w-48 bg-white md:shadow-lg md:rounded-b text-black ">
                            <li>
                                <Link href="#" className="flex px-4 py-3 hover:bg-gray-100">
                                    Web Design
                                </Link>
                            </li>
                            <li>
                                <Link to="/equip" className="flex px-4 py-3 hover:bg-gray-100">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="flex px-4 py-3 hover:bg-gray-100">
                                    Machine Learning
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/contact" className="flex md:inline-flex p-4 items-center hover:text-red-300">
                            <span>Contact</span>
                        </Link>
                    </li>
                </ul>
                <div className="ml-auto md:hidden text-gray-500 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
                </div>
            </nav>
        </div>

    );
};

export default Header;