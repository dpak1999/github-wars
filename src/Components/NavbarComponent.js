import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const NavbarComponent = () => {
  return (
    <Navbar bg="light" variant="light" expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <i class="lni lni-github-original"></i> Battle
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <LinkContainer to="/">
              <Nav.Link>Battle</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/explore">
              <Nav.Link>Popular</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
