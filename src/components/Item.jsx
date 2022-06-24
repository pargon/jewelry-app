import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Item({ item }) {
  return (
    <>
      <Card.Img className="img-fluid" variant="top" src={item.pictureUrl} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Subtitle>{`Categoría: ${item.categoryDesc}`}</Card.Subtitle>
        <Card.Text>Price: {item.price}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">
          <Link to={"item/" + item.id}>Ver detalle del Producto </Link>
        </small>
      </Card.Footer>
    </>
  );
}

export default Item;
