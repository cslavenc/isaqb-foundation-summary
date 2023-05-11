---
sidebar_label: Questions & Answers
sidebar_position: 99
---

# Questions & Answers

## Software Architecture Fundamentals

<details>
    <summary><b>Discuss definitions of software architecture</b></summary>  
  Software architecture is the design and description of a solution.  
  There are different types and levels of software architecture one can look at. There is the system-level and
  component-level. Software architecture is about organizing building blocks in a reliable and scalable manner while
  reducing complexity in order to for a system to perform a function or a set of functions.
</details>

<details>
    <summary><b>Understand and identify the benefits and objectives of software architecture</b></summary>  
  Software architecture focuses more on quality attributes such as durability, maintainability, changeability, and
  robustness than on pure functionality and supports the creation, maintenance and implementation of software. Also, it
  helps other relevant stakeholders to understand the system.
</details>

<details>
    <summary><b>Understand software architecture as part of the software lifecycle</b></summary>  
  Changes to requirements, quality goals, technologies or the broader environment of the system influence the software
  architecture which needs to be adapted accordingly.
</details>

<details>
    <summary><b>Understand software architects' tasks and responsibilities</b></summary>  
  Software architects are responsible for achieving the required or necessary quality and functionality of a solution.
  Software architects clarify, question and if necessary also refine functional requirements (required features) and
  constraints (required quality attributes). For this purpose, software architects decompose the system into building
  blocks, determine dependencies and interfaces between these blocks. They evaluate the software architecture with
  respect to potential risks and the required quality. Software architects are also responsible for dealing with
  technical concerns such as persistence, communication, GUI etc. Also, they document the software architecture based on
  views, architectural patterns, technical concepts, and they accompany the realization of the architecture by
  integrating feedback from relevant stakeholders and contributing to code quality and consistency with reviews.
</details>

<details>
    <summary><b>Relate the role of software architects to other stakeholders</b></summary>  
  A software architect is responsible for the overall, high-level to low-level architecture of a software. They create a
  blueprint for the software such that it is durable, maintainable, easily extendable and robust. This has to be
  communicated to requirement analysts, developers, project leaders, product owners, IT operations, quality assurance
  and hardware developers on a suitable level.
</details>

<details>
    <summary><b>Ability to explain the correlation between development approaches and software architecture</b></summary>  
  Architectural decisions are sometimes decided in an iterative, non-linear fashion, depending on how the project
  develops and if new requirements or constraints suddenly appear. Due to inherent risk, feedback has to be sought by
  developers, business analysts and product owners etc. to respond quickly to new or obsolete requirements and update
  the software architecture iteratively.
</details>

<details>
    <summary><b>Differentiate between architecture and project objectives</b></summary>  
  A system can be developed withing scrum sprints, iterations, releases, traditional projects and other approaches.
  Usually, a project objective is concerned with the effective implementation of a feature or an underlying
  architectural pattern. An architectural objective is usually concerned with the final design of a software
  architecture with its constraints, advantages, disadvantages and other factors that might influence effective project
  objectives. Also, architectural objectives depend on and are influenced by requirements (project objectives).
  Long-term architectural objectives have to be clearly communicated how they relate to the (short-term) project
  objectives.
</details>

<details>
    <summary><b>Distinguish between explicit statements and implicit assumptions</b></summary>  
  Implicit assumptions based on previous decisions business-side can lead to misunderstandings with stakeholders when
  developing a software architecture. These implicit decisions might not be known to the software architect. Such
  implicit assumptions should be made explicit and communicated clearly.
</details>

<details>
    <summary><b>Know roles and responsibilities of software architects in an organizational context</b></summary>  
  Additional architectural levels in an organisation are infrastructure, hardware, software, business process and
  enterprise IT architecture.
</details>

