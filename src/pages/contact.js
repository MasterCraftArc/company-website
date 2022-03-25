import * as React from "react";
import SiteHelmet from "../components/SiteHelmet";
import Header from "../components/header";
import { navigate } from "gatsby";
import axios from "axios";
import * as qs from "query-string";
import StyledBackgroundSection from "../components/contactBg";
import Button from "../components/button";
import Footer from "../components/footer";

const textAreaStyle = {
  height: "200px",
  color: "rgb(94,110,129)",
};

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.domRef = React.createRef();
    this.state = { feedbackMsg: null };
  }

  handleSubmit(event) {
    event.preventDefault();

    const formData = {};
    Object.keys(this.refs).map((key) => (formData[key] = this.refs[key].value));

    const axiosOptions = {
      url: "https://docs.google.com/forms/d/e/1FAIpQLSdtKiyFPqZS7ycB-igr7SIlQxdJstV5UMj8fHdCWbu16yY5rQ/formResponse",
      method: "post",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      data: qs.stringify(formData),
    };
    axios(axiosOptions)
      .then((response) => {
        navigate("/thankyou");
      })
      .catch((err) => {
        navigate("/thankyou");
        console.log(err)
        this.setState({
          feedbackMsg: "Form could not be submitted.",
        })
      }
      );

      
  }

  render() {
    return (
      <>
        <StyledBackgroundSection className="min-h-screen">
          <SiteHelmet route="Contact" />
          <Header />
          <main className="contact w-full flex items-center justify-center">
            <section className="contactCard rounded-2xl w-10/12 sm:w-1/2 lg:w-2/6 mt-10 opacity-90">
              <h1 className="text-center font-black text-5xl text-white pt-12 pb-6">
                Get in touch!
              </h1>
              <div className=" w-9/12 h-full mx-auto py-6  border-dark flex justify-between">
                <form
                  red={this.domRef}
                  data-netlify="true"
                  className="contactHeight w-full flex flex-col justify-evenly"
                  name="Contact"
                  onSubmit={(event) => this.handleSubmit(event)}
                >
                  <div className="m-0">
                    <input
                      ref="entry.1197773672"
                      name="firstName"
                      className="form-control w-full mb-6 text-gray-500"
                      placeholder="First Name"
                      required
                    />
                    <input
                      ref="entry.244703714"
                      name="lastName"
                      className="form-control w-full mb-6 text-gray-500"
                      placeholder="Last Name"
                      required
                    ></input>
                    <input
                      ref="emailAddress"
                      name="emailAddress"
                      className="form-control w-full text-gray-500 mb-6"
                      placeholder="Email"
                      type="email"
                      id="exampleInputEmail1"
                      required
                    />
                    <input
                      ref="entry.192647911"
                      name="organization"
                      className="form-control w-full mb-5"
                      placeholder="Organization"
                      id="organization"
                      required
                    />
                  </div>
                  <textarea
                    ref="entry.1425002156"
                    name="message"
                    className="m-0 w-100 form-control bg-transparent text-gray-500"
                    placeholder="Hi, fellow unicorn here! I'm really excited to talk about..."
                    style={textAreaStyle}
                    required
                  ></textarea>
                  <Button
                    type="submit"
                    className="bg-red-500 hover:bg-red-700 text-white my-6 w-full"
                    text="Submit"
                  />
                </form>
              </div>
            </section>
          </main>
          <Footer background={false} />
        </StyledBackgroundSection>
      </>
    );
  }
}

export default Contact;
