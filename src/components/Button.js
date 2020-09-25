import React from 'react';
import './Button.css';
import { Spring, config } from 'react-spring/renderprops';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      size: this.props.size,
      marginTop: this.props.marginTop,
      toggle: 0,
    }
  }

  onMouseEnter() {
    this.setState({
      toggle: 1,
    });
  }

  onMouseLeave() {
    this.setState({
      toggle: 0,
    });
  }

  render() {
    let toggle = this.state.toggle;
    return (
      <div 
        className="button" 
        onMouseEnter={() => this.onMouseEnter()} 
        onMouseLeave={() => this.onMouseLeave()}
      >
        <Spring
          from={{ 
            fontSize: this.state.size, 
            marginTop: this.state.marginTop,
          }}
          to={{ 
            color: toggle ? 'black' : 'rgb(70, 70, 70)',
          }}
          config={{ friction: 10 }}
        >
          {props => ( 
            <h1 style={props}>{this.state.title}</h1> 
          )}
        </Spring>
        <Spring
          from={{ 
            opacity: 0, 
            backgroundColor: 'black'
          }}
          to={{
            opacity: toggle ? 1 : 0,
            width: toggle ? '100%' : '0%', 
            left: toggle ? '0%' : '50%',
          }}
          config={ config.gentle }
        >
          {(props) => (
            <div style={props} id="underline"></div>
          )}
        </Spring>
      </div>
    );
  }
}

export default Button;
