---
sidebar_label: Designing Software Architectures
sidebar_position: 2
keywords: [design software, how to design software architecture]
---

# Designing Software Architectures

- **Degenerated design**:
    - **Fragility**: Changes in one place lead to unforeseen errors in another place
    - **Rigidity**: Small changes are difficult and affect many other components
    - **Low reusablity**: Due to the dependency of a component, it cannot be reused or exchanged

- Abstract base classes as a solution to the open/closed principle contradiction: Abstract base classes offer a way to
  have a blueprint with a defined and unchangeable implementation, but where its behaviour can be changed via
  polymorphisms and inheritance.

- **Liskov's substitution principle**: A basic class should always be replaceable by its derived classes (subclasses,
  its children that inherit from the parent class). Thus, the base class should be identical in terms of behaviour
  with respect to its subclasses.

- **High-level considerations for software architecture development**:
    - **Divide and conquer**: A reductionist approach which breaks down a problem into sub problems and partial
      solutions, similar to a top-down approach
    - **Decomposition**: Building blocks should be encapsulated to reduce their dependencies, such that they can
      be treated as black boxes leading to low coupling and high cohesion
    - **Separation of concerns**: An aspect of a problem should be separated from the overall problem and addressed
      individually. This should occur at all levels of the system and during all times of architectural development. In
      particular, functional and technical aspects of a system should be separated and addressed individually.
    - **Information hiding**: Building blocks are encapsulated and moreover, direct access to their internal structure
      is denied. Interaction takes place via interfaces or getters, setters etc.
    - **Interfaces**: Communication via building blocks takes place via interfaces that function as a promise for a
      certain behaviour.

- **Design patterns**:
    - **Adapter (structural)**: Used when existing modules are incompatible with a required interface by creating second
      adapter interface.
    - **Observer (structural)**: An observer notifies other components when a change in a different component occurs. It
      does not need to know the other components nor does the changing component need to know about the observer.
    - **Decorator (structural)**: Adds functionality and extends a component without changing the component directly.
    - **Proxy (structural)**: If a direct call to a class is not possible for some reason, a proxy with the same
      interface can be
      used instead which simply forwards the call to the actual class.
    - **Facade (structural)**: Another way to reduce complexity and dependencies to outside systems. If a subsystem has
      many internal components that are never or barely used by other systems, a facade can be used to provide a
      simplified interface to the outside, hiding many internal details of the subsystem.
    - **Bridge (structural)**: Usually, concrete classes implement abstract classes by inheriting from them. This leads
      to dependencies between the abstract and concrete classes. A bridge provides a way to have two hierarchies, such
      that abstract classes and concrete classes can be modified independently of each other. Often, concrete classes
      implement and implementation abstract class (the bridge) which has a depends on the abstract class. Multiple
      such "simplified interfaces" of an abstract base class can exist which is implemented by the concrete classes.
    - **State (behavioural)**: If an object changes its behaviour based on its internal state by using if-else
      statements or switch statements, other classes that handle the dynamic, internal state are called. These
      **ConcreteState** classes implement **handle()** usually.
    - **Mediator (behavioural)**: A mediator manages complex interactions between different objects. These objects know
      their mediator and are referred to as colleagues amongst each other.

## Learning Goals

- **Select and adhere to approaches and heuristics for architecture development**  
  Developing software architectures does not happen in a linear one-way fashion. Usually, the process of developing a
  good software architecture involves multiple rounds of changes and improvements as one integrates feedback, new
  information and changing requirements. Moreover, a software architect is sometimes bound by what kind of systems
  already exist or the tools available. A software architecture is developed top-down and bottom-up as well as in an
  iterative and incremental fashion. **Top-down** approaches start with the requirements and constraints as their input.
  The requirements and constraints are analyzed, then the architecture views and technical concepts are specified. These
  design decisions have to be challenged and evaluated and if necessary, feedback is integrated iteratively and
  incrementally. The lowest level is the program design and implementation level such as specifying building blocks,
  classes, interfaces etc. Finally, the software architect takes part in the actual implementation or guides it. If
  necessary, inputs from developers is integrated. In a **bottom-up** approach, the starting point are libraries and
  functions and a solution so a sub problem is synthesized. Top-down and bottom-up approaches are used synergetically.

    - **Fundamental procedures of architecture development**: Architecture development happens incrementally and
      iteratively as well as in a top-down and bottom-up fashion depending on the current state of architecture.
      Feedback from different stakeholders is continuously integrated and design decisions are challenged to improve the
      final architecture.
    - **Model and view-based architecture development**: At the **view-based** level, functional and technical details
      are defined in more detail. At the **model-based** level, internal details of a functional or technical component
      are specified (program design and implementation level).
    - **Model-based and domain-driven design**: In **domain-driven design**, the system is structured into purely
      functional components. These components are known as entities and realize the overall function of a system.
      Moreover, entities are usually persisted. In **model-based design**, software components are created with models
      that are generated from UML diagrams.
    - **Iterative and incremental design**: **iterative** design incorporates feedback and **incremental** way of work
      drives development forward
    - **Top-down and bottom-up design**: A top-down approach breaks a problem down into sub problems until they can no
      longer be broken down. A bottom-up approach begins with assumed sub problems and proceeds with incremental
      development and testing until a solution is synthesized to a problem.
    - **Influencing factors and constraints as limitations in architecture design (global analysis)**: Architecture is
      influenced by peripheral factors such as other systems, available tools, time and budget.

  Thus, the process of creating a good software architecture requires creativity and innovation.

