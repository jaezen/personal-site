import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './Work.css';
import 'bootstrap/less/bootstrap.less';
import { Navbar,Nav,NavItem,Jumbotron,Button,Grid,Col,Row} from 'react-bootstrap';


import ForbesLogo from './Images/ForbesLogo.jpg';
import CitusDataLogo from './Images/CitusDataLogo.png';
import OrionVMLogo from './Images/OrionVMLogo.png';
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
                  <Col xs={12} md={9}>
                    <h3><a href="https://www.forbes.com/sites/jlim/#6b0fbdd1e34b">Forbes</a></h3>
                    <p><strong>About</strong> - A leading business media publication</p>
                    <p><strong>Work</strong> - I wrote ~120 stories about tech startups and innovation across Asia, Australia and Silicon Valley</p>
                    <p><strong>Impact</strong> - Amassed 480K+ readers and 600K+ views</p>
                    <p><strong>Samples</strong></p>
                      <li><a href="https://www.forbes.com/sites/jlim/2014/09/09/is-apples-iphone-6-phablet-too-late/#f23f043babf8">Is Apples iPhone 6 Phablet Too Late?</a></li>
                      <li><a href="https://www.forbes.com/sites/jlim/2014/05/19/wechat-one-of-the-worlds-most-powerful-apps/#7491f5a074f1">WeChat, One Of The Worlds Most Powerful Apps</a></li>
                      <li><a href="https://www.forbes.com/sites/jlim/2016/10/12/what-leading-ai-machine-learning-and-robotics-scientists-say-about-the-future/#3af914a67be6">What Leading AI, Machine Learning And Robotics Scientists Say About The Future</a></li>
                    <p><strong>Referral</strong> - Glenda Toma</p>
                  </Col>
                </Row>
                <Row className="Client">
                   <Col xs={4} md={3}>
                    <div><img src={CitusDataLogo} className="CitusDataLogo" alt="CitusDataLogo" /></div>
                   </Col>
                  <Col xs={12} md={9}>
                    <h3><a href="http://citusdata.com">Citus Data</a></h3>
                    <p><strong>About</strong> - A YC Postgres database startup that provides massive scale and speed</p>
                    <p><strong>Work</strong> - I wrote 5 customer stories, 3 technical blog posts, re-designed the newsletter</p>
                    <p><strong>Impact</strong> - Drove 300 webpage views and armed the Sales team with fresh customer stories </p>
                    <p><strong>Samples</strong></p>
                      <li><a href="https://www.citusdata.com/blog/2017/03/15/a-look-at-isolating-tenants/">A Look at Isolating Tenants To Improve Database Performance</a></li>
                      <li><a href="https://www.citusdata.com/blog/2017/03/23/a-look-into-disaster-recovery-and-high-availability-and-how-they-work-with-postgres-on-citus-cloud/">How we implement Disaster Recovery and High Availability with Postgres on Citus Cloud</a></li>
                      <li><a href="https://www.citusdata.com/customers/sportradar">Sportradars radar360 Powers Real-Time Sports Analytics Using Citus</a></li>
                      <li><a href="https://www.citusdata.com/customers/convertflow">ConvertFlow Delivers Real-Time Analytics to Marketers Using Citus</a></li>
                      <li><a href="https://www.citusdata.com/customers/kixer">Kixer Uses Citus To Manage Vital Analytics for Web Publishers and Internal Business Metrics</a></li>
                    <p><strong>Referral</strong> - Craig Kierstens</p>
                  </Col>
                </Row>
                <Row className="Client">
                   <Col xs={4} md={3}>
                    <div><img src={OrionVMLogo} className="OrionVMLogo" alt="OrionVMLogo" /></div>
                   </Col>
                  <Col xs={12} md={9}>
                    <h3><a href="http://orionvm">OrionVM</a></h3>
                    <p><strong>About</strong> - A wholesale HyperCloud IaaS startup</p>
                    <p><strong>Work</strong> - I helped create blog content to grow thought leadership</p>
                    <p><strong>Impact</strong> - XXX </p>
                    <p><strong>Samples</strong></p>
                      <li>XXX</li>
                    <p><strong>Referral</strong> - Daniel Pfeiffer</p>
                  </Col>
                </Row>
                <Row className="Client">
                   <Col xs={4} md={3}>
                    <div><img src={AmpdEnergyLogo} className="AmpdEnergyLogo" alt="AmpdEnergyLogo" /></div>
                   </Col>
                  <Col xs={12} md={9}>
                    <h3><a href="http://ampd.energy">Ampd Energy</a></h3>
                    <p><strong>About</strong> - An energy storage startup from Hong Kong</p>
                    <p><strong>Work</strong> - I helped to get coverage on Forbes and Engadget</p>
                    <p><strong>Impact</strong> - Drove 2K+ page-views to the website and created global brand recognition </p>
                    <p><strong>Samples</strong></p>
                      <li><a href="https://www.engadget.com/2017/01/06/ampd-energy-hopes-to-make-pollution-prone-diesel-generators-obs/">Ampd Energy hopes to make pollution-prone diesel generators obsolete</a></li>
                      <li>Brandon Ng, CEO of Ampd Energy named one of Forbes Asia Under 30</li>
                    <p><strong>Referral</strong> - Brandon Ng</p>
                  </Col>
                </Row>
                <Row className="Client">
                   <Col xs={4} md={3}>
                    <div><img src={OriginalStitchLogo} className="OriginalStitchLogo" alt="OriginalStitchLogo" /></div>
                   </Col>
                  <Col xs={12} md={9}>
                    <h3><a href="http://originalstitch.com">Original Stitch</a></h3>
                    <p><strong>About</strong> - An online men’s tailored shirt startup </p>
                    <p><strong>Work</strong> - Designed and wrote copy for a dozen email marketing and onboarding campaigns</p>
                    <p><strong>Impact</strong> - Achieved peak of 31% click through on Call to Action and 53% Purchase conversion </p>
                  </Col>
                </Row>
                <Row className="Client">
                   <Col xs={4} md={3}>
                    <div><img src={GoBoldLogo} className="GoBoldLogo" alt="GoBoldLogo" /></div>
                   </Col>
                  <Col xs={12} md={9}>
                    <h3><a href="http://gobold.com">Bold</a></h3>
                    <p><strong>About</strong> - A mass payout payments startup </p>
                    <p><strong>Work</strong> - Refined brand position, devised a go-to-market media strategy and wrote 2 targeted press releases</p>
                    <p><strong>Impact</strong> - Unified team on message </p>
                    <p><strong>Referral</strong> - "Jason is thorough, thoughtful, and sincere. He approaches each project with a balance of structure, creativity, discipline, and energy that all but guarantees success. He is dependable, responsive, and dedicated to enabling your success. His skillset spans both strategic and tactical, making him a very valuable addition to your team. He's high impact and efficient with his time.
                    I recommend Jason to any tech co looking for help with positioning, marketing, and PR strategy." Sean Safahi, CEO, Bold</p>
                  </Col>
                </Row>
                <Row className="Client">
                   <Col xs={4} md={3}>
                    <div><img src={GWCLogo} className="GWCLogo" alt="GWCLogo" /></div>
                   </Col>
                  <Col xs={12} md={9}>
                    <h3><a href="http://www.thegsummit.org/">G Summit by Great Wall Club</a></h3>
                    <p><strong>About</strong> - An exclusive Science and Tech Conference run by Great Wall Club</p>
                    <p><strong>Work</strong> - Advised on event strategy and marketing, wrote website messaging, newsletters, press-releases  </p>
                    <p><strong>Impact</strong> - Efforts led to a sold out conference with tickets costing up to $10K </p>
                    <p><strong>Referral</strong> - "We hired Jason as a Marketing & PR consultant for our product launch in late September, and was blown away by his work. Jason is extremely knowledgable in this space, and was more than helpful in helping us with our marketing strategy across the board (website, newsletters, blogs, press releases and etc.) His work was highly praised by the entire team, including the management team. If you are looking for a freelancer / consultant for Marketing & PR work, look no further!!", Allan Shen, Global Sales and Business Development Manager, GWC</p>
                  </Col>
                </Row>
                <Row className="Client">
                   <Col xs={4} md={3}>
                    <div><img src={CeleryLogo} className="CeleryLogo" alt="CeleryLogo" /></div>
                   </Col>
                  <Col xs={12} md={9}>
                    <h3><a href="https://www.trycelery.com/">Celery</a></h3>
                    <p><strong>About</strong> - A YC pre-order sales management startup</p>
                    <p><strong>Work</strong> -  I wrote marketing content and designed an outreach strategy</p>
                    <p><strong>Impact</strong> - Drove ~13K views to the brand </p>
                    <p><strong>Referral</strong> - Chris Tsai</p>
                  </Col>
                </Row>
                <Row className="Client">
                   <Col xs={4} md={3}>
                    <div><img src={AppAnnieLogo} className="AppAnnieLogo" alt="AppAnnieLogo" /></div>
                   </Col>
                  <Col xs={12} md={9}>
                    <h3><a href="http://appannie.com">App Annie</a></h3>
                    <p><strong>About</strong> - The leading mobile app analytics company</p>
                    <p><strong>Work</strong> -  Advised on content strategy, worked with analysts to create insightful stories with data </p>
                    <p><strong>Impact</strong> - Helped App Annie generate its first set of rich content to drive credibility in the market  </p>
                    <p><strong>Samples</strong></p>
                      <li><a href="https://www.appannie.com/en/insights/going-live-google-play-how-to-launch-android/">How To Avoid Obscurity And Become Loved By All: Going Live On Google Play</a></li>
                  </Col>
                </Row>
              </Grid>
                <Button className="Button" bsStyle="default" bsSize="large"><Link className="App-myLink" to="/services">Services</Link></Button>
            <h2><strong>Businesses I co-founded</strong></h2>
              <Grid className="Grid">
              <Row className="Creation">
                 <Col xs={4} md={3}>
                  <div><img src={TechNodeLogo} className="TechNodeLogo" alt="TechNodeLogo" /></div>
                 </Col>
                <Col xs={12} md={9}>
                  <h3><a href="http://technode.com">TechNode</a></h3>
                  <p><strong>About</strong> - A leading independent bi-lingual tech media in Asia</p>
                  <p><strong>Achievements</strong></p>
                    <li>One of the most respected grass-roots media in China</li>
                    <li>Manages TechCrunch China </li>
                    <li>Manages TechCrunch China and its TechCrunch Disrupt conferences</li>
                    <li>Co-authored <a href="https://www.amazon.com/Web-Behind-Wall-Kevin-Chen-ebook/dp/B00D47CD74#customerReviews">“Web Behind the Wall”</a>, a book about an inside look into China’s tech startup ecosystem</li>
                  <p><strong>Referral</strong> - "As the Beijing-based technology writer at TechNode, Jason developed comprehensive knowhow about the TMT market in China. That experience inspired him to be a serial entrepreneur. He co-founded property-focused Koombah and Toujuwang in Beijing and an entrepreneur network in Australia called AsiaRecon. I was fortunate to attend the AsiaRecon Beijing community event and saw the impact Jason made to bridge the startup ecosystems between Australia and China. Through these entrepreneurial initiatives and his China TMT expertise, Jason demonstrated his self-starter character and the spirit of a problem-solver. I wouldn't hesitate to work together with him again in the future." Ben Jiang, TechNode colleague</p>
                </Col>
              </Row>
              <Row className="Creation">
                 <Col xs={4} md={3}>
                  <div><img src={KoombahLogo} className="KoombahLogo" alt="KoombahLogo" /></div>
                 </Col>
                <Col xs={12} md={9}>
                  <h3>Koombah</h3>
                  <p><strong>About</strong> - An Online to Offline residential rental service to help expats find and move into Beijing (operated for ~3 years)</p>
                  <p><strong>Achievements</strong> -  Helped hundreds of clients to smoothly settle into a new home in Beijing including corporate ones like Disney English</p>
                  <p><strong>Referral</strong> - “We wouldn’t have known what to do without them.” Aly. S</p>
                </Col>
              </Row>
              <Row className="Creation">
                 <Col xs={4} md={3}>
                  <div><img src={AsiaReconLogo} className="AsiaReconLogo" alt="AsiaReconLogo" /></div>
                 </Col>
                <Col xs={12} md={9}>
                  <h3><a href="http://asiarecon.com">AsiaRecon</a></h3>
                  <p><strong>About</strong> - An organization to help connect people, ideas and capital in Asia</p>
                  <p><strong>Achievements</strong></p>
                    <li>Successfully ran a tech tour to Singapore, Shanghai and Beijing for 15 delegates including government, entrepreneurs and investors</li>
                    <li>Influenced and facilitated the expansion of Australia’s largest co-working space, Fishburners, into Shanghai </li>
                    <li>AsiaRecon Co-founder, Mathew Benjamin is asked to design and deliver the first-ever cross-border FinTech incubation program to China for Stone & Chalk, a government sponsored initiative</li>
                  <p><strong>Referral</strong> - “One of the most enjoyable parts of the program was the relationships I formed with the other delegates and conversations we had througout the trip.” Jackie Ariston, Community and Program Manager, ATP Innovations</p>
                </Col>
              </Row>
              </Grid>
          </div>
      </div>
    );
  }
}

export default Work;
