import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/less/bootstrap.less';
import { Navbar,Nav,NavItem, Jumbotron, Button } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React Master Lim</h2>
        </div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="http://google.com">Jaezen</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav.Menu>
            <NavItem eventKey={1} href="#">Work</NavItem>
            <NavItem eventKey={2} href="#">Services</NavItem>
            <NavItem eventKey={1} href="#">Blog</NavItem>
            <NavItem eventKey={2} href="#">Connect</NavItem>
          </Nav.Menu>
        </Navbar>
        <Jumbotron>
          <h1>I solve fuzzy tech marketing problems</h1>
            <p>From YC startups to globally listed tech leaders</p>
            <p><Button bsStyle="primary">Learn more</Button></p>
        </Jumbotron>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button bsStyle="primary" bsSize="large">Large button</Button>
        <div className="Footer">
          <p>© 2017 Jaezen. All Rights Reserved.</p>
        </div>
      </div>
    );
  }
}

export default App;
