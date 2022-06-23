import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/">
                <Nav.Link>My App</Nav.Link>
              </LinkContainer>

              <NavDropdown title="Categories" id="basic-nav-dropdown">
                <LinkContainer to="/category/acero">
                  <NavDropdown.Item>Acero</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/category/aluminio">
                  <NavDropdown.Item>Aluminio</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/category/plastico">
                  <NavDropdown.Item>Plástico</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>

              <Nav.Link>Ofertas</Nav.Link>
              <Nav.Link>Contacto</Nav.Link>
            </Nav>
            <CartWidget/>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
