# DEFENSE UNICORNS

### Website Architectural Design Review

---

### About

This document outlines the tools and frameworks that will be used to deliver the Defense Unicorns website. As the team continues to conduct user interviews and customer discovery to refine the feature list for the site, updates and additional content will be added to this ADR document. The final ADR will reflect the complete toolset and frameworks leveraged to build the site.

##### Featuring:

---

> GatsbyJS
> Node JS
> Netlify
> Tailwind CSS

Prepared by: Defense Unicorns Website Team
Updated July 23, 2021

### FRONT-END

#### Tailwind CSS

Tailwind will be key in orchestrating the development of individual web pages for the Defense Unicorns site and will allow us to put together any design very efficiently which will contribute to a quicker development time. Tailwind offers utility classes and containers that allows pages to be scaled dynamically according to screen size. This is important as we believe one of our primary customer acquisition channels will be mobile users who are interacting with our thought leadership content first on social media sites such as LinkedIn before navigating to our website.

##### Benefits of using Tailwind

- Easier to implement into projects compared to alternatives such as Chakra UI or Material UI due to class based components
- Quick prototyping. Tailwind allows you create responsive designs in a minimal amount of time due to its library of responsive containers and blocks.
- When compared to bootstrap Tailwind has more complex utility classes and allows for more variability.

---

#### GATSBY JS

Gatsby Provides development teams an open source frontend framework for creating dynamic, optimized websites and a cloud platform for delivering them on a blazing fast network. As a web framework, Gatsby relies on modern tools such as react and javascript and also wraps concepts such as CI/CD, GIT, and APIs to make building web apps intuitive. We will use Gatsby to improve SEO as the loading of static web pages is dramatically better when compared with alternatives.

##### Benefits of using Gatsby

- A server-less static site has virtually no attack surface when compared to rendering apps through Express JS
- Large library of plugins and community to back

##### Disadvantages

- May take longer to generate larger sites

---

### DEPLOYMENT

#### Netlify

This platform should be used to host the Defense Unicorns website because it simplifies the usage of various toolsets into one robust and reliable web platform. CI/CD, scaling, and deployment are some of the examples of the available services that are integrated into Netlify which will help to bring this project to completion. Netlify starts free with an option to go pro at $19/month which will support 3 team members and access to 400GB bandwidth and 1000 build minutes monthly along with several additional features.

##### Why Netlify?

- Free SSL support
- Automatic builds from GitHub with access to individual branch deployment

##### Disadvantages

- No easy access to raw error logs

---

### Alternatives

#### Heroku

Heroku is a PaaS that runs on top of AWS. It offers support for several programming languages and allows users to run web applications on Heroku “Dynos” which support horizontal or vertical scaling. Heroku offers an initial production plan starting at $25/month. When compared to Heroku, Netlify is more developer friendly, cheaper, and provides additional features.

#### AWS Elastic Beanstalk

Elastic Beanstalk as a platform allows deployment of web applications in several languages. Unlike Heroku and Netlify, Elastic Beanstalk relies on other AWS services such as code-pipeline and route53 to provide features offered as a single service through Netlify and Heroku. Elastic Beanstalk as a service is completely free and all charges will be based on utilized EC2 instances.


---

### Analytics

#### Google Analytics 

By integrating Google Analytics 4 and Universal Analytics properties into the Defense Unicorns website workflow,  we are able to track and manage website traffic. Unlike netlify's built in analytics which work by parsing server-side, Google's tools will allow us to gather unique data regarding user's visits to our website. Additionally google analytics will give us smart insights and predictions on user interaction on the defense unicorns website through their machine learning algorithms. Also, Netlify may sometimes add bots and count it as an actual visitor whearas Google Analytics would have more accuracy. Its a great benefit to have insights from more than one resource.

#### Microsoft Clarity 

Clarity easily integrates into our google analytics workflow and provides advanced heatmap features like instant heatmap creation, element-level metrics and data segmentation. Clarity records individual user interactions on webpages and also provides click and scroll heatmaps and click insights.

#### Hotjar

Hotjar will also be able to integrate with the google analytics plugin although not as natively as clarity. Hotjar  provides heatmap tooling that will allow us to see which parts of the site attract attention and where users tend to linger. We will be able to differentiate data based on a/b testing and across visits on different devices. Hotjar also provides user playback features as well to allow us to view individual user interactions on our site. This will allow further insight on why some users don't convert. 
