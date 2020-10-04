import React from 'react';
import './Nav.css';
import Button from './Button.js';
import { Spring, config } from 'react-spring/renderprops';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: window.pageYOffset,
    }
  }

  handleScroll() {
    this.setState({ toggle: window.pageYOffset });
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  render() {
    let toggle = this.state.toggle;
    return (
      <Spring
        to={{
          boxShadow: toggle ? '0 0px 5px 5px rgba(100, 100, 100, 0.19)' : '0 0px 0px 0px white',
          borderBottom: toggle ? '0px solid white' : '1px solid #ccc'
        }}
        config={config.gentle}
      >
        {props => (
          <nav style={props}>
            <div className="nav-main">
              <a href="#about-me">
                <Button title="Jordan Tay" size='25px' />
              </a>
            </div>
            <ul className="nav-items">
              <li>
                <a href="#projects">
                  <Button title="Projects" size='17px' />
                </a>
              </li>
              <li>
                <a href="#contact">
                  <Button title="Contact" size='17px' />
                </a>
              </li>
            </ul>
          </nav>
        )}
      </Spring>
    );
  }
}

export default Nav;
