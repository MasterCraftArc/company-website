# DEFENSE UNICORNS
#### Website Architectural Design Review

---

#### About
This document outlines the tools and frameworks that will be used to deliver the Defense Unicorns website. As the team continues to conduct user interviews and customer discovery to refine the feature list for the site, updates and additional content will be added to this ADR document. The final ADR will reflect the complete toolset and frameworks leveraged to build the site.

###### Featuring:
---
> GatsbyJS
Node JS
Netlify
Bootstrap

Prepared by: Defense Unicorns Website Team
Updated July 6, 2021

#### FRONT-END

#### Bootstrap

Bootstrap will be key in orchestrating the development of individual web pages for the Defense Unicorns site and will allow us to put together any design very efficiently which will contribute to a quicker development time. Bootstrap offers utility that allows pages to be scaled dynamically according to screen size. This is important as we believe one of our primary customer acquisition channels will be mobile users who are interacting with our thought leadership content first on social media sites such as LinkedIn before navigating to our website.

##### Benefits of using Bootstrap

- Easier to implement into projects compared to alternatives such as Chakra UI or Material UI due to class based components
- Quick prototyping. Bootstrap allows you create responsive designs in a minimal amount of time due to its library of responsive containers and blocks.
- We will have access to a large library of high quality icons to use in our project as part of the bootstrap-icons add-on framework

##### Disadvantages
- We may be loading additional content from the bootstrap library which may not be used in this project
---
#### GATSBY JS

Gatsby Provides development teams an open source frontend framework for creating dynamic, optimized websites and a cloud platform for delivering them on a blazing fast network. As a web framework, Gatsby relies on modern tools such as react and javascript and also wraps concepts such as CI/CD, GIT, and APIs to make building web apps intuitive. We will use Gatsby to improve SEO as the loading of static web pages is dramatically better when compared with alternatives.

##### Benefits of using Gatsby

- A server-less static site has virtually no attack surface when compared to rendering apps through Express JS
- Large library of plugins and community to back

##### Disadvantages
- May take longer to generate larger sites
---
#### BACK-END

##### Node JS

Node JS should be implemented to build out the Defense Unicorns website back-end in order to take advantage of its large library of modules and event loop driven behavior. Node JS is an Asynchronous Javascript runtime that comes with a built in package manager, NPM or Node Package Manager. This allows users to have access to an extensive set of tools that they can utilize when creating their web applications.

##### Benefits of Node JS

- High performance due to single threaded and event-driven nature linked with Chrome’s V8 engine
- Various dev tools available as modules
- Free and open source

##### Disadvantages
- NPM packages may be of poor quality and compromise security
- Unstable API - updates may reduce compatibility with old codebases

---

#### DEPLOYMENT

##### Netlify

This platform should be used to host the Defense Unicorns website because it simplifies the usage of various toolsets into one robust and reliable web platform. CI/CD, scaling, and deployment are some of the examples of the available services that are integrated into Netlify which will help to bring this project to completion. Netlify starts free with an option to go pro at $19/month which will support 3 team members and access to 400GB bandwidth and 1000 build minutes monthly along with several additional features.

##### Why Netlify?
- Free SSL support
- Automatic builds from GitHub with access to individual branch deployment

##### Disadvantages
- No easy access to raw error logs

---

#### Alternatives

##### Heroku
Heroku is a PaaS that runs on top of AWS. It offers support for several programming languages and allows users to run web applications on Heroku “Dynos” which support horizontal or vertical scaling. Heroku offers an initial production plan starting at $25/month. When compared to Heroku, Netlify is more developer friendly, cheaper, and provides additional features.

##### AWS Elastic Beanstalk
Elastic Beanstalk as a platform allows deployment of web applications in several languages. Unlike Heroku and Netlify, Elastic Beanstalk relies on other AWS services such as code-pipeline and route53 to provide features offered as a single service through Netlify and Heroku. Elastic Beanstalk as a service is completely free and all charges will be based on utilized EC2 instances. 