<details>
    <summary><b>Understand the differences between types of IT systems</b></summary>
    <li><b>information systems</b>: process complex and large amounts of data with many users interacting with the software
      at the same time</li>
    <li><b>embedded systems</b>: mostly about control, regulation and communication, while hardware resources are often very
      limited</li>
    <li><b>mobile systems</b>: high interaction with user and they require a balance between they power-intense GUI and (
      semi-) autonomous functions. Moreover, interacting with the environment and synchronization and coordination with
      stationary systems might be necessary</li>
</details>

## Designing Software Architectures

<details>
    <summary><b>Select and adhere to approaches and heuristics for architecture development</b></summary>  
  Developing software architectures does not happen in a linear one-way fashion. Usually, the process of developing a
  good software architecture involves multiple rounds of changes and improvements as one integrates feedback, new
  information and changing requirements. Moreover, a software architect is sometimes bound by what kind of systems
  already exist or the tools available. A software architecture is developed top-down and bottom-up as well as in an
  iterative and incremental fashion. <b>Top-down</b> approaches start with the requirements and constraints as their input.
  The requirements and constraints are analyzed, then the architecture views and technical concepts are specified. These
  design decisions have to be challenged and evaluated and if necessary, feedback is integrated iteratively and
  incrementally. The lowest level is the program design and implementation level such as specifying building blocks,
  classes, interfaces etc. Finally, the software architect takes part in the actual implementation or guides it. If
  necessary, inputs from developers is integrated. In a <b>bottom-up</b> approach, the starting point are libraries and
  functions and a solution so a sub problem is synthesized. Top-down and bottom-up approaches are used synergetically.
  <br /><br />

  <li><b>Fundamental procedures of architecture development</b>: Architecture development happens incrementally and
    iteratively as well as in a top-down and bottom-up fashion depending on the current state of architecture.
    Feedback from different stakeholders is continuously integrated and design decisions are challenged to improve the
    final architecture.</li>
  <li><b>Model and view-based architecture development</b>: At the <b>view-based</b> level, functional and technical details
    are defined in more detail. At the <b>model-based</b> level, internal details of a functional or technical component
    are specified (program design and implementation level).</li>
  <li><b>Model-based and domain-driven design</b>: In <b>domain-driven design</b>, the system is structured into purely
    functional
    components. These components are known as entities and realize the overall function of a system. Moreover,
    entities are usually persisted. In <b>model-based design</b>, software components are created with models that are
    generated from UML diagrams.</li>
  <li><b>Iterative and incremental design</b>: <b>iterative</b> design incorporates feedback and <b>incremental</b> way of work
    drives development forward</li>
  <li><b>Top-down and bottom-up design</b>: A top-down approach breaks a problem down into sub problems until they can no
    longer be broken down. A bottom-up approach begins with assumed sub problems and proceeds with incremental
    development and testing until a solution is synthesized to a problem.</li>
  <li><b>Influencing factors and constraints as limitations in architecture design (global analysis)</b>: Architecture is
    influenced by peripheral factors such as other systems, available tools, time and budget.</li>

Thus, the process of creating a good software architecture requires creativity and innovation.
</details>

<details>
    <summary><b>Design architectures</b></summary>  
  Various aspects have to be accounted for when designing an architecture. These include well-defined, encapsulated
  components, their interactions (e.g. via interfaces), functional and technical concerns, stepwise refinement and
  integrating feedback from various stakeholders to specify building blocks. Architectures are not only limited to the
  actual software, but can also include deployment pipeline or specific aspects of a software, such as runtime views,
  backend, databases etc. Non-functional requirements such as ease of modification, robustness, efficiency, scalability
  have to be taken into account while designing an architecture to ensure future maintainability.
</details>

<details>
    <summary><b>Identify and consider factors influencing software architecture</b></summary>  
  Possible influencing factors can be the organizational structures (connection to other systems), time and budget
  available, certain quality requirements (e.g. speed, security, size of the application etc.) and limitations on design
  freedom such as predefined architectural requirements to integrate with the wider organizational context.
</details>

