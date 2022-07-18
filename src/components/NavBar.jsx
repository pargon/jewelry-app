import { useEffect, useState } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import CartWidget from "./CartWidget";
import { getDocs, collection, getFirestore } from "firebase/firestore";
import logo from "../images/logo350x200.png";

function NavBar() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const table = "categories";
    const colItems = collection(db, table);
    // todo
    const data = getDocs(colItems);

    data.then((res) => {
      setCategories(
        res.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    });
  }, []);

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/">
                <Nav.Link>
                  <img
                    src={logo}
                    alt='logo'
                    style={{
                      minWidth: "20%",
                      maxWidth: 70,
                      minHeight: "10%",
                      maxHeight: 60,
                    }}
                  />
                </Nav.Link>
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
