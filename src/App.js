import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Navbar,Nav,NavItem,Jumbotron,Button,Grid,Col,Row} from 'react-bootstrap';
import { StickyContainer, Sticky } from 'react-sticky';

import logo from './logo.svg';



import './App.css';
//

import Home from './Pages/Home/Home';
import Work from './Pages/Work/Work';
import Services from './Pages/Services/Services';
import Blog from './Pages/Blog/Blog';
import Connect from './Pages/Connect/Connect';


const Footer = () => (
  <div className="Footer">
   <p>© 2018 jaezen. All Rights Reserved.</p>
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