- **Design architectures**  
  Various aspects have to be accounted for when designing an architecture. These include well-defined, encapsulated
  components, their interactions (e.g. via interfaces), functional and technical concerns, stepwise refinement and
  integrating feedback from various stakeholders to specify building blocks. Architectures are not only limited to the
  actual software, but can also include deployment pipeline or specific aspects of a software, such as runtime views,
  backend, databases etc. Non-functional requirements such as ease of modification, robustness, efficiency, scalability
  have to be taken into account while designing an architecture to ensure future maintainability.

- **Identify and consider factors influencing software architecture**  
  Possible influencing factors can be the organizational structures (connection to other systems), time and budget
  available, certain quality requirements (e.g. speed, security, size of the application etc.) and limitations on design
  freedom such as predefined architectural requirements to integrate with the wider organizational context.

- **Decide on and design cross-cutting concepts**  
  Cross-cutting concerns are concerned with technical decisions that influence the system or a module as a whole.
  Examples are exception handling, logging, tracing and security requirements. Since cross-cutting concepts affect the
  entire system, they cannot be easily encapsulated. One possibility is to make use of aspect-oriented programming to
  realize separation of concerns for cross-cutting concerns.

- **Describe, explain and appropriately use important architectural patterns and architectural styles**
    - **Data-flow and data-centric architectural styles**: Layered structures such as **pipes and filters** can help to
      develop a data-centric architecture. While a pipe passes the result from the previous operation to the next, the
      filters actually modify or filter the data. This enables stepwise processing (often the case in preprocessing
      pipelines for data-centric situations such as machine learning).  
      With a **blackboard** pattern, several sources make their knowledge available to each other to arrive at an
      approximated solution. Knowledge sources send their solution to a partial or full problem to the blackboard. The
      blackboard component manages these solutions while a control component monitors the blackboard and if necessary
      controls the execution of knowledge sources.
    - **Hierarchical architectural styles**: Hierarchical styles usually follow a top-down approach and try to divide a
      problem into smaller sub problems until they can no longer be divided.
    - **Architectural styles for interactive systems**:
        - **Model-View-Controller pattern**: User interfaces change quickly and frequently. The model contains the
          normally stable data and business logic. The controller processes user events and triggers changes in the
          view, which is pure representation (e.g. html, css). Also, the view component provides views for the model.
        - **Model-View-Presenter pattern**: Based on the MVC pattern, but with a stricter distinction between the view
          and model. The model still contains the data and business logic while only the presenter links the view with
          the model. The presenter executes functions from the model to change the view.
        - **Presentation-Abstraction-control pattern**: Complex user interfaces are divided into smaller, hierarchical
          components known as agents. These agents all have their views, controllers and abstractions (models). An
          abstraction only adapts part (or all) of the model, such that only elements required by the local view are
          included. The controller acts as an interface to the next higher or lower components in the hierarchy.
    - **Heterogeneous architectural styles**: Some concerns cannot be easily encapsulated into building blocks such as
      cross-cutting concerns.
    - **Architectural styles for asynchronous or distributed systems**: In distributed systems, subsystems have to
      communicate with each other. **Brokers** allow for an easy data exchange (messages) between two (micro-)
      services (Kafka, RabbitMQ). **Service-oriented architectures (SOA)** decomposes a complex system into several
      smaller subsystems that perform an independent function and communicate with other systems. Microservices go one
      step lower, where a system is divided into multiple smaller microservices that all perform a separate function to
      fulfill a common goal. Thus, a SOA is concerned with an enterprise-wide level, while microservices are concerned
      with software- / system-wide levels.
    - **Other architectural patterns and styles**: Other design patterns include adapters, proxies, observers,
      decorators, facades, bridges, states, mediators as well as creational design patterns.
    - **Important sources for architectural patterns**:
      [Design patterns by the Gang of Four](https://springframework.guru/gang-of-four-design-patterns/) etc.

- **Explain and use design principles**
    - **Information hiding**: A system is encapsulated in building blocks. Their internal structure is kept hidden and
      only the absolutely necessary information for a certain function are exposed. Often, those are getter and setter
      methods, while fields are kept private. Such a building block acts as a black box. Communication across building
      blocks often takes place via interfaces that guarantee a certain behaviour of its building block.

    - **Coupling and cohesion**: **Loose coupling** and **high cohesion** should be aimed for. **Loose coupling**
      between building blocks makes them less dependent on each other's internal implementation, thus changes to one
      building block do not need to affect the other. Moreover, building blocks become more interchangeable in a
      loosely-coupled system. **High cohesion** refers to a class or building block that solves a specific problem or
      provides the overall system with a specific functionality. Functions and objects should be kept together that aim
      to perform the same purpose. Functions belong in the same class and should make use of the private members of that
      class, while cohesive classes should be grouped together in the same package (especially, "controller", "service"
      packages should be avoided and instead, controllers, services, DTOs etc. should be grouped in a single package
      with respect to the domain). Low cohesion indicates that a building block can be used for multiple purposes (e.g.
      utility classes).

    - **Separation of concerns**: A building block should only perform one function at a time. The principle of
      separation of concerns should be used at all levels, from a high-level architectural point of view (e.g. having a
      controller-service-repository based architecture) to low-level building blocks (such as classes, functions etc.).
      In particular, purely technical and functional building blocks should be separated from one another as this allows
      independent development.

    - **The open/closed principle**: A building block should be **open for extension** (adding new functionality on top
      of the existing structure, without changing the already existing structure) and **closed for modification** (do
      not change already implemented functionality).

    - **Dependency inversion via interfaces**: Dependencies between building blocks should take place via interfaces.
      This makes it ultimately easier to exchange these building blocks. Also, abstraction, factory methods etc. should
      be preferred as they can be used by a building block. These abstractions (interfaces etc.) provide the system with
      the required building block (e.g. an API, a specific object if using factory methods etc.).

    - **Dependency injection for externalization of dependencies**: A class that is used by another class should not be
      depended on changes in that other class. Thus, the classes that use a specific class is injected into them. Often,
      an interface to break strong-coupling and an injector class is used. Classes that need a dependency injected have
      to implement an **accept or setter** method to accept in injected class or a dependent class can be injected via
      **constructor injection** (often the case in spring boot, e.g. when a service is used in a controller).

    - **The relationships between dependencies in the model and in the source code of programming languages**:
      Dependencies in the model take place on a high-level point of view that can be modelled conveniently with UMLs.
      Relationships in the source code are concerned with decoupling code from one another in order to create
      loosely-coupled and highly-cohesive classes building blocks that fulfill a specific purpose (separation of
      concerns) and hide their internal structure and communicate via interfaces ideally to increase modularity,
      flexibility, interchangeability and extensibility.

- **Plan dependencies between building blocks**
    - Building blocks should be loosely-coupled and highly-cohesive. Loose coupling makes building blocks more
      interchangeable and less prone to side effects when a dependent building block is changed. High cohesion ensures
      that a building block fulfills one purpose and that building blocks related to that purpose or function are
      grouped together. Unrelated functions etc. should not be added in order to increase cohesion.
    - High coupling can be removed via the use of interfaces. Also, dependency inversion helps to make a used building
      block less depended on the building block that uses it. Interfaces and factory methods are helpful to provide the
      building block to be used.
    - Loose coupling is achieved with dependency injection in object-oriented programming and the usage of interfaces.
    - Types of loose coupling include:
        - **Generation**: A building block generates another building block (factory methods help to reduce coupling)
        - **Data**: Global data structures should be used to work with data across classes (DTOs, entities)
        - **Inheritance**: A subclass is coupled to its parent automatically due to inheritance and the number of
          inherited attributes
        - **Time**: Time-based coupling refers to a specific sequence that has to be executed in order and changing that
          sequence will impact the end result
        - **Hardware/Execution location**: Coupling to hardware can occur if code has to be executed on a specific
          location or hardware type

- **Design architecture building blocks/structural elements**
    - Building blocks should be encapsulated to hide the complexity of the system and only expose the absolutely
      necessary parts of a system to the outside in order to follow the principle of information hiding. As such, a
      building block acts as black box with its contents hidden to the outside world. Also, a building block can be
      further divided into subcomponents which from an implementer's point of view are white boxes. As white boxes,
      their internal details are known to the implementer.
    - Building blocks can be composed of other building blocks in multiple ways: inheritance allows a child building
      block to inherit public or protected members of its parent building block, but it leads to stronger coupling.
      Also, a building block can be a nested class inside another class and lead to even stronger coupling. On the other
      hand, delegation or using dependency injection reduces coupling.
    - Building blocks that fulfill the same purpose together have high cohesion with one another and should be placed
      under the same package (**weak semantic aggregation**). Building blocks that implement the same interface have
      high cohesiveness and low coupling. This offers a semantically stronger form of aggregation.

- **Design and define interfaces**  
  Interfaces help with decoupling building blocks and provide a common place of interaction for other building blocks.
  Moreover, this reinforces the principle of information hiding and encapsulation as an interface only exposes the
  necessary functionality to fulfill a certain behaviour or purposes. Furthermore, a building block acts as black box
  more strongly via an interface.  
  External interfaces are employed when an external system has to interact with internal building blocks.
