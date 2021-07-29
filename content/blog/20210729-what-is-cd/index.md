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

Continuous delivery is the ability to deploy the latest changes on demand and usually several times a week or day. In a
highly optimized delivery flow, we should be able to achieve single piece flow where every change flows directly to
production instead of being batched with other changes. This is also known as continuos deployment. For people
accustomed to legacy delivery methods this can sound terrifying. "How can we possibly get our quality processes done
that fast! We'll be breaking things constantly!" However, when we understand what the goals are and what the discipline
of CD requires, it becomes clear that CD is not only safer, but also reduces the cost of change and total cost of
ownership for product development.

## What are the goals of CD?

I think it's important to first understand some of the underlying concepts behind agile delivery in general. Several
agile development methods were developed in the late 1990's to overcome some common problems with how development was
done with previous methods. 

1. **The outcomes were generally poor.** A typical flow followed the waterfall pattern of requirements, design, coding,
   testing, and delivery. This flow limited quality processes to inspection at the end. 