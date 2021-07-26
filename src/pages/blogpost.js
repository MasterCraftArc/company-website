import * as React from 'react';
import { Link } from 'gatsby';
import SiteHelmet from '../components/SiteHelmet';
import Footer from '../components/footer';
import Header from '../components/header';
import logo from "../images/logo.png"

const buttonStyle = {
  borderRadius: '0',
  height: '45px',
  width: '150px',
  fontSize: '15px',
}

const BlogPost = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHelmet title="Key Terms Cloud-Native Software Delivery: A Fact Sheet" /> 
      <header className="postHeader">
        <div className="postHeaderContainer">
          <Header />
          <div className="w-3/4 mx-auto ">
            <h1 className=" mt-24 text-7xl align-bottom font-bold text-white pr-10">Key Terms Cloud-Native Software Delivery: A Fact Sheet</h1>
          </div>
        </div>
      </header>

      <article className="w-3/4 mx-auto ">
        <div className="metaData">
          <p className="text-2xl pb-4"><span className="font-bold">AUTHOR:</span> Defense Unicorns Staff</p>
          <p className="text-2xl pb-4"><span className="font-bold">DATE:</span> Defense Unicorns Staff</p>
          <p className="text-2xl pb-4"><span className="font-bold">TAGS:</span> People, Culture, Technology</p>
        </div>

        <main>
          <p className="mt-10 text-3xl">
            Modern software is moving fast. While the associated lexicon is continuously changing, there are a number of core concepts and key terms that one must be familiar with in order to effectively drive digital transformation in their organization. Often it's difficult to find these terms in concepts in one place; even more frequently, it's challenging to determine the connections and interrelationships among these concepts. The below is intended to serve as a living guide for those embarking on their own software transformation journey - especially those with a need for cloud-native capabilities. 
          </p>

          <h3 className="mt-16 text-3xl font-bold underline">Containers</h3>
          <p className="text-3xl font-normal">
            Containers are packages of software that wrap all code, dependencies, and settings for a given application into a single, fully executable unit. Containerization allows for a single application and all of the components needed to run it (e.g., databases, configurations, default settings, etc) to be isolated and abstracted from the computing environment. This provides flexibility to leverage and deploy applications enterprise-wide, on any infrastructure (i.e., on-premise, cloud, or hybrid), and reduces the risk of vendor-lock with a single cloud service provider. Scaling the use of containers across the Department of Defense can increase software reuse across Components and significantly reduce the overhead burden on developers deploying the applications into production.
          </p>
        </main>
      </article>

      <img src={logo} alt="Defense Unicorns Logo" className="w-1/4"></img>
      <h1 className="mt-16 text-5xl text-black text-center">Thank you for contacting us!</h1>
      <h1 className="mt-6 mb-10 text-5xl text-black text-center">We'll be in touch shortly.</h1>
      <Link to="/"><button className="bg-blue-500 hover:bg-blue-400 text-white mr-5 mb-5" style={buttonStyle}>Home</button></Link>

    </div>
  );
}

export default BlogPost;