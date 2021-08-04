---
authors:
  - bfinster
  - mlyon
  - cbarno
author: Defense Unicorns Staff
slug: devops-101
title: DevOps 101
date: 2021-07-15
description: DevOps, DevSecOps, et al are some of the most commonly
  misunderstood terms in the industry. While their usage has become ubiquitous
  over the past 6 years or so, their meaning frequently gets lost and
  implementation suffers...
category: DevSecOps
image: du_logo_rgb_for-blue-bg_stacked.png
published: true
tags: DevSecOps
---

DevOps, DevSecOps, et al are some of the most commonly misunderstood terms in the industry. While their usage has become
ubiquitous over the past 6 years or so, their meaning frequently gets lost and implementation suffers because of this.
If we are clear on where DevOps came from, how it's evolved, where it is going, we can better apply it to realize
improved outcomes.

Let's start at the beginning. Why DevOps? (and don't worry...we'll get to DevSecOps)

As in any design process, it would be wrong to jump straight to the solution and decide that DevOps is the answer if we
have not yet identified the problems we are trying to solve. We should never blindly follow trends. The goal is to
improve our ability to deliver what the user needs; to be more efficient, more effective, and more sustainable. We are
working to apply some of the best practices from lean manufacturing to the problem of software delivery. If you don't
need to be more efficient, more effective, or more sustainable then DevOps is the wrong answer. However, the reality is
that software is now core to everything we do and the era of short-term projects instead of long term product management
is long past. Focusing on how we can more sustainably deliver changes with lower cost and higher delivered value while
making sure the results are stable and available is critical. A correctly conceptualized DevOps approach enables this.

"DevOps" has been applied to tools, teams, and job titles. Too frequently we hear phrases like "our DevOps engineers are
using Azure DevOps to build pipelines for the DevOps teams". This misrepresents the reality of DevOps.. Tools are
required in DevOps, but there are no DevOps tools. Teams need DevOps, but labeling a team "DevOps" doesn't make it so.
"DevOps Engineer" is a title with no clear definition which frequently equates to release management, but  having a
handoff for deploying changes is a DevOps anti-pattern. If we do not have the correct mental model then we will struggle
to implement correctly.

*So, what is DevOps really?*

In 2015, Microsoft's Donovan Brown described DevOps as "the union of people, processes, and products to enable the
continuous delivery of value to the end-user." This definition places the focus on where it belongs - on the continuous
delivery of value to the end-user. If we are not working daily to improve the ability of our organization to
continuously deliver value to the end-user so that we can get feedback, then it doesn't matter what we call it. 

*Isn't it just "Dev" and "Ops" on the same team?*

It hasn't been "Dev" and "Ops" for a long time. In 2008, Patrick Debois was trying to solve the problem of how to
deliver better. Development teams were "agile" but the overall flow of delivery was not. Development teams and
operations teams had different goals. Development teams were focused on shipping features and operations teams were
focused on system stability. The handoff between the groups generated conflict, delays, and waste because of misaligned
goals. Debois brought these groups together to align goals and improve the flow of delivery. While the origin of DevOps
is the harmonization of two teams with seemingly incompatible goals, DevOps has evolved greatly in the past 13 years. As
DevOps adopters shared successes and failures, it became apparent that value delivery is greatly enabled or greatly
impeded by broader organizational culture and practices. After some time a consensus emerged that it is ineffective to
focus on improving the efficiency of a single team if the surrounding organization does not adapt as well. 

To help describe how organizations should behave to support DevOps approaches and improve outcomes, John Willis and Jez
Humble developed the acronym CALMS.

- (C)ulture of Learning and Improving
We need the right culture. Output is not our goal; better outcomes are. We need a culture of trust, feedback, and learning. We need to trust each other and have the psychological safety to bring new ideas. We need to assume that we are wrong about most of our ideas and approach everything as an opportunity to get feedback on the idea. We need to build better feedback loops into every process so we don't succumb to the sunk cost fallacy where we are too invested in the idea to throw it away. We need to share and celebrate success. We need to share and celebrate failure because now we can help others not waste their time on a poor idea.
- (A)utomation
Humans should do creative work. Robots should do everything else. If there are rules to follow, that is where robots excel. Efficiencies gained from implementing technology such as robotic process automation should free up humans for higher-level cognitive tasks.
- (L)ean
We need lean processes. We should constantly strive to identify and reduce waste in the system of delivery. This goes far beyond development. We must look at the whole system from ideas to sustainable operations of the outcomes of those ideas.
- (M)etrics
We need to measure the right things the right way to know where we are and what and how to improve next. We need measurable goals and appropriate metrics to track the health of the delivery system and our progress towards those goals. Metrics are a double edged sword. The act of measuring changes behaviors and we need to design metrics carefully to encourage the outcomes we want. We'll dive deeper into this in upcoming posts, but it's very important to understand your goals before selecting measures towards them.
- (S)haring
We share what we have learned. We help people understand what and why something works or doesn't work so that they can extend our successes and avoid repeating our mistakes.

In future posts, we will be diving deeper into culture, automation, lean, metrics, and sharing. These are the
touchstones of any DevOps improvement.

## DevSecOps

Circa 2017, a new term began to appear, "DevSecOps". DevOps should be secure! This term is often debated in the
community. As we said, DevOps isn't Dev and Ops working together. DevOps is how we align the organization to
continuously deliver value to the end-user. It requires every capability in the value stream to accomplish this: product
knowledge, coding, user experience, quality, compliance, security, infrastructure, etc. None of these are more or less
important. All of those capabilities must exist in the value stream for something to be valuable. To continuously
deliver value to the end-user, everyone working on those capabilities needs to align on the most important goal, working
together to reduce waste, toil, delays, and conflict to optimize the entire system of value delivery. Each of these
capabilities should be enabled as a service, not a roadblock.

## Value Stream Management

This is where DevOps is today. We know that it requires organizational cooperation to deliver at the pace we need. We
need product teams leveraging services from Security, Compliance, User eXperience, and other disciplines. We need agile
budgets if we want agile outcomes. Product funding instead of annual budgets that incentivize waste. We need product
roadmaps aligned to organizational goals and customer needs. We need operations organized in a way so that product teams
own the outcomes of their technical and quality decisions and that product owners can get rapid feedback on the quality
of the underlying ideas. We need to look at what our products are and relentlessly improve the constraints in the flow
of value for those products. Ultimately, we need to internalize that our goal is to deliver value to our end-users.
Anything we are doing at an organizational level that is hindering that goal must be improved.  DevOps isn't a tool,
team, or role. DevOps is a holistic operating model focused on improving value delivery. It cannot be bought. It must be
lived.

We'll be sharing here often. We hope you'll follow along and we would love feedback on how we can help you succeed!
