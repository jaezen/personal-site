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
            <NavItem eventKey={2} href="#">Services</NavItem>
            <NavItem eventKey={1} href="#">Blog</NavItem>
            <NavItem eventKey={2} href="#">Connect</NavItem>
          </Nav>
          {this.props.children}
        </Navbar>
      <Jumbotron className="Jumbotron">
      <h1>I solve fuzzy tech marketing problems</h1>
        <p>From YC startups to globally listed tech leaders</p>
        &#9660;
      </Jumbotron>
      <div className="heroImg">
        <img src={wallLean} className="wallLean" alt="wallLean" />
      </div>
      <Button bsStyle="primary" bsSize="large">Large button</Button>
      <Grid className="Grid">
        <Row className="Row-1">
          <Col xs={6} md={4}>Clients & Creation</Col>
          <Col xs={6} md={4}>How I can help you</Col>
          <Col xs={6} md={4}>Things I think about</Col>
        </Row>
      </Grid>
        <div className="Footer">
         <p>© 2017 jaezen. All Rights Reserved.</p>
        </div>

      </div>
    );
  }
}

export default App;
