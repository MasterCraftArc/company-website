---
title: "What is CD Really?"
published: false
description: >-
  There are many misconceptions about CD. There are also many things about CD that are not obvious on the surface. If you are "CD curious", perhaps this will help.
date: '2021-07-29'
authors:
  - bfinster
tags:
  - culture
  - automation
  - lean
  - metrics
  - sharing
slug: what-is-cd
---

There are many misconceptions about continuous delivery. There are also many things about CD that are not obvious on the
surface. If you are "CD curious", perhaps this will help.

## What is CD?
 
Continuous delivery is the ability to deploy the latest changes on demand. It is common for a single team skilled at CD
to deliver production changes several times per day or week. In a highly optimized delivery system, we can even achieve
"continuous deploy" where the pipeline validates individual changes and deploy them directly to production instead of
being batched with other changes in a release. Large batches of work are slow to give feedback and contain more defects,
so anything we can do to reduce batch size and accelerate feedback will improve quality.
 
For people accustomed to legacy delivery methods this can sound terrifying. "How can we possibly get our quality
processes done that quickly? We'll be breaking things constantly!" We can't use the same quality processes. We need to
use better quality processes. CD is not only safer, but also reduces the cost of change and total cost of ownership for
product development.
 
## What are the goals of CD?
 
It is important to understand the underlying concepts behind agile delivery in general. Several methods were developed
in the late 1990s to overcome some common problems with development. XP, Scrum, et al were all focused on addressing the
reality of software delivery is that one or more of the following is true:
 
1. The requirements aren't what the end-users need
2. We have misunderstood the requirements
3. The end-users' needs change before we can deliver
 
This is the underlying problem that agile development methods are trying to solve.
 
Operational stability is another primary concern. It's very common for organizations to establish a delivery method that
has layers of process and approvals to "ensure quality". However, when there is a production incident, that process is
discarded because it takes too much time. Instead, we are left inventing a "hotfix" process on the fly where all of our
carefully designed quality checks are ignored for the sake of speed.
 
 ![Always an emergency](./the-secret-of-cd.jpg)

The goal of CD is to solve both of these problems. The secret of CD is that we treat every change as an emergency change
and design a delivery flow optimized for operational support. We should always use our safest delivery method in an
emergency to prevent making a bad problem worse. We need that delivery method to also be fast so that we can meet our
operational goals.

For development, it is critical that we can get rapid feedback on stability and usefulness of what we are creating. We
need quality gates that can efficiently and effectively identify known issues. This gives us confidence that we are not
breaking things and allows us to deliver only what is needed and to make sure that what we deliver meets the actual
needs of the end-user. When it does not, we have the ability to rapidly change course.
 
## What does a CD workflow look like?

![CD workfloe](./CD_Pipeline_Full_transparent.png)

CD isn't automation. CD uses automation to enable small batches of work. However, how we use that automation is key. We
need the correct processes to convert ideas we think are valuable to small changes we can deliver to the end-user to get
feedback on the value so we can adjust our ideas. The faster we can close that loop and the more waste we can drive out
the more successful we will be at value delivery. 
 
## Is it CI/CD or CD?
 
It's just "CD". Just as DevOps encompasses security, business, compliance, user experience, etc., CD encompasses the
entire development process. Continuous integration is the team behavior where all changes on the team are integrated
very rapidly and at a minimum daily. It's required behavior for a CD workflow, so saying "CD" includes CI.
 
## What are some common ways to get it wrong?
 
- **"We will focus on CD after we have a working application."** If doing greenfield development, the ability to deliver is feature zero. If we cannot deliver, we cannot verify quality and every change we make is only waste. We risk developing things that cannot be delivered at all if we don't start with delivery first.
- **"We automated the build. We are doing CD."** CD is how we use the tools. Automating the build is only step 1. How do we continuously harden the flow by adding better quality gates? How can we shorten the cycle time from commit to delivery? How can we reduce the lead time from request to delivery? How can we get more certainty 
about what needs to be delivered? These are all design and process problems that must be solved for CD.
- **"Our users don't want changes that often"** They do when things are broken. CD is about operational stability first and feature delivery second. We need to know we can fix things quickly. We do that with constant practice. The best thing we have to practice with is the features we are delivering daily. Also, there is a big difference between generally exposing new features daily and just delivering changes daily to verify they do not break. Again, this is a quality process, not a feature delivery process. We need quality feedback from continuous testing in production instead of hoping our next big release doesn't break anything. Your next big release will break something.
 
## Do we need smarter people?
 
No. You have smart people. However, CD is the tool that helps those smart people grow into more effective teams. Solving
the problem of "why can't we deliver this change safely to production today?" is an engineering problem that takes
teamwork and disciplined development. We need to solve the problems of feature flagging, continuous integration,
developer-driven testing, effective monitoring and alerting, etc. It also improves morale due to the reduced toil, less
Fear Driven Development, improved quality, and improved teamwork. 

## CD is the most effective tool for digital transformation

We don't need scaling frameworks or standardized processes. CD acts as the engine for broader organizational
improvement. It exposes improvement opportunities in team workflow, but it also exposes problems that are external to
teams that prevent frequent delivery. Testing teams, external change approvals, external design approvals, etc. cease to
be features and quickly become recognized for what they are, wasteful defects, and bandages for poor quality process
that give us the illusion of safety. By putting our efforts towards enabling teams to deliver more efficiently,
effectively, and sustainably, we discover how to realign the entire organization around customer value. The organization
is delivering today at the highest level it can with the given structure and goals. Only by discovering what the
roadblocks are can we improve. "Why can't every team deliver daily?" informs that.

Continuous delivery is the ultimate expession of agile development and is the reason for a DevOps operating model. If
you are on the DevOps journey or want to deliver with more agility, focus on continuous delivery.

Want to hear more? We are eager to help your organization accelerate value delivery. Let us know hoe we can help.
