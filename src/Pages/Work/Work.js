import React, { Component } from 'react';
import './Work.css';
import 'bootstrap/less/bootstrap.less';
import { Navbar,Nav,NavItem,Jumbotron,Button,Grid,Col,Row} from 'react-bootstrap';

class Work extends Component {
  render() {
    return (
      <div className="Work">
        <div className="Work-header"></div>
          <h1 pullLeft>CLENTS & CREATION</h1>
          <div className="Content">
            <h2>CLIENTS</h2>
              <Grid className="Grid">
                <Row className="Client">
                   <Col xs={4} md={3}>
                    <h3>Forbes</h3>
                   </Col>
                  <Col xs={12} md={8}>
                    <p>About - A leading business media publication</p>
                    <p>Work - I wrote ~120 stories about tech startups and innovation across Asia, Australia and Silicon Valley</p>
                    <p>Impact - Amassed 480K+ readers and 600K+ views</p>
                    <p>Referral - Glenda Toma</p>
                  </Col>
                </Row>
                <Row className="Client">
                   <Col xs={4} md={3}>
                    <h3>Citus Data</h3>
                   </Col>
                  <Col xs={12} md={8}>
                    <p>About - A YC Postgres database startup that provides massive scale and speed</p>
                    <p>Work - I wrote 5 customer stories, 3 technical blog posts, re-designed the newsletter</p>
                    <p>Impact - Drove 300 webpage views and armed the Sales team with fresh customer stories </p>
                    <p>Referral - Craig Kierstens</p>
                  </Col>
                </Row>
                <Row className="Client">
                   <Col xs={4} md={3}>
                    <h3>OrionVM</h3>
                   </Col>
                  <Col xs={12} md={8}>
                    <p>XXX</p>
                    <p>XXX</p>
                    <p>XXX</p>
                    <p>XXX</p>
                  </Col>
                </Row>
                <Row className="Client">
                   <Col xs={4} md={3}>
                    <h3>Ampd Energy</h3>
                   </Col>
                  <Col xs={12} md={8}>
                    <p>About - An energy storage startup from Hong Kong</p>
                    <p>Work - I helped to get coverage on Forbes, Engadget and XXX</p>
                    <p>Impact - Drove 2K+ page-views to the website and created global brand recognition </p>
                    <p>Referral - Brandon Ng</p>
                  </Col>
                </Row>
                <Row className="Client">
                   <Col xs={4} md={3}>
                    <h3>Original Stitch</h3>
                   </Col>
                  <Col xs={12} md={8}>
                    <p>About - An online men’s tailored shirt startup </p>
                    <p>Work - Designed and wrote copy for a dozen email marketing and onboarding campaigns</p>
                    <p>Impact - Achieved peak of 31% click through on Call to Action and 53% Purchase conversion </p>
                  </Col>
                </Row>
                <Row className="Client">
                   <Col xs={4} md={3}>
                    <h3>Bold</h3>
                   </Col>
                  <Col xs={12} md={8}>
                    <p>About - A mass payout payments startup </p>
                    <p>Work - Refined brand position, devised a go-to-market media strategy and wrote 2 targeted press releases</p>
                    <p>Impact - Unified team on message </p>
                    <p>Referral - Sean Safahi</p>
                  </Col>
                </Row>
                <Row className="Client">
                   <Col xs={4} md={3}>
                    <h3>Great Wall Club</h3>
                   </Col>
                  <Col xs={12} md={8}>
                    <p>About - An exclusive Science and Tech Conference run by Great Wall Club</p>
                    <p>Work - Advised on event strategy and marketing, wrote website messaging, newsletters, press-releases  </p>
                    <p>Impact - Efforts led to a sold out conference with tickets costing up to $10K </p>
                    <p>Referral - Allan Shen (see LI)</p>
                  </Col>
                </Row>
                <Row className="Client">
                   <Col xs={4} md={3}>
                    <h3>Celery</h3>
                   </Col>
                  <Col xs={12} md={8}>
                    <p>About - A YC pre-order sales management startup</p>
                    <p>Work -  I wrote marketing content and designed an outreach strategy</p>
                    <p>Impact - Drove ~13K views to the brand </p>
                    <p>Referral - Chris Tsai</p>
                  </Col>
                </Row>
                <Row className="Client">
                   <Col xs={4} md={3}>
                    <h3>App Annie</h3>
                   </Col>
                  <Col xs={12} md={8}>
                    <p>About - The leading mobile app analytics company</p>
                    <p>Work -  Advised on content strategy, worked with analysts to create insightful stories with data </p>
                    <p>Impact - Helped App Annie generate its first set of rich content to drive credibility in the market  </p>
                    <p>Referral - Nick Mcintosh</p>
                  </Col>
                </Row>
              </Grid>
            <h2>CREATION</h2>
              <Grid className="Grid">
              <Row className="Creation">
                 <Col xs={4} md={3}>
                  <h3>TechNode</h3>
                 </Col>
                <Col xs={12} md={8}>
                  <p>What - A leading independent bi-lingual tech media in Asia</p>
                  <p>Achievements</p>
                    <li>One of the most respected grass-roots media in China</li>
                    <li>Manages TechCrunch China </li>
                </Col>
              </Row>
              <Row className="Creation">
                 <Col xs={4} md={3}>
                  <h3>Koombah</h3>
                 </Col>
                <Col xs={12} md={8}>
                  <p>What - An Online to Offline residential rental service to help expats find and move into Beijing</p>
                  <p>Achievements - Serviced around 300 clients </p>
                </Col>
              </Row>
              <Row className="Creation">
                 <Col xs={4} md={3}>
                  <h3>AsiaRecon</h3>
                 </Col>
                <Col xs={12} md={8}>
                  <p>What - An organization to help connect people, ideas and capital in Asia</p>
                  <p>Achievements - Successfully ran a tech tour to Singapore, Shanghai and Beijing for 15 delegates including government, entrepreneurs and investors</p>
                </Col>
              </Row>
              </Grid>
          </div>
      </div>
    );
  }
}

export default Work;
