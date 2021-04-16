import React from 'react';
import ReactDom from 'react-dom';
import Carousel from 'react-bootstrap/Carousel';
import ListGroup from 'react-bootstrap/ListGroup'
import slack4 from './Slack4.png';
import slack5 from './slack5.jpg';
import slack8 from './slack8.jpg';
import slack7 from './slack7.png';
import Slack2 from './Slack2.jpg';
import slack4gif from './slack4.gif';
import slack1gif from './slack1.gif';
import slack from './slack.svg';
import fox from './fox.svg';
import lonelyplanet from './lonelyplanet.svg';
import intuit from './intuit.png';
import carvana from './carvana.png';
import kiva from './kiva.png';
import devacurl from './devacurl.png';
import './Style.css';
import { Container,Row,Col,Button, ListGroupItem } from 'react-bootstrap';

function Home(){
  function sales(e){
    window.location.href="https://slack.com/intl/en-in/contact-sales?geocode=en-in";
  }
  function free(e){
    window.location.href="https://slack.com/get-started#/createnew";
  }
  function features(e){
    window.location.href="https://slack.com/intl/en-in/features";
  }
  function details(e){
    window.location.href="https://slack.com/intl/en-in/customer-stories";
  }
  function wire(e){
    window.location.href="https://www.nytimes.com/wirecutter/reviews/best-team-messaging-app/";
  }
  function whyslack(e){
    window.location.href="https://www.nytimes.com/wirecutter/reviews/best-team-messaging-app/";
  }
  function channels(e){
    window.location.href="https://slack.com/intl/en-in/features/channels";
  }
  function engagement(e){
    window.location.href="https://slack.com/intl/en-in/engage-users";
  }
  function scale(e){
    window.location.href="https://slack.com/intl/en-in/scale";
  }
  function demo(e){
    window.location.href="https://slackdemo.com/?vst=clviw79uf12rrxnd106a0tfwa";
  }
  function feat(e){
    window.location.href="https://slack.com/intl/en-in/features";
  }
  function enter(e){
    window.location.href="https://slack.com/intl/en-in/integrations";
  }
  function inter(e){
    window.location.href="https://slack.com/intl/en-in/enterprise";
  }
  function solution(e){
    window.location.href="https://slack.com/intl/en-in/solutions";
  }
  function subscription(e){
    window.location.href="https://slack.com/intl/en-in/pricing";
  }
  function paid(e){
    window.location.href="https://slack.com/intl/en-in/pricing/paid-vs-free";
  }
  function partners(e){
    window.location.href="https://slack.com/intl/en-in/pricing/paid-vs-free";
  }
  function developers(e){
    window.location.href="https://slack.com/intl/en-in/pricing/paid-vs-free";
  }
  function apps(e){
    window.location.href="https://slack.com/intl/en-in/pricing/paid-vs-free";
  }
  function blog(e){
    window.location.href="https://slack.com/intl/en-in/pricing/paid-vs-free";
  }
  function help(e){
    window.location.href="https://slack.com/intl/en-in/pricing/paid-vs-free";
  }
  function event(e){
    window.location.href="https://slack.com/intl/en-in/pricing/paid-vs-free";
  }
  function about(e){
    window.location.href="https://slack.com/intl/en-in/about";
  }
  function leadership(e){
    window.location.href="https://slack.com/intl/en-in/about/leadership";
  }
  function investor(e){
    window.location.href="https://investor.slackhq.com/home/default.aspx";
  }
  function news(e){
    window.location.href="https://slack.com/intl/en-in/blog/news";
  }
  function media(e){
    window.location.href="https://slack.com/intl/en-in/media-kit";
  }
  function careers(e){
    window.location.href="https://slack.com/intl/en-in/careers";
  }
  function download(e){
    window.location.href="https://slack.com/intl/en-in/downloads";
  }
  function fox1(e){
    window.location.href="https://slack.com/customer-stories/fox";
  }
  function lonelyplanet1(e){
    window.location.href="https://slack.com/blog/collaboration/channeling-the-road-less-traveled-with-lonely-planet";
  }
  function intuit1(e){
    window.location.href="https://slack.com/customer-stories/intuit";
  }
  function carvana1(e){
    window.location.href="https://slack.com/blog/collaboration/carvana-slack-car-buying";
  }
  function kiva1(e){
    window.location.href="https://slack.com/blog/collaboration/kiva-slack-crowdfund-loans-underserved-communities";
  }
  function devacurl1(e){
    window.location.href="https://slack.com/blog/collaboration/devacurl-communication-tangle-free-slack";
  }
    return(
        <div className="Home">
          <Container>
            <Col sm={12}>
                <Row>
        <Carousel className="First" >
  <Carousel.Item >
    <img
      className="d-block w-50 image"
      src={slack4}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-50 image"
      src={slack5}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-50 image"
      src={slack7}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</Row>
</Col>
<Container>
    <Row className="row1">
    <Col sm={7}>
    <h1>Welcome to your new HQ</h1>
    <br></br>
    <p>Teamwork can be hard, messy, complicated… and still the best way to work. That’s why we made Slack – a place where people get work done, together.</p>
    <br></br>
    <span className="right1"><Button onClick={free}>Try for Free</Button></span>
    </Col>
    <Col sm={5}>
    <img
      className="w-100"
      src={Slack2}
      alt="Third slide"
    /></Col>
    </Row>
    </Container>
    <Row className="row8">
    <Col sm={7} >
    <img
      className="w-75"
      src={slack4gif}
      alt="Second slide"
    />
    </Col>
    <Col sm={5}>
        <h1>
        A better way to communicate
        </h1>
        <br></br>
        <br></br>
        <p>
        Unlike email, conversations in Slack are easy to follow. And they’re more than conversations – you can make calls, share files and even connect with other apps.
        </p>
        <br></br>
        <span className="down"><Button variant="outline" onClick={features}>See all features</Button></span>
    </Col>
  </Row>
  <Row className="row9">
      <h1>Over 750,000 companies use Slack to get work done</h1>
  </Row>
  <Row className="row3">
  <Button onClick={details}> See all Details</Button>
  </Row>
  <Row className="row4">
  <Col sm={6}>
        <p>
        ‘We have so many moving parts that are so interconnected. We have the farm that speaks to the kitchen. We have floral that speaks to the kitchen. We have the kitchen that speaks to everything.’
        </p>
        <h4>
        Katina Connaughton
        </h4>
        <h5>
        Head Farmer, SingleThread
        </h5>
  </Col>
    <Col sm={6}>
    <img
      className="d-block w-100"
      src={slack8}
      alt="Second slide"
    />
    </Col>
  </Row>
  <Row>
      <Col sm={2}>
        <img className="d-block w-25 icons" src={fox} onClick={fox1} />
      </Col>
      <Col sm={2}>
      <img className="d-block w-50 icons" src={lonelyplanet} onClick={lonelyplanet1} />
      </Col>
      <Col sm={2} className="intuit">
      <img className="d-block w-50 icons" src={intuit} onClick={intuit1} />
      </Col>
      <Col sm={2} className="intuit">
      <img className="d-block w-50 icons" src={carvana} onClick={carvana1} />
      </Col>
      <Col sm={2} className="intuit">
      <img className="d-block w-50 h-75 icons" src={kiva} onClick={kiva1} />
      </Col>
      <Col sm={2} className="intuit">
      <img className="d-block w-50 h-50 icons" src={devacurl} onClick={devacurl1} />
      </Col>
  </Row>
  <Col sm={12} className="row5">
  <Row>
      <p className="icons" onClick={wire}>Wirecutter names Slack the best team messaging app. See why</p>
  </Row>
  </Col>
  <Col sm={12} className="row6">
  <Row>
      <p>Choose a better way to work</p>
  </Row>
  </Col>
  <Col className="row6">
  <Row>
  <Button className="bottom1" onClick={free}>Try for free</Button>
  <span className="right1" onClick={sales}><Button>Talk to sales</Button></span>
  </Row>
  </Col>
  <Row className="row7">
  <Col sm={2}>
       <img className="d-block w-75 icons" src={slack} onClick={download} />
      </Col>
      <Col sm={2}>
        <Row className="innerrow">
        WHY SLACK ?
      </Row>
      <Row className="innertext icons" onClick={whyslack}>
      Slack vs email
      </Row>
      <Row className="innertext icons" onClick={channels}>
      Channels
      </Row>
      <Row className="innertext icons" onClick={engagement}>
      Engagement
      </Row>
      <Row className="innertext icons" onClick={scale}>
      Scale
      </Row>
      <Row className="innertext icons" onClick={demo}>
      Watch the demo
      </Row>
      </Col>
      <Col sm={2}>
      <Row className="innerrow">
        PRODUCT
      </Row>
      <Row className="innertext icons" onClick={feat}>
      Features
      </Row>
      <Row className="innertext icons" onClick={enter}>
      Enterprise
      </Row>
      <Row className="innertext icons" onClick={inter}>
      Integration
      </Row>
      <Row className="innertext icons" onClick={solution}>
     Solution
      </Row>
      </Col>
      <Col sm={2}>
      <Row className="innerrow">
        PRICING
      </Row>
      <Row className="innertext icons" onClick={subscription}>
      Subscription
      </Row>
      <Row className="innertext icons" onClick={paid}>
      Paid vs free
      </Row>
      </Col>
      <Col sm={2}>
      <Row className="innerrow">
        Resources
      </Row>
      <Row className="innertext icons" onClick={partners}>
      Partners
      </Row>
      <Row className="innertext icons" onClick={developers}>
      Developers
      </Row>
      <Row className="innertext icons" onClick={apps}>
      App
      </Row>
      <Row className="innertext icons" onClick={blog}>
      Blog
      </Row>
      <Row className="innertext icons" onClick={help}>
      Help Center
      </Row>
      <Row className="innertext icons" onClick={event}>
      Events
      </Row>
      </Col>
      <Col sm={2}>
      <Row className="innerrow">
        COMPANY
      </Row>
      <Row className="innertext icons" onClick={about}>
      About us
      </Row>
      <Row className="innertext icons" onClick={leadership}>
      Leadership
      </Row>
      <Row className="innertext icons" onClick={investor}>
      Investor Relation
      </Row>
      <Row className="innertext icons" onClick={news}>
      News
      </Row>
      <Row className="innertext icons" onClick={media}>
      Media Kit
      </Row>
      <Row className="innertext icons" onClick={careers}>
      Careers
      </Row>
      </Col>
  </Row>
  <Col sm={12} className="row5">
  <Row>
      <p className="icons" onClick={download}>Download Slack</p>
  </Row>
  </Col>
  </Container>
        </div>
    )
}
export default Home;