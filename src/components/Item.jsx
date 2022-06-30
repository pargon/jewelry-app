import React from "react";
import { Card } from "react-bootstrap";

function Item({ item }) {
  return (
    <>
      <Card.Img
        variant="center"
        className="mx-auto d-block"
        src={item.pictureUrl}
        alt="Shopping item"
        style={{ width: "18rem" }}
      />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Subtitle>{`Category: ${item.categoryDesc}`}</Card.Subtitle>
        <Card.Text>Price: {item.price}</Card.Text>
      </Card.Body>
    </>
  );
}

export default Item;
