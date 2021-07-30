import * as React from "react";
import {Link} from "gatsby"
import logo from "../images/logo.png"
import { Menu } from '@headlessui/react'

const logoStyle = {
    maxWidth: "15vh",
    filter: 'drop-shadow(1px 1px 2px lightgray)'
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

const menuStyle = {
    height: '50px'
}

function Header({ fixed }) {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        //https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/react/navbars
        <>
            <nav className="relative flex flex-wrap items-center justify-between">
            <div className="container mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                <Link
                    className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                    to="/"
                >
                    <img className="img-fluid" src={logo} alt="Defense Unicorns Logo" style={logoStyle}/>
                </Link>
                <button
                    className="text-white cursor-pointer text-4xl leading-none px-1 py-0 outline-none rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                    type="button"
                    onClick={() => setNavbarOpen(!navbarOpen)}
                >
                    <i className="bi bi-list"></i>
                </button>
            </div>
            <div
              className={
                "lg:flex flex-grow items-center bg-white rounded-xl lg:bg-transparent py-2" +
                (navbarOpen ? " flex" : " hidden")
              }
              id="example-navbar-danger"
            >
              <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                <li className="nav-item">
                  <Link
                    className="px-3  text-lg  uppercase text-black lg:text-white hover:text-red-400"
                    to="/"
                  >
                    <span className="ml-2">Train</span>
                  </Link>
                </li>
                <li className="nav-item">
                        <Link to='/equip' className="text-lg flex uppercase text-black lg:text-white hover:text-red-400 border-1 border-solid border-red-300">
                           <span className="ml-5">Equip</span>
                       </Link>

                    {/* Here lies the menus for additional options under equip */}
                   {/* <div className="hidden lg:inline-block relative parent">
                       <Link to='/equip' className="text-lg flex uppercase text-black lg:text-white hover:text-red-400 border-1 border-solid border-red-300">
                           <span className="ml-5">Equip <i class="bi bi-chevron-down"></i></span>
                       </Link>
                       <ul className=" hidden lg:inline-block child transition duration-300 md:absolute top-full left-0 md:w-48 bg-white md:shadow-lg md:rounded-b text-black ">
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
                   </div> */}
                   {/* <div className="lg:hidden">
                    <Menu>
                        <Menu.Button className="text-xl flex uppercase text-black ml-5">Equip <i class="bi bi-chevron-down"></i></Menu.Button>
                        
                        <Menu.Items 
                            className="flex flex-col ml-10" 

                        >
                            <Menu.Item disabled>
                                <Link href="#" className="text-blue-500 font-bold uppercase flex px-4 py-3 hover:bg-gray-100">
                                   Web Design
                               </Link>
                            </Menu.Item>

                            <Menu.Item>
                            {({ active }) => (
                                <Link to="/equip" className="text-blue-500 font-bold uppercase flex px-4 py-3 hover:bg-gray-100">
                                Blog
                                </Link>
                            )}
                            </Menu.Item>

                            <Menu.Item>
                            {({ active }) => (
                                <Link href="#" className="text-blue-500 font-bold flex px-4 py-3 hover:bg-gray-100">
                                    OUR APPROACH
                                </Link>
                            )}
                            </Menu.Item>

                        </Menu.Items>
                    </Menu>
                   </div> */}
                </li> 
                <li className="nav-item">
                  <Link
                    className="px-3  text-lg  uppercase text-black lg:text-white hover:text-red-400"
                    to="/contact"
                  >
                    <span className="ml-2">Contact</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    
    );
};

export default Header;