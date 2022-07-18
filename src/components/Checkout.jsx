import React, { useContext, useState } from "react";
import {
  Button,
  ButtonGroup,
  Card,
  Col,
  Container,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { collection, getFirestore, addDoc } from "firebase/firestore";

function Checkout() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [address, setAddress] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [orderId, setOrderId] = useState();
  const [confirmBtn, setConfirmBtn] = useState(true);

  const { cart, getItemsQty, getTotal, clear } = useContext(CartContext);
  const itemsCart = getItemsQty();
  const cartTotal = getTotal();
  const total = cartTotal;

  const chkEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const chkPhone = (phone) => {
    return String(phone).match(
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
    );
  };

  function handleClick() {
    const order = {
      buyer: { firstName, lastName, address, phone, email },
      items: cart,
      date: new Date(),
      total,
    };

    if (!firstName || !lastName || !address || !email || !phone) {
      alert("Must insert all data");
    } else {
      if (!itemsCart || itemsCart === 0) {
        alert("Cart is Empty");
      } else {
        if (!chkPhone(phone)) {
          alert("Phone: bad format");
        } else {
          if (!chkEmail(email)) {
            alert("Email: bad format");            
          } else {
            setConfirmBtn(false);
            const db = getFirestore();
            const table = "orders";
            const orderCollection = collection(db, table);

            addDoc(orderCollection, order).then(({ id }) => {
              setOrderId(id);
            });
          }
        }
      }
    }
  }
  return (
    <>
      <section className="h-100 h-custom">
        <Container className="py-5 h-100">
          <div
            className="alert alert-warning alert-dismissible fade show"
            role="alert"
          >
            <strong>Holy guacamole!</strong> You should check in on some of
            those fields below.
            <button
              type="button"
              className="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>{" "}
          <Row>
            <Col className="col-md-8 mb-4">
              <Card className="mb-4">
                <Card.Header className="py-3">
                  <h5 className="mb-0">Biling details</h5>
                </Card.Header>
                <Card.Body>
                  <form>
                    <Row className="mb-4">
                      <Col>
                        <div className="form-outline">
                          <input
                            onChange={(e) => setFirstName(e.target.value)}
                            type="text"
                            id="formData1"
                            className="form-control"
                          />
                          <label className="form-label">First Name</label>
                        </div>
                      </Col>
                      <Col>
                        <div className="form-outline">
                          <input
                            onChange={(e) => setLastName(e.target.value)}
                            type="text"
                            id="formData2"
                            className="form-control"
                          />
                          <label className="form-label">Last Name</label>
                        </div>
                      </Col>
                    </Row>

                    <div className="form-outline mb-4">
                      <input
                        onChange={(e) => setAddress(e.target.value)}
                        type="text"
                        id="formData4"
                        className="form-control"
                      />
                      <label className="form-label">Address</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        id="formData5"
                        className="form-control"
                      />
                      <label className="form-label">Email</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        onChange={(e) => setPhone(e.target.value)}
                        type="number"
                        id="formData6"
                        className="form-control"
                      />
                      <label className="form-label">Phone</label>
                    </div>
                  </form>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col-md-4 mb-4">
              <Card className=" mb-4">
                <Card.Header className="py-3">
                  <h5 className="mb-0">Summary</h5>
                </Card.Header>
                <Card.Body>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Products
                      <span>${cartTotal}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      Shipping
                      <span>Free</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total amount</strong>
                      </div>
                      <span>
                        <strong>${total}</strong>
                      </span>
                    </li>
                  </ul>
                  <div>{orderId && <p>Order Created ({orderId})</p>}</div>
                  <ButtonGroup className="w-100">
                    <div>
                      {confirmBtn && (
                        <Button
                          className="btn btn-info btn-block btn-lg"
                          onClick={() => handleClick()}
                        >
                          <div className="d-flex justify-content-center">
                            <h5 className="text-body">
                              <span>Finish Order</span>
                            </h5>
                          </div>
                        </Button>
                      )}
                    </div>
                    <div>
                      {!confirmBtn && (
                        <Button
                          className="btn btn-info btn-block btn-lg"
                          disabled
                        >
                          <div className="d-flex justify-content-center">
                            <h5 className="text-body">
                              <span>Finish Order</span>
                            </h5>
                          </div>
                        </Button>
                      )}
                    </div>
                    <Button
                      className="btn btn-info btn-light btn-block btn-lg"
                      onClick={() => clear()}
                    >
                      <Link to="/" style={{ textDecoration: "none" }}>
                        <div className="d-flex justify-content-center">
                          <h5 className="text-body">
                            <span>Exit</span>
                          </h5>
                        </div>
                      </Link>
                    </Button>
                  </ButtonGroup>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Checkout;
