import React, { Component } from 'react';
import './Work.css';
import 'bootstrap/less/bootstrap.less';
import { Navbar,Nav,NavItem,Jumbotron,Button,Grid,Col,Row} from 'react-bootstrap';


import ForbesLogo from './Images/ForbesLogo.jpg';
import CitusDataLogo from './Images/CitusDataLogo.png';
import AmpdEnergyLogo from './Images/AmpdEnergyLogo.jpg';
import OriginalStitchLogo from './Images/OriginalStitchLogo.png';
import GoBoldLogo from './Images/GoBoldLogo.png';
import GWCLogo from './Images/GWCLogo.png';
import CeleryLogo from './Images/CeleryLogo.png';
import AppAnnieLogo from './Images/AppAnnieLogo.png';
import TechNodeLogo from './Images/TechNodeLogo.png';
import KoombahLogo from './Images/KoombahLogo.png';
import AsiaReconLogo from './Images/AsiaReconLogo.jpg';

class Work extends Component {
  render() {
    return (
      <div className="Work">
        <div className="Work-header"></div>
          <h1 className="Heading">CLENTS + CREATION</h1>
          <div className="Content">
            <h2><strong>Companies I have helped</strong></h2>
              <Grid className="Grid">
                <Row className="Client">
                   <Col xs={4} md={3}>
                    <div><img src={ForbesLogo} className="ForbesLogo" alt="ForbesLogo" /></div>
                   </Col>
                  <Col xs={12} md={8}>
                    <h3>Forbes</h3>
                    <p><strong>About</strong> - A leading business media publication</p>
                    <p><strong>Work</strong> - I wrote ~120 stories about tech startups and innovation across Asia, Australia and Silicon Valley</p>
                    <p><strong>Impact</strong> - Amassed 480K+ readers and 600K+ views</p>
                    <p><strong>Samples</strong> - XX, XX, XX</p>
                    <p><strong>Referral</strong> - Glenda Toma</p>
                  </Col>
                </Row>
                <Row className="Client">
                   <Col xs={4} md={3}>
                    <div><img src={CitusDataLogo} className="CitusDataLogo" alt="CitusDataLogo" /></div>
                   </Col>
                  <Col xs={12} md={8}>
                    <h3>Citus Data</h3>
                    <p><strong>About</strong> - A YC Postgres database startup that provides massive scale and speed</p>
                    <p><strong>Work</strong> - I wrote 5 customer stories, 3 technical blog posts, re-designed the newsletter</p>
                    <p><strong>Impact</strong> - Drove 300 webpage views and armed the Sales team with fresh customer stories </p>
                    <p><strong>Samples</strong> - XX, XX, XX</p>
                    <p><strong>Referral</strong> - Craig Kierstens</p>
                  </Col>
                </Row>
                <Row className="Client">
                   <Col xs={4} md={3}>

                   </Col>
                  <Col xs={12} md={8}>
                    <h3>OrionVM</h3>
                    <p>XXX</p>
                    <p>XXX</p>
                    <p>XXX</p>
                    <p>XXX</p>
                  </Col>
                </Row>
                <Row className="Client">
                   <Col xs={4} md={3}>
                    <div><img src={AmpdEnergyLogo} className="AmpdEnergyLogo" alt="AmpdEnergyLogo" /></div>
                   </Col>
                  <Col xs={12} md={8}>
                    <h3>Ampd Energy</h3>
                    <p><strong>About</strong> - An energy storage startup from Hong Kong</p>
                    <p><strong>Work</strong> - I helped to get coverage on Forbes, Engadget and XXX</p>
                    <p><strong>Impact</strong> - Drove 2K+ page-views to the website and created global brand recognition </p>
                    <p><strong>Samples</strong> - XX, XX, XX</p>
                    <p><strong>Referral</strong> - Brandon Ng</p>
                  </Col>
                </Row>
                <Row className="Client">
                   <Col xs={4} md={3}>
                    <div><img src={OriginalStitchLogo} className="OriginalStitchLogo" alt="OriginalStitchLogo" /></div>
                   </Col>
                  <Col xs={12} md={8}>
                    <h3>Original Stitch</h3>
                    <p><strong>About</strong> - An online men’s tailored shirt startup </p>
                    <p><strong>Work</strong> - Designed and wrote copy for a dozen email marketing and onboarding campaigns</p>
                    <p><strong>Samples</strong> - XX, XX, XX</p>
                    <p><strong>Impact</strong> - Achieved peak of 31% click through on Call to Action and 53% Purchase conversion </p>
                  </Col>
                </Row>
                <Row className="Client">
                   <Col xs={4} md={3}>
                    <div><img src={GoBoldLogo} className="GoBoldLogo" alt="GoBoldLogo" /></div>
                   </Col>
                  <Col xs={12} md={8}>
                    <h3>Bold</h3>
                    <p><strong>About</strong> - A mass payout payments startup </p>
                    <p><strong>Work</strong> - Refined brand position, devised a go-to-market media strategy and wrote 2 targeted press releases</p>
                    <p><strong>Impact</strong> - Unified team on message </p>
                    <p><strong>Samples</strong> - XX, XX, XX</p>
                    <p><strong>Referral</strong> - Sean Safahi</p>
                  </Col>
                </Row>
                <Row className="Client">
                   <Col xs={4} md={3}>
                    <div><img src={GWCLogo} className="GWCLogo" alt="GWCLogo" /></div>
                   </Col>
                  <Col xs={12} md={8}>
                    <h3>Great Wall Club</h3>
                    <p><strong>About</strong> - An exclusive Science and Tech Conference run by Great Wall Club</p>
                    <p><strong>Work</strong> - Advised on event strategy and marketing, wrote website messaging, newsletters, press-releases  </p>
                    <p><strong>Impact</strong> - Efforts led to a sold out conference with tickets costing up to $10K </p>
                    <p><strong>Samples</strong> - XX, XX, XX</p>
                    <p><strong>Referral</strong> - Allan Shen (see LI)</p>
                  </Col>
                </Row>
                <Row className="Client">
                   <Col xs={4} md={3}>
                    <div><img src={CeleryLogo} className="CeleryLogo" alt="CeleryLogo" /></div>
                   </Col>
                  <Col xs={12} md={8}>
                    <h3>Celery</h3>
                    <p><strong>About</strong> - A YC pre-order sales management startup</p>
                    <p><strong>Work</strong> -  I wrote marketing content and designed an outreach strategy</p>
                    <p><strong>Impact</strong> - Drove ~13K views to the brand </p>
                    <p><strong>Samples</strong> - XX, XX, XX</p>
                    <p><strong>Referral</strong> - Chris Tsai</p>
                  </Col>
                </Row>
                <Row className="Client">
                   <Col xs={4} md={3}>
                    <div><img src={AppAnnieLogo} className="AppAnnieLogo" alt="AppAnnieLogo" /></div>
                   </Col>
                  <Col xs={12} md={8}>
                    <h3>App Annie</h3>
                    <p><strong>About</strong> - The leading mobile app analytics company</p>
                    <p><strong>Work</strong> -  Advised on content strategy, worked with analysts to create insightful stories with data </p>
                    <p><strong>Impact</strong> - Helped App Annie generate its first set of rich content to drive credibility in the market  </p>
                    <p><strong>Samples</strong> - XX, XX, XX</p>
                    <p><strong>Referral</strong> - Nick Mcintosh</p>
                  </Col>
                </Row>
              </Grid>
            <h2><strong>Businesses I co-founded</strong></h2>
              <Grid className="Grid">
              <Row className="Creation">
                 <Col xs={4} md={3}>
                  <div><img src={TechNodeLogo} className="TechNodeLogo" alt="TechNodeLogo" /></div>
                 </Col>
                <Col xs={12} md={8}>
                  <h3>TechNode</h3>
                  <p><strong>About</strong> - A leading independent bi-lingual tech media in Asia</p>
                  <p><strong>Achievements</strong></p>
                    <li>One of the most respected grass-roots media in China</li>
                    <li>Manages TechCrunch China </li>
                </Col>
              </Row>
              <Row className="Creation">
                 <Col xs={4} md={3}>
                  <div><img src={KoombahLogo} className="KoombahLogo" alt="KoombahLogo" /></div>
                 </Col>
                <Col xs={12} md={8}>
                  <h3>Koombah</h3>
                  <p><strong>About</strong> - An Online to Offline residential rental service to help expats find and move into Beijing</p>
                  <p><strong>Achievements</strong> - Serviced around 300 clients </p>
                </Col>
              </Row>
              <Row className="Creation">
                 <Col xs={4} md={3}>
                  <div><img src={AsiaReconLogo} className="AsiaReconLogo" alt="AsiaReconLogo" /></div>
                 </Col>
                <Col xs={12} md={8}>
                  <h3>AsiaRecon</h3>
                  <p><strong>About</strong> - An organization to help connect people, ideas and capital in Asia</p>
                  <p><strong>Achievements</strong> - Successfully ran a tech tour to Singapore, Shanghai and Beijing for 15 delegates including government, entrepreneurs and investors</p>
                </Col>
              </Row>
              </Grid>
          </div>
      </div>
    );
  }
}

export default Work;
