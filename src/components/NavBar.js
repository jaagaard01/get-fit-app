import React, { Component } from 'react';
import { Link } from "react-router-dom"
import { Nav, Navbar } from "react-bootstrap";

class NavBar extends Component {
  render() {
    return (
      <div>
        <div>
          <Navbar expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">{` Get Fit` }</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav"></Navbar.Collapse>
                <Nav className="justify-content-end">
                  <Nav.Link eventKey="BodyType" href="/BodyType">Body Parts</Nav.Link>
                  <Nav.Link eventKey="Excerises" href="/Template">Excerises</Nav.Link>
                  <Nav.Link eventKey="Logs" href="/Logs">Workout History</Nav.Link>
                </Nav>
          </Navbar>
        </div>
      </div>
    );
  }
}

export default NavBar;
