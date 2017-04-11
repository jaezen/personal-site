import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './Connect.css';
import 'bootstrap/less/bootstrap.less';
import { Navbar,Nav,NavItem,Jumbotron,Button,Grid,Col,Row} from 'react-bootstrap';

import email from './Images/email.png';
import github from './Images/github.png';
import linkedin from './Images/linkedin.png';
import twitter from './Images/twitter.png';
import clarity from './Images/clarity.png';

class Connect extends Component {
  render() {
    return (
      <div className="Connect">
        <div className="Connect-header"></div>
          <div className="Content">
            <h1 className="Heading">HAPPY TO CHAT</h1>
              <Grid className="Grid">
                <Row className="Type">
                   <Col xs={4} md={3}>
                      <div><img src={email} className="email" alt="email" /></div>
                   </Col>
                  <Col xs={12} md={8}>
                    <h2><strong><a href="mailto:jaezenlim@gmail.com">Email</a></strong></h2>
                    <p>The best way to get in touch and get a response quickly.</p>
                  </Col>
                </Row>
                <Row className="Type">
                   <Col xs={4} md={3}>
                      <div><img src={linkedin} className="linkedin" alt="linkedin" /></div>
                   </Col>
                  <Col xs={12} md={8}>
                    <h2><strong><a href="https://www.linkedin.com/in/jasonlim1/">Linkedin</a></strong></h2>
                    <p>I prefer to only connect with people I have met or talked to before. Otherwise if there is a mutual benefit to connecting.</p>
                  </Col>
                </Row>
                <Row className="Type">
                   <Col xs={4} md={3}>
                    <div><img src={github} className="github" alt="github" /></div>
                   </Col>
                  <Col xs={12} md={8}>
                    <h2><strong><a href="https://github.com/jaezen">Github</a></strong></h2>
                    <p>You will find some of the projects I have worked on, including this site. I have or am learning Swift, React and React Native.</p>
                  </Col>
                </Row>
                <Row className="Type">
                   <Col xs={4} md={3}>
                    <div><img src={twitter} className="twitter" alt="twitter" /></div>
                   </Col>
                  <Col xs={12} md={8}>
                    <h2><strong><a href="https://twitter.com/jaezenlim">Twitter</a></strong></h2>
                    <p>I am not a super active Twitter guy. I mainly post original content I have written myself or I have helped my clients produce.</p>
                  </Col>
                </Row>
                <Row className="Type">
                   <Col xs={4} md={3}>
                    <div><img src={clarity} className="clarity" alt="clarity" /></div>
                   </Col>
                  <Col xs={12} md={8}>
                    <h2><strong><a href="https://clarity.fm/jasonlim1/">Clarity</a></strong></h2>
                    <p>If you would like to get my advice about anything, you can book a time to talk to me here.</p>
                  </Col>
                </Row>
              </Grid>
          </div>
      </div>
    );
  }
}

export default Connect;
