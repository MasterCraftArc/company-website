---
title: "Key Terms Cloud-Native Software Delivery: A Fact Sheet"
author: Defense Unicorns Staff
date: 2021-08-04T16:23:03.717Z
description: Modern software is moving fast. While the associated lexicon is
  continuously changing, there are a number of core concepts and...
published: true
tags: Continuous Delivery
category: DevSecOps
image: monolithic-vs-microservices.png
---

Modern software is moving fast. While the associated lexicon is continuously changing, there are a number of core concepts and key terms that one must be familiar with in order to effectively drive digital transformation in their organization. Often it's difficult to find these terms in concepts in one place; even more frequently, it's challenging to determine the connections and interrelationships among these concepts. The below is intended to serve as a living guide for those embarking on their own software transformation journey - especially those with a need for cloud-native capabilities.

### Containers

Containers are packages of software that wrap all code, dependencies, and settings for a given application into a single, fully executable unit. Containerization allows for a single application and all of the components needed to run it (e.g., databases, configurations, default settings, etc) to be isolated and abstracted from the computing environment. This provides flexibility to leverage and deploy applications enterprise-wide, on any infrastructure (i.e., on-premise, cloud, or hybrid), and reduces the risk of vendor-lock with a single cloud service provider. Scaling the use of containers across the Department of Defense can increase software reuse across Components and significantly reduce the overhead burden on developers deploying the applications into production.

### Microservices

In a microservice-based approach to software system architecture, the system is decomposed into many individual software applications that each perform discrete tasks or processes. The individual applications communicate via well-defined application programming interfaces (APIs). Known as “microservices,” each application is fully abstractable from the rest of the system. For example, each microservice has its own, isolated business process flow, logic, data access layer, and codebase. Microservices represent an alternative approach to traditional, monolithic architectures for software systems. By decomposing complex software systems into smaller, self-contained functional units, microservices architectures enhance system reliability and limit the scope and scale of impact when an issue is detected. In this same manner, microservices architectures enable wide, cost-effective scalability and limit the amount of overhead or institutional knowledge required by individual developers. Rather than needing to learn the entire system and its dependencies, developers can work more efficiently, on smaller teams, and focus on ensuring the dependability of an individual microservice.

![Monolithic vs Microservices](monolithic-vs-microservices.png "Figure I: A visual comparison of monolithic vs. microservices architectures")

_Figure I: A visual comparison of monolithic vs. microservices architectures._

Within the Department of Defense, enterprise-wide availability of pre-approved, containerized microservices can significantly accelerate software development efforts by making the building blocks of software systems discoverable, available on-demand, and deployable in any computing environment. Given their decoupled nature (i.e., independent of a single system or workflow), microservices are highly composable. They can be configured with other, independent microservices to support workflows and applications tailored to any unique mission. Moreover, microservices that are containerized, configured and managed as a carefully chosen suite of services and functions can serve as pre-assembled software development pipelines that are infinitely scalable. This paper discusses this concept in greater detail under the section titled “Why Big Bang?”

### Container Orchestration

Container orchestrators automate the deployment and management of containers on any infrastructure. This removes the need to redesign or reconfigure an application in order to deploy it to a different environment. Importantly, container orchestration also enables virtualization and scaling of containerized microservices such as storage, networking, and security which are foundational components of cloud-native applications. Orchestration tools configure containers based on declared states which indicate how the containers should run. Rather than having to manually redesign or reconfigure an application to run in a different environment, container orchestrators standardize deployments.

Within the DoD context, containerized microservices and container orchestration can be used to provide a common, but extensible, platform that mission applications can be developed and run on top of. A common, secure platform would allow for better alignment between platform teams and mission application teams. In other words, creating greater standardization among platforms, while preserving the ability to quickly adapt and integrate new products or capabilities, would create a positive feedback loop between mission application teams and platform teams.
