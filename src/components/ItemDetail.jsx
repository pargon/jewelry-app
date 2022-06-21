import { useState } from "react";
import { Card } from "react-bootstrap";
import ItemCount from "./ItemCount";
import Cart from "./Cart";

function ItemDetail({ item }) {
  const [qty, setQty] = useState(0);
  const [viewCart, setViewCart] = useState(false);

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={item.pictureUrl} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
          <Card.Text>Price: {item.price}</Card.Text>
          {viewCart ? (
            <Cart></Cart>
          ) : (
            <ItemCount
              initial={1}
              stock={10}
              onAdd={setQty}
              onViewCart={setViewCart}
            ></ItemCount>
          )}
        </Card.Body>
      </Card>
    </>
  );
}

export default ItemDetail;
