import * as React from 'react';
import { Link } from 'gatsby';
import SiteHelmet from '../components/SiteHelmet';
import Header from '../components/header'
import verticalLogo from "../images/logo-vertical.png";
import { navigate } from "gatsby";
import axios from "axios"
import * as qs from "query-string"

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
  paddingTop: '1%'
}

const addressBox = {
  height: "100%",
  width: "100%",
  color: 'black',
  lineHeight: '1',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  paddingLeft: '5%',
  fontSize: '20px',
  // color: 'white'
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

const labelStyles = {
  color: 'black',
  fontSize: '18px',
  color: '#14498e',
  fontWeight: '700',

}

class Contact extends React.Component {

  constructor(props) {
    super(props)
    this.domRef = React.createRef()
    this.state = { feedbackMsg: null }
  }

  handleSubmit(event){
    event.preventDefault()
    
    const formData = {}
    Object.keys(this.refs).map(key => (formData[key] = this.refs[key].value))

    const axiosOptions = {
      url: this.props.location.pathname,
      method: "post",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      data: qs.stringify(formData),
    }

    axios(axiosOptions)
      .then(response => {
        navigate("/")
      })
      .catch(err =>
        this.setState({
          feedbackMsg: "Form could not be submitted.",
        })
      )
  }

  render() {

    return (
      <main className='contact mx-auto p-0 m-0' style={ footerStyles }>
        <SiteHelmet title="Contact" />
        <Header textColor="black"/>
  
        <section className="formContainer flex flex-col flex-wrap min-h-screen m-0 sm:flex-row ">
          <div className="w-full sm:w-1/2 h-full border-primary flex items-center justify-center">
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
  
          <div className="w-full sm:w-1/2 pt-6 sm:pt-0 border-dark flex items-center justify-center text-white sm:text-black">
            <form red={this.domRef} data-netlify="true" className='w-3/4 flex flex-col ' name='Contact' onSubmit={event => this.handleSubmit(event)}>
            <input ref="form-name" type="hidden" name="form-name" value="Contact" />
              <div className='flex justify-between names '>
                <input ref="firstName" name="firstName" className='form-control' placeholder="What's your first name?"></input>
                <input ref="lastName" name="lastName" className='form-control' placeholder='and your Last?'></input>
              </div>
              <div className="mt-2 mb-3 w-100">
                <input ref="emailAddress" name="emailAddress" placeholder='Now where can we reach you? (email)' type="email" className="form-control w-full " id="exampleInputEmail1"/>
              </div>
              <label className="form-label mt-4 ms-1" style={labelStyles}>Who are you?</label>
              <select ref="submissionFrom" name="submissionFrom" id='textBox' className="form-select mb-3 text-gray-500 bg-gray-50" aria-label="Default select example">
                <option defaultValue>Private Company</option>
                <option value="government">Government</option>
                <option value="individual">Individual</option>
              </select>
              <textarea ref="message" name="message" placeholder="Hi Defense Unicorns I'm really excited to talk..." className='mt-3 w-100 form-control bg-transparent' style={textAreaStyle}></textarea >
              <button type='submit' className="bg-red-500 hover:bg-red-700 text-white me-5 mt-5" style={buttonStyle}>SUBMIT</button>
            </form>
          </div>
        </section>
      </main>
    );

  };
}

export default Contact;