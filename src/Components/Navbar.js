import React from 'react';
import ReactDom from 'react-dom';
import { Link } from 'react-router-dom';
import {Button ,Navbar, Nav, Form, FormControl, Container} from 'react-bootstrap';
import slack from './slack.svg';
import './Style.css';

function Navbar1(){
  function sales(e){
    window.location.href="https://slack.com/intl/en-in/contact-sales?geocode=en-in";
  }
  function free(e){
    window.location.href="https://slack.com/get-started#/createnew";
  }
  function download(e){
    window.location.href="https://slack.com/intl/en-in/downloads";
  }
    return(
<div className="Navbar">
<Navbar>
<Navbar.Brand href="#home">
  <img
    alt=""
    src ={slack}
    width="80"
    height="50"
    className="d-inline-block align-top"
    onClick={download}
  />
</Navbar.Brand>
<div>
<Navbar>
    <Navbar.Brand href="#home">Home</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="https://slack.com/intl/en-in/download">Product</Nav.Link>
      <Nav.Link href="https://slack.com/intl/en-in/enterprise">Enterprise</Nav.Link>
      <Nav.Link href="https://slack.com/intl/en-in/resources">Resources</Nav.Link>
      <Nav.Link href="https://slack.com/intl/en-in/pricing">Pricing</Nav.Link>
    </Nav>
    <Nav className="right">
    <Button variant="outline" onClick={sales}>Talk to sales</Button>
    </Nav>
    <Nav className="right1">
    <Button onClick={free}>Try for Free</Button>
    </Nav>
    </Navbar>
    </div>
</Navbar>
</div>
    )
}
export default Navbar1;