<details>
    <summary><b>Decide on and design cross-cutting concepts</b></summary>  
  Cross-cutting concerns are concerned with technical decisions that influence the system or a module as a whole.
  Examples are exception handling, logging, tracing and security requirements. Since cross-cutting concepts affect the
  entire system, they cannot be easily encapsulated. One possibility is to make use of aspect-oriented programming to
  realize separation of concerns for cross-cutting concerns.
</details>

<details>
    <summary><b>Describe, explain and appropriately use important architectural patterns and architectural styles</b></summary>
    <li><b>Data-flow and data-centric architectural styles</b>: Layered structures such as <b>pipes and filters</b> can help to
      develop a data-centric architecture. While a pipe passes the result from the previous operation to the next, the
      filters actually modify or filter the data. This enables stepwise processing (often the case in preprocessing
      pipelines for data-centric situations such as machine learning). With a <b>blackboard</b> pattern, several sources
      make their knowledge available to each other to arrive at an approximated solution. Knowledge sources send their
      solution to a partial or full problem to the blackboard. The blackboard component manages these solutions while a
      control component monitors the blackboard and if necessary controls the execution of knowledge sources.</li>
    <li><b>Hierarchical architectural styles</b>: Hierarchical styles usually follow a top-down approach and try to divide a
      problem into smaller sub problems until they can no longer be divided.</li>
    <li><b>Architectural styles for interactive systems</b>:
        <ul>
        <li><b>Model-View-Controller pattern</b>: User interfaces change quickly and frequently. The model contains the
          normally stable data and business logic. The controller processes user events and triggers changes in the
          view, which is pure representation (e.g. html, css). Also, the view component provides views for the model.</li>
        <li><b>Model-View-Presenter pattern</b>: Based on the MVC pattern, but with a stricter distinction between the view
          and model. The model still contains the data and business logic while only the presenter links the view with
          the model. The presenter executes functions from the model to change the view.</li>
        <li><b>Presentation-Abstraction-control pattern</b>: Complex user interfaces are divided into smaller, hierarchical
          components known as agents. These agents all have their views, controllers and abstractions (models). An
          abstraction only adapts part (or all) of the model, such that only elements required by the local view are
          included. The controller acts as an interface to the next higher or lower components in the hierarchy.</li>
        </ul>
    </li>
    <li><b>Heterogeneous architectural styles</b>: Some concerns cannot be easily encapsulated into building blocks such as
      cross-cutting concerns.</li>
    <li><b>Architectural styles for asynchronous or distributed systems</b>: In distributed systems, subsystems have to
      communicate with each other. <b>Brokers</b> allow for an easy data exchange (messages) between two (micro-)
      services (Kafka, RabbitMQ). <b>Service-oriented architectures (SOA)</b> decomposes a complex system into several
      smaller
      subsystems that perform an independent function and communicate with other systems. Microservices go one step
      lower, where a system is divided into multiple smaller microservices that all perform a separate function to
      fulfill a common goal. Thus, a SOA is concerned with an enterprise-wide level, while microservices are concerned
      with software-/system-wide levels.</li>
    <li><b>Other architectural patterns and styles</b>: Other design patterns include adapters, proxies, observers,
      decorators, facades, brides, states, mediators as well as creational design patterns.</li>
    <li><b>Important sources for architectural patterns</b>:
      &nbsp;<a href="https://springframework.guru/gang-of-four-design-patterns/">Design patterns by the Gang of Four</a> etc.
    </li>
</details>

