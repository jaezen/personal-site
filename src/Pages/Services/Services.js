import React, { Component } from 'react';
import './Services.css';
import 'bootstrap/less/bootstrap.less';
import { Navbar,Nav,NavItem,Jumbotron,Button,Grid,Col,Row} from 'react-bootstrap';

class Services extends Component {
  render() {
    return (
      <div className="Services">
        <div className="Services-header"></div>
          <h1 pullLeft>FUZZY MARKETING</h1>
          <div className="Content">
            <h2>CLIENTS</h2>
              <Grid className="Grid">
                <Row className="Client">
                   <Col xs={4} md={3}>
                    <h3>Messaging</h3>
                   </Col>
                  <Col xs={12} md={8}>
                    <p><strong>PROBLEM</strong> - Many tech companies struggle to communicate business value. This often happens because they are engineering heavy, so the team likes to geek out about the tech, not the real value. </p>
                    <p><strong>SOLUTION</strong> - This is where I come in to hone in on the key message to convey to the right audience. After years of interviewing and writing about tech companies, I have a sense for explaining things simply and clearly. </p>
                    <p><strong>METHOD</strong> - I’ll Services deeply with your team to understand everything from your industry, product, customers, competitors, strategy and customer concerns to nail the right message. </p>
                  </Col>
                </Row>
                <Row className="Client">
                   <Col xs={4} md={3}>
                    <h3>Product</h3>
                   </Col>
                  <Col xs={12} md={8}>
                    <p><strong>PROBLEM</strong> - Knowing what your customers want isn’t always intuitive. That makes knowing what product to build really hard. Even if you’ve built the right product, communicating the value is another hurdle to convince people to pay for it. </p>
                    <p><strong>SOLUTION</strong> - If you’re facing this challenge, this is where I come in to figure out how to describe your product, it’s features, the pricing model, use cases and how to position it against competitors</p>
                    <p><strong>METHOD</strong> - I’ll go into the wild to observe, talk and listen to your customers about what really annoys them. I’ll refine and rank these pain points, relay that back to the product team and fine tune what value propositions, use cases and customer stories should be highlighted. </p>
                  </Col>
                </Row>
                <Row className="Client">
                   <Col xs={4} md={3}>
                    <h3>Content</h3>
                   </Col>
                  <Col xs={12} md={8}>
                    <p><strong>PROBLEM</strong> - Having a spectacular product or service is great. But letting people know about isn’t that easy, especially in a noisy market full of others. Paid online marketing is nice, but can be very expensive. Offline marketing is great, but doesn’t scale. So how do you reach people in an inexpensive and scalable way? </p>
                    <p><strong>SOLUTION</strong> - Creating awesome content is a sound strategy. But if you’re not a natural writer, this can be frustratingly hard. My years of experience as a professional tech writer for Forbes and TechNode, plus a host of clients allows me to write the right story. </p>
                    <p><strong>METHOD</strong> - I’ll first do thorough research, interview one or a few people on your team, take notes, write a structure, flesh it out with written and visual content and iterate till it’s ready to ship. I then track the performance of it to learn and improve for the next assignments. Content can be in the form of blogs, infographics, videos, webinars, 1 pagers, posters, social media graphics, driving community engagement both online and offline.  </p>
                  </Col>
                </Row>
              </Grid>
          </div>
      </div>
    );
  }
}

export default Services;
