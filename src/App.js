import React, { Component } from 'react';
import logo from './logo.svg';
import wallLean from './Images/wallLean.jpg';
//import profileShot from './Images/profileShot.jpeg';
import './App.css';
import { Link } from 'react-router';
import 'bootstrap/less/bootstrap.less';
import { Navbar,Nav,NavItem,Jumbotron,Button,Grid,Col,Row} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <Navbar className="Navbar">
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">jaezen</Link>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav pullRight>
            <NavItem><Link to="/Work">Work</Link></NavItem>
            <NavItem><Link to="/Services">Services</Link></NavItem>
            <NavItem><Link to="/Blog">Blog</Link></NavItem>
            <NavItem><Link to="/Connect">Connect</Link></NavItem>
          </Nav>
        </Navbar>
      <Jumbotron className="Jumbotron">
      <h1>I <strong>solve</strong> fuzzy tech marketing <strong>problems</strong></h1>
        <p>From YC startups to globally listed leaders</p>
        &#9660;
      </Jumbotron>
      <div className="heroImg">
        <img src={wallLean} className="wallLean" alt="wallLean" />
      </div>
      {this.props.children}
        <div className="Footer">
         <p>© 2017 jaezen. All Rights Reserved.</p>
        </div>

      </div>
    );
  }
}

export default App;