<details>
    <summary><b>Explain and use design principles</b></summary>
    <li><b>Information hiding</b>: A system is encapsulated in building blocks. Their internal structure is kept hidden and
      only the absolutely necessary information for a certain function are exposed. Often, those are getter and setter
      methods, while fields are kept private. Such a building block acts as a black box. Communication across building
      blocks often takes place via interfaces that guarantee a certain behaviour of its building block.</li>
    <li><b>Coupling and cohesion</b>: <b>Loose coupling</b> and <b>high cohesion</b> should be aimed for. <b>Loose coupling</b>
      between building blocks makes them less dependent on each other's internal implementation, thus changes to one
      building block do not need to affect the other. Moreover, building blocks become more interchangeable in a
      loosely-coupled system. <b>High cohesion</b> refers to a class or building block that solves a specific problem or
      provides the overall system with a specific functionality. Functions and objects should be kept together that aim
      to perform the same purpose. Functions belong in the same class and should make use of the private members of that
      class, while cohesive classes should be grouped together in the same package (especially, "controller", "service"
      packages should be avoided and instead, controllers, services, DTOs etc. should be grouped in a single package
      with respect to the domain). Low cohesion indicates that a building block can be used for multiple purposes (e.g.
      utility classes).</li>
    <li><b>Separation of concerns</b>: A building block should only perform one function at a time. The principle of
      separation of concerns should be used at all levels, from a high-level architectural point of view (e.g. having a
      controller-service-repository based architecture) to low-level building blocks (such as classes, functions etc.).
      In particular, purely technical and functional building blocks should be separated from one another as this allows
      independent development.</li>
    <li><b>The open/closed principle</b>: A building block should be <b>open for extension</b> (adding new functionality on top
      of the existing structure, without changing the already existing structure) and <b>closed for modification</b> (do
      not change already implemented functionality).</li>
    <li><b>Dependency inversion via interfaces</b>: Dependencies between building blocks should take place via interfaces.
      This makes it ultimately easier to exchange these building blocks. Also, abstraction, factory methods etc. should
      be preferred as they can be used by a building block. These abstractions (interfaces etc.) provide the system with
      the required building block (e.g. an API, a specific object if using factory methods etc.).</li>
    <li><b>Dependency injection for externalization of dependencies</b>: A class that is used by another class should not be
      depended on changes in that other class. Thus, the classes that use a specific class is injected into them. Often,
      an interface to break strong-coupling and an injector class is used. Classes that need a dependency injected have
      to implement an <b>accept or setter</b> method to accept in injected class or a dependent class can be injected via 
      <b>constructor injection</b> (often the case in spring boot, e.g. when a service is used in a controller).</li>
    <li><b>The relationships between dependencies in the model and in the source code of programming languages</b>:
      Dependencies in the model take place on a high-level point of view that can be modelled conveniently with UMLs.
      Relationships in the source code are concerned with decoupling code from one another in order to create
      loosely-coupled and highly-cohesive classes building blocks that fulfill a specific purpose (separation of
      concerns) and hide their internal structure and communicate via interfaces ideally to increase modularity,
      flexibility, interchangeability and extensibility.</li>
</details>

<details>
    <summary><b>Plan dependencies between building blocks</b></summary>
    <li>Building blocks should be loosely-coupled and highly-cohesive. Loose coupling makes building blocks more
      interchangeable and less prone to side effects when a dependent building block is changed. High cohesion ensures
      that a building block fulfills one purpose and that building blocks related to that purpose or function are
      grouped together. Unrelated functions etc. should not be added in order to increase cohesion.</li>
    <li>High coupling can be removed via the use of interfaces. Also, dependency inversion helps to make a used building
      block less depended on the building block that uses it. Interfaces and factory methods are helpful to provide the
      building block to be used.</li>
    <li>Loose coupling is achieved with dependency injection in object-oriented programming and the usage of interfaces.</li>
    <li>Types of loose coupling include:
        <ul>
        <li><b>Generation</b>: A building block generates another building block (factory methods help to reduce coupling)</li>
        <li><b>Data</b>: Global data structures should be used to work with data across classes (DTOs, entities)</li>
        <li><b>Inheritance</b>: A subclass is coupled to its parent automatically due to inheritance and the number of
          inherited attributes</li>
        <li><b>Time</b>: Time-based coupling refers to a specific sequence that has to be executed in order and changing that
          sequence will impact the end result</li>
        <li><b>Hardware/Execution location</b>: Coupling to hardware can occur if code has to be executed on a specific
          location or hardware type</li>
        </ul>
    </li>
</details>

