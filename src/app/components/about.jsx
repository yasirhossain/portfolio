import React from 'react';
import { Link } from 'react-router';

import styles from './about.scss';
import heroSVG from '../static/anime-yasir.svg';
import heroPNG from '../static/anime-yasir.png';
import brainPNG from '../static/brain.png';

import firebase from 'firebase';

import Hearts from './hearts/hearts_index';

export default () => {
  const heroSVGStyle = {
    background: `url(${heroPNG}) center center no-repeat transparent`,
    backgroundSize: `contain`,
  }

  const brainSVGStyle = {
    background: `url(${brainPNG}) center center no-repeat transparent`,
    backgroundSize: `contain`,
  }

  return (
    <div className="about section">
      <Hearts />
      <div className="hero-container">
        <div className="brain" style={brainSVGStyle}></div>
        <div className="hero" style={heroSVGStyle}></div>
      </div>
      <div className="copy-container">
        <h2><span className="call-out">Hello</span> my name is</h2>
        <h1>Yasir Hossain</h1>
        <p>
          I'm as hybrid as they get. A <a href="https://www.mockplus.com/blog/post/full-stack-designer/?utm_source=promote&utm_medium=click&utm_campaign=grace" target="_blank">Full-Stack Designer</a>, Full-Stack Engineer with a passion for creating highly performant, scalable interactive components from ideation, design, development, all the way to deployment.
        </p>
        <p>
          <span className="badge">TLDR</span> A <a href="https://www.roberthalf.com/creativegroup/blog/what-does-a-creative-technologist-really-do" target="_blank">Creative Technologist</a> with a passion to solve problems with a focus on innovative hollistic approach.
        </p>
        <div className="actions-container">
          <Link to="/code" className="action-button">Left Brain</Link>
          <Link to="/design" className="action-button">Right Brain</Link>
        </div>
      </div>
    </div>
  );
};
