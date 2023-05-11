---
sidebar_label: Software Architecture Fundamentals
sidebar_position: 1
keywords: [fundamentals of software architecture]
---

# Software Architecture Fundamentals

- **Types of software:** application, support, system software. Depending on the point of view of a user, engineer etc.,
  the
  same software can be any of the mentioned types at the same time. E.g. a web browser is application software from the
  point of view of a user, but system software for an engineer.
- **Custom and Standard software:** Custom software is more specialized for a specific purpose. Standard software tries
  to be generalizable across a business domain in terms of function and feel, but can sometimes be customized to some
  extent.

## Important definitions

**System:** A collection of components organized to accomplish a specific function or set of functions.  
**Software:** Computer programs, procedures, and possibly associated documentation and data pertaining to the operation
of a computer system.
**Software-intensive system:** A collection of building blocks that together accomplishes the purpose of a system. The
buildings blocks are entirely or for the most part of software, which consists of procedures, programs, data and
documentation.

The **software architecture** defines the fundamental principles and rules for the organization of a system and its
structure into building blocks and interfaces, and their relationships to each other and to the surrounding environment.
It thus defines guidelines for the entire software lifecycle, the developer, and the software’s operator, from analysis
via design and implementation to operation and enhancement.

**Information systems** focus on managing and processing large amounts of complex data. Many users have to interact with
such a system and the content has to be served simultaneously and interactively.

**Embedded systems** contain software that is embedded inside physical objects. Hardware resources are often limited and
sparse and the software implementation needs to take this into consideration and optimize for it. Functionality is
mostly about regulation, control or communication.

**Mobile systems** are (semi-) autonomous, personal units that need to interact with its environment and provide local
and sometimes (semi-) autonomous functions. Moreover, interaction, synchronization and coordination with stationary
systems may be required.

An **interface** represents an access point to a system or building block and describes its characteristics. It
functions as a contract that guarantees a certain behaviour.

A **building block** fulfills the following 3 criteria and at heart, it is an abstraction for the effective
implementation (e.g. a function, class, object):

- **Required and provided**: A building block provides an interface with an effective realization of it in form of a
  contract if that interface is also provided within the corresponding configuration
- **Encapsulation and interchangeability**: The building block encapsulates the effective implementation of the provided
  interface and can be exchanged by other building blocks that implement that interface with a potentially different
  implementation
- **Configuration and hierarchical (de-) composition**: Building blocks constitute a software-intensive system. A
  building block can further constitute of sub-building blocks and thus, the super building block encapsulates its
  sub-building blocks. Moreover, a building block can delegate external interfaces to internal interfaces.

## Learning goals

- **Discuss definitions of software architecture**  
  Software architecture is the design and description of a solution.  
  There are different types and levels of software architecture one can look at. There is the system-level and
  component-level. Software architecture is about organizing building blocks in a reliable and scalable manner while
  reducing complexity in order to for a system to perform a function or a set of functions.

- **Understand and identify the benefits and objectives of software architecture**  
  Software architecture focuses more on quality attributes such as durability, maintainability, changeability, and
  robustness than on pure functionality and supports the creation, maintenance and implementation of software. Also, it
  helps other relevant stakeholders to understand the system.

- **Understand software architecture as part of the software lifecycle**  
  Changes to requirements, quality goals, technologies or the broader environment of the system influence the software
  architecture which needs to be adapted accordingly.

- **Understand software architects' tasks and responsibilities**  
  Software architects are responsible for achieving the required or necessary quality and functionality of a solution.
  Software architects clarify, question and if necessary also refine functional requirements (required features) and
  constraints (required quality attributes). For this purpose, software architects decompose the system into building
  blocks, determine dependencies and interfaces between these blocks. They evaluate the software architecture with
  respect to potential risks and the required quality. Software architects are also responsible for dealing with
  technical concerns such as persistence, communication, GUI etc. Also, they document the software architecture based on
  views, architectural patterns, technical concepts, and they accompany the realization of the architecture by
  integrating feedback from relevant stakeholders and contributing to code quality and consistency with reviews.

- **Relate the role of software architects to other stakeholders**  
  A software architect is responsible for the overall, high-level to low-level architecture of a software. They create a
  blueprint for the software such that it is durable, maintainable, easily extendable and robust. This has to be
  communicated to requirement analysts, developers, project leaders, product owners, IT operations, quality assurance
  and hardware developers on a suitable level.

- **Ability to explain the correlation between development approaches and software architecture**  
  Architectural decisions are sometimes decided in an iterative, non-linear fashion, depending on how the project
  develops and if new requirements or constraints suddenly appear. Due to inherent risk, feedback has to be sought by
  developers, business analysts and product owners etc. to respond quickly to new or obsolete requirements and update
  the software architecture iteratively.

- **Differentiate between architecture and project objectives**  
  A system can be developed withing scrum sprints, iterations, releases, traditional projects and other approaches.
  Usually, a project objective is concerned with the effective implementation of a feature or an underlying
  architectural pattern. An architectural objective is usually concerned with the final design of a software
  architecture with its constraints, advantages, disadvantages and other factors that might influence effective project
  objectives. Also, architectural objectives depend on and are influenced by requirements (project objectives).
  Long-term architectural objectives have to be clearly communicated how they relate to the (short-term) project
  objectives.

- **Distinguish between explicit statements and implicit assumptions**  
  Implicit assumptions based on previous decisions business-side can lead to misunderstandings with stakeholders when
  developing a software architecture. These implicit decisions might not be known to the software architect. Such
  implicit assumptions should be made explicit and communicated clearly.


- **Know roles and responsibilities of software architects in an organizational context**  
  Additional architectural levels in an organisation are infrastructure, hardware, software, business process and
  enterprise IT architecture.

- **Understand the differences between types of IT systems**
    - **information systems**: process complex and large amounts of data with many users interacting with the software
      at the same time
    - **embedded systems**: mostly about control, regulation and communication, while hardware resources are often very
      limited
    - **mobile systems**: high interaction with user and they require a balance between they power-intense GUI and (
      semi-) autonomous functions. Moreover, interacting with the environment and synchronization and coordination with
      stationary systems might be necessary