<details>
    <summary><b>Design architecture building blocks/structural elements</b></summary>
    <li>Building blocks should be encapsulated to hide the complexity of the system and only expose the absolutely
      necessary parts of a system to the outside in order to follow the principle of information hiding. As such, a
      building block acts as black box with its contents hidden to the outside world. Also, a building block can be
      further divided into subcomponents which from an implementer's point of view are white boxes. As white boxes,
      their internal details are known to the implementer.</li> 
    <li>Building blocks can be composed of other building blocks in multiple ways: inheritance allows a child building
      block to inherit public or protected members of its members, but it leads to stronger coupling. Also, a building
      block can be a nested class inside another class and lead to even stronger coupling. On the other hand, delegation
      or using dependency injection reduces coupling.</li>  
    <li>Building blocks that fulfill the same purpose together have high cohesion with one another and should be placed
      under the same package (<b>weak semantic aggregation</b>). Building blocks that implement the same interface have
      high cohesiveness and low coupling. This offers a semantically stronger form of aggregation.</li>
</details>

<details>
    <summary><b>Design and define interfaces</b></summary>  
  Interfaces help with decoupling building blocks and provide a common place of interaction for other building blocks.
  Moreover, this reinforces the principle of information hiding and encapsulation as an interface only exposes the
  necessary functionality to fulfill a certain behaviour or purposes. Furthermore, a building block acts as black box
  more strongly via an interface.  
  External interfaces are employed when an external system has to interact with internal building blocks.
</details>

## Description and Communication of Software Architectures

<details>
<summary><b>Explain and consider quality attributes of technical documentation</b></summary>  
  Technical documentation should be precise, easy to understand and avoid repetition if possible.
  A <b>brief description</b>, <b>diagrams</b> that provide a graphical representation of the view, an <b>element catalog</b> that
  explains the components of the diagram, a section of <b>variable components</b> where flexibility and changeability is
  addressed as well as <b>background information</b> such as justifications for the selected structure, results from
  analyses or previous tests, assumptions about the system and references, constitute good documentation.
</details>

<details>
<summary><b>Describe and communicate software architectures</b></summary>  
  Software architecture has to be communicated in a way that is easy to understand for the reader. Thus, different
  levels of abstraction, detail and focus are necessary depending on the reader (non-technical stakeholder, QA engineer,
  developer, other architects etc.).
</details>

<details>
<summary><b>Understand how to explain and apply notations/models that describe software architecture</b></summary>
    <li><b>UML class diagram</b> (structural): Shows the static structure of classes and the relationships between classes</li>
    <li><b>UML component diagram</b> (structural): Higher-level than the UML class diagram, which describes the interaction
      of the components of the software. Components communicate via clearly defined interfaces.</li>
    <li><b>UML activity diagram</b> (behavioural): Shows the possible sequence of elements using classes, components, etc. to
      provide a description of data flow, flow control or how algorithms function</li>
    <li><b>UML sequence diagram</b> (behavioural): Shows the interaction respectively message exchange of building blocks</li>
</details>

<details>
<summary><b>Explain and use architectural views</b></summary>
    <li><b>Context view</b>: A high-level view that puts the software in the context of the wider system, such as connections
      to other systems within a company.</li>
    <li><b>Building block view</b>: A detailed view of the software that is normally represented with <b>UML notation</b>. It
      describes the interaction of the individual software components (building blocks) and can go as far as to specify
      implementation details (e.g. via class diagrams).</li>
    <li><b>Runtime view</b>: A runtime view describes the operational flow of a system when it is actually being deployed and
      is up-and-running. Often represented with UML activity, sequence and communication diagrams.</li>
    <li><b>Deployment (infrastructure) view</b>: The deployment view describes the infrastructure on which the software is
      deployed and the processes from local code, via potential CI/CD pipelines to the environment it is deployed to (
      e.g. to a cloud or a hosted, on-premise environment).</li>
</details>

<details>
<summary><b>Explain and use the system context</b></summary>  
  The system context puts the software in relation to the wider context, such as how it interacts with other available
  systems (user directory etc.). This defines a boundary between the system and its environment.
