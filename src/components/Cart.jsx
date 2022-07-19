import { useContext } from "react";
import {
  Button,
  ButtonGroup,
  Card,
  Col,
  Container,
  Row,
} from "react-bootstrap";
import { CartContext } from "../context/CartContext";
import { BsTrash, BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, getItemsQty, removeItem, getTotal, clear } =
    useContext(CartContext);
  const itemsCart = getItemsQty();
  const cartTotal = getTotal();

  return (
    <>
      <section className="h-100 h-custom">
        <Container className="py-5 h-100">
          <Row className="d-flex justify-content-center align-items-center h-100">
            <Col>
              <Card>
                <Card.Body className="p-4">
                  <Row>
                    <Col className="col-lg-8">
                      <div className="black">
                        <Link to="/" style={{ textDecoration: "none" }}>
                          <h5 className="mb-3 text-body">
                            <BsArrowLeft /> Continue shopping
                          </h5>
                        </Link>
                        <div className="d-flex justify-content-between align-items-center mb-4">
                          <div>
                            <p className="mb-0">
                              {itemsCart > 0
                                ? `Cart items: ${itemsCart}`
                                : `The cart is empty`}
                            </p>
                          </div>
                        </div>
                        <div>
                          {cart &&
                            cart.map((cartItem) => (
                              <Card className="mb-3" key={cartItem.id}>
                                <Card.Body>
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
                                          ${cartItem.price}
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
                                          ${cartItem.price * cartItem.quantity}
                                        </h5>
                                      </div>
                                    </div>
                                    <Button
                                      variant="black"
                                      onClick={() => removeItem(cartItem.id)}
                                    >
                                      <BsTrash />
                                    </Button>
                                  </div>
                                </Card.Body>
                              </Card>
                            ))}
                        </div>
                      </div>
                    </Col>
                    <Col className="col-lg-4">
                      {cartTotal > 0 && (
                        <Card className="bg-primary h-100 text-white rounded-3">
                          <Card.Body className="p-4">
                            <div className="d-flex justify-content-between mb-4">
                              <p className="mb-2">Total</p>
                              <p className="mb-2">${cartTotal}</p>
                            </div>
                            <ButtonGroup className="w-100">
                              <Button
                                className="btn btn-info btn-light btn-block btn-lg"
                                onClick={() => clear()}
                              >
                                <Link to="/" style={{ textDecoration: "none" }}>
                                  <div className="d-flex justify-content-center">
                                    <h5 className="text-body">
                                      <span>Clear</span>
                                    </h5>
                                  </div>
                                </Link>
                              </Button>
                              <Button className="btn btn-info btn-block btn-lg">
                                <Link
                                  to={"../checkout"}
                                  style={{ textDecoration: "none" }}
                                >
                                  <div className="d-flex justify-content-center">
                                    <h5 className="text-body">
                                      <span>Checkout</span>
                                    </h5>
                                  </div>
                                </Link>
                              </Button>
                            </ButtonGroup>
                          </Card.Body>
                        </Card>
                      )}
                    </Col>
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
