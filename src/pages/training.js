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

class Training extends React.Component {
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
      url: 'https://docs.google.com/forms/d/e/1FAIpQLSc3KONt3qkVLSslYg1u_Eo38m7WfNooK67iNvsIvZhzzWcNNA/formResponse',
      method: "post",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      data: qs.stringify(formData),
    };

    axios(axiosOptions)
      .then((response) => {
        navigate("/thankyoutraining");
      })
      .catch((err) =>
        this.setState({
          feedbackMsg: "Form could not be submitted.",
        })
      );
  }

  render() {
    return (
      <>
        <StyledBackgroundSection className="min-h-screen">
          <main className="contact w-full flex items-center justify-center">
            <SiteHelmet route="Training" />
            <Header />
            <section className="contactCard rounded-2xl w-10/12 sm:w-1/2 lg:w-2/6 mt-10 opacity-90">
              <h1 className="text-center font-black text-5xl text-white pt-12 pb-6">
                DevSecOps Training Signup
              </h1>
              <div className="w-9/12 h-full mx-auto py-6  border-dark flex justify-between">
                <form
                  red={this.domRef}
                  data-netlify="true"
                  className="w-full h-5/6 flex flex-col justify-evenly"
                  name="Training"
                  onSubmit={(event) => this.handleSubmit(event)}
                >
                  <div className="m-0">
                    <input
                      ref="entry.1161604118"
                      name="firstName"
                      className="form-control w-full mb-5"
                      placeholder="First Name"
                    ></input>
                    <input
                      ref="entry.1553444879"
                      name="lastName"
                      className="form-control w-full mb-5"
                      placeholder="Last Name"
                    ></input>
                    <input
                      ref="emailAddress"
                      name="emailAddress"
                      className="form-control w-full mb-5"
                      placeholder="Email"
                      type="email"
                      id="exampleInputEmail1"
                    />
                    <input
                      ref="entry.84539168"
                      name="organization"
                      className="form-control w-full mb-5"
                      placeholder="Organization"
                      id="organization"
                    />
                   <input
                      ref="entry.1290040767"
                      name="Title"
                      className="form-control w-full mb-3"
                      placeholder="Title"
                      id="title"
                    />
                  </div>
                  <textarea
                    ref="entry.1098032596"
                    name="message"
                    className="m-0 w-100 mt-2 form-control bg-transparent"
                    placeholder="Why are you interested in a DevSecOps course?"
                    style={textAreaStyle}
                  ></textarea>
                  <Button
                    type="submit"
                    className="bg-red-500 hover:bg-red-700 text-white mt-3 w-full"
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

export default Training;