</details>

<details>
<summary><b>Document and communicate cross-cutting architectural concepts</b></summary>  
  Cross-cutting concerns affect most or all components of a system, e.g. error handling, logging, security etc.
</details>

<details>
<summary><b>Describe interfaces</b></summary>  
  Interfaces often regulate the communication between two building blocks. If the building blocks are part of the same
  system, they communicate via <b>internal</b> interfaces. If a building block communicates with an external systems, then
  communication takes place via <b>external</b> interfaces, which is the entrypoint to expose internal components to the
  outside.A description for an interface usually contains a <b>precise name and version</b>, <b>syntax and semantics</b> of a
  resource, <b>error scenarios</b> (e.g. why a 401 UNAUTHORIZED error occurred), <b>configurability</b> of parameters to
  change the behaviour, notes or <b>examples</b> etc.
</details>

<details>
<summary><b>Explain and document architectural decisions</b></summary>  
  Architectural decisions should take quality requirements, objectives, constraints, identified risks, cross-cutting
  concerns, and different levels (high to low-level) and types (function and technical) etc. into account.
</details>

<details>
<summary><b>Understand the use of documentation as written communication</b></summary>  
  Documentation should be written from the <b>reader's point of view</b> and either kept simple for non-technical staff or
  add relevant technical details for technical staff. In general, <b>repetition and ambiguous text should be avoided</b>,
  such that the documentation is clear and simple to understand. <b>Standardized structures or templates</b> (depending on
  the organization) should be used. Important <b>decisions should be justified</b> to increase traceability and it should
  be <b>reviewed by other readers</b> to increase real-life applicability and ease of use. Lastly, the diagrams should be
  uncluttered and the documentation regularly updated.
</details>

<details>
<summary><b>Know additional resources and documentation tools</b></summary>  
  4+1, TOGAF, ISO/IEEE-42010 (formerly 1471), arc42, SAGA, OMG-MDA
</details>

## Software Architectures and Quality

<details>
<summary><b>Discuss quality models and quality characteristics</b></summary>  
  Software quality relates to the suitability of the entirety of all features and relevant values for a software product
  to fulfill a purpose.  
  Relevant considerations to evaluate the quality of software according to ISO 25010 are:
    <li><b>Functional suitability</b>: The software should have all necessary features to execute a function or fulfill a
      requirement.</li>
    <li><b>Reliability</b>: The software should have a steady performance without unexpected, volatile behaviour and perform
      consistently if volatile activity is sometimes expected.</li>
    <li><b>Usability</b>: The software should be intuitive, easy-to-learn and self-explanatory for users (User Experience)</li>
    <li><b>Performance efficiency</b>: Economic performance should be guaranteed for fulfilling a certain task or query
      without consuming unnecessary time, space or other resources.</li>
    <li><b>Security</b>: Only authorized users or systems should be able to access certain parts of data.</li>
    <li><b>Compatibility</b>: Different systems should easily exchange with each other or execute required functions.</li>
    <li><b>Maintainability</b>: The software should be changeable without undesired side effects, have a high degree of
      reusability and a change or error correction should be easy and quick instead of involving many unrelated parts of
      the system and be time-consuming.</li>
    <li><b>Portability</b>: The software should be portable to other systems and environments.</li>

  Another quality characteristic is scalability. Vertical scalability is concerned if a component (e.g. a server)
  can easily be exchanged with a more performant component, while horizontal scalability is concerned if more
  components of the same type can easily be added (e.g. more servers).  
  Some quality characteristics can interfere with each other. Increasing the flexibility of a system can potentially
  decrease the testability of the system as more configurations need to be tested. Flexibility can conflict with the
  performance of a system. Also, higher security can potentially affect usability if certain features are only available
  within a specific environment or authorization role.
</details>

