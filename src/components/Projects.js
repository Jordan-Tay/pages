import React, { useState } from 'react';
import './Projects.css';
import { useSpring, useSprings, animated } from 'react-spring';

function Projects() {
  const [itemPoint, setItemPoint] = useState(null);
  const [itemClick, setItemClick] = useState(null);

  const itemList = ["Rhythmap", "Personal Website", "ARM11 Assembler and Emulator", "LinkUp", "TOS Game", "Minesweeper"];
  const itemAnimate = useSprings(
    itemList.length, 
    itemList.map((item, i) => ({
      boxShadow: (itemPoint === i || itemClick === i) ? '0 0px 20px 0px rgba(0, 0, 0, 0.19)' : '0 0px 0px 0px white',
      transform: itemClick === i ? 'scale(0.95)' : 'scale(0.9)',
    }))
  );

  const [descriptionPoint, setDescriptionPoint] = useState(0);

  const descriptionShade = useSpring({
    boxShadow: descriptionPoint ? '0 10px 20px 0px rgba(0, 0, 0, 0.19)' : '0 0px 0px 0px white',
  })

  const descriptionCover = useSpring({
    opacity: itemClick !== null ? 0 : 1,
  });

  const descriptionList = [<Rhythmap />, <PersonalWebsite />, <Arm11 />, <LinkUp />, <TosGame />, <Minesweeper />];
  const descriptionAnimate = useSprings(
    descriptionList.length,
    descriptionList.map((item, i) => ({
      filter: itemClick !== null ? 'blur(0px)' : 'blur(8px)', 
      transform: `translateY(${itemClick*-311}px) scale(${1-Math.abs(i-itemClick)/(2*descriptionList.length)})`, 
    }))
  );

  return (
    <div id="projects">
      <h1 className="project-header">Projects</h1>
      <hr />
      <div className="cards-container">
        <div className="project-list">
          {itemAnimate.map((props, i) => (
            <animated.div
              key={i}
              onClick={() => setItemClick(i)}
              onMouseEnter={() => setItemPoint(i)}
              onMouseLeave={() => setItemPoint(null)}
              style={props}
              className="project-list-item"
            >
              <h2>{itemList[i]}</h2>
            </animated.div>
          ))}
        </div>
        <animated.div 
          style={descriptionShade}
          className="project-description"
          onMouseEnter={() => setDescriptionPoint(1)}
          onMouseLeave={() => setDescriptionPoint(0)}
        >
          <animated.div
            style={descriptionCover}
            className="project-description-cover"
          >
            <h4>Project description</h4>
            <p>(Inspired by Smart Stack)</p>
          </animated.div>
          {descriptionAnimate.map((props, i) => (
            <animated.div
              key={i}
              style={props}
              className="project-description-item"
            >
              {descriptionList[i]}
            </animated.div>
          ))}
        </animated.div>
      </div>
    </div>
  );
}

const Rhythmap = ()=> {
  return (
    <div>
      <h1>Rhythmap</h1>
    </div>
  )
}

const PersonalWebsite = ()=> {
  return (
    <div>
      <h1>Personal Website</h1>
    </div>
  )
}

const Arm11 = ()=> {
  return (
    <div>
      <h1>ARM11</h1>
    </div>
  )
}

const LinkUp = ()=> {
  return (
    <div>
      <h1>LinkUp</h1>
    </div>
  )
}

const TosGame = ()=> {
  return (
    <div>
      <h1>TOS Game</h1>
    </div>
  )
}

const Minesweeper = ()=> {
  return (
    <div>
      <h1>Minesweeper</h1>
    </div>
  )
}

export default Projects;
