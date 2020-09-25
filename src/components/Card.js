import React from 'react';
import './Card.css';
import { Spring, config } from 'react-spring/renderprops';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      input: this.props.input,
      float: this.props.float,
      id: this.props.id,
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
    if (this.props.title) {
      return (
        <Spring 
          from= {{ float: this.state.float }}
          to={{ boxShadow: toggle ? '0 10px 20px 0px rgba(0,0,0,0.19)' : '0 0px 0px 0px white' }}
          config={ config.gentle }
        >
          {props => (
            <div 
              style={props}
              className="cardshell"
              onMouseEnter={() => this.onMouseEnter()}
              onMouseLeave={() => this.onMouseLeave()}
              id={this.state.id}
            >
              <h1>
                {this.props.title}
              </h1>
              <hr />
              <p>
                {this.props.input}
              </p>
            </div> 
          )}
        </Spring>
      )
    } else {
      return (
        <Spring 
          from= {{ float: this.state.float }}
          to={{ boxShadow: toggle ? '0 10px 20px 0px rgba(0,0,0,0.19)' : '0 0px 0px 0px white' }}
          config={ config.default }
        >
          {props => (
            <div 
              style={props}
              className="cardshell"
              onMouseEnter={() => this.onMouseEnter()}
              onMouseLeave={() => this.onMouseLeave()}
              id={this.state.id}
            >
              <p>
                {this.props.input}
              </p>
            </div> 
          )}
        </Spring>
      )
    }
  }
}

export default Card;