<details>
<summary><b>Define quality requirements for software architectures</b></summary>  
  Quality requirements can sometimes be hard to fulfill as some quality characteristics might impact each other. Methods
  include carrying out load tests, adding more memory, introducing more redundancies and decreasing system flexibility
  etc. On the other hand, if flexibility is important, it has to be analyzed what part of the system has to be more
  flexible, for example, with respect to a functionality, data structures, external systems, user interfaces etc.
  Measures to take are to use information hiding / encapsulation, reducing dependencies between building blocks, keeping
  changes as local as possible without affecting other parts of the system, decoupling elements of the system as much as
  possible and increasing the understandability (simplicity) of the code. A last point is <b>traceability</b> which ensures
  that decisions can be understood in the future by documenting decisions, code, specifications, requirements etc.
</details>

<details>
<summary><b>Perform qualitative evaluation of software architectures</b></summary>  
  The ATAM method is employed for qualitative evaluations. The evaluation of software architecture is broken down into
  four phases: Preparation, Kick-off, evaluation and conclusion. Quality requirements are organized hierarchically and
  scenarios are written for it. While writing scenarios, four aspects have to be addressed such as risk, sensitivity
  points, compromises and non-risks. Scenarios describe how the system interacts with the stakeholders and what risks
  may occur in achieving a quality characteristic.  
  A <b>quality tree</b> has a criteria at its top and more specific quality requirements branch of it. The leaves are
  scenarios that describe a specific characteristic in a detailed way.
</details>

<details>
<summary><b>Understand the quantitative evaluation of software architectures</b></summary>  
  Metrics to evaluate the quality quantitatively include lines of code, degrees of dependency (coupling), inheritance
  depth, number of functions per class, average time for error correction, number of errors found per package, number of
  tests etc. Another metric is the <b>cyclomatic complexity</b> (also known as the McCabe metric). It shows the number of
  linearly independent paths through the source code of a program.
</details>

<details>
<summary><b>Understand how quality objectives can be achieved</b></summary>
    <li>Potential issues and risks: A technical proof of concept can determine if the interaction between components</li>
      functions correctly. A prototype can help to demonstrate the functionality of a system at a larger scale.
    <li>Efficiency and performance: Load and stress tests</li>
    <li>Maintainability, changeability, extensibility, flexibility: Techniques such as low coupling and high cohesion,
      usage of interfaces, reducing dependencies and side effects, simplicity help achieve these goals.</li>
</details>

## Tools for Software Architects

<details>
<summary><b>Name and explain important tool categories</b></summary>
  <li><b>Requirements management tools</b>: Helps with collecting, organizing, presenting requirements and often serves as
    a basis for a contractual agreement</li>
  <li><b>Modelling tools</b>: Graphical representation of the dependencies and interactions of system components. Depending
    on the degree of technical detail, graphs can sometimes be hard to understand for non-technical readers.</li>
  <li><b>Generation tools</b>: Generate code artifacts based on an abstract metamodel or file</li>
  <li><b>Static code analysis tools</b>: Analyze source code and checks if the code follows predefined rules to ensure
    maintainability, simplicity, efficiency etc.</li>
  <li><b>Dynamic code analysis tools</b>: Analyze the runtime behaviour of the software with respect to speed, memory
    usage, time measurements, statistical analysis (how often individual components are used)</li>
  <li><b>Build management tools</b>: Enable versioning, running tests, inspecting code, compiling, creating artifacts and
    other processes when building the code.</li>
  <li><b>Configuration and version management tools</b>: Supports multiple developers when working on code at different
    places with concepts such as merging, branching etc. (e.g. github)</li>
  <li><b>Code management tools</b>: Supports developers during the process of creating code with handy functions such as
    code completion, syntax highlighting, organising code, searching for code etc. (e.g. IntelliJ)</li>
  <li><b>Testing tools</b>: Automate unit, system, integration, end-to-end tests and create reports</li>
  <li><b>Documentation tools</b>: Supports software architects in the communication of decisions, structures, concepts and
    other information</li>
</details>

<details>
<summary><b>Select tools according to requirements</b></summary>  
  The work environment and tools depend on the respective conditions, constraints and other influencing factors.
</details>
