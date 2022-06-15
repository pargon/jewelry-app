import React from "react";
import { Card } from "react-bootstrap";

function Item({ item }) {  
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={item.pictureUrl} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
          <Card.Text>Price: {item.price}</Card.Text>
          <Card.Link href="#" >Ver detalle del Producto</Card.Link>
        </Card.Body>
      </Card>
    </>
  );
}

export default Item;
