import React, { useContext, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { collection, getFirestore, addDoc } from "firebase/firestore";

function Checkout() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [orderId, setOrderId] = useState();

  const { cart, getItemsQty, getTotal, clear } = useContext(CartContext);
  const itemsCart = getItemsQty();
  const total = getTotal();

  const chkEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  function handleClick() {
    const order = {
      buyer: { name, phone, email },
      items: cart,
      date: new Date(),
      total,
    };

    if (!name || !email || !phone) {
      alert("Must insert all data");
    } else {
      if (!itemsCart || itemsCart === 0) {
        alert("Cart is Empty");
      } else {
        if (!chkEmail(email)) {
          alert("Email: bad format");
        } else {
          const db = getFirestore();
          const table = "orders";
          const orderCollection = collection(db, table);

          addDoc(orderCollection, order).then(({ id }) => {
            setOrderId(id);
            clear();
          });
        }
      }
    }
  }

  return (
    <>
      <section className="h-100 h-custom">
        <Container className="py-5 h-100">
          <Row className="d-flex justify-content-center align-items-center h-100">
            <Col>
              <Card>
                <Card.Body className="p-4">
                  <Row>
                    <Col className="col-lg-9">
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
                      </div>
                      <div>
                        <form action="">
                          <input
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Name"
                          />
                          <input
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="email"
                          />
                          <input
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Phone"
                          />

                          <Button onClick={() => handleClick()}>
                            <Link
                              to={"../checkout"}
                              style={{ textDecoration: "none" }}
                            >
                              <div className="d-flex justify-content-between">
                                <h5 className="mb-3 text-body">Finish Order</h5>
                              </div>
                            </Link>
                          </Button>
                        </form>

                        <div>
                          {orderId && <h5>Order Created ( id:{orderId} )</h5>}
                        </div>
                      </div>
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

export default Checkout;
