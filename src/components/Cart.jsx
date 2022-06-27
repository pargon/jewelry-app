import { useContext } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { CartContext } from "../context/CartContext";
import { BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, getItemsQty, removeItem } = useContext(CartContext);
  const itemsCart = getItemsQty();
  const textCartQty =
    itemsCart > 0
      ? `Ud. tiene ${itemsCart} artículos en su carrito`
      : `El carrito está vacío`;

  return (
    <>
      <section className="h-100 h-custom">
        <Container className="py-5 h-100">
          <Row className="d-flex justify-content-center align-items-center h-100">
            <Col>
              <Card>
                <Card.Body className="p-4">
                  <Row>
                    <div className="col-lg-7">
                      <Link to="/">
                        <h5 className="mb-3 black text-body">
                          Continue shopping
                        </h5>
                      </Link>
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <div>
                          <p className="mb-1">Carrito de compras</p>
                          <p className="mb-0">{textCartQty}</p>
                        </div>
                      </div>
                      <div>
                        {cart &&
                          cart.map((cartItem) => (
                            <Card className="mb-3">
                              <Card.Body key={cartItem.id}>
                                <div className="d-flex justify-content-between">
                                  <div className="d-flex flex-row align-items-center">
                                    <div>
                                      <Card.Img
                                        src={cartItem.pictureUrl}
                                        className="img-fluid rounded-3"
                                        alt="Shopping item"
                                        style={{ width: "65px" }}
                                      ></Card.Img>
                                    </div>
                                    <div className="ms-3">
                                      <h5>{cartItem.title}</h5>
                                      <p className="small mb-0">
                                        {cartItem.title}
                                      </p>
                                    </div>
                                  </div>
                                  <div className="d-flex flex-row align-items-center">
                                    <div style={{ width: "50px" }}>
                                      <h5 className="fw-normal mb-0">
                                        {cartItem.quantity}
                                      </h5>
                                    </div>
                                    <div style={{ width: "80px" }}>
                                      <h5 className="mb-0">
                                        ${cartItem.price}
                                      </h5>
                                    </div>
                                  </div>
                                  <Button
                                    variant="black"
                                    onClick={() => removeItem(this.key)}
                                  >
                                    <BsTrash />
                                  </Button>
                                </div>
                              </Card.Body>
                            </Card>
                          ))}
                      </div>
                    </div>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Cart;
