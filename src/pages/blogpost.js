import * as React from 'react';
import { Link } from 'gatsby';
import SiteHelmet from '../components/SiteHelmet';
import Footer from '../components/footer';
import Header from '../components/header';
import unicorn from "../images/unicornStars.png"
import monolithic from '../images/blog1.png';

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
          <div className="w-3/4 mt-10 sm:mt-16 mx-auto flex justify-center items-center">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl align-bottom font-bold text-white sm:pr-10">Key Terms Cloud-Native Software Delivery: A Fact Sheet</h1>
          </div>
        </div>
      </header>

      <article className="w-3/4 mx-auto ">
        <div className="metaData">
          <p className="text-xl md:text-2xl pb-4"><span className="font-bold">AUTHOR:</span> Defense Unicorns Staff</p>
          <p className="text-xl md:text-2xl pb-4"><span className="font-bold">DATE:</span> Defense Unicorns Staff</p>
          <p className="text-xl md:text-2xl pb-4"><span className="font-bold">TAGS:</span> People, Culture, Technology</p>
        </div>

        <main>
          <p className="mt-10 text-lg sm:text-2xl md:text-3xl font-normal md:font-thin">
            Modern software is moving fast. While the associated lexicon is continuously changing, there are a number of core concepts and key terms that one must be familiar with in order to effectively drive digital transformation in their organization. Often it's difficult to find these terms in concepts in one place; even more frequently, it's challenging to determine the connections and interrelationships among these concepts. The below is intended to serve as a living guide for those embarking on their own software transformation journey - especially those with a need for cloud-native capabilities. 
          </p>

          <h3 className="mt-16 text-xl sm:text-2xl md:text-3xl font-bold underline mb-2">Containers</h3>
          <p className="text-lg sm:text-2xl md:text-3xl font-normal md:font-thin">
            Containers are packages of software that wrap all code, dependencies, and settings for a given application into a single, fully executable unit. Containerization allows for a single application and all of the components needed to run it (e.g., databases, configurations, default settings, etc) to be isolated and abstracted from the computing environment. This provides flexibility to leverage and deploy applications enterprise-wide, on any infrastructure (i.e., on-premise, cloud, or hybrid), and reduces the risk of vendor-lock with a single cloud service provider. Scaling the use of containers across the Department of Defense can increase software reuse across Components and significantly reduce the overhead burden on developers deploying the applications into production.
          </p>

          <h3 className="mt-16 text-xl sm:text-2xl md:text-3xl font-bold underline mb-2">Microservices</h3>
          <p className="text-lg sm:text-2xl md:text-3xl font-normal md:font-thin">
            In a microservice-based approach to software system architecture, the system is decomposed into many individual software applications that each perform discrete tasks or processes. The individual applications communicate via well-defined application programming interfaces (APIs). Known as “microservices,” each application is fully abstractable from the rest of the system. For example, each microservice has its own, isolated business process flow, logic, data access layer, and codebase. Microservices represent an alternative approach to traditional, monolithic architectures for software systems. By decomposing complex software systems into smaller, self-contained functional units, microservices architectures enhance system reliability and limit the scope and scale of impact when an issue is detected. In this same manner, microservices architectures enable wide, cost-effective scalability and limit the amount of overhead or institutional knowledge required by individual developers. Rather than needing to learn the entire system and its dependencies, developers can work more efficiently, on smaller teams, and focus on ensuring the dependability of an individual microservice.
          </p>
            <img className="mt-2 mb-2 mx-auto" src={monolithic} alt="Figure I: A visual comparison of monolithic vs. microservices architectures."></img>
          <p className="text-center sm:text-lg">Figure I: A visual comparison of monolithic vs. microservices architectures.</p>

          <p className="mt-5 xl:mt-10 text-lg sm:text-2xl md:text-3xl font-normal md:font-thin">
            Within the Department of Defense, enterprise-wide availability of pre-approved, containerized microservices can significantly accelerate software development efforts by making the building blocks of software systems discoverable, available on-demand, and deployable in any computing environment. Given their decoupled nature (i.e., independent of a single system or workflow), microservices are highly composable. They can be configured with other, independent microservices to support workflows and applications tailored to any unique mission. Moreover, microservices that arecontainerized, configured and managed as a carefully chosen suite of services and functions can serve as pre-assembled software development pipelines that are infinitely scalable. This paper discusses this concept in greater detail under the section titled “Why Big Bang?”
          </p>

          <h3 className="mt-16 text-xl sm:text-2xl md:text-3xl font-bold underline mb-2">Container Orchestration</h3>
          <p className="text-lg sm:text-2xl md:text-3xl font-normal md:font-thin">
            Container orchestrators automate the deployment and management of containers on any infrastructure. This removes the need to redesign or reconfigure an application in order to deploy it to a different environment. Importantly, container orchestration also enables virtualization and scaling ofcontainerized microservices such as storage, networking, and security which are foundational components of cloud-native applications.  Orchestration tools configure containers based on declared states which indicate how the containers should run. Rather than having to manually redesign or reconfigure an application to run in a different environment, container orchestrators standardize deployments. 
          </p>
          <p className="mt-4 text-lg sm:text-2xl md:text-3xl font-normal md:font-thin">
            Within the DoD context, containerized microservices and container orchestration can be used to provide a common, but extensible, platform that mission applications can be developed and run on top of. A common, secure platform would allow for better alignment between platform teams and mission application teams. In other words, creating greater standardization among platforms, while preserving the ability to quickly adapt and integrate new products or capabilities, would create a positive feedback loop between mission application teams and platform teams.
          </p>

          {/* <h3 className="mt-16 text-xl sm:text-2xl md:text-3xl font-bold underline mb-2">Microservices</h3>
          <p className="text-xl sm:text-2xl md:text-3xl font-normal md:font-thin">
            
          </p> */}

        </main>
      </article>

      {/* <img src={logo} alt="Defense Unicorns Logo" className="w-1/4"></img> */}
      {/* <h1 className="mt-16 text-5xl text-black text-center">Thank you for contacting us!</h1> */}
      <img className="w-1/6 mx-auto mt-24 pr-24" src={unicorn} alt="Picture of unicorn with star multicolored star trail"></img>
      <Link to="/equip" className="mx-auto"><button className=" bg-red-500 hover:bg-red-700 text-white mr-5 mb-5" style={buttonStyle}>SEE MORE</button></Link>

    </div>
  );
}

export default BlogPost;