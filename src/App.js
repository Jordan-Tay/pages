import React from 'react';
import './App.css';
import Nav from './components/Nav.js';
import Card from './components/Card.js';
import About from './components/About.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';

function App() {
  return (
    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <Nav />
      <div className="app">
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
