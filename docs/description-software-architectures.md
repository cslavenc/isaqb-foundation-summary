---
sidebar_label: Description and Communication of Software Architectures
sidebar_position: 3
keywords: [description software architecture, communicate software architecture]
---

# Description and Communication of Software Architectures

- **Black box**: A building block where its internal details are unknown. A black box gets an input and usually produces
  an output. Its task has to be clearly defined as well as what kind of input it accepts and output it produces.
- **White box**: A building block with its internal structure known and specified. Usually, white boxes describe a
  higher-level black box to clarify the internal details of a black box.

## Learning Goals

- **Explain and consider quality attributes of technical documentation**  
  Technical documentation should be precise, easy to understand and avoid repetition if possible.
  A **brief description**, **diagrams** that provide a graphical representation of the view, an **element catalog** that
  explains the components of the diagram, a section of **variable components** where flexibility and changeability is
  addressed as well as **background information** such as justifications for the selected structure, results from
  analyses or previous tests, assumptions about the system and references, constitute good documentation.

- **Describe and communicate software architectures**  
  Software architecture has to be communicated in a way that is easy to understand for the reader. Thus, different
  levels of abstraction, detail and focus are necessary depending on the reader (non-technical stakeholder, QA engineer,
  developer, other architects etc.).

- **Understand how to explain and apply notations/models that describe software architecture**
    - **UML class diagram** (structural): Shows the static structure of classes and the relationships between classes
    - **UML component diagram** (structural): Higher-level than the UML class diagram, which describes the interaction
      of the components of the software. Components communicate via clearly defined interfaces.
    - **UML activity diagram** (behavioural): Shows the possible sequence of elements using classes, components, etc. to
      provide a description of data flow, flow control or how algorithms function
    - **UML sequence diagram** (behavioural): Shows the interaction respectively message exchange of building blocks

- **Explain and use architectural views**
    - **Context view**: A high-level view that puts the software in the context of the wider system, such as connections
      to other systems within a company.
    - **Building block view**: A detailed view of the software that is normally represented with **UML notation**. It
      describes the interaction of the individual software components (building blocks) and can go as far as to specify
      implementation details (e.g. via class diagrams).
    - **Runtime view**: A runtime view describes the operational flow of a system when it is actually being deployed and
      is up-and-running. Often represented with UML activity, sequence and communication diagrams.
    - **Deployment (infrastructure) view**: The deployment view describes the infrastructure on which the software is
      deployed and the processes from local code, via potential CI/CD pipelines to the environment it is deployed to (
      e.g. to a cloud or a hosted, on-premise environment).

- **Explain and use the system context**  
  The system context puts the software in relation to the wider context, such as how it interacts with other available
  systems (user directory etc.). This defines a boundary between the system and its environment.

- **Document and communicate cross-cutting architectural concepts**  
  Cross-cutting concerns affect most or all components of a system, e.g. error handling, logging, security etc.

- **Describe interfaces**  
  Interfaces often regulate the communication between two building blocks. If the building blocks are part of the same
  system, they communicate via **internal** interfaces. If a building block communicates with an external systems, then
  communication takes place via **external** interfaces, which is the entrypoint to expose internal components to the
  outside.A description for an interface usually contains a **precise name and version**, **syntax and semantics** of a
  resource, **error scenarios** (e.g. why a 401 UNAUTHORIZED error occurred), **configurability** of parameters to
  change the behaviour, notes or **examples** etc.

- **Explain and document architectural decisions**  
  Architectural decisions should take quality requirements, objectives, constraints, identified risks, cross-cutting
  concerns, and different levels (high to low-level) and types (function and technical) etc. into account.

- **Understand the use of documentation as written communication**  
  Documentation should be written from the **reader's point of view** and either kept simple for non-technical staff or
  add relevant technical details for technical staff. In general, **repetition and ambiguous text should be avoided**,
  such that the documentation is clear and simple to understand. **Standardized structures or templates** (depending on
  the organization) should be used. Important **decisions should be justified** to increase traceability and it should
  be **reviewed by other readers** to increase real-life applicability and ease of use. Lastly, the diagrams should be
  uncluttered and the documentation regularly updated.

- **Know additional resources and documentation tools**  
  4+1, TOGAF, ISO/IEEE-42010 (formerly 1471), arc42, SAGA, OMG-MDA

