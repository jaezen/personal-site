import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Navbar,Nav,NavItem,Jumbotron,Button,Grid,Col,Row} from 'react-bootstrap';
import { StickyContainer, Sticky } from 'react-sticky';

import logo from './logo.svg';
import wallLean from './Images/wallLean.jpg';
//import profileShot from './Images/profileShot.jpeg';

import './App.css';
//
// import App from './App';
import Work from './Pages/Work/Work';
import Services from './Pages/Services/Services';
import Blog from './Pages/Blog/Blog';
import Connect from './Pages/Connect/Connect';

const Home = () => (
  <div>
    <Jumbotron className="Jumbotron">
    <h1>I <strong>solve</strong> fuzzy tech marketing <strong>problems</strong></h1>
      <p>From YC startups to globally listed leaders</p>
      &#9660;
    </Jumbotron>
    <div className="heroImg">
      <img src={wallLean} className="wallLean" alt="wallLean" />
    </div>
  </div>
);

const Footer = () => (
  <div className="Footer">
   <p>© 2017 jaezen. All Rights Reserved.</p>
  </div>
);

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

            <Navbar className="navbar navbar-fixed-top">
              <Navbar.Header>
                <Navbar.Brand>
                  <Link className="App-myLink" to="/">jaezen</Link>
                </Navbar.Brand>
              </Navbar.Header>
              <Nav pullRight>
                 <NavItem><Link className="App-myLink" to="/work">Work</Link></NavItem>
                 <NavItem><Link className="App-myLink" to="/services">Services</Link></NavItem>
                 <NavItem><Link className="App-myLink" to="/blog">Blog</Link></NavItem>
                 <NavItem><Link className="App-myLink" to="/connect">Connect</Link></NavItem>
              </Nav>
            </Navbar>

          <Route exact path="/" component={Home}/>
          <Route path="/work" component={Work}/>
          <Route path="/services" component={Services}/>
          <Route path="/blog" component={Blog}/>
          <Route path="/connect" component={Connect}/>

          <Footer />
        </div>
      </Router>
    );
  }
}



export default App;
