import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import CartWidget from "./CartWidget";
import { CardContext } from "../context/CartContext";

function NavBar({ qtyReq }) {
  const { title, desc } = CardContext;
  console.log(CardContext);
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <div>{'Este es el '+ title}</div>

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
            <CartWidget items={qtyReq} />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
