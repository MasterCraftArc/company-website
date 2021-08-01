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
    marginTop: '54vh'

}

const logoBox = {
    // height: "50%",
    // width: "100%",
    // display: "flex",
    // justifyContent: "front-end",
    // alignItems: "baseline",
    
}

const logoStyle = {
    width: '23%'
    
}

const middleBox = {
    // height: "35%",
    // width: "100%",
    // display: 'flex',

}

const socialsBox = {
    // height: "10%",
    // width: "100%",
    // color: 'white',
    // fontSize: '20px',
    // paddingLeft: '10%',
}

const addressBox = {
    // height: "100%",
    // width: "60%",
    // color: 'white',
    // lineHeight: '1',
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'center',
    // paddingLeft: '10%',
}

const menuBox = {
//     // height: "100%",
//     // width: "40%",
//     // lineHeight: '1',
//     // display: 'flex',
//     // flexDirection: 'column',
//     // justifyContent: 'center',
//     // paddingLeft: '5%'
// ,    
}

const linkColor = {
    color: 'white',
    fontSize: '14px',
    fontFamily: '',
}

const menu = {
    display: 'flex',
    justifyContent: 'right',
    marginTop: '10px'
}






function Footer() {
    return (
    <footer className="footer flex-end" style = {footerStyle}> 
        <div className="container h-2/6 w-full flex flex-wrap mx-auto" style = {footerBox}>
          <div className='flex flex-wrap w-3/5 pl-8 xs:w-full'>
            <div className='flex h-4/6 xs:w-full'>
                <div className='w-1/2 xs:w-full' style = {logoBox}>
                    <img className='mx-auto mt-12' src ={verticalLogo} style= {logoStyle}/>
                </div>
                <div className='flex w-1/2 flex-end xs:w-full' style= {addressBox}>
                    <div className='mx-auto text-lg mt-16 text-white'>
                        <i class="fas fa-home text-red-600 inline-block"></i>
                        <p className="mt-2 inline-block ml-2">Defense Unicorns</p>
                        <p className="mt-2 ml-6">555 E Pikes Peak Ave</p>
                        <p className="mt-2 ml-6">Colorado Springs, Co 80903</p> 
                    </div> 
                </div>
            </div>
            <div className='w-full flex-grow h-2/6 text-gray-400 text-lg'>
                <p className='mt-12 ml-32'>Copyright ©2021. All rights reserved.</p>
            </div>
          </div>


          {/* <div className='border' style = {middleBox}> */}
           
            <div className='w-1/5 flex flex-col justify-center items-center pb-8 self-start text-white mx-auto mt-12' style= {menuBox}>
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
          {/* </div> */}

          <div style = {socialsBox} className= 'socialsBox w-1/5 flex text-3xl '>
          <a className='mt-14 h-10 ml-12' href= '#'>
                <i className="bi bi-twitter me-3 hover:bg-white hover:text-red-500 text-white rounded-full p-2 transition-all"></i>
            </a>
            <a className='mt-14 h-10' href= 'https://www.linkedin.com/company/leapfrog-ai/about/'>
                <i className="bi bi-linkedin ms-1 me-3 hover:bg-white hover:text-red-500 text-white rounded-full p-2 transition-all"></i>
            </a>
            <a className='mt-14 h-10' href= '#'>
                <i className="bi bi-facebook me-3 hover:bg-white hover:text-red-500 text-white rounded-full p-2 transition-all"></i>
            </a> 
          </div>

        </div>

    </footer>

    )
}

export default Footer


