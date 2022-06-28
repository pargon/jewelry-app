import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import CartWidget from "./CartWidget";
import CategoryList from "../repository/Categories";

function NavBar() {
  const categories = CategoryList.getAll();
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
                {categories &&
                  categories.map((item) => (
                    <LinkContainer to={"/category/" + item.id} key={item.id}>
                      <NavDropdown.Item>{item.description}</NavDropdown.Item>
                    </LinkContainer>
                  ))}
              </NavDropdown>

              <Nav.Link>Contact</Nav.Link>
            </Nav>
            <CartWidget />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
