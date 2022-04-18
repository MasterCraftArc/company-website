---
title: "Constructive Pessimism and Continuous Delivery "
author: "Bryan Finster "
date: 2022-04-15T16:52:56.705Z
description: "Hope creep is the plague of value delivery. If you want to
  practice continuous delivery you must... "
category:
  - People
published: true
image: ci-meme.png
---

There are many practices, both technical and procedural, required for a development team to successfully execute continuous delivery (CD) of software. It’s not easy. These practices are often counterintuitive and require a high degree of team organization and discipline. Continuous delivery of software is proven to have a significant positive impact on users, organizations, and development teams.

Despite the benefits, continuous delivery is still not standard industry practice. While this baffles me, I understand that implementing CD requires a shift in priorities.  I believe the way forward is to shift from hope based development to pessimistic development.

## Hope Based Development- Wait and Pray

Many organizations practice something I like to call hope creep. When talking about delivering software to the end-user,  I often hear comments such as:

“ I mean, it works on our desktops so **hopefully** it’s fine.”

“We **hope** we can deliver!”

“We **hope** our technical decision will work in our environment!”

“We **hope** what we are building is what our end-user actually needs!”

I often see teams assume that since something worked in the development environment that it will work once deployed. There was a strong team bias that what worked in the past would work for our future situations too.  I see teams struggle time again when things are finally deployed to production, they forget all the pain that process caused and repeat the pattern next time.

Hope creep is the plague of value delivery. By ignoring the challenges of deployment until the very end, we cost ourselves and our users valuable time and resources. The antidote to this problem is to shift to a continuous delivery model;  to have a mindset that embraces the reality of development. Things rarely go as planned so we should approach product development with constructive pessimism.  There are two priority shifts that need to take place in order for this to happen.

## Shifting Operations Left

Successful adoption of continuous delivery practices requires a shift in how teams prioritize operations. Continuous delivery requires that teams plan for operations first before they begin developing features to ensure that what they are building can actually operate in their environment.

A typical approach to new development is to build a set of features and then release a large batch of changes. “It’s not valuable unless it does at least this!”. However, if we want boring and routine delivery, we need to reprioritize these two features first.

**Feature 0:** Can we get to production or, minimally, a production-like environment? Will our application even run there?

This should block all other feature work. Nothing we do matters if we can't deliver and verify the changes we are making will work in a production-like environment.

**Feature 1:** KEEP THE PIPELINE GREEN! If anything blocks delivery, stop and fix it. Again, if we cannot deliver changes to validate they are valuable, no other work matters.

Continuous delivery requires shifting operations left.  So what does this look like in real life?

## Pessimistic Development - Test All Assumptions!

I am currently working on a tool that enables development teams to monitor and improve their delivery process. Helping teams find and remove pain with metrics is one of my passions and there aren’t very many open source options available in the industry today for solving this problem.  My experience on this project is a great example of how continuous delivery practices accelerate development. This is my story.

My first task was to create a pipeline. Simple enough.

`npx create-react-app <dashboard-name>`

60 seconds later I have something my team can build on!

![](blue-atom-image-.png)

For any new application, priority  is “can we deploy the application?” So, now we just need to deploy this to meet that requirement so we can start on Feature 1. How hard could it be?

Going through the internal platform documentation to deploy a React application yields some simple configurations that are required. We chose to build the application using React and other standard tools because we want to stay as close as we can to patterns we know will pass the platform's pipeline security gates. Our priority is delivery, after all.

Armed with confidence, I trigger the pipeline and await success. When I go to the newly deployed site, nothing is there. Blank page. But it worked on my desktop? No errors?  Pulling the logs shows Content Security Policy violations. Going back through the docs shows I missed a step. To avoid CSP issues, React needs the INLINE_RUNTIME_CHUNK environment variable set to false. Doing that and rerunning the pipeline resolves the issue and we are off to the races.

We start working on the first story. We need a header, a collapsible navigation menu and to display a home page. We mob the requirements and a few hours later we are looking good!

![](holocron.png)

This is going to be easy! We have a few things to clean up. We refactor some tests and refactor some code. We only need to deploy the newest change and send it out for people to give feedback. We believe in rapid feedback, so we aren’t going to wait for “done” to show this off!

After triggering the deployment, all of the tests pass. There is no indication anywhere that we have a problem. However, what appears in production is…

![](holocron-2.png)

And the hair rending that is software development begins again. Inspecting the logs shows dozens of “Refused to apply inline style because it violates the following Content Security Policy…” errors.

We’ve run afoul of CSP again after adding the MaterialUI component library. We have a backlog of critical features that we need to deliver quickly. However, it doesn’t matter. We cannot deliver. Feature 1. is KEEP THE PIPELINE GREEN! If anything blocks delivery, stop and fix it. Our highest priority is solving the reason we cannot deliver. We begin mobbing the issue.

Imagine if we had assumed everything was fine because it worked on our desktops. We would have happily built the first set of features only to spend an inordinate amount of time solving problems we didn’t know existed and probably had to completely redesign some aspects because production is not the same as our desktops. The habit from waterfall project management is “design, build, test, deploy” followed by failure, pain, blame, cost overruns, and rework. This is the sad result of most “Agile" implementations because they do not practice CD. In a continuous delivery workflow, we assume the code won’t work until we can prove that it does. Everything we do is focused on “how rapidly can we demonstrate that this will work in production and how can we reduce the scope of failure?” We deliver very small things, verify production, rinse and repeat. When we find problems, we inject solutions into the delivery automation to prevent a second occurance. The end result is much faster delivery of higher quality with lower cost, less toil, less stress, and more confidence.

## Be Pessimistic

I’ll never again work on a team that doesn’t practice continuous delivery. Some of you reading this are still working without the ability to verify changes immediately. I have empathy for you because I worked for nearly two decades that way. However, we don’t need to work this way anymore. We shouldn’t pretend we can deliver on time if we don’t know we can deliver at all. We need confidence. Confidence born from pessimism. We need to assume things are broken until we can prove they are not. We need to assume that the ideas or requirements we have for features are wrong until we prove they are not. Building features on hopes and dreams of delivery and correctness is just a waste of time.

Ship first, validate, and keep shipping as fast as possible to keep confidence high that you can deliver and are delivering the right thing. Be pessimistic. Don’t give in to hope.
