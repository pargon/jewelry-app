import React from "react";
import { useState } from "react";
import { Card, Button, ButtonGroup } from "react-bootstrap";

function ItemCount({ initial, stock, onAdd }) {
  const [value, setValue] = useState(initial);

  const sum = () => {
    if (value < stock) {
      setValue(value + 1);
    } else {
      alert(`Stock Max:${stock}`);
    }
  };
  const sub = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };
  const addValueCart = () => {
    if (value <= stock) {
      onAdd(value);
    } else {
      alert(`Not Stock Available`);
    }
  };

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img />
        <Card.Body>
          <Card.Title>Product A</Card.Title>
          <Card.Text>Order Quantity: {value}</Card.Text>
          <ButtonGroup>
            <Button onClick={sum} variant="secondary">
              +
            </Button>
            <Button onClick={addValueCart} variant="secondary">
              Add Cart
            </Button>
            <Button onClick={sub} variant="secondary">
              -
            </Button>
          </ButtonGroup>
        </Card.Body>
      </Card>
    </>
  );
}

export default ItemCount;
