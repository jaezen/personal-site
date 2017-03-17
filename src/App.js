import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
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
              <a href="http://google.com">Jaezen</a>
            </Navbar.Brand>
          </Navbar.Header>
<<<<<<< HEAD
          <Nav pullRight>
||||||| merged common ancestors
          <Nav>
=======
          <Nav.Menu>
>>>>>>> 9230faead3730b3a326745c09bec4399bac32e55
            <NavItem eventKey={1} href="#">Work</NavItem>
            <NavItem eventKey={2} href="#">Services</NavItem>
            <NavItem eventKey={1} href="#">Blog</NavItem>
            <NavItem eventKey={2} href="#">Connect</NavItem>
          </Nav.Menu>
        </Navbar>
<<<<<<< HEAD
      <Jumbotron>
      <h1>I solve fuzzy tech marketing problems</h1>
        <p>From YC startups to globally listed tech leaders</p>
        &#9660;
      </Jumbotron>
      <Button bsStyle="primary" bsSize="large">Large button</Button>
      <Grid className="Grid">
        <Row className="Row-1">
          <Col xs={12} md={8}><code>&lt;{'Col xs={12} md={8}'} /&gt;</code></Col>
          <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
        </Row>
        <Row className="Row-2">
          <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
          <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
          <Col xsHidden md={4}><code>&lt;{'Col xsHidden md={4}'} /&gt;</code></Col>
        </Row>
        <Row className="Row-3">
          <Col md={6} mdPush={6}><code>&lt;{'Col md={6} mdPush={6}'} /&gt;</code></Col>
          <Col md={6} mdPull={6}><code>&lt;{'Col md={6} mdPull={6}'} /&gt;</code></Col>
        </Row>
      </Grid>

        <div className="Footer">
         <p>© 2017 Jaezen. All Rights Reserved.</p>
        </div>

||||||| merged common ancestors
    <Jumbotron>
      <h1>I solve fuzzy tech marketing problems</h1>
        <p>From YC startups to globally listed tech leaders</p>
        <p><Button bsStyle="primary">Learn more</Button></p>
    </Jumbotron>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button bsStyle="primary" bsSize="large">Large button</Button>
        <p>
        Made by Jaezen
        </p>
=======
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
>>>>>>> 9230faead3730b3a326745c09bec4399bac32e55
      </div>
    );
  }
}

export default App;
