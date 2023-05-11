---
sidebar_label: Software Architectures and Quality
sidebar_position: 4
keywords: [quality software architecture]
---

# Software Architectures and Quality

## Learning Goals

- **Discuss quality models and quality characteristics**  
  Software quality relates to the suitability of the entirety of all features and relevant values for a software product
  to fulfill a purpose.  
  Relevant considerations to evaluate the quality of software according to ISO 25010 are:
    - **Functional suitability**: The software should have all necessary features to execute a function or fulfill a
      requirement.
    - **Reliability**: The software should have a steady performance without unexpected, volatile behaviour and perform
      consistently if volatile activity is sometimes expected.
    - **Usability**: The software should be intuitive, easy-to-learn and self-explanatory for users (User Experience)
    - **Performance efficiency**: Economic performance should be guaranteed for fulfilling a certain task or query
      without consuming unnecessary time, space or other resources.
    - **Security**: Only authorized users or systems should be able to access certain parts of data.
    - **Compatibility**: Different systems should easily exchange with each other or execute required functions.
    - **Maintainability**: The software should be changeable without undesired side effects, have a high degree of
      reusability and a change or error correction should be easy and quick instead of involving many unrelated parts of
      the system and be time-consuming.
    - **Portability**: The software should be portable to other systems and environments.

  Another quality characteristic is scalability. Vertical scalability is concerned if a component (e.g. a server)
  can easily be exchanged with a more performant component, while horizontal scalability is concerned if more
  components of the same type can easily be added (e.g. more servers).  
  Some quality characteristics can interfere with each other. Increasing the flexibility of a system can potentially
  decrease the testability of the system as more configurations need to be tested. Flexibility can conflict with the
  performance of a system. Also, higher security can potentially affect usability if certain features are only available
  within a specific environment or authorization role.

- **Define quality requirements for software architectures**  
  Quality requirements can sometimes be hard to fulfill as some quality characteristics might impact each other. Methods
  include carrying out load tests, adding more memory, introducing more redundancies and decreasing system flexibility
  etc. On the other hand, if flexibility is important, it has to be analyzed what part of the system has to be more
  flexible, for example, with respect to a functionality, data structures, external systems, user interfaces etc.
  Measures to take are to use information hiding / encapsulation, reducing dependencies between building blocks, keeping
  changes as local as possible without affecting other parts of the system, decoupling elements of the system as much as
  possible and increasing the understandability (simplicity) of the code. A last point is **traceability** which ensures
  that decisions can be understood in the future by documenting decisions, code, specifications, requirements etc.

- **Perform qualitative evaluation of software architectures**  
  The ATAM method is employed for qualitative evaluations. The evaluation of software architecture is broken down into
  four phases: Preparation, Kick-off, evaluation and conclusion. Quality requirements are organized hierarchically and
  scenarios are written for it. While writing scenarios, four aspects have to be addressed such as risk, sensitivity
  points, compromises and non-risks. Scenarios describe how the system interacts with the stakeholders and what risks
  may occur in achieving a quality characteristic.  
  A **quality tree** has a criteria at its top and more specific quality requirements branch of it. The leaves are
  scenarios that describe a specific characteristic in a detailed way.

- **Understand the quantitative evaluation of software architectures**  
  Metrics to evaluate the quality quantitatively include lines of code, degrees of dependency (coupling), inheritance
  depth, number of functions per class, average time for error correction, number of errors found per package, number of
  tests etc. Another metric is the **cyclomatic complexity** (also known as the McCabe metric). It shows the number of
  linearly independent paths through the source code of a program.

- **Understand how quality objectives can be achieved**
    - Potential issues and risks: A technical proof of concept can determine if the interaction between components
      functions correctly. A prototype can help to demonstrate the functionality of a system at a larger scale.
    - Efficiency and performance: Load and stress tests
    - Maintainability, changeability, extensibility, flexibility: Techniques such as low coupling and high cohesion,
      usage of interfaces, reducing dependencies and side effects, simplicity help achieve these goals.

