import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from "@docusaurus/Link";

// displays some contents of the homepage
const FeatureList = [
  {
    title: 'Software Architecture Fundamentals',
    link: '/docs/software-architecture-fundamentals',
    description: (
      <>
        Fundamentals of Software Architecture
      </>
    ),
  },
  {
    title: 'Designing Software Architectures',
    link: '/docs/designing-software-architectures',
    description: (
      <>
        Designing Software Architectures
      </>
    ),
  },
  {
    title: 'Questions & Answers',
    link: '/docs/questions-and-answers',
    description: (
        <>
          All Questions and Answers for the iSAQB Foundation level exam
        </>
    ),
  }
];

function Feature({title, description, link}) {
  return (
    <div className={clsx('col col-4')}>
      <Link to={link}>
        <div className="text-center padding-horiz-md">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
