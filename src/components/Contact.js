import React, { useState } from 'react';
import './Contact.css';
import { useSpring, animated } from 'react-spring';
import { Transition } from 'react-spring/renderprops';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Fade from '@material-ui/core/Fade';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import DraftsRoundedIcon from '@material-ui/icons/DraftsRounded';
import DescriptionRoundedIcon from '@material-ui/icons/DescriptionRounded';
import InsertDriveFileRoundedIcon from '@material-ui/icons/InsertDriveFileRounded';

function Contact(props) {
  const [point, setPoint] = useState(0);
  const [click, setClick] = useState(0);
  const [cvPoint, setCvPoint] = useState(0);
  const [emailPoint, setEmailPoint] = useState(0);
  const [gitHubPoint, setGitHubPoint] = useState(0);

  const topShade = useSpring({
    boxShadow: point ? '0 10px 20px 0px rgba(0, 0, 0, 0.19)' : '0 0px 0px 0px white',
  });

  const topBlur = useSpring({
    filter: click ? 'blur(8px)' : 'blur(0px)',
    opacity: click ? 0.8 : 1,
  });

  const bot = useSpring({
    opacity: click ? 1 : 0,
    zIndex: click ? 1 : -1, 
  });

  return (
    <div id="contact">
      <h1 className="contact-header">Contact</h1>
      <hr />
      <div 
        className="card-container"
        onMouseEnter={() => {setPoint(1)}}
        onMouseLeave={() => {setPoint(0)}}
        onClick={() => {setClick(c => !c)}}
      >
        <animated.div 
          style={topShade} 
          className="card-stack-top" 
        >
          <animated.div 
            style={topBlur}
            className="card-stack-top-content" 
          >
            <h1>Contact</h1>
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
          </animated.div>
        </animated.div>
        <animated.div 
          style={bot}
          className="card-stack-bottom"
        >
          <div className="card-stack-bottom-content">
            <h2>Hello</h2>
            <div className="icon-list">
              <a 
                href="https://www.github.com" 
                className="circular-link"
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => {setClick(c => !c)}}
              >
                <Tooltip 
                  title={<span className="button-tooltip">GitHub</span>}
                  TransitionComponent={Fade} 
                  TransitionProps={{ timeout: 600 }}
                >
                  <IconButton
                    className="icon-button"
                    onMouseEnter={() => setGitHubPoint(1)}
                    onMouseLeave={() => setGitHubPoint(0)}
                  >
                    <Transition
                      items={gitHubPoint}
                      from={{ position: 'absolute', opacity: 1 }}
                      enter={{ opacity: 1 }}
                      leave={{ opacity: 0 }}
                    >
                      {gitHubPoint => 
                          gitHubPoint
                            ? props => <GitHubIcon style={props} id="github-after" />
                            : props => <GitHubIcon style={props} />
                      }
                    </Transition>
                  </IconButton>
                </Tooltip>
              </a>
              <a 
                href="https://www.gmail.com" 
                className="circular-link"
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => {setClick(c => !c)}}
              >
                <Tooltip 
                  title={<span className="button-tooltip">Send me an email</span>}
                  TransitionComponent={Fade} 
                  TransitionProps={{ timeout: 600 }}
                >
                  <IconButton
                    className="icon-button"
                    onMouseEnter={() => setEmailPoint(1)}
                    onMouseLeave={() => setEmailPoint(0)}
                  >
                    <Transition
                      items={emailPoint}
                      from={{ position: 'absolute', opacity: 0 }}
                      enter={{ opacity: 1 }}
                      leave={{ opacity: 0 }}
                    >
                      {emailPoint => 
                          emailPoint
                            ? props => <DraftsRoundedIcon style={props} />
                            : props => <EmailRoundedIcon style={props} />
                      }
                    </Transition>
                  </IconButton>
                </Tooltip>
              </a>
              <a 
                href="https://www.drive.google.com" 
                className="circular-link"
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => {setClick(c => !c)}}
              >
                <Tooltip 
                  title={<span className="button-tooltip">CV</span>}
                  TransitionComponent={Fade} 
                  TransitionProps={{ timeout: 600 }}
                >
                  <IconButton
                    className="icon-button"
                    onMouseEnter={() => setCvPoint(1)}
                    onMouseLeave={() => setCvPoint(0)}
                  >
                    <Transition
                      items={cvPoint}
                      from={{ position: 'absolute', opacity: 0 }}
                      enter={{ opacity: 1 }}
                      leave={{ opacity: 0 }}
                    >
                      {cvPoint => 
                          cvPoint
                            ? props => <DescriptionRoundedIcon style={props} />
                            : props => <InsertDriveFileRoundedIcon style={props} />
                      }
                    </Transition>
                  </IconButton>
                </Tooltip>
              </a>
            </div>
          </div>
        </animated.div>
      </div>
    </div>
  );
}

export default Contact;
