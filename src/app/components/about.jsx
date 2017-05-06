import React from 'react';
import styles from './about.scss';

import firebase from 'firebase';

import Hearts from './hearts/hearts_index';

export default () => {
  return (
    <div className="about section">
      <Hearts />
      <div className="copy-container">
        <h2><span className="call-out">Hello</span> my name is</h2>
        <h1>Yasir Hossain</h1>
        <p>
          I posses a unique blend of UX / UI Design, Full-Stack Engineering. Passion for creating highly performant, scalable and interactive components from ideation, design, development, all the way to deployment.
        </p>
        <p>
          <span className="badge">TLDR</span> A Creative Technologist with a passion to solve problems with a focus on innovative hollistic approach.
        </p>
      </div>
      <div className="hero-container">
        <div className="hero"></div>
      </div>
    </div>
  );
};
