import React, { Component } from 'react';
import './Home.css';
import 'bootstrap/less/bootstrap.less';
import { Navbar,Nav,NavItem,Jumbotron,Button,Grid,Col,Row} from 'react-bootstrap';
import wallLean from './Images/wallLean.jpg';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="Home-header"></div>
          <div>
            <Jumbotron className="Jumbotron">
            <h1>I <strong>solve</strong> fuzzy marketing <strong>problems</strong></h1>
              <p>From YC startups to globally listed leaders</p>
              &#9660;
            </Jumbotron>
            <div className="heroImg">
              <img src={wallLean} className="wallLean" alt="wallLean" />
            </div>
        </div>
      </div>
    );
  }
}

export default Home;
