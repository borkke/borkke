---
date: "2018-12-18"
title: "Observability in microservices"
category: "Microservices"
---
I have been doing some research on best practices in microservice architecture and I particularly got interested in observability in complex distributed systems. One of the reason is that I had an opportunity to work in an enterprise system which lacks good observability and I know for the fact how difficult it is to reason about what is going on in production.

It's been a long time since observability was simple as logging to the file system, sending email alerts or using some OS capabilities for diagnostics. Nowadays, in complex systems with lots of small services which could be replicated on different servers or using a different OS or even written in different programming languages, is really important to have even higher level of observability.

It is necessary to gather all information in one central place which can later be used for troubleshooting production issues. Unfortunately, this is where it gets a little bit tricky. It goes without saying but you will need to invest time and possibly money in infrastructure to support this. 

A common approach is to gather all information in one central place which can later be used for a better understanding of how your system behaves in production. It goes without saying but you will need to invest in infrastructure to support this. Going big costs time and money, and you better be sure you really need it.

Sam Newman wrote about nine principles of microservices in his book “Building Microservices” 
>if you decide to drop one of them, make sure you understand what you’ll be missing.

![Principles of microservices][principles_of_microservices]

### The Three Pillars 

#### Tracing

#### Logging

#### Metrics

### Summary

[principles_of_microservices]: posts/Principles_of_Microservices.png