import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './Work.css';
import 'bootstrap/less/bootstrap.less';
import { Navbar,Nav,NavItem,Jumbotron,Button,Grid,Col,Row} from 'react-bootstrap';


import talkSpiritLogo from './Images/talkSpiritLogo.png';
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
          <h1 className="Heading">CLIENTS + CREATION</h1>
          <div className="Content">
            <h2><strong>Companies I have helped</strong></h2>
              <Grid className="Grid">
                <Row className="Client">
                   <Col xs={4} md={3}>
                    <div><img src={talkSpiritLogo} className="talkSpiritLogo" alt="talkSpiritLogo" /></div>
                   </Col>
                  <Col xs={12} md={9}>
                    <h3><strong><a href="https://talkspirit.com/">talkSpirit</a></strong></h3>
                    <p><strong>ABOUT</strong> - A French B2B communication and collaboration tech company</p>
                    <p><strong>WORK</strong> - I wrote several blog posts about the reasons and benefits of using talkSpirit for organizations</p>
                    <p><strong>IMPACT</strong> - Drove hundreds of views to the blog, enhancing SEO value to the main website</p>
                    <p><strong>SAMPLES</strong></p>
                      <li><a href="https://blog.talkspirit.com/en/get-all-the-work-news-you-need-anytime/">Get all the work news you need anytime</a></li>
                      <li><a href="https://blog.talkspirit.com/en/build-community-through-communication/">Build community through communication</a></li>
                    <p><strong>REFERRAL</strong> "All in all, it is, and always has been, a true pleasure working with him. I would definitely recommend Jason to anyone who’s searching for specific quality content, any time of day." - Casper Koopman</p>
                  </Col>
                </Row>
                <Row className="Client">
                   <Col xs={4} md={3}>
                    <div><img src={ForbesLogo} className="ForbesLogo" alt="ForbesLogo" /></div>
                   </Col>
                  <Col xs={12} md={9}>
                    <h3><strong><a href="https://www.forbes.com/sites/jlim/#6b0fbdd1e34b">Forbes</a></strong></h3>
                    <p><strong>ABOUT</strong> - A leading business media publication</p>
                    <p><strong>WORK</strong> - I wrote ~120 stories about tech startups and innovation across Asia, Australia and Silicon Valley</p>
                    <p><strong>IMPACT</strong> - Amassed 480K+ readers and 600K+ views</p>
                    <p><strong>SAMPLES</strong></p>
                      <li><a href="https://www.forbes.com/sites/jlim/2014/09/09/is-apples-iphone-6-phablet-too-late/#f23f043babf8">Is Apples iPhone 6 Phablet Too Late?</a></li>
                      <li><a href="https://www.forbes.com/sites/jlim/2014/05/19/wechat-one-of-the-worlds-most-powerful-apps/#7491f5a074f1">WeChat, One Of The Worlds Most Powerful Apps</a></li>
                      <li><a href="https://www.forbes.com/sites/jlim/2016/10/12/what-leading-ai-machine-learning-and-robotics-scientists-say-about-the-future/#3af914a67be6">What Leading AI, Machine Learning And Robotics Scientists Say About The Future</a></li>
                    <p><strong>REFERRAL</strong> - Glenda Toma</p>
                  </Col>
                </Row>
                <Row className="Client">
                   <Col xs={4} md={3}>
                    <div><img src={CitusDataLogo} className="CitusDataLogo" alt="CitusDataLogo" /></div>
                   </Col>
                  <Col xs={12} md={9}>
                    <h3><strong><a href="http://citusdata.com">Citus Data</a></strong></h3>
                    <p><strong>ABOUT</strong> - A YC Postgres database startup that provides massive scale and speed</p>
                    <p><strong>WORK</strong> - I wrote 5 customer stories, 3 technical blog posts, re-designed the newsletter</p>
                    <p><strong>IMPACT</strong></p>
                      <li>Drove thousands of webpage views and armed the Sales team with fresh customer stories</li>
                      <li>Recommended website redesign and messaging improvements</li>
                      <li>Re-designed the corporate newsletter to increase conversions by 2% MoM</li>
                    <p><strong>SAMPLES</strong></p>
                      <li><a href="https://www.citusdata.com/blog/2017/03/15/a-look-at-isolating-tenants/">A Look at Isolating Tenants To Improve Database Performance</a></li>
                      <li><a href="https://www.citusdata.com/blog/2017/03/23/a-look-into-disaster-recovery-and-high-availability-and-how-they-work-with-postgres-on-citus-cloud/">How we implement Disaster Recovery and High Availability with Postgres on Citus Cloud</a></li>
                      <li><a href="https://www.citusdata.com/customers/sportradar">Sportradars radar360 Powers Real-Time Sports Analytics Using Citus</a></li>
                      <li><a href="https://www.citusdata.com/customers/convertflow">ConvertFlow Delivers Real-Time Analytics to Marketers Using Citus</a></li>
                      <li><a href="https://www.citusdata.com/customers/kixer">Kixer Uses Citus To Manage Vital Analytics for Web Publishers and Internal Business Metrics</a></li>
                    <p><strong>REFERRAL</strong> - Craig Kierstens</p>
                  </Col>
                </Row>
                <Row className="Client">
                   <Col xs={4} md={3}>
                    <div><img src={OrionVMLogo} className="OrionVMLogo" alt="OrionVMLogo" /></div>
                   </Col>
                  <Col xs={12} md={9}>
                    <h3><strong><a href="http://orionvm">OrionVM</a></strong></h3>
                    <p><strong>ABOUT</strong> - A wholesale HyperCloud IaaS startup</p>
                    <p><strong>WORK</strong> - I helped create blog content to grow thought leadership</p>
                    <p><strong>IMPACT</strong> - XXX </p>
                    <p><strong>SAMPLES</strong></p>
                      <li>XXX</li>
                    <p><strong>REFERRAL</strong> - Daniel Pfeiffer</p>
                  </Col>
                </Row>
                <Row className="Client">
                   <Col xs={4} md={3}>
                    <div><img src={AmpdEnergyLogo} className="AmpdEnergyLogo" alt="AmpdEnergyLogo" /></div>
                   </Col>
                  <Col xs={12} md={9}>
                    <h3><strong><a href="http://ampd.energy">Ampd Energy</a></strong></h3>
                    <p><strong>ABOUT</strong> - An energy storage startup from Hong Kong</p>
                    <p><strong>WORK</strong> - I helped to get coverage on Forbes and Engadget</p>
                    <p><strong>IMPACT</strong> - Drove 2K+ page-views to the website and created global brand recognition </p>
                    <p><strong>SAMPLES</strong></p>
                      <li><a href="https://www.engadget.com/2017/01/06/ampd-energy-hopes-to-make-pollution-prone-diesel-generators-obs/">Ampd Energy hopes to make pollution-prone diesel generators obsolete</a></li>
                      <li><a href="https://www.forbes.com/profile/brandon-ng/">Brandon Ng, CEO of Ampd Energy named one of Forbes Asia Under 30 in Industry, Manufacturing and Energy</a></li>
                    <p><strong>REFERRAL</strong> - "Jason has been instrumental in developing Ampd Energy's PR strategy and has followed through with executing that strategy aggressively, compellingly and with the speedy efficiency with which a Japanese samurai with a forged, high-carbon steel katana slices through a watermelon. Ampd Energy, unusually as a startup company, specializes in the engineering, manufacturing and marketing of advanced energy storage devices for enterprise and industrial applications. Yet Jason has developed a detailed understanding of the challenges, competitive landscape and pressure points in this market sector, and achieves a high conversion rate by considering story angles from the viewpoints of the media professionals he pitches to. Finally, Jason brings with him, a delectable Aussie charm that makes him easy and a blast to work with." - Brandon Ng, CEO, Ampd Energy</p>
                  </Col>
                </Row>
                <Row className="Client">
                   <Col xs={4} md={3}>
                    <div><img src={OriginalStitchLogo} className="OriginalStitchLogo" alt="OriginalStitchLogo" /></div>
                   </Col>
                  <Col xs={12} md={9}>
                    <h3><strong><a href="http://originalstitch.com">Original Stitch</a></strong></h3>
                    <p><strong>ABOUT</strong> - An online men’s tailored shirt startup </p>
                    <p><strong>WORK</strong> - Designed and wrote copy for a dozen email marketing and onboarding campaigns</p>
                    <p><strong>IMPACT</strong> - Achieved peak of 31% click through on Call to Action and 53% Purchase conversion </p>
                  </Col>
                </Row>
                <Row className="Client">
                   <Col xs={4} md={3}>
                    <div><img src={GoBoldLogo} className="GoBoldLogo" alt="GoBoldLogo" /></div>
                   </Col>
                  <Col xs={12} md={9}>
                    <h3><strong><a href="http://gobold.com">Bold</a></strong></h3>
                    <p><strong>ABOUT</strong> - A mass payout payments startup </p>
                    <p><strong>WORK</strong> - Refined brand position, devised a go-to-market media strategy and wrote 2 targeted press releases</p>
                    <p><strong>IMPACT</strong> - Unified team on message </p>
                    <p><strong>REFERRAL</strong> - "Jason is thorough, thoughtful, and sincere. He approaches each project with a balance of structure, creativity, discipline, and energy that all but guarantees success. He is dependable, responsive, and dedicated to enabling your success. His skillset spans both strategic and tactical, making him a very valuable addition to your team. He's high impact and efficient with his time.
                    I recommend Jason to any tech co looking for help with positioning, marketing, and PR strategy." Sean Safahi, CEO, Bold</p>
                  </Col>
                </Row>
                <Row className="Client">
                   <Col xs={4} md={3}>
                    <div><img src={GWCLogo} className="GWCLogo" alt="GWCLogo" /></div>
                   </Col>
                  <Col xs={12} md={9}>
                    <h3><strong><a href="http://www.thegsummit.org/">G Summit by Great Wall Club</a></strong></h3>
                    <p><strong>ABOUT</strong> - An exclusive Science and Tech Conference run by Great Wall Club</p>
                    <p><strong>WORK</strong> - Advised on event strategy and marketing, wrote website messaging, newsletters, press-releases  </p>
                    <p><strong>IMPACT</strong> - Efforts led to a sold out conference with tickets costing up to $10K </p>
                    <p><strong>REFERRAL</strong> - "We hired Jason as a Marketing & PR consultant for our product launch in late September, and was blown away by his work. Jason is extremely knowledgable in this space, and was more than helpful in helping us with our marketing strategy across the board (website, newsletters, blogs, press releases and etc.) His work was highly praised by the entire team, including the management team. If you are looking for a freelancer / consultant for Marketing & PR work, look no further!!", Allan Shen, Global Sales and Business Development Manager, GWC</p>
                  </Col>
                </Row>
                <Row className="Client">
                   <Col xs={4} md={3}>
                    <div><img src={CeleryLogo} className="CeleryLogo" alt="CeleryLogo" /></div>
                   </Col>
                  <Col xs={12} md={9}>
                    <h3><strong><a href="https://www.trycelery.com/">Celery</a></strong></h3>
                    <p><strong>ABOUT</strong> - A YC pre-order sales management startup</p>
                    <p><strong>WORK</strong> -  I wrote marketing content and designed an outreach strategy</p>
                    <p><strong>IMPACT</strong> - Drove ~13K views to the brand </p>
                    <p><strong>REFERRAL</strong> - Chris Tsai</p>
                  </Col>
                </Row>
                <Row className="Client">
                   <Col xs={4} md={3}>
                    <div><img src={AppAnnieLogo} className="AppAnnieLogo" alt="AppAnnieLogo" /></div>
                   </Col>
                  <Col xs={12} md={9}>
                    <h3><strong><a href="http://appannie.com">App Annie</a></strong></h3>
                    <p><strong>ABOUT</strong> - The leading mobile app analytics company</p>
                    <p><strong>WORK</strong> -  Advised on content strategy, worked with analysts to create insightful stories with data </p>
                    <p><strong>IMPACT</strong> - Helped App Annie generate its first set of rich content to drive credibility in the market  </p>
                    <p><strong>SAMPLES</strong></p>
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
                  <h3><strong><a href="http://technode.com">TechNode</a></strong></h3>
                  <p><strong>ABOUT</strong> - A leading independent bi-lingual tech media in Asia</p>
                  <p><strong>ACHIEVEMENTS</strong></p>
                    <li>One of the most respected grass-roots media in China</li>
                    <li>Manages TechCrunch China </li>
                    <li>Manages TechCrunch China and its TechCrunch Disrupt conferences</li>
                    <li>Co-authored <a href="https://www.amazon.com/Web-Behind-Wall-Kevin-Chen-ebook/dp/B00D47CD74#customerReviews">“Web Behind the Wall”</a>, a book about an inside look into China’s tech startup ecosystem</li>
                  <p><strong>REFERRAL</strong> - "As the Beijing-based technology writer at TechNode, Jason developed comprehensive knowhow about the TMT market in China. That experience inspired him to be a serial entrepreneur. He co-founded property-focused Koombah and Toujuwang in Beijing and an entrepreneur network in Australia called AsiaRecon. I was fortunate to attend the AsiaRecon Beijing community event and saw the impact Jason made to bridge the startup ecosystems between Australia and China. Through these entrepreneurial initiatives and his China TMT expertise, Jason demonstrated his self-starter character and the spirit of a problem-solver. I wouldn't hesitate to work together with him again in the future." Ben Jiang, TechNode colleague</p>
                </Col>
              </Row>
              <Row className="Creation">
                 <Col xs={4} md={3}>
                  <div><img src={KoombahLogo} className="KoombahLogo" alt="KoombahLogo" /></div>
                 </Col>
                <Col xs={12} md={9}>
                  <h3><strong>Koombah</strong></h3>
                  <p><strong>ABOUT</strong> - An Online to Offline residential rental service to help expats find and move into Beijing (operated for ~3 years)</p>
                  <p><strong>ACHIEVEMENTS</strong> -  Helped hundreds of clients to smoothly settle into a new home in Beijing including corporate ones like Disney English</p>
                  <p><strong>REFERRAL</strong> - “We wouldn’t have known what to do without them.” Aly. S</p>
                </Col>
              </Row>
              <Row className="Creation">
                 <Col xs={4} md={3}>
                  <div><img src={AsiaReconLogo} className="AsiaReconLogo" alt="AsiaReconLogo" /></div>
                 </Col>
                <Col xs={12} md={9}>
                  <h3><strong><a href="http://asiarecon.com">AsiaRecon</a></strong></h3>
                  <p><strong>ABOUT</strong> - An organization to help connect people, ideas and capital in Asia</p>
                  <p><strong>ACHIEVEMENTS</strong></p>
                    <li>Successfully ran a tech tour to Singapore, Shanghai and Beijing for 15 delegates including government, entrepreneurs and investors</li>
                    <li>Influenced and facilitated the expansion of Australia’s largest co-working space, Fishburners, into Shanghai </li>
                    <li>AsiaRecon Co-founder, Mathew Benjamin designed and delivered the first-ever cross-border FinTech incubation program to China for Stone & Chalk, a government sponsored initiative</li>
                  <p><strong>REFERRAL</strong> - “One of the most enjoyable parts of the program was the relationships I formed with the other delegates and conversations we had througout the trip.” Jackie Ariston, Community and Program Manager, ATP Innovations</p>
                </Col>
              </Row>
              </Grid>
          </div>
      </div>
    );
  }
}

export default Work;
