import * as React from 'react';
import { Link } from 'gatsby';
import SiteHelmet from '../components/SiteHelmet';
import Header from '../components/header'
import verticalLogo from "../images/logo-vertical.png";



const formContainerStyles = {
  height: '90vh'
}

const textAreaStyle = {
  height: '200px'
}

const buttonStyle = {
  borderRadius: '0',
  height: '45px',
  width: '150px',
  fontSize: '15px',
}

const footerStyles = {
  height: "100vh",
  width: '100vw'
}

const footerBox = {
  height: "50%",
  width: "70%",
  display: "flex",
  flexDirection: "column",
  marginLeft: '35%'
}

const logoBox = {
  height: "50%",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: 'center',
  color: 'black'
}

const mainText = {
  height: "100%",
  fontSize: '100px',
  color: '#14498e',
}

const middleBox = {
  height: "34%",
  width: "100%",
  display: 'flex',
}

const socialsBox = {
  height: "10%",
  width: "100%",
  color: 'black',
  fontSize: '20px',
  paddingLeft: '10%',
  paddingTop: '5%'
}

const addressBox = {
  height: "100%",
  width: "100%",
  color: 'black',
  lineHeight: '0.5',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  paddingLeft: '10%',
  fontSize: '20px'
}

const menuBox = {
  height: "100%",
  width: "40%",
  lineHeight: '5%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  paddingLeft: '5%'
,    
}

const linkColor = {
  color: 'black',
  fontSize: '14px',
  fontFamily: '',
}

const menu = {
  display: 'flex',
  justifyContent: 'right',
}

const selectStyles = {

}

const labelStyles = {
  color: 'black',
  fontSize: '18px',
  color: '#14498e',
  fontWeight: '700',

}

const contact = () => {
  return (
    <main className='container-fluid contact' style={ footerStyles }>
      <SiteHelmet title="Contact" />
      <Header background="transparent" />

    <section className="formContainer row flex-wrap" style={formContainerStyles}>
        <div className="col-6 h-100 border-primary d-flex align-items-center justify-content-center">
      <div className="container" style = {footerBox}>

      <div style = {logoBox} className=''>
        <h1 style={mainText} className='ms-5'>Get In Touch.</h1>
      </div>

      <div className="" style = {middleBox}>
        <div style= {addressBox}>
            <p>Defense Unicorns</p>
            <p>555 E Pikes Peak Ave</p>
            <p>Colorado Springs, Co 80903</p>
        </div>
        {/* <div style= {menuBox}>
            <Link to="/train" className='footerLink' style={linkColor}>
                <p style= {menu}>Train</p>
            </Link>
            <Link to="/equip" className='footerLink' style={linkColor}>
                <p style= {menu}>Equip</p>
            </Link>
            <Link to="/contact" className='footerLink' style={linkColor}>
                <p style= {menu}>Contact</p>
            </Link>
        </div> */}
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

        </div>

        <div className="col-6 h-100 border-dark d-flex align-items-center justify-content-center ">
          <form className='w-75'>
            <div className='d-flex justify-content-between names'>
              <input className='form-control' placeholder="What's your first name?"></input>
              <input className='form-control' placeholder='and your Last?'></input>
            </div>
            <div className="mt-2 mb-3">
              <input placeholder='Now where can we reach you? (email)' type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <label for="textBox" className="form-label mt-4 ms-1" style={labelStyles}>Who are you?</label>
            <select id='textBox' className="form-select mb-3" aria-label="Default select example" style={selectStyles}>
              <option defaultValue>Private Company</option>
              <option value="government">Government</option>
              <option value="individual">Individual</option>
            </select>
            <textarea placeholder="Hi Defense Unicorns I'm really excited to talk..." className='mt-3 w-100 form-control' style={textAreaStyle}></textarea >
            <Link to="/equip"><button className="btn btn-danger me-5 mt-5" style={buttonStyle}>SUBMIT</button></Link>
          </form>
        </div>
      </section>
    </main>
  );
}

export default contact;