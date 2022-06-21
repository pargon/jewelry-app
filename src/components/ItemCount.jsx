import React from "react";
import { useState } from "react";
import { Card, Button, ButtonGroup } from "react-bootstrap";

function ItemCount({ initial, stock, onAdd, onViewCart }) {
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
      onViewCart(true);
    } else {
      alert(`Not Stock Available`);
    }
  };

  return (
    <>
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
    </>
  );
}

export default ItemCount;
