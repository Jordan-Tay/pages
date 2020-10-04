import React, { useState } from 'react';
import './About.css';
import { useSpring, animated } from 'react-spring';

function About() {
  const [point, setPoint] = useState(0);

  const shade = useSpring({
    boxShadow: point ? '0 10px 20px 0px rgba(0, 0, 0, 0.19)' : '0 0px 0px 0px white',
  });

  return (
    <div id="about-me">
      <h1 className="about-header">About Me</h1>
      <hr />
      <div className="about-container">
        <animated.div
          style={shade}
          className="about-card"
          onMouseEnter={() => setPoint(1)}
          onMouseLeave={() => setPoint(0)}
        >
          <div className="about-card-content">
            <h1>Hello!</h1> 
            <hr />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
              do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco 
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
              irure dolor in reprehenderit in voluptate velit esse cillum 
              dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
              cupidatat non proident, sunt in culpa qui officia deserunt 
              mollit anim id est laborum.
            </p>
          </div>
        </animated.div>
      </div>
    </div>
  );
}

export default About;
