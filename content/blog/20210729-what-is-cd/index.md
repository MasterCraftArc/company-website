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

Continuous delivery is the ability to deploy the latest changes on demand. It is common for a single team using a CD
workflow to deliver production changes several times per day or week. In a highly optimized delivery system, we can even
achieve single piece flow where the pipeline validates individual changes which flow directly to production instead of
waiting to be batched with other changes in a release. Large batches of work are wasteful and put quality at risk, so
anything we can do to reduce batch size will also improve quality.  

For people accustomed to legacy delivery methods this can sound terrifying. "How can we possibly get our quality
processes done that fast! We'll be breaking things constantly!" We can't use the same quality processes. We need to use
better quality processes. When we understand what the goals are and the discipline of CD requires, it becomes clear that
CD is not only safer, but also reduces the cost of change and total cost of ownership for product development.  

## What are the goals of CD?

It is important to first understand some of the underlying concepts behind agile delivery in general. Several
agile development methods were developed in the late 1990's to overcome some common problems with development projects.

1. **Poor Quality:** A typical flow followed the waterfall pattern of requirements, design, coding,
   testing, and delivery. This flow limited quality processes to inspection at the end. Quality requires feedback of
   poor quality as soon as possible.
2. **Unused Features:** With the single delivery of large changes, many features that seemed like a good idea during
   project initiation were never actually used, but continued to require support for the lifetime of the application.
3. **Misunderstood Requirement:** Core to quality is having the right features described the right way and understood by
   everyone.

The reality of software delivery is that one or more of the following is usually true:

1. The requirements aren't what the end-users need
2. We have misunderstood the requirements
3. The end-users' needs change before we can deliver

This is the underlying problem that agile development methods are trying to solve. 

Another core problem is operations. It has been very common for a delivery method to be established that has layers of
process to "ensure quality". However, when there is a production incident, that process is discarded because the layers
of process take too much time. Instead, we are left inventing a "hotfix" process on the fly where all of our carfully
designed quality checks are ignored for the sake of speed.

The goal of CD is to solve both of these problems. For operations, we design a delivery flow that is optimized for operational
support. We should always use our safest delivery method in an emergency to prevent making a bad problem worse. We need
that delivery method to also be fast so that we can meet our operational goals. For development, it is critical that we
can get rapid feedback on stability and usefulness of what we are creating. We need quality gates that can efficiently
and effectively identify known issues. This gives us confidence that we are not breaking things and allows us to deliver only what is
needed and to make sure that what we deliver meets the actual needs of the end-user. When it does not, we have the
ability to rapidly change course.

## What does a CD workflow look like?
 <INSERT IMAGE AND DESCRIPTION>

## Is it CI/CD or CD?

It's just "CD". Just as DevOps encompasses security, business, compliance, user experience, etc., CD encompasses the
entire development process. Continuous integration is the team behavior where all changes on the team are integrated
very rapidly and at mimimum daily. It's a required behavior for a CD workflow, so saying "CD" includes CI. 

## What are some common ways to get it wrong?

- **"We will focus on CD after we deliver these features."** If doing greenfield development, the ability to deliver is
  feature zero. If we cannot deliver, we cannot verify quality and every change we make is only waste. We risk
  developing things that cannot be delivered at all if we don't start with delivery first.
- **"We automated the build. We are doing CD."** CD is how we use the tools. Automating the build is only step 1. How do we
  continuously harden the flow by adding better quality gates? How can we shorten the cycle time from commit to
  delivery? How can we reduce the lead time from request to delivery? How can we get more certainty about what needs to
  be delivered? These are all design and process problems that must be solved for CD.
- **"Our users don't want changes that often"** The do when things are broken. CD is about operational stability
  first and feature delivery second. We need to know we can fix things quickly. We do that with constant practice. The
  best thing we have to practice with is the features we are delivering daily. Also, there is a big difference between
  generally exposing new features daily and just delivering changes daily to verify they do not break. Again, this is a
  quality process, not a feature delivery process. We need quality feedback from continuous testing in production
  instead of hoping our next big release doesn't break anything. Your next big release will break something. 

  ## Do we need smarter people?

No. You have smart people. However, CD is the tool that helps those smart people grow into more effective teams. Solving the problem of "why can't we deliver this
change safely to production today?" is an engineering problem that takes teamwork and disciplined development. If this
is the primary focus then skills such as effective use of feature flagging, continuous integration, developer-driven
testing, & etc. will grow rapidly. It also improves morale due to the reduced stress of repetitive toil, Fear Driven
Development, improved quality, and improved teamwork. CD also acts as the core engine for broader organizational improvement. It exposes improvement
opportunities in team workflow, but it also exposes problems that are external to teams that prevent teams fom
delviering. 