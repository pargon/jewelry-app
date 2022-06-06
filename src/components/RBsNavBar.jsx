import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import CartWidget from "./CartWidget";

function RBsNavBar({qtyReq}) {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">My App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#catalogo">Catalogo</Nav.Link>
              <Nav.Link href="#catalogo">Ofertas</Nav.Link>
              <Nav.Link href="#catalogo">Contacto</Nav.Link>
            </Nav>
            <CartWidget items={qtyReq}/>            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default RBsNavBar;
