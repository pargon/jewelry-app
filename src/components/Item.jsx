import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Item({ item }) {
  return (
    <>
      <Card.Img variant="top" src={item.pictureUrl} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>{item.description}</Card.Text>
        <Card.Text>{`Categoría: ${item.categoryDesc}`}</Card.Text>
        <Card.Text>Price: {item.price}</Card.Text>
        <Link to={"item/" + item.id}>Ver detalle del Producto </Link>
      </Card.Body>
    </>
  );
}

export default Item;